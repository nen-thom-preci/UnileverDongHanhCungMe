import Link from 'next/link';

export default function ThuVienPage() {
    return (
        <div className="min-h-screen bg-blue-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-900">Khoảnh Khắc Cùng Mẹ</h1>
                    <Link href="/" className="text-blue-600 hover:underline font-semibold">← Trở về</Link>
                </div>

                {/* Lưới hiển thị ảnh UGC (Mô phỏng) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden aspect-[3/4] flex flex-col items-center justify-center border border-gray-100 p-2">
                            <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
                                [Ảnh người dùng {item}]
                            </div>
                            <p className="text-xs text-gray-500 mt-2 font-medium">Khách hàng {item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}