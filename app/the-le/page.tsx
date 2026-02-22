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
                        <p>Chương trình diễn ra từ ngày 04/05 đến 29/05. Áp dụng cho mọi công dân đang sinh sống tại Việt Nam mua sắm tại hệ thống đối tác của Unilever.</p>
                    </section>

                    <section>
                        <h2 className="font-unilever text-xl font-bold text-[brand-primary] mb-2">2. Quy định về hình ảnh hợp lệ (UGC)</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Hình ảnh phải rõ nét, thấy rõ mặt người tham gia và Mẹ.</li>
                            <li>Có mặt quà tặng từ thương hiệu (khung ảnh chữ U, cài tóc, pin cài áo,...) hoặc các sản phẩm của công ty Unilever.</li>
                            <li>Không vi phạm thuần phong mỹ tục.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-unilever text-xl font-bold text-[brand-primary] mb-2">3. Cơ cấu giải thưởng & Quay số</h2>
                        <p>Mỗi ảnh hợp lệ sẽ nhận 1 mã dự thưởng. BTC sẽ tiến hành quay số ngẫu nhiên vào cuối chiến dịch để trao 10.000 combo chăm sóc cá nhân (Lifebuoy, Lux, Axe, Closeup, P/S) và chăm sóc gia đình (OMO, Surf, Comfort, Sunlight, Cif).</p>
                    </section>
                </div>
            </div>
        </div>
    );
}