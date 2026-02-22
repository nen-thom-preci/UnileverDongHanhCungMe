export const dynamic = 'force-dynamic'; // Thêm dòng này để tắt cache, ép lấy dữ liệu mới

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('campaign_submissions')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        return NextResponse.json({ success: false, error: 'Lỗi lấy dữ liệu' }, { status: 500 });
    }
}