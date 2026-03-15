import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen font-sans">
      {/* 1. HERO SECTION (PHẦN BÌA) */}
      <section className="relative w-full bg-[#0033CC] pt-8 md:pt-12 pb-24 md:pb-32 px-4 overflow-hidden">
        {/* Nền bo góc trang trí phía sau */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#00CCCC] opacity-80 rounded-br-[300px] z-0 transform translate-x-[-150px] translate-y-[-100px]" />

        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-20 gap-10">

          {/* Cột chữ bên trái */}
          <div className="text-center md:text-left flex-1 bg-white p-8 md:p-10 rounded-[40px] shadow-xl max-w-xl z-20 relative overflow-hidden border-b-4 border-[#d0006f]/20">

            {/* Hiệu ứng viền màu mờ ảo góc trên cùng bên trái của khung trắng */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#d0006f]/10 to-transparent rounded-br-[100px] pointer-events-none"></div>

            {/* Heading 1: Nhấn mạnh chữ "chọn" bằng dải màu rực rỡ */}
            <h1 className="font-unilever text-3xl md:text-[2.75rem] font-black bg-gradient-to-r from-[#0e0e9a] to-[#31a5e6] text-transparent bg-clip-text mb-2 uppercase tracking-wide leading-tight drop-shadow-sm relative z-10">
              Cảm ơn mẹ vì đã <span className="bg-gradient-to-r from-[#d0006f] to-[#ec8a00] text-transparent bg-clip-text drop-shadow-md">&quot;chọn&quot;</span> làm mẹ
            </h1>

            {/* Heading 2: Sử dụng màu Magenta nổi bật */}
            <h2 className="font-unilever text-lg md:text-2xl font-extrabold bg-gradient-to-r from-[#0e0e9a] to-[#31a5e6] text-transparent bg-clip-text mb-6 uppercase tracking-wider drop-shadow-sm relative z-10">
              &amp; Chọn Unilever <span className="bg-gradient-to-r from-[#d0006f] to-[#ec8a00] text-transparent bg-clip-text drop-shadow-md">đồng hành</span>
            </h2>

            {/* Body Text: Nhấn mạnh phần quà bằng màu Cam */}
            <p className="text-base text-[#123062] mb-8 font-medium leading-relaxed relative z-10">
              Nhân dịp Ngày của Mẹ, Unilever mang đến món quà tri ân đặc biệt. Mua sắm từ 2 sản phẩm, nhận ngay quà tặng, in ảnh miễn phí cùng khung nam châm chữ U độc quyền và cơ hội trúng <strong className="text-[#ec8a00] font-black text-[17px]">10.050 combo quà tặng</strong>! Chi tiết thể lệ xem tại <Link href="/the-le" className="underline hover:text-[#d0006f] transition font-bold">đây</Link>.
            </p>

            {/* Nút bấm chuyển sang dải màu gradient giống trang Thư Viện */}
            <Link href="/tham-gia" className="inline-block relative z-10 bg-gradient-to-r from-[#d0006f] via-[#e874b2] to-[#ec8a00] text-white px-10 py-4 rounded-full font-black text-lg hover:shadow-[0_15px_30px_rgba(208,0,111,0.3)] hover:-translate-y-1 transition-all duration-300 border border-white/20">
              GỬI ẢNH NGAY - NHẬN QUÀ
            </Link>
          </div>

          {/* Cột bên phải: KHÔNG GIAN ĐỂ CHÈN ẢNH BÌA 2 MẸ CON */}
          <div className="relative w-full md:w-1/2 aspect-square md:h-[450px] flex items-center justify-center rounded-[40px] z-20">
            <div className="text-white text-center w-full h-full flex items-center justify-center">
              <img src="Trang-chu.svg" alt="Trang-chu" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Đồ họa uốn lượn ở đáy */}
        <div className="absolute bottom-0 left-0 w-full rotate-180 z-10 line-height-0">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{ fill: '#ffffff' }}></path>
          </svg>
        </div>
      </section>

      {/* 2. SECTION THƯƠNG HIỆU & THÔNG ĐIỆP (ĐÃ GỘP) */}
      <section className="bg-white py-16 px-4 w-full relative">
        <div className="max-w-6xl mx-auto text-center relative p-8 md:p-12 bg-[#EAF2FA] rounded-[50px] shadow-sm">
          <h2 className="text-3xl font-black text-[#123062] mb-12 uppercase tracking-wide">Áp dụng cho 3 thương hiệu đồng hành</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* Thẻ OMO */}
            <div className="bg-red-50 rounded-[30px] p-8 border border-red-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center shadow-sm">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-red-100 mb-4 shadow-sm overflow-hidden relative p-3">
                <img src="omo.avif" alt="OMO" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black text-red-600 mb-2">OMO</h3>
              <p className="text-red-700 font-bold text-sm text-center mb-6">Chuyên gia giặt tẩy, xoáy bay vết bẩn cứng đầu.</p>
              <div className="bg-white/60 p-5 rounded-2xl w-full flex-grow flex items-center justify-center border border-red-100/50">
                <p className="text-red-900/80 text-sm font-medium italic text-center leading-relaxed">
                  &quot;Cảm ơn vì mẹ đã chọn làm mẹ của con, ngay cả khi phải đánh đổi rất nhiều điều mà chưa từng một lần than vãn&quot;
                </p>
              </div>
            </div>

            {/* Thẻ Comfort */}
            <div className="bg-blue-50 rounded-[30px] p-8 border border-blue-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center shadow-sm">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-blue-100 mb-4 shadow-sm overflow-hidden relative p-3">
                <img src="comfort.avif" alt="Comfort" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black text-blue-500 mb-2">Comfort</h3>
              <p className="text-blue-700 font-bold text-sm text-center mb-6">Hương thơm dịu nhẹ, chăm sóc sợi vải mềm mại.</p>
              <div className="bg-white/60 p-5 rounded-2xl w-full flex-grow flex items-center justify-center border border-blue-100/50">
                <p className="text-blue-900/80 text-sm font-medium italic text-center leading-relaxed">
                  &quot;Cảm ơn vì mẹ đã chọn gánh lấy phần vất vả để con được lớn lên trong bình yên&quot;
                </p>
              </div>
            </div>

            {/* Thẻ Surf */}
            <div className="bg-purple-50 rounded-[30px] p-8 border border-purple-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center shadow-sm">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-purple-100 mb-4 shadow-sm overflow-hidden relative p-3">
                <img src="surf.avif" alt="Surf" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black text-purple-600 mb-2">Surf</h3>
              <p className="text-purple-700 font-bold text-sm text-center mb-6">Sạch ngát hương xuân, tươi mới mỗi ngày.</p>
              <div className="bg-white/60 p-5 rounded-2xl w-full flex-grow flex items-center justify-center border border-purple-100/50">
                <p className="text-purple-900/80 text-sm font-medium italic text-center leading-relaxed">
                  &quot;Cảm ơn vì mẹ đã chọn đồng hành trên hành trình trưởng thành của con, bằng tất cả sự kiên nhẫn và yêu thương vô điều kiện&quot;
                </p>
              </div>
            </div>

          </div>
          <p className="text-xs text-gray-500 mt-8 italic font-medium">* Các thông điệp tri ân được lựa chọn ngẫu nhiên từ hàng ngàn lời cảm ơn gửi đến mẹ.</p>
        </div>
      </section>

      {/* 3. SECTION 3 BƯỚC THAM GIA - TÍCH HỢP ĐƯỜNG VIỀN HOA MỚI (image_4.png) */}
      <section className="bg-white py-16 px-4 w-full relative">
        <div className="max-w-6xl mx-auto text-center relative z-10 mb-16">
          <h2 className="text-3xl font-black text-[#123062] mb-12 uppercase tracking-wide">3 Bước Nhận Quà Dễ Dàng</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-blue-50 flex flex-col items-center">
              <div className="text-5xl mb-6 p-4 bg-[#EAF2FA] rounded-full">🛍️</div>
              <h3 className="font-bold text-[#0066CB] text-xl mb-3 uppercase">Bước 1: Mua Hàng</h3>
              <p className="text-gray-600 font-medium text-sm text-center">Mua từ 2 sản phẩm thuộc OMO, Comfort hoặc Surf.</p>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-blue-50 flex flex-col items-center">
              <div className="text-5xl mb-6 p-4 bg-[#EAF2FA] rounded-full">📸</div>
              <h3 className="font-bold text-[#0066CB] text-xl mb-3 uppercase">Bước 2: Chụp Ảnh</h3>
              <p className="text-gray-600 font-medium text-sm text-center">Chụp ảnh khoảnh khắc cùng Mẹ và mã code bao bì.</p>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-blue-50 flex flex-col items-center">
              <div className="text-5xl mb-6 p-4 bg-[#EAF2FA] rounded-full">🎁</div>
              <h3 className="font-bold text-[#0066CB] text-xl mb-3 uppercase">Bước 3: Nhận Quà</h3>
              <p className="text-gray-600 font-medium text-sm text-center">Tải ảnh lên để nhận mã rút thăm và dịch vụ in ảnh.</p>
            </div>
          </div>
        </div>

        {/* ĐƯỜNG VIỀN HOA MƯỢT MÀ MỚI (image_4.png) - Loại bỏ nền đen */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] pointer-events-none z-0">
          <img src="/flower.svg" alt="Đường viền hoa tri ân" className="w-full h-full object-cover object-top" style={{ mixBlendMode: 'screen', opacity: 0.7 }} />
        </div>
      </section>
      {/* 4. FOOTER (CHUẨN UNILEVER TOÀN CẦU) */}
      <footer className="w-full mt-auto font-sans">

        {/* Tầng 1: Thanh Chia Sẻ */}
        <div className="bg-[#005EFB] text-white py-4 px-4 flex flex-col sm:flex-row justify-center items-center gap-6 font-bold text-sm md:text-base">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            Chia sẻ trang
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-80"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#" className="text-xl font-black leading-none hover:opacity-80">𝕏</a>
            <a href="#" className="hover:opacity-80"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            <a href="#" className="hover:opacity-80"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
          </div>
        </div>

        {/* Tầng 2: Kết nối & Liên hệ */}
        <div className="bg-[#1F3BC6] text-white py-14 px-6 md:px-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-black mb-4 tracking-tight">Kết nối với chúng tôi</h3>
            <p className="mb-8 font-medium text-white max-w-md text-lg leading-snug">
              Chúng tôi luôn mong muốn được kết nối cùng những ai có chung mối quan tâm về một tương lai bền vững.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" className="text-2xl font-black leading-none hover:opacity-80 mt-1">𝕏</a>
              <a href="#" className="hover:opacity-80"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#" className="hover:opacity-80"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-black mb-4 tracking-tight">Liên hệ với chúng tôi</h3>
            <p className="mb-8 font-medium text-white max-w-md text-lg leading-snug">
              Liên hệ với các nhóm chuyên gia và Unilever hoặc tìm các liên lạc trên khắp thế giới.
            </p>
            {/* Nút bấm đặc trưng Unilever */}
            <button className="flex items-stretch group">
              <span className="bg-[#7DE0E6] text-[#000F61] font-bold text-base px-6 py-3 transition-colors">
                Liên hệ với chúng tôi
              </span>
              <span className="bg-[#5BC3CB] text-[#000F61] px-4 flex items-center justify-center transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </span>
            </button>
          </div>
        </div>

        {/* Tầng 3: Bản quyền & Liên kết (Dark Navy) */}
        <div className="bg-[#000F61] text-white py-16 px-6 md:px-16 relative">

          <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-bold mb-16 max-w-6xl leading-relaxed">
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Liên hệ</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Thông báo pháp lý</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Thông báo về Cookie</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Thông báo về Quyền Riêng tư</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Sitemap</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Khả năng truy cập</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Tính bền vững Kỹ thuật số</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Quy trình giải quyết khiếu nại của người tiêu dùng</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Điều khoản & Điều kiện Chương trình Thương hiệu Tiktok Shop</li>
            <li className="hover:underline hover:text-gray-300 cursor-pointer underline-offset-4">Thông tin Doanh nghiệp</li>
          </ul>

          <div className="text-[15px] font-bold mb-8">
            Unilever Việt Nam
          </div>

          <div className="text-[15px] font-bold flex flex-wrap items-center gap-3">
            <span>© Unilever 2026</span>
            <span className="text-white/40 font-light">|</span>
            <span className="hover:underline cursor-pointer flex items-center gap-2 underline-offset-4">
              Cookie Settings
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </span>
          </div>

          {/* Nút Trở lại đầu trang (Luôn bám góc dưới cùng bên phải) */}
          <a
            href="#"
            className="absolute bottom-0 right-4 md:right-16 bg-[#7DE0E6] hover:bg-[#5BC3CB] text-[#000F61] font-bold text-[15px] px-5 py-4 flex items-center gap-3 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 4 4 16 20 16"></polygon></svg>
            Trở lại đầu trang
          </a>
        </div>
      </footer>
    </main>
  );
}