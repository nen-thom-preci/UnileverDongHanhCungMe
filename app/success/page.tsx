import Link from 'next/link';

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-12 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                <div className="text-green-500 text-6xl mb-4 flex justify-center">
                    ✓
                </div>
                <h1 className="text-2xl font-bold text-blue-800 mb-2">Gửi Ảnh Thành Công!</h1>
                <p className="text-gray-600 mb-6">Cảm ơn bạn đã tham gia chương trình. Dưới đây là mã QR rút thăm may mắn của bạn:</p>

                <div className="bg-blue-50 p-4 rounded-lg mb-6 border-2 border-dashed border-blue-300">
                    <p className="text-sm text-gray-500 mb-2">Mã Code của bạn</p>
                    <p className="text-3xl font-mono font-bold text-blue-600 tracking-wider">UNI-MOM-88</p>
                </div>

                <div className="mb-6 flex justify-center">
                    {/* Khối vuông hiển thị mã QR giả định */}
                    <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center shadow-inner">
                        <div className="text-center">
                            <p className="text-gray-400 text-sm mb-1">[Khu vực hiển thị]</p>
                            <p className="text-gray-600 font-bold">MÃ QR CODE</p>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-500 mb-8 px-4">Hãy chụp màn hình lưu lại mã QR hoặc Code này để có cơ hội nhận combo sản phẩm ngẫu nhiên nhé!</p>

                <Link href="/" className="text-blue-600 font-semibold hover:text-blue-800 underline transition">
                    ← Trở về Trang Chủ
                </Link>
            </div>
        </div>
    );
}