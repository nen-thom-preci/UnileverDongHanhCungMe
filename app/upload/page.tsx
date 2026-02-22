'use client';
import Link from 'next/link';

export default function UploadPage() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-12 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-blue-800 text-center mb-6">Gửi Ảnh Nhận Mã Rút Thăm</h1>

                <form className="space-y-5">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Họ và tên</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập tên của bạn" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Số điện thoại</label>
                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập số điện thoại" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Ảnh chụp cùng Mẹ và Quà tặng</label>
                        <input type="file" accept="image/*" className="w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    </div>

                    {/* Nút mô phỏng việc submit form và chuyển trang */}
                    <div className="pt-4">
                        <Link href="/success" className="block text-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md">
                            Gửi Ảnh
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}