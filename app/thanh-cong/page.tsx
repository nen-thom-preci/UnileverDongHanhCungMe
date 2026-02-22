'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ThanhCongContent() {
    const searchParams = useSearchParams();
    // Lấy mã code từ URL, nếu không có thì để trống
    const luckyCode = searchParams.get('code') || 'ĐANG CẬP NHẬT...';

    return (
        <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 md:p-10 text-center border-t-8 border-[#0066CB] relative overflow-hidden">

            {/* Hiệu ứng trang trí góc */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7488E7]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#0066CB]/10 rounded-full blur-2xl"></div>

            {/* Biểu tượng Thành công */}
            <div className="relative z-10 w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <svg className="w-12 h-12 text-green-500 animate-[bounce_1s_ease-in-out]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>

            <h1 className="relative z-10 font-unilever text-3xl font-extrabold text-[#123062] mb-2 uppercase tracking-wide">
                Gửi Ảnh Thành Công!
            </h1>

            <p className="relative z-10 text-[#123062]/70 text-sm md:text-base mb-6 font-medium leading-relaxed">
                Bức ảnh của bạn đã được lưu vào bộ sưu tập giới hạn.
            </p>

            {/* KHU VỰC HIỂN THỊ MÁ RÚT THĂM (Thiết kế dạng Ticket) */}
            <div className="relative z-10 bg-[#f0f2f5] p-5 rounded-2xl mb-8 border-2 border-dashed border-[#7488E7] shadow-sm">
                <p className="text-xs text-[#123062] font-black uppercase tracking-widest mb-1">Mã Rút Thăm Của Bạn</p>
                <p className="text-4xl font-black text-[#0066CB] tracking-widest my-2">{luckyCode}</p>
                <p className="text-[11px] text-gray-500 italic">
                    *Vui lòng chụp màn hình hoặc lưu lại mã này để đối chiếu nhận quà.
                </p>
            </div>

            {/* Cấu trúc nút bấm điều hướng */}
            <div className="relative z-10 flex flex-col gap-3">
                <Link
                    href="/thu-vien"
                    className="w-full bg-[#0066CB] text-white py-4 rounded-xl font-black text-lg hover:bg-[#123062] transition-all duration-300 shadow-[0_8px_20px_rgba(0,102,203,0.2)] hover:-translate-y-1"
                >
                    NGẮM ẢNH TẠI THƯ VIỆN
                </Link>

                <Link
                    href="/"
                    className="w-full bg-white text-[#0066CB] border-2 border-[#0066CB]/20 py-3 rounded-xl font-bold text-base hover:border-[#0066CB] hover:bg-gray-50 transition-all duration-300"
                >
                    Về Trang Chủ
                </Link>
            </div>

            {/* Footer nhỏ */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center opacity-80">
                <Image src="/logo.svg" alt="Unilever Logo" width={30} height={30} />
            </div>
        </div>
    );
}

export default function ThanhCongPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4 py-12 bg-[url('/pattern.png')] bg-repeat">
            <Suspense fallback={<div className="text-[#0066CB] font-bold">Đang tải kết quả...</div>}>
                <ThanhCongContent />
            </Suspense>
        </div>
    );
}