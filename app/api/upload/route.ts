export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, imageUrl, brand, productCode } = body;

        const { data, error } = await supabase
            .from('campaign_submissions')
            .insert([{
                name: name,
                phone: phone,
                image_url: imageUrl,
                brand: brand,
                product_code: productCode
            }]);

        if (error) {
            // TRẢ VỀ LỖI CHI TIẾT TỪ SUPABASE
            return NextResponse.json({
                success: false,
                loi_chi_tiet: error.message,
                goi_y: "Hãy kiểm tra xem tên cột trên Supabase có đúng là 'product_code' và 'brand' không?"
            }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err: any) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}