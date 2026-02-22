'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Định nghĩa cấu trúc dữ liệu của 1 bức ảnh
interface UGCImage {
    id: string;
    name: string;
    imageUrl: string;
    date: string;
}

export default function ThuVienPage() {
    const [userImages, setUserImages] = useState<UGCImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Lấy dữ liệu ảnh thực tế khi trang vừa tải xong
    useEffect(() => {
        // Lấy mảng hình ảnh từ bộ nhớ trình duyệt (mô phỏng Database)
        const storedImages = localStorage.getItem('unilever_campaign_images');
        if (storedImages) {
            setUserImages(JSON.parse(storedImages));
        }
        setIsLoading(false);
    }, []);

    return (
        <main className="min-h-screen bg-[#f8f9fa] py-12 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Thư viện */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div className="text-center md:text-left">
                        <h1 className="font-unilever text-3xl md:text-4xl font-extrabold text-[#123062] uppercase tracking-wide">
                            Khoảnh Khắc Cùng Mẹ
                        </h1>
                        <p className="text-[#123062]/70 mt-2 font-medium">
                            Cùng ngắm nhìn những bức ảnh tuyệt vời từ cộng đồng.
                        </p>
                    </div>
                    <Link
                        href="/tham-gia"
                        className="bg-[#0066CB] text-white px-6 py-3 rounded-full font-bold hover:bg-[#123062] transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                    >
                        + Gửi Ảnh Của Bạn
                    </Link>
                </div>

                {/* Trạng thái đang tải */}
                {isLoading && (
                    <div className="text-center text-[#123062] py-20 font-semibold">
                        Đang tải hình ảnh...
                    </div>
                )}

                {/* Trạng thái chưa có ảnh nào */}
                {!isLoading && userImages.length === 0 && (
                    <div className="bg-white p-12 rounded-2xl shadow-sm text-center border border-[#7488E7]/20">
                        <div className="text-[#7488E7] mb-4">📸</div>
                        <h3 className="text-xl font-bold text-[#123062] mb-2">Chưa có khoảnh khắc nào</h3>
                        <p className="text-[#123062]/60 mb-6">Hãy là người đầu tiên chia sẻ bức ảnh tuyệt vời cùng Mẹ nhé!</p>
                        <Link href="/tham-gia" className="inline-block border-2 border-[#0066CB] text-[#0066CB] px-8 py-2 rounded-full font-bold hover:bg-[#0066CB] hover:text-white transition">
                            Tải ảnh lên ngay
                        </Link>
                    </div>
                )}

                {/* Lưới hiển thị ảnh thực tế */}
                {!isLoading && userImages.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {userImages.map((item) => (
                            /* Thiết kế Khung ảnh (Frame) */
                            <div
                                key={item.id}
                                className="bg-white p-4 pb-6 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-[#7488E7]/20 hover:shadow-[0_10px_25px_rgba(0,102,203,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
                            >
                                {/* Khu vực hiển thị ảnh người dùng upload */}
                                <div className="w-full aspect-[3/4] bg-[#f0f2f5] rounded-md overflow-hidden mb-5 relative group">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.imageUrl}
                                        alt={`Ảnh dự thi của ${item.name}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 left-2 bg-black/40 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                                        {item.name}
                                    </div>
                                </div>

                                {/* Phần đáy khung ảnh chứa Logo và Lời tri ân */}
                                <div className="flex flex-col items-center justify-center w-full px-2">
                                    <div className="h-8 mb-2 relative flex items-center justify-center w-full">
                                        <Image
                                            src="/logo.svg"
                                            alt="Logo Campaign"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="font-unilever text-[#0066CB] font-extrabold text-center text-[15px] leading-tight mt-1">
                                        Cảm ơn vì đã &quot;chọn&quot; làm mẹ
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