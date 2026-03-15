'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// DANH SÁCH 9 THÔNG ĐIỆP RANDOM
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

// BỘ MÀU RỰC RỠ ĐỂ GẮN RANDOM CHO CÁC KHUNG ẢNH
const vibrantColors = ['#d0006f', '#e0638d', '#ec8a00', '#ed8b00', '#e874b2', '#0033CC'];

const getMessageForImage = (img: any) => {
    const uniqueString = img.image_url || img.name || String(Math.random());
    let sum = 0;
    for (let i = 0; i < uniqueString.length; i++) {
        sum += uniqueString.charCodeAt(i);
    }
    return campaignMessages[sum % campaignMessages.length];
};

// Hàm lấy màu ngẫu nhiên nhưng cố định cho viền thẻ dựa vào index
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
        <main className="min-h-screen bg-[#EAF2FA] py-12 px-4 bg-[url('/pattern.png')] bg-repeat relative overflow-hidden">

            {/* Đồ họa trang trí nền - Dùng dải màu Cam & Hồng mới */}
            <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-[#d0006f] opacity-[0.15] rounded-full blur-[100px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#ec8a00] opacity-[0.15] rounded-full blur-[120px] z-0 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header Thư viện */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div className="text-center md:text-left">
                        {/* Tiêu đề áp dụng hiệu ứng Gradient chữ rực rỡ */}
                        <h1 className="font-unilever text-4xl md:text-6xl font-black uppercase tracking-wide bg-gradient-to-r from-[#123062] via-[#d0006f] to-[#ec8a00] text-transparent bg-clip-text drop-shadow-sm pb-2">
                            Khoảnh Khắc Cùng Mẹ
                        </h1>
                        <p className="text-[#123062]/80 mt-2 font-medium text-lg">
                            Cùng ngắm nhìn những bức ảnh tuyệt vời từ cộng đồng.
                        </p>
                    </div>
                    <Link
                        href="/tham-gia"
                        // Nút bấm Gradient Cam - Hồng nổi bật
                        className="bg-gradient-to-r from-[#d0006f] to-[#ec8a00] text-white px-8 py-4 rounded-full font-black text-lg hover:shadow-[0_15px_30px_rgba(208,0,111,0.3)] hover:-translate-y-1 transition-all duration-300 border-2 border-white/20"
                    >
                        + Gửi Ảnh Của Bạn
                    </Link>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center items-center py-20">
                        {/* Spinner xoay với màu d0006f */}
                        <div className="animate-spin rounded-full h-14 w-14 border-4 border-[#EAF2FA] border-t-[#d0006f] shadow-lg"></div>
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && images.length === 0 && (
                    <div className="bg-white p-12 rounded-[40px] shadow-sm text-center border border-[#d0006f]/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d0006f] to-[#ec8a00]"></div>
                        <div className="text-5xl mb-4 drop-shadow-md">📸</div>
                        <h3 className="text-2xl font-black text-[#123062] mb-2 uppercase">Chưa có khoảnh khắc nào</h3>
                        <p className="text-[#123062]/60 mb-6 font-medium">Hãy là người đầu tiên chia sẻ bức ảnh tuyệt vời cùng Mẹ nhé!</p>
                    </div>
                )}

                {/* Gallery Grid - Hiệu ứng Polaroid Đa Sắc */}
                {!isLoading && images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                        {images.map((img, index) => {
                            const cardColor = getColorForCard(index);
                            return (
                                <div
                                    key={index}
                                    style={{ borderTopColor: cardColor }}
                                    className="bg-white border-t-[6px] p-3 pb-6 rounded-b-[20px] rounded-t-md shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:rotate-1 transition-all duration-300 flex flex-col items-center group cursor-pointer"
                                >
                                    {/* Khu vực ảnh */}
                                    <div className="w-full bg-[#f8f9fa] overflow-hidden mb-5 relative rounded-md">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={img.image_url}
                                            alt={`Ảnh của ${img.name}`}
                                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                        {/* Lớp phủ mờ màu sắc nhẹ khi hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: cardColor }}></div>
                                    </div>

                                    {/* Khu vực Footer của Polaroid */}
                                    <div className="w-full flex flex-col items-center justify-center px-2 mt-2 text-center">

                                        {/* Heading 1: Thông điệp (sử dụng màu ngẫu nhiên của thẻ để đồng bộ) */}
                                        <h1
                                            style={{ color: cardColor }}
                                            className="font-unilever font-extrabold text-[13px] leading-tight mb-4 min-h-[40px] flex items-center justify-center"
                                        >
                                            &quot;{getMessageForImage(img)}&quot;
                                        </h1>

                                        {/* Khu vực song song */}
                                        <div className="flex items-center justify-center gap-4 w-full border-t border-gray-100 pt-4">

                                            <h3 className="text-[#123062] font-black text-[11px] uppercase tracking-wider w-1/3 text-right truncate">
                                                {img.brand === 'QUÀ TẠI QUẦY' ? 'UNILEVER' : (img.brand || 'OMO')}
                                            </h3>

                                            <div className="w-1/3 flex justify-center">
                                                <Image
                                                    src="/logo.svg"
                                                    alt="Unilever Logo"
                                                    width={38}
                                                    height={38}
                                                    className="opacity-100 drop-shadow-sm scale-110"
                                                />
                                            </div>

                                            <div className="w-1/3 text-left">
                                                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Limited</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 text-[9px] uppercase tracking-widest mt-4 font-bold">
                                            — {img.name} —
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
}