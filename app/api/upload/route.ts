import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, imageUrl, brand, productCode } = body;

        const { data, error } = await supabase
            .from('campaign_submissions')
            .insert([
                {
                    name: name,
                    phone: phone,
                    image_url: imageUrl,
                    brand: brand,
                    product_code: productCode
                }
            ]);

        if (error) throw error;
        return NextResponse.json({ success: true, message: 'Thành công!' });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, error: 'Lỗi server' }, { status: 500 });
    }
}