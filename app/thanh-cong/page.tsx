'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const campaignMessages = [
    "Cảm ơn vì mẹ đã chọn tạm gác lại những ước mơ riêng của mình, để bước vào hành trình làm mẹ của con",
    "Cảm ơn vì mẹ đã chọn gánh lấy phần vất vả để con được lớn lên trong bình yên",
    "Cảm ơn vì mẹ đã chọn bắt đầu một hành trình đầy thử thách vì con, để con có một khởi đầu tốt đẹp nhất",
    "Cảm ơn vì mẹ đã chọn ở lại trên hành trình dài mang tên làm mẹ, âm thầm nhưng chưa từng rời bước",
    "Cảm ơn vì mẹ đã chọn yêu thương con bằng cả sự can đảm của mình",
    "Cảm ơn vì mẹ đã chọn làm mẹ của con, ngay cả khi phải đánh đổi rất nhiều điều mà chưa từng một lần than vãn",
    "Cảm ơn vì mẹ đã chọn trở thành điểm tựa vững vàng của con, để con tự tin bước ra thế giới rộng lớn",
    "Cảm ơn vì mẹ đã chọn không từ bỏ trước những thử thách đầu tiên để con có một khởi đầu trọn vẹn",
    "Cảm ơn vì mẹ đã chọn đồng hành trên hành trình trưởng thành của con, bằng tất cả sự kiên nhẫn và yêu thương vô điều kiện"
];

const vibrantColors = ['#d0006f', '#e0638d', '#ec8a00', '#ed8b00', '#e874b2', '#0033CC'];

const getMessageForImage = (img: any) => {
    const uniqueString = img.image_url || img.name || String(Math.random());
    let sum = 0;
    for (let i = 0; i < uniqueString.length; i++) {
        sum += uniqueString.charCodeAt(i);
    }
    return campaignMessages[sum % campaignMessages.length];
};

const getColorForCard = (index: number) => {
    return vibrantColors[index % vibrantColors.length];
};

export default function ThuVienPage() {
    const [images, setImages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch(`/api/get-images?t=${new Date().getTime()}`, {
                    cache: 'no-store',
                    headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
                });
                const data = await res.json();
                if (data.success) setImages(data.data);
            } catch (error) {
                console.error('Lỗi khi tải ảnh:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchImages();
    }, []);

    return (
        <main className="min-h-screen bg-[#EAF2FA] py-12 px-4 relative overflow-hidden font-sans">

            {/* Đồ họa trang trí nền */}
            <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-[#d0006f] opacity-[0.1] rounded-full blur-[100px] z-0"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#ec8a00] opacity-[0.1] rounded-full blur-[120px] z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight bg-gradient-to-r from-[#123062] via-[#d0006f] to-[#ec8a00] text-transparent bg-clip-text pb-2">
                            Khoảnh Khắc Cùng Mẹ
                        </h1>
                        <p className="text-[#123062]/70 mt-2 font-bold text-lg italic">Gần gũi - Rực rỡ - Đong đầy tri ân</p>
                    </div>
                    <Link href="/tham-gia" className="bg-gradient-to-r from-[#d0006f] to-[#ec8a00] text-white px-10 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                        + GỬI ẢNH CỦA BẠN
                    </Link>
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-40">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#d0006f] border-r-4 border-transparent"></div>
                    </div>
                ) : (
                    /* MASONRY CONTAINER - Giống Padlet nhất */
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {images.map((img, index) => {
                            const cardColor = getColorForCard(index);
                            return (
                                <div
                                    key={index}
                                    style={{ borderTopColor: cardColor }}
                                    className="break-inside-avoid bg-white border-t-[6px] rounded-b-[24px] rounded-t-lg shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col overflow-hidden"
                                >
                                    {/* PHẦN ẢNH: Không bọc div, không set chiều cao, ôm khít tuyệt đối */}
                                    <img
                                        src={img.image_url}
                                        alt={`Ảnh của ${img.name}`}
                                        className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                                    />

                                    {/* PHẦN THÔNG TIN THẺ: Chiều cao tự giãn theo thông điệp */}
                                    <div className="p-5 flex flex-col items-center">
                                        <h1
                                            style={{ color: cardColor }}
                                            className="font-unilever font-black text-[14px] leading-snug mb-5 text-center px-2"
                                        >
                                            &quot;{getMessageForImage(img)}&quot;
                                        </h1>

                                        {/* Divider & Brand Logos */}
                                        <div className="flex items-center justify-between w-full border-t border-gray-100 pt-4 px-1">
                                            <h3 className="text-[#123062] font-black text-[10px] uppercase tracking-tighter w-1/3 text-left">
                                                {img.brand === 'QUÀ TẠI QUẦY' ? 'UNILEVER' : (img.brand || 'OMO')}
                                            </h3>

                                            <div className="w-1/3 flex justify-center">
                                                <Image src="/logo.svg" alt="Unilever" width={30} height={30} className="opacity-80" />
                                            </div>

                                            <div className="w-1/3 text-right">
                                                <span className="text-[8px] text-gray-400 font-black uppercase">Moments</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-[10px] font-black uppercase tracking-[0.2em] mt-5">
                                            — {img.name} —
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Trang trí vườn hoa ở đáy */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none opacity-40">
                <img src="/vuon-hoa-trieu-an.png" alt="Flowers" className="w-full h-full object-cover object-top" style={{ mixBlendMode: 'multiply' }} />
            </div>
        </main>
    );
}