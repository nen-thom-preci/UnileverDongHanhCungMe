'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ĐÂY CHÍNH LÀ DICTIONARY (Từ điển thông điệp của 10 nhãn hàng)
const brandMessages: Record<string, string> = {
    "OMO": "Cảm ơn mẹ vì đã chọn để con được tự do lấm bẩn, cho con bài học quý giá từ những trải nghiệm đầu đời",
    "Surf": "Cảm ơn mẹ vì đã chọn vun vén những niềm vui giản đơn, cho nhà mình luôn ngát hương hạnh phúc",
    "Comfort": "Cảm ơn mẹ vì đã chọn sự dịu dàng vỗ về, để mỗi bước con đi luôn ấm áp như vòng tay mẹ",
    "Sunlight": "Cảm ơn vì mẹ đã chọn giữ gian bếp luôn sáng bóng, cho mỗi bữa cơm nhà thêm trọn vẹn niềm vui",
    "Cif": "Cảm ơn mẹ vì đã chọn kiên trì giữ gìn tổ ấm, đánh bật mọi vết lo để nhà mình luôn sáng trong",
    "Lifebuoy": "Cảm ơn mẹ vì đã chọn làm lá chắn thầm lặng, bảo vệ con vững vàng trước mọi thử thách vô hình",
    "Lux": "Cảm ơn mẹ vì đã chọn yêu thương chính mình, để rạng rỡ truyền cảm hứng hạnh phúc cho con",
    "Axe": "Cảm ơn mẹ vì đã chọn tin vào bản lĩnh của con, để con can đảm khẳng định chất riêng của mình",
    "Closeup": "Cảm ơn mẹ vì đã chọn trao cho con nụ cười tự tin, để con can đảm sát lại gần hơn với những ước mơ",
    "P/S": "Cảm ơn mẹ vì đã chọn bảo vệ những điều nhỏ nhất, cho nụ cười con mãi vẹn tròn theo năm tháng"
};

export default function ThuVienPage() {
    const [images, setImages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                // Ép trình duyệt không được dùng cache bằng cách thêm thời gian thực vào URL
                // và dùng thuộc tính cache: 'no-store'
                const res = await fetch(`/api/get-images?t=${new Date().getTime()}`, {
                    cache: 'no-store',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache'
                    }
                });

                const data = await res.json();
                if (data.success) {
                    setImages(data.data);
                }
            } catch (error) {
                console.error('Lỗi khi tải ảnh:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchImages();
    }, []);

    return (
        <main className="min-h-screen bg-[#f8f9fa] py-12 px-4 bg-[url('/pattern.png')] bg-repeat">
            <div className="max-w-6xl mx-auto">

                {/* Header Thư viện */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <div className="text-center md:text-left">
                        <h1 className="font-unilever text-3xl md:text-5xl font-extrabold text-[#123062] uppercase tracking-wide">
                            Khoảnh Khắc Cùng Mẹ
                        </h1>
                        <p className="text-[#123062]/80 mt-2 font-medium text-lg">
                            Cùng ngắm nhìn những bức ảnh tuyệt vời từ cộng đồng.
                        </p>
                    </div>
                    <Link
                        href="/tham-gia"
                        className="bg-[#0066CB] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#123062] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        + Gửi Ảnh Của Bạn
                    </Link>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CB]"></div>
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && images.length === 0 && (
                    <div className="bg-white p-12 rounded-2xl shadow-sm text-center border border-[#7488E7]/20">
                        <div className="text-5xl mb-4">📸</div>
                        <h3 className="text-xl font-bold text-[#123062] mb-2">Chưa có khoảnh khắc nào</h3>
                        <p className="text-[#123062]/60 mb-6">Hãy là người đầu tiên chia sẻ bức ảnh tuyệt vời cùng Mẹ nhé!</p>
                    </div>
                )}

                {/* Gallery Grid - Hiệu ứng Polaroid */}
                {!isLoading && images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                        {images.map((img) => (
                            <div
                                key={img.id}
                                className="bg-white p-3 pb-6 rounded-sm shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_30px_rgba(0,102,203,0.2)] hover:-translate-y-2 hover:rotate-1 transition-all duration-300 flex flex-col items-center group cursor-pointer"
                            >
                                {/* Khu vực ảnh */}
                                <div className="w-full aspect-[4/5] bg-[#f0f2f5] overflow-hidden mb-5 relative border border-gray-100">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={img.image_url}
                                        alt={`Ảnh của ${img.name}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                </div>

                                {/* Khu vực Footer của Polaroid theo cấu trúc bao bì mới */}
                                <div className="w-full flex flex-col items-center justify-center px-1 mt-2 text-center">

                                    {/* Heading 1: Thông điệp cá nhân hóa nổi bật */}
                                    <h1 className="font-unilever text-[#0066CB] font-extrabold text-[13px] leading-tight mb-3 min-h-[40px] flex items-center justify-center">
                                        "{brandMessages[img.brand || 'OMO']}"
                                    </h1>

                                    {/* Khu vực song song: Logo Brand (H3) - Logo Unilever (H2) */}
                                    <div className="flex items-center justify-center gap-4 w-full border-t border-gray-100 pt-3">
                                        {/* Heading 3: Brand Logo (Thu nhỏ) */}
                                        <h3 className="text-[#7488E7] font-black text-xs uppercase tracking-wider w-1/3 text-right">
                                            {img.brand || 'OMO'}
                                        </h3>

                                        {/* Heading 2: Unilever Logo (Phóng to, nổi bật ở giữa) */}
                                        <div className="w-1/3 flex justify-center">
                                            <Image
                                                src="/logo.svg"
                                                alt="Unilever Logo"
                                                width={38}
                                                height={38}
                                                className="opacity-100 drop-shadow-sm scale-110"
                                            />
                                        </div>

                                        {/* Placeholder để cân bằng layout song song */}
                                        <div className="w-1/3 text-left">
                                            <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">Limited</span>
                                        </div>
                                    </div>

                                    <p className="text-[#123062]/40 text-[9px] uppercase tracking-widest mt-3 font-bold">
                                        — {img.name} —
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}