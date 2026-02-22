import Link from 'next/link';
import Image from 'next/image';

export default function TheLePage() {
    return (
        <main className="min-h-screen bg-[#f8f9fa] py-12 px-4 bg-[url('/pattern.png')] bg-repeat">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="font-unilever text-4xl md:text-5xl font-extrabold text-[#123062] uppercase tracking-wide mb-4">
                        Thể Lệ Chương Trình
                    </h1>
                    <div className="h-1.5 w-32 bg-[#0066CB] mx-auto rounded-full"></div>
                    <p className="text-[#123062]/70 mt-6 font-medium text-lg italic">
                        "Cùng Unilever lưu giữ khoảnh khắc tri ân mẹ"
                    </p>
                </div>

                {/* Section 1: Offline Gifts */}
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border-l-8 border-[#0066CB]">
                    <h2 className="text-2xl font-black text-[#0066CB] mb-6 flex items-center gap-3">
                        <span className="bg-[#0066CB] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                        NHẬN QUÀ TRỰC TIẾP TẠI CỬA HÀNG
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="font-bold text-[#123062] text-lg">Show ảnh nhận quà</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Khách hàng xuất trình ảnh chụp cùng Mẹ tại các hệ thống <strong>BHX, Family Mart...</strong> để nhận ngay 01 phần quà ngẫu nhiên:
                            </p>
                            <ul className="grid grid-cols-2 gap-2 text-sm font-bold text-[#0066CB]">
                                <li>• Cài tóc</li>
                                <li>• Dây buộc tóc</li>
                                <li>• Pin cài áo</li>
                                <li>• Móc khóa</li>
                            </ul>
                            <p className="text-xs text-red-500 font-medium">* Tổng số lượng: 100.000 phần quà trên toàn quốc.</p>
                        </div>

                        <div className="bg-[#0F0E9A]/5 p-5 rounded-2xl border border-[#0F0E9A]/20">
                            <h3 className="font-bold text-[#0F0E9A] text-lg mb-2">Nhận ảnh in & khung nam châm tại chỗ</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                Khi mua hóa đơn từ <strong>02 sản phẩm Unilever</strong> trở lên, quý khách được hưởng đặc quyền:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm font-semibold text-[#123062]">
                                    ✅ In ảnh miễn phí (Size 13x18cm)
                                </li>
                                <li className="flex items-center gap-2 text-sm font-semibold text-[#123062]">
                                    ✅ Tặng khung ảnh nam châm mini chữ U độc quyền từ Unilever
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 2: Online Lucky Draw */}
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border-l-8 border-[#7488E7]">
                    <h2 className="text-2xl font-black text-[#123062] mb-6 flex items-center gap-3">
                        <span className="bg-[#7488E7] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                        RÚT THĂM MAY MẮN TRÊN WEBSITE
                    </h2>

                    <div className="space-y-6">
                        <p className="text-gray-600">
                            Sau khi nhận quà tại cửa hàng, hãy thực hiện các bước sau để tham gia quay thưởng:
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-50 rounded-xl text-center">
                                <div className="text-2xl mb-2">📸</div>
                                <p className="text-xs font-bold text-[#123062]">BƯỚC 1</p>
                                <p className="text-[11px] text-gray-500 mt-1">Chụp ảnh cùng mẹ hoặc Mẹ hãy chụp ảnh cùng con và phần quà từ Unilever</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl text-center">
                                <div className="text-2xl mb-2">💻</div>
                                <p className="text-xs font-bold text-[#123062]">BƯỚC 2</p>
                                <p className="text-[11px] text-gray-500 mt-1">Truy cập website và cung cấp các thông tin cần thiết</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl text-center">
                                <div className="text-2xl mb-2">🎁</div>
                                <p className="text-xs font-bold text-[#123062]">BƯỚC 3</p>
                                <p className="text-[11px] text-gray-500 mt-1">Nhận mã dự thưởng 10.000 combo quà </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                            <p className="text-xs text-yellow-800 leading-relaxed italic">
                                * Lưu ý: Sản phẩm tham gia phải nằm trong Bộ sưu tập giới hạn "Tri ân Mẹ" có đính kèm mã code dự thưởng.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Link
                        href="/tham-gia"
                        className="inline-block bg-[#0066CB] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-[#123062] transition-all duration-300 shadow-2xl hover:-translate-y-1"
                    >
                        THAM GIA NGAY
                    </Link>
                    <div className="mt-8 opacity-50 flex justify-center">
                        <Image src="/logo.svg" alt="Unilever" width={40} height={40} />
                    </div>
                </div>

            </div>
        </main>
    );
}