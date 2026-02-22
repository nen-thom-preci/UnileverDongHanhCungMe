'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ThamGiaPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone || !imageFile) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        setIsSubmitting(true);

        try {
            // 1. Chuyển ảnh thành Base64 để gửi qua API
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onloadend = async () => {
                const base64Image = reader.result as string;

                // 2. Gửi dữ liệu đến API nội bộ của Next.js
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        imageUrl: base64Image,
                    }),
                });

                const result = await response.json();

                if (result.success) {
                    // Lưu tạm ID vào session để trang thành công có thể hiển thị (tùy chọn)
                    router.push('/thanh-cong');
                } else {
                    // Xử lý lỗi (Ví dụ: Trùng số điện thoại nếu bạn đã đặt Unique)
                    alert('Có lỗi xảy ra: ' + (result.error || 'Vui lòng kiểm tra lại số điện thoại!'));
                    setIsSubmitting(false);
                }
            };
        } catch (error) {
            console.error('Lỗi khi gửi form:', error);
            alert('Không thể kết nối với máy chủ!');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 flex justify-center items-center font-sans">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border-t-8 border-[#0066CB]">
                <h2 className="font-unilever text-2xl font-bold text-[#123062] text-center mb-2 uppercase">Gửi Ảnh Tham Gia</h2>
                <p className="text-center text-[#7488E7] text-sm mb-8 font-medium italic">"Cảm ơn vì đã chọn làm mẹ"</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-[#123062] font-bold mb-1 text-sm">HỌ VÀ TÊN</label>
                        <input
                            type="text" required value={name} onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-[#7488E7]/20 rounded-xl focus:border-[#0066CB] outline-none transition-all"
                            placeholder="Nhập họ tên của bạn..."
                        />
                    </div>

                    <div>
                        <label className="block text-[#123062] font-bold mb-1 text-sm">SỐ ĐIỆN THOẠI</label>
                        <input
                            type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-[#7488E7]/20 rounded-xl focus:border-[#0066CB] outline-none transition-all"
                            placeholder="Dùng để nhận mã dự thưởng..."
                        />
                    </div>

                    <div>
                        <label className="block text-[#123062] font-bold mb-1 text-sm">ẢNH CHỤP CÙNG MẸ</label>
                        <div className="relative group cursor-pointer">
                            <input
                                type="file" required accept="image/*" onChange={handleImageChange}
                                className="w-full border-2 border-dashed border-[#7488E7]/40 rounded-xl p-4 bg-[#7488E7]/5 text-[#123062] file:hidden"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#7488E7] font-medium italic">
                                {imageFile ? imageFile.name : "Nhấn để chọn ảnh từ máy..."}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit" disabled={isSubmitting}
                        className="w-full bg-[#0066CB] text-white py-4 rounded-xl font-black text-lg hover:bg-[#123062] transition-all shadow-lg active:scale-95 disabled:opacity-50"
                    >
                        {isSubmitting ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN THAM GIA'}
                    </button>
                </form>
            </div>
        </div>
    );
}