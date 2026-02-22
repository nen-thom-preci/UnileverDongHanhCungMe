import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header/Navigation Menu */}
      <nav className="bg-blue-900 p-4 text-white flex justify-center gap-6 font-semibold shadow-md">
        <Link href="/" className="hover:text-blue-200">Trang Chủ</Link>
        <Link href="/thu-vien" className="hover:text-blue-200">Thư Viện Ảnh</Link>
        <Link href="/the-le" className="hover:text-blue-200">Thể Lệ</Link>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-4 uppercase tracking-wide">
          Tri Ân Mẹ Trong Từng Khoảnh Khắc
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
          Mua sắm sản phẩm chăm sóc gia đình, nhận ngay quà tặng túi vải, in ảnh miễn phí cùng khung hình chữ U độc quyền và cơ hội trúng hàng nghìn phần quà giá trị!
        </p>

        <Link href="/tham-gia" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-xl animate-bounce">
          GỬI ẢNH NGAY - NHẬN QUÀ LIỀN TAY
        </Link>
      </main>
    </div>
  );
}