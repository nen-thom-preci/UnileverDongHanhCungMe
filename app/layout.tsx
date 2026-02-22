import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const unileverFont = localFont({
  src: './fonts/UnileverShilling.woff2',
  variable: '--font-unilever',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tri Ân Mẹ Trong Từng Khoảnh Khắc',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${unileverFont.variable}`}>
      <body className="bg-[#f8f9fa] text-[#123062] font-sans antialiased">

        {/* Thanh Navigation Bar Chuẩn UX */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Unilever Logo" width={60} height={60} className="object-contain" />
            </Link>
            <nav className="flex gap-6 font-semibold text-sm sm:text-base">
              <Link href="/" className="hover:text-[#0066CB] transition-colors">Trang Chủ</Link>
              <Link href="/thu-vien" className="hover:text-[#0066CB] transition-colors">Thư Viện</Link>
              <Link href="/the-le" className="hover:text-[#0066CB] transition-colors">Thể Lệ</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}