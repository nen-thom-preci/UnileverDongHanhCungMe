'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import imageCompression from 'browser-image-compression';

// 1. Kho dữ liệu 9 câu thông điệp
export const campaignMessages = [
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

// 2. Danh sách 3 thương hiệu cố định
const brandsList = ['OMO', 'Comfort', 'Surf'];

export default function ThamGiaPage() {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState<'nhan-qua' | 'rut-tham'>('nhan-qua');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [brand, setBrand] = useState(brandsList[0]);
    const [productCode, setProductCode] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // State lưu trữ câu thông điệp ngẫu nhiên
    const [randomMessage, setRandomMessage] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    // Bốc thăm thông điệp lần đầu khi vừa vào web
    useEffect(() => {
        setIsMounted(true);
        pickRandomMessage();
    }, []);

    // Hàm bốc thăm thông điệp ngẫu nhiên
    const pickRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * campaignMessages.length);
        setRandomMessage(campaignMessages[randomIndex]);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (activeTab === 'nhan-qua') {
            if (!name || !phone || !imageFile) {
                alert('Vui lòng điền đủ Tên, SĐT và Ảnh!');
                return;
            }
        } else {
            if (!name || !phone || !imageFile || !productCode) {
                alert('Vui lòng điền đầy đủ thông tin và mã sản phẩm!');
                return;
            }
        }

        setIsSubmitting(true);

        try {
            const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1280, useWebWorker: true };
            const compressedFile = await imageCompression(imageFile, options);

            const formData = new FormData();
            formData.append('image', compressedFile);
            formData.append('name', name);
            formData.append('phone', phone);

            if (activeTab === 'nhan-qua') {
                formData.append('brand', 'QUÀ TẠI QUẦY');
                formData.append('productCode', 'KHONG_CAN_MA');
            } else {
                formData.append('brand', brand);
                formData.append('productCode', productCode);
            }

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error(`Lỗi kết nối máy chủ: ${response.status}`);

            const result = await response.json();

            if (result.success) {
                if (activeTab === 'nhan-qua') {
                    router.push(`/xac-nhan-nhan-qua?name=${encodeURIComponent(name)}`);
                } else {
                    const luckyCode = "ULV-" + Math.floor(10000 + Math.random() * 90000);
                    router.push(`/thanh-cong?code=${luckyCode}`);
                }
            } else {
                alert('Từ chối: ' + result.error);
                setIsSubmitting(false);
            }

        } catch (error: any) {
            console.error('Lỗi chi tiết:', error);
            alert('Lỗi hệ thống báo về: ' + error.message);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#EAF2FA] py-12 px-4 flex justify-center items-center font-sans relative overflow-hidden">
            {/* Đồ họa nền cập nhật màu Magenta & Orange */}
            <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#d0006f] opacity-[0.12] rounded-full blur-[100px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ec8a00] opacity-[0.12] rounded-full blur-[120px] z-0 pointer-events-none"></div>

            {/* Khung Form với viền trên màu Hồng */}
            <div className="bg-white p-6 md:p-10 rounded-[40px] shadow-2xl max-w-lg w-full border-t-8 border-[#d0006f] relative z-10">

                {/* Tiêu đề áp dụng Gradient */}
                <h2 className="font-unilever text-3xl md:text-4xl font-black text-center mb-6 uppercase tracking-wide bg-gradient-to-r from-[#123062] via-[#d0006f] to-[#ec8a00] text-transparent bg-clip-text drop-shadow-sm pb-1">
                    Đăng ký tham gia
                </h2>

                <div className="flex bg-gray-50 rounded-2xl p-1 mb-8 border border-gray-100">
                    <button
                        type="button"
                        onClick={() => { setActiveTab('nhan-qua'); pickRandomMessage(); }}
                        // Nút Tab sáng lên với Gradient Hồng-Cam khi được chọn
                        className={`flex-1 py-3.5 text-[13px] md:text-sm font-black rounded-xl transition-all uppercase tracking-wide ${activeTab === 'nhan-qua' ? 'bg-gradient-to-r from-[#d0006f] to-[#ec8a00] text-white shadow-md' : 'text-gray-400 hover:text-[#d0006f]'}`}
                    >
                        🎁 Nhận Quà Tại Quầy
                    </button>
                    <button
                        type="button"
                        onClick={() => { setActiveTab('rut-tham'); pickRandomMessage(); }}
                        className={`flex-1 py-3.5 text-[13px] md:text-sm font-black rounded-xl transition-all uppercase tracking-wide ${activeTab === 'rut-tham' ? 'bg-gradient-to-r from-[#d0006f] to-[#ec8a00] text-white shadow-md' : 'text-gray-400 hover:text-[#d0006f]'}`}
                    >
                        🎟️ Rút Thăm May Mắn
                    </button>
                </div>

                {/* Thông điệp ngẫu nhiên - Đổi sang nền hồng nhạt, chữ hồng đậm */}
                {isMounted && (
                    <p className="text-center text-[#d0006f] text-[13px] md:text-sm mb-8 font-bold italic px-5 py-4 bg-pink-50 rounded-2xl border border-pink-100 animate-fade-in shadow-inner">
                        &quot;{randomMessage}&quot;
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                    {activeTab === 'rut-tham' && (
                        <div className="grid grid-cols-2 gap-4 animate-fade-in">
                            <div>
                                <label className="block text-[#123062] font-black mb-1.5 text-[11px] uppercase tracking-wider">Thương hiệu</label>
                                <select
                                    value={brand}
                                    onChange={(e) => { setBrand(e.target.value); pickRandomMessage(); }}
                                    className="w-full px-4 py-3.5 border-2 border-gray-100 rounded-2xl focus:border-[#d0006f] outline-none font-bold text-[#d0006f] bg-gray-50 focus:bg-white transition-colors"
                                >
                                    {brandsList.map(b => <option key={b} value={b}>{b}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[#123062] font-black mb-1.5 text-[11px] uppercase tracking-wider">Mã trên bao bì</label>
                                <input type="text" required={activeTab === 'rut-tham'} value={productCode} onChange={(e) => setProductCode(e.target.value)} className="w-full px-4 py-3.5 border-2 border-gray-100 rounded-2xl focus:border-[#d0006f] outline-none font-mono font-bold uppercase bg-gray-50 focus:bg-white transition-colors text-[#123062]" placeholder="VD: OMO123" />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-[#123062] font-black mb-1.5 text-[11px] uppercase tracking-wider">Họ và Tên</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3.5 border-2 border-gray-100 rounded-2xl focus:border-[#d0006f] outline-none font-bold bg-gray-50 focus:bg-white transition-colors text-[#123062]" placeholder="Nhập họ tên đầy đủ..." />
                    </div>

                    <div>
                        <label className="block text-[#123062] font-black mb-1.5 text-[11px] uppercase tracking-wider">Số điện thoại</label>
                        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3.5 border-2 border-gray-100 rounded-2xl focus:border-[#d0006f] outline-none font-bold bg-gray-50 focus:bg-white transition-colors text-[#123062]" placeholder="Dùng để đối chiếu nhận quà..." />
                    </div>

                    <div>
                        <label className="block text-[#123062] font-black mb-1.5 text-[11px] uppercase tracking-wider">Ảnh chụp cùng mẹ</label>
                        <div className="relative group cursor-pointer w-full h-16">
                            <input type="file" required accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer" />
                            <div className="absolute inset-0 w-full h-full border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 text-sm font-medium italic z-10 group-hover:border-[#d0006f] group-hover:bg-pink-50/50 transition-all px-4 truncate">
                                {imageFile ? <span className="text-[#d0006f] font-bold not-italic">{imageFile.name}</span> : "📸 Nhấn để tải ảnh lên..."}
                            </div>
                        </div>
                    </div>

                    {/* Nút bấm Submit với dải màu Gradient rực rỡ */}
                    <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#d0006f] via-[#e874b2] to-[#ec8a00] text-white py-4 rounded-2xl font-black text-lg hover:shadow-[0_15px_30px_rgba(208,0,111,0.3)] hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-6 uppercase tracking-wider border border-white/20">
                        {isSubmitting ? 'ĐANG XỬ LÝ DỮ LIỆU...' : (activeTab === 'nhan-qua' ? 'XÁC NHẬN & LẤY QUÀ' : 'NHẬN MÃ RÚT THĂM')}
                    </button>
                </form>
            </div>
        </div>
    );
}