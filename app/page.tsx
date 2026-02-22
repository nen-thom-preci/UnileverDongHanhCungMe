import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#123062] via-[#0066CB] to-[#7488E7] py-24 px-4 text-center overflow-hidden">
        <div className="relative max-w-4xl mx-auto flex flex-col items-center z-10">
          <h1 className="font-unilever text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-wide leading-tight drop-shadow-md">
            Tri Ân Mẹ <br /> Trong Từng Khoảnh Khắc
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium">
            Mua sắm sản phẩm chăm sóc gia đình, nhận ngay quà tặng túi vải, in ảnh miễn phí cùng khung hình chữ U độc quyền và cơ hội trúng hàng nghìn phần quà giá trị!
          </p>

          <Link href="/tham-gia" className="bg-white text-[#0066CB] px-10 py-4 rounded-full font-extrabold text-lg hover:bg-[#123062] hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,102,203,0.4)] hover:-translate-y-1">
            GỬI ẢNH NGAY - NHẬN QUÀ
          </Link>
        </div>
      </section>

      {/* Cách Thức Tham Gia */}
      <section className="py-16 px-4 w-full max-w-5xl">
        <h2 className="font-unilever text-3xl font-bold text-[#123062] text-center mb-12">Tham Gia Dễ Dàng Qua 3 Bước</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-[#7488E7]/20 text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-[#0066CB] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold text-[#123062] text-lg mb-2">Mua Hàng</h3>
            <p className="text-gray-600 text-sm">Mua sản phẩm Unilever tại siêu thị.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-[#7488E7]/20 text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-[#0066CB] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold text-[#123062] text-lg mb-2">Chụp Ảnh</h3>
            <p className="text-gray-600 text-sm">Chụp khoảnh khắc cùng Mẹ và quà tặng.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-[#7488E7]/20 text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-[#0066CB] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold text-[#123062] text-lg mb-2">Nhận Mã</h3>
            <p className="text-gray-600 text-sm">Tải ảnh lên web để nhận mã may mắn.</p>
          </div>
        </div>
      </section>
    </main>
  );
}