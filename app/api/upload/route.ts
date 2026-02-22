import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 1. Dùng "chìa khóa" để mở kết nối với Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
    try {
        // 2. Nhận gói hàng (dữ liệu) gửi lên từ Form giao diện
        const body = await request.json();
        const { name, phone, imageUrl } = body;

        // 3. Cất hàng vào đúng bảng 'campaign_submissions' trong Database
        const { data, error } = await supabase
            .from('campaign_submissions')
            .insert([
                {
                    name: name,
                    phone: phone,
                    image_url: imageUrl
                }
            ]);

        // Nếu có lỗi từ Supabase, ném lỗi ra ngoài
        if (error) {
            console.error("Supabase Error:", error);
            throw error;
        }

        // 4. Báo cáo lại cho Form là đã lưu thành công
        return NextResponse.json({ success: true, message: 'Đã lưu thông tin người tham gia!' });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, error: 'Lỗi server' }, { status: 500 });
    }
}