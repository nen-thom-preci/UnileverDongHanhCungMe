import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">Tri Ân Mẹ Trong Từng Khoảnh Khắc</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Cùng mang đến những món quà ý nghĩa cho Mẹ. Nhận ngay quà tặng và dịch vụ in ảnh miễn phí khi mua các sản phẩm Personal & Homecare tại Bách Hóa Xanh, Family Mart!
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Thể lệ chương trình:</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-600">
          <li><strong>Bước 1:</strong> Mua các sản phẩm chăm sóc cá nhân và gia đình tại hệ thống cửa hàng.</li>
          <li><strong>Bước 2:</strong> Nhận quà tri ân (cài tóc, túi vải...) và in ảnh 13x18cm miễn phí ngay tại quầy cùng khung ảnh gỗ thân thiện môi trường.</li>
          <li><strong>Bước 3:</strong> Chụp một tấm ảnh rạng rỡ có bạn, Mẹ và món quà.</li>
          <li><strong>Bước 4:</strong> Tải ảnh lên website để nhận mã QR rút thăm may mắn!</li>
        </ul>
      </div>

      <Link href="/upload" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300 shadow-lg">
        Tải Ảnh Lên Ngay
      </Link>
    </div>
  );
}