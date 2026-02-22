'use client';
import Link from 'next/link';

export default function ThamGiaPage() {
    return (
        <div className="min-h-screen bg-blue-50 py-12 px-4 flex justify-center items-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
                <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">Gửi Ảnh Tham Gia</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Họ và tên người tham gia</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none" placeholder="Nhập họ tên..." />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Số điện thoại</label>
                        <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none" placeholder="Nhập SĐT..." />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Hệ thống siêu thị đã mua</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-white">
                            <option>Bách Hóa Xanh</option>
                            <option>Family Mart</option>
                            <option>Khác</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Tải ảnh chụp cùng Mẹ & Quà tặng</label>
                        <input type="file" accept="image/*" className="w-full border rounded-lg p-2 bg-blue-50 text-gray-700 file:bg-blue-900 file:text-white file:border-0 file:px-4 file:py-1 file:rounded-md cursor-pointer" />
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                        <input type="checkbox" id="term" className="mt-1 w-4 h-4 cursor-pointer" />
                        <label htmlFor="term" className="text-sm text-gray-600 cursor-pointer">
                            Tôi đồng ý với <Link href="/the-le" className="text-blue-600 underline">Thể lệ chương trình</Link> và chia sẻ hình ảnh này.
                        </label>
                    </div>

                    <div className="pt-4">
                        <Link href="/thanh-cong" className="block text-center w-full bg-blue-900 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
                            Hoàn Thành & Nhận Mã
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}