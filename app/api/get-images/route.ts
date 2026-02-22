export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
    try {
        // 1. Kiểm tra xem Next.js có thực sự "nhìn thấy" file .env.local không
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!url || !key) {
            return NextResponse.json({
                success: false,
                loi_chinh: "MÁY TÍNH KHÔNG NHÌN THẤY FILE .env.local",
                co_doc_duoc_url: !!url,
                co_doc_duoc_key: !!key,
                cach_sua: "Gần như chắc chắn file của bạn đang bị lưu thành .env.local.txt. Hãy Rename file và xóa chữ .txt đi!"
            }, { status: 500 });
        }

        // 2. Nếu đã đọc được chìa khóa, thử gọi vào Database
        const supabase = createClient(url, key);
        const { data, error } = await supabase
            .from('campaign_submissions')
            .select('*')
            .order('created_at', { ascending: false });

        // 3. Nếu Database từ chối, in ra lý do từ chối
        if (error) throw error;

        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            loi_chinh: "KẾT NỐI DATABASE THẤT BẠI",
            chi_tiet_tu_supabase: error.message || error
        }, { status: 500 });
    }
}