import Link from 'next/link';

export default function TheLePage() {
    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="text-[brand-primary] hover:text-[brand-dark] font-semibold mb-6 inline-block transition">← Trở về Trang chủ</Link>

                <h1 className="font-unilever text-3xl font-bold text-[brand-dark] mb-8 border-b border-[brand-secondary]/30 pb-4">Thể Lệ Chương Trình "Tri Ân Mẹ"</h1>

                <div className="space-y-6 text-[brand-dark]/90 leading-relaxed">
                    <section>
                        <h2 className="font-unilever text-xl font-bold text-[brand-primary] mb-2">1. Thời gian và đối tượng</h2>
                        <p>Chương trình diễn ra từ ngày 01/05 đến 31/05. Áp dụng cho mọi công dân đang sinh sống tại Việt Nam mua sắm tại hệ thống đối tác.</p>
                    </section>

                    <section>
                        <h2 className="font-unilever text-xl font-bold text-[brand-primary] mb-2">2. Quy định về hình ảnh hợp lệ (UGC)</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Hình ảnh phải rõ nét, thấy rõ mặt người tham gia và Mẹ.</li>
                            <li>Bắt buộc xuất hiện quà tặng khung ảnh chữ U hoặc sản phẩm của nhãn hàng.</li>
                            <li>Không vi phạm thuần phong mỹ tục.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-unilever text-xl font-bold text-[brand-primary] mb-2">3. Cơ cấu giải thưởng & Quay số</h2>
                        <p>Mỗi ảnh hợp lệ sẽ nhận 1 mã dự thưởng. BTC sẽ tiến hành quay số ngẫu nhiên vào cuối chiến dịch để trao combo Personal Care & Homecare.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}