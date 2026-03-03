'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import imageCompression from 'browser-image-compression';

// Thư viện thông điệp cá nhân hóa
export const brandMessages: Record<string, string> = {
    "OMO": "Cảm ơn vì mẹ đã chọn tạm gác lại những ước mơ riêng của mình, để bước vào hành trình làm mẹ của con",
    "Surf": "Cảm ơn vì mẹ đã chọn gánh lấy phần vất vả để con được lớn lên trong bình yên",
    "Comfort": "Cảm ơn vì mẹ đã chọn bắt đầu một hành trình đầy thử thách vì con, để con có một khởi đầu tốt đẹp nhất",
    "Sunlight": "Cảm ơn vì mẹ đã chọn ở lại trên hành trình dài mang tên làm mẹ, âm thầm nhưng chưa từng rời bước",
    "Cif": "Cảm ơn vì mẹ đã chọn yêu thương con bằng cả sự can đảm của mình",
    "Lifebuoy": "Cảm ơn vì mẹ đã chọn làm mẹ của con, ngay cả khi phải đánh đổi rất nhiều điều mà chưa từng một lần than vãn",
    "Lux": "Cảm ơn vì mẹ đã chọn trở thành điểm tựa vững vàng của con, để con tự tin bước ra thế giới rộng lớn",
    "Axe": "Cảm ơn vì mẹ đã chọn không từ bỏ trước những thử thách đầu tiên để con có một khởi đầu trọn vẹn",
    "Closeup": "Cảm ơn vì mẹ đã chọn đồng hành trên hành trình trưởng thành của con, bằng tất cả sự kiên nhẫn và yêu thương vô điều kiện",
    "P/S": "Cảm ơn mẹ vì đã chọn bảo vệ những điều nhỏ nhất, cho nụ cười con mãi vẹn tròn theo năm tháng"
};

export default function ThamGiaPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [brand, setBrand] = useState('OMO');
    const [productCode, setProductCode] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone || !imageFile || !productCode) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        // Khóa nút bấm, hiện "ĐANG XỬ LÝ..."
        setIsSubmitting(true);

        try {
            // 1. Nén ảnh
            const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1280, useWebWorker: true };
            const compressedFile = await imageCompression(imageFile, options);

            // 2. Đọc file ảnh (Sử dụng Promise để bắt lỗi chặt chẽ)
            const base64Image = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(compressedFile);
                reader.onloadend = () => resolve(reader.result as string);
                reader.onerror = (error) => reject(error);
            });

            // 3. Gửi dữ liệu lên API
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, imageUrl: base64Image, brand, productCode }),
            });

            // Kiểm tra nếu API bị sập (lỗi 500) hoặc trả về mã lỗi HTML
            if (!response.ok) {
                throw new Error(`Lỗi kết nối máy chủ: ${response.status}`);
            }

            const result = await response.json();

            // 4. Xử lý kết quả trả về
            // 4. Xử lý kết quả trả về
            if (result.success) {
                // Tạo một mã rút thăm ngẫu nhiên (VD: ULV-12345)
                const luckyCode = "ULV-" + Math.floor(10000 + Math.random() * 90000);
                // Chuyển sang trang thành công và đính kèm mã này trên thanh địa chỉ URL
                router.push(`/thanh-cong?code=${luckyCode}`);
            } else {
                alert('Từ chối: ' + result.error);
                setIsSubmitting(false);
            }

        } catch (error) {
            console.error('Lỗi chi tiết:', error);
            alert('Có lỗi xảy ra khi tải dữ liệu! Vui lòng thử lại.');
            setIsSubmitting(false); // Nhả nút bấm ra nếu bị lỗi mạng/server
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 flex justify-center items-center font-sans">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border-t-8 border-[#0066CB]">
                <h2 className="font-unilever text-2xl font-bold text-[#123062] text-center mb-2 uppercase">Gửi Ảnh Tham Gia</h2>
                <p className="text-center text-[#7488E7] text-sm mb-6 font-medium italic px-4">
                    &quot;{brandMessages[brand]}&quot;
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[#123062] font-bold mb-1 text-[11px] uppercase">Thương hiệu</label>
                            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full px-3 py-3 border-2 border-[#7488E7]/20 rounded-xl focus:border-[#0066CB] outline-none font-bold text-[#123062]">
                                {Object.keys(brandMessages).map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[#123062] font-bold mb-1 text-[11px] uppercase">Mã trên bao bì</label>
                            <input type="text" required value={productCode} onChange={(e) => setProductCode(e.target.value)} className="w-full px-3 py-3 border-2 border-[#7488E7]/20 rounded-xl focus:border-[#0066CB] outline-none font-mono uppercase" placeholder="VD: OMO123" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[#123062] font-bold mb-1 text-[11px] uppercase">Họ và Tên</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border-2 border-[#7488E7]/20 rounded-xl focus:border-[#0066CB] outline-none" placeholder="Nhập họ tên..." />
                    </div>

                    <div>
                        <label className="block text-[#123062] font-bold mb-1 text-[11px] uppercase">Số điện thoại</label>
                        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 border-2 border-[#7488E7]/20 rounded-xl focus:border-[#0066CB] outline-none" placeholder="Nhận mã rút thăm..." />
                    </div>

                    <div>
                        <label className="block text-[#123062] font-bold mb-1 text-[11px] uppercase">Ảnh chụp cùng mẹ</label>
                        <div className="relative group cursor-pointer w-full h-14">
                            <input type="file" required accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer" />
                            <div className="absolute inset-0 w-full h-full border-2 border-dashed border-[#7488E7]/40 rounded-xl bg-[#7488E7]/5 flex items-center justify-center text-[#7488E7] text-sm italic z-10 group-hover:border-[#0066CB] px-4 truncate">
                                {imageFile ? <span className="text-[#0066CB] font-bold not-italic">{imageFile.name}</span> : "Nhấn để chọn ảnh..."}
                            </div>
                        </div>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#0066CB] text-white py-4 rounded-xl font-black text-lg hover:bg-[#123062] transition-all shadow-lg active:scale-95 disabled:opacity-50 mt-2">
                        {isSubmitting ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN THAM GIA'}
                    </button>
                </form>
            </div>
        </div>
    );
}