import Link from 'next/link';
import Image from 'next/image';

export default function TheLePage() {
    return (
        <main className="min-h-screen bg-[#EAF2FA] py-16 px-4 relative overflow-hidden font-sans">

            {/* Đồ họa trang trí nền - Dùng dải màu Cam & Hồng mới */}
            <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#d0006f] opacity-[0.12] rounded-full blur-[100px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#ec8a00] opacity-[0.12] rounded-full blur-[120px] z-0 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="font-unilever text-4xl md:text-5xl font-black uppercase tracking-wide mb-4 bg-gradient-to-r from-[#123062] via-[#d0006f] to-[#ec8a00] text-transparent bg-clip-text drop-shadow-sm pb-2">
                        Thể Lệ Chương Trình
                    </h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-[#d0006f] to-[#ec8a00] mx-auto rounded-full"></div>
                    <p className="text-[#123062]/80 mt-6 font-medium text-lg italic">
                        &quot;Cùng Unilever lưu giữ khoảnh khắc tri ân mẹ&quot;
                    </p>
                </div>

                {/* Section 1: Offline Gifts */}
                <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-12 mb-10 border-t-8 border-[#d0006f] relative group hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-2xl font-black text-[#d0006f] mb-8 flex items-center gap-4 uppercase tracking-wide">
                        <span className="bg-[#d0006f] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform">1</span>
                        NHẬN QUÀ TRỰC TIẾP TẠI CỬA HÀNG
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h3 className="font-bold text-[#123062] text-lg bg-pink-50 inline-block px-4 py-1.5 rounded-full border border-pink-100">Show ảnh nhận quà</h3>
                            <p className="text-gray-600 font-medium leading-relaxed text-[15px]">
                                Khách hàng xuất trình ảnh chụp cùng Mẹ tại các hệ thống <strong>BHX, Family Mart...</strong> để nhận ngay 01 phần quà ngẫu nhiên:
                            </p>
                            <ul className="grid grid-cols-2 gap-3 text-[15px] font-bold text-[#d0006f] bg-gray-50 p-4 rounded-2xl">
                                <li className="flex items-center gap-2">🎁 Cài tóc</li>
                                <li className="flex items-center gap-2">🎁 Dây buộc tóc</li>
                                <li className="flex items-center gap-2">🎁 Pin cài áo</li>
                                <li className="flex items-center gap-2">🎁 Móc khóa</li>
                            </ul>
                            <p className="text-[13px] text-red-500 font-semibold italic">* Tổng số lượng: 100.000 phần quà trên toàn quốc.</p>
                        </div>

                        <div className="bg-[#0033CC] p-8 rounded-[30px] border border-blue-400 shadow-inner text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat"></div>

                            {/* ĐÃ CẬP NHẬT: Xóa chữ in ảnh */}
                            <h3 className="font-black text-white text-xl mb-4 relative z-10">Nhận khung nam châm tại chỗ</h3>
                            <p className="text-white/90 text-[15px] leading-relaxed mb-6 font-medium relative z-10">
                                Khi mua hóa đơn từ <strong>02 sản phẩm Unilever</strong> trở lên, quý khách được hưởng đặc quyền:
                            </p>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-start gap-3 text-[15px] font-bold">
                                    <span className="text-2xl leading-none">🖼️</span>
                                    Tặng khung ảnh nam châm mini chữ U độc quyền từ Unilever
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 2: Online Lucky Draw */}
                <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-12 mb-16 border-t-8 border-[#ec8a00] relative group hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-2xl font-black text-[#ec8a00] mb-8 flex items-center gap-4 uppercase tracking-wide">
                        <span className="bg-[#ec8a00] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform">2</span>
                        RÚT THĂM MAY MẮN TRÊN WEBSITE
                    </h2>

                    <div className="space-y-8">
                        <p className="text-gray-600 font-medium text-[15px] leading-relaxed">
                            Sau khi nhận quà tại cửa hàng, hãy thực hiện các bước sau để tham gia quay thưởng:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-[#EAF2FA] rounded-[24px] text-center border border-blue-100 hover:-translate-y-1 transition-transform">
                                <div className="text-4xl mb-4 drop-shadow-sm">📸</div>
                                <p className="text-sm font-black text-[#0033CC] mb-2">BƯỚC 1</p>
                                <p className="text-[13px] text-gray-600 font-medium">Chụp ảnh cùng mẹ và phần quà từ Unilever</p>
                            </div>
                            <div className="p-6 bg-[#EAF2FA] rounded-[24px] text-center border border-blue-100 hover:-translate-y-1 transition-transform">
                                <div className="text-4xl mb-4 drop-shadow-sm">💻</div>
                                <p className="text-sm font-black text-[#0033CC] mb-2">BƯỚC 2</p>
                                <p className="text-[13px] text-gray-600 font-medium">Truy cập website và cung cấp các thông tin cần thiết</p>
                            </div>
                            <div className="p-6 bg-[#EAF2FA] rounded-[24px] text-center border border-blue-100 hover:-translate-y-1 transition-transform">
                                <div className="text-4xl mb-4 drop-shadow-sm">🎁</div>
                                <p className="text-sm font-black text-[#0033CC] mb-2">BƯỚC 3</p>
                                <p className="text-[13px] text-gray-600 font-medium">Nhận mã dự thưởng 10.050 combo quà tặng, trong đó gồm 1005 giải nhất trị giá hơn 600.000đ và 9045 giải nhì trị giá hơn 300.000đ</p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-200 flex items-start gap-3">
                            <span className="text-xl">⚠️</span>
                            <p className="text-[13px] text-yellow-800 leading-relaxed font-semibold italic">
                                * Lưu ý: Sản phẩm tham gia phải nằm trong Bộ sưu tập giới hạn &quot;Cảm ơn mẹ vì đã chọn&quot; có đính kèm mã code dự thưởng.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center relative z-20">
                    <Link
                        href="/tham-gia"
                        className="inline-block bg-gradient-to-r from-[#d0006f] via-[#e874b2] to-[#ec8a00] text-white px-14 py-5 rounded-full font-black text-xl hover:shadow-[0_20px_40px_rgba(208,0,111,0.3)] hover:-translate-y-1 transition-all duration-300 border-2 border-white/50 tracking-wide"
                    >
                        THAM GIA NGAY
                    </Link>
                    <div className="mt-10 flex justify-center opacity-80">
                        <Image src="/logo.svg" alt="Unilever Logo" width={45} height={45} className="drop-shadow-sm" />
                    </div>
                </div>

            </div>

            {/* ĐƯỜNG VIỀN HOA */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none z-0">
                <img src="/flower.svg" alt="Đường viền hoa tri ân" className="w-full h-full object-cover object-top" style={{ mixBlendMode: 'multiply', opacity: 0.4 }} />
            </div>
        </main>
    );
}