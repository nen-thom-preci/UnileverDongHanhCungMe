export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
    try {
        // 1. Nhận dữ liệu dạng Form (có chứa file thật) thay vì JSON chữ
        const formData = await request.formData();
        const file = formData.get('image') as File;
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const brand = formData.get('brand') as string;
        const productCode = formData.get('productCode') as string;

        if (!file) {
            return NextResponse.json({ success: false, error: "Không tìm thấy file ảnh đính kèm" }, { status: 400 });
        }

        // 2. Upload file thẳng lên kho Storage 'campaign_images'
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`; // Đổi tên ảnh tránh trùng lặp

        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('campaign_images')
            .upload(fileName, file, {
                contentType: file.type,
            });

        if (uploadError) throw new Error(`Lỗi kho ảnh: ${uploadError.message}`);

        // 3. Lấy đường link public của bức ảnh vừa tải lên
        const { data: publicUrlData } = supabase.storage
            .from('campaign_images')
            .getPublicUrl(fileName);
        const imageUrl = publicUrlData.publicUrl;

        // 4. Lưu Link ảnh và thông tin khách hàng vào Database
        const { error: dbError } = await supabase
            .from('campaign_submissions')
            .insert([{
                name: name,
                phone: phone,
                image_url: imageUrl, // Lưu đường link vừa lấy được
                brand: brand,
                product_code: productCode
            }]);

        if (dbError) throw new Error(`Lỗi Database: ${dbError.message}`);

        return NextResponse.json({ success: true });

    } catch (err: any) {
        console.error("Lỗi hệ thống:", err);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}