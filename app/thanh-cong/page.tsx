import Link from 'next/link';

export default function ThanhCongPage() {
    return (
        <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center py-12 px-4 text-white">
            <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center text-gray-800">
                <div className="text-green-500 text-6xl mb-4 font-bold flex justify-center">✓</div>
                <h1 className="text-3xl font-extrabold text-blue-900 mb-2">Tuyệt Vời!</h1>
                <p className="text-gray-600 mb-6">Bạn đã gửi ảnh thành công. Hãy giữ lại mã số dưới đây để có cơ hội nhận bộ quà tặng giá trị nhé.</p>

                <div className="bg-blue-50 p-6 rounded-xl border-2 border-dashed border-blue-400 mb-6">
                    <p className="text-sm text-gray-500 mb-1 uppercase font-semibold">Mã Rút Thăm Của Bạn</p>
                    <p className="text-4xl font-mono font-black text-blue-900 tracking-widest">UNI-88</p>
                </div>

                <p className="text-sm text-gray-500 mb-6">Đừng quên chụp màn hình lại mã code này!</p>

                <div className="flex flex-col gap-3">
                    <Link href="/thu-vien" className="w-full bg-blue-900 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
                        Xem Ảnh Của Bạn Tại Thư Viện
                    </Link>
                    <Link href="/" className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
                        Về Trang Chủ
                    </Link>
                </div>
            </div>
        </div>
    );
}