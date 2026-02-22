import Link from 'next/link';

export default function ThanhCongPage() {
    return (
        <div className="min-h-screen bg-[brand-dark] flex flex-col items-center justify-center py-12 px-4 text-white">
            <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center text-gray-800 border-b-8 border-[brand-primary]">
                <div className="text-[brand-primary] text-6xl mb-4 font-bold flex justify-center">✓</div>
                <h1 className="font-unilever text-3xl font-extrabold text-[brand-dark] mb-2">Tuyệt Vời!</h1>
                <p className="text-[brand-dark]/80 mb-6">Bạn đã gửi ảnh thành công. Hãy giữ lại mã số dưới đây để có cơ hội nhận bộ quà tặng giá trị nhé.</p>

                <div className="bg-[brand-secondary]/10 p-6 rounded-xl border-2 border-dashed border-[brand-secondary] mb-6">
                    <p className="text-sm text-[brand-dark] mb-1 uppercase font-semibold">Mã Rút Thăm Của Bạn</p>
                    <p className="font-unilever text-4xl font-black text-[brand-primary] tracking-widest">UNI-88</p>
                </div>

                <p className="text-sm text-[brand-dark]/60 mb-6">Đừng quên chụp màn hình lại mã code này!</p>

                <div className="flex flex-col gap-3">
                    <Link href="/thu-vien" className="w-full bg-[brand-primary] text-white px-4 py-3 rounded-lg font-bold hover:bg-[brand-dark] transition">
                        Xem Ảnh Của Bạn Tại Thư Viện
                    </Link>
                    <Link href="/" className="w-full bg-[brand-secondary]/20 text-[brand-dark] px-4 py-3 rounded-lg font-bold hover:bg-[brand-secondary]/40 transition">
                        Về Trang Chủ
                    </Link>
                </div>
            </div>
        </div>
    );
}