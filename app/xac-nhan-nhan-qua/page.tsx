'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function ConfirmContent() {
    const searchParams = useSearchParams();
    // Lấy tên khách hàng truyền từ form qua, nếu không có thì để mặc định
    const name = searchParams.get('name') || 'Khách hàng';

    return (
        <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl max-w-md w-full border-t-8 border-[#10b981] relative z-10 text-center">

            {/* KHỐI MÀN HÌNH XANH XÁC NHẬN - Để đưa cho nhân viên cửa hàng */}
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-[30px] p-8 mb-8 text-white shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')] bg-repeat group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                        <span className="text-5xl drop-shadow-sm">✅</span>
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-wider mb-2 drop-shadow-md">Xác Nhận<br />Thành Công</h2>
                    <p className="bg-white/20 inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mt-2">Mã hợp lệ</p>
                </div>
            </div>

            <h3 className="text-xl font-black text-[#123062] mb-3 uppercase tracking-wide">
                Cảm ơn <span className="bg-gradient-to-r from-[#d0006f] to-[#ec8a00] text-transparent bg-clip-text">{name}</span>
            </h3>

            <p className="text-gray-600 font-medium mb-6 text-[14px] leading-relaxed px-2">
                Bạn hãy đưa <strong className="text-green-600 font-bold">màn hình xanh</strong> này cho nhân viên tại quầy để nhận ngay 01 món quà tri ân nhé!
            </p>

            {/* Nhắc nhớ phần quà */}
            <div className="bg-pink-50 rounded-2xl p-5 mb-8 border border-pink-100">
                <p className="text-[11px] text-[#d0006f] font-black uppercase mb-2 tracking-widest">Quà tặng ngẫu nhiên gồm các lựa chọn:</p>
                <p className="text-[13px] text-gray-700 font-bold">Cài tóc • Dây buộc tóc • Pin cài áo • Móc khóa</p>
            </div>

            {/* Các nút điều hướng */}
            <div className="flex flex-col gap-3">
                <Link
                    href="/thu-vien"
                    className="w-full bg-gradient-to-r from-[#d0006f] via-[#e874b2] to-[#ec8a00] text-white py-4 rounded-full font-black text-[15px] hover:shadow-[0_15px_30px_rgba(208,0,111,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide border border-white/20"
                >
                    XEM ẢNH TẠI THƯ VIỆN
                </Link>
                <Link
                    href="/"
                    className="w-full bg-gray-50 text-gray-500 py-4 rounded-full font-bold text-[15px] hover:bg-gray-100 hover:text-gray-800 transition-all duration-300 uppercase tracking-wide border border-gray-200"
                >
                    Về trang chủ
                </Link>
            </div>
        </div>
    );
}

export default function XacNhanNhanQuaPage() {
    return (
        <main className="min-h-screen bg-[#EAF2FA] py-12 px-4 flex justify-center items-center font-sans relative overflow-hidden">

            {/* Đồ họa trang trí nền - Cam & Hồng */}
            <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#d0006f] opacity-[0.12] rounded-full blur-[100px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ec8a00] opacity-[0.12] rounded-full blur-[120px] z-0 pointer-events-none"></div>

            {/* Vườn hoa trang trí mờ ở dưới chân trang */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none z-0">
                <img src="/vuon-hoa-trieu-an.png" alt="Đường viền hoa" className="w-full h-full object-cover object-top" style={{ mixBlendMode: 'multiply', opacity: 0.3 }} />
            </div>

            {/* Bọc Suspense để sửa lỗi kỹ thuật của Next.js khi dùng useSearchParams */}
            <Suspense fallback={
                <div className="z-10 relative flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#EAF2FA] border-t-[#d0006f] mb-4"></div>
                    <p className="text-[#d0006f] font-bold">Đang tải dữ liệu...</p>
                </div>
            }>
                <ConfirmContent />
            </Suspense>
        </main>
    );
}