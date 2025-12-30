'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mt-20 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3791834616819870298" // Ảnh cánh đồng trà đẹp, rộng
        alt="Cánh đồng nông sản Tây Nguyên"
        fill
        className="object-cover brightness-75"
        sizes="100vw"
      />

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-green-800/80" />

      {/* Content */}
      <div className="relative py-12 md:py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start text-white">

          {/* Cột 1: Thông tin liên hệ */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl">
              <span className="font-semibold">Hotline:</span> 0901 862 795
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-semibold">Email:</span> nutscornervn@gmail.com
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-semibold">Website:</span>{' '}
              <a href="https://nutscorner.net" className="underline hover:text-green-300 transition">
                https://nutscorner.net
              </a>
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-semibold">Địa chỉ:</span> 163/11 Vườn Lài, P. An Phú Đông, Q.12, TP.HCM
            </p>
            <p className="text-lg md:text-xl font-semibold">Số ĐKKD: 0315784541</p>
            <p className="text-base md:text-lg">
              Cấp bởi Sở Kế hoạch & Đầu tư TP.HCM – ngày 16/07/2019
            </p>
          </div>

          {/* Cột 2: Logo + Chính sách */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            {/* Logo - Bạn thay bằng URL logo thực tế */}
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image
                src="/logo-tay-nguyen.png" // Thay bằng logo thực của bạn (đặt trong public folder)
                alt="Nông Sản Tây Nguyên"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <ul className="space-y-3 text-lg md:text-xl">
              <li className="flex items-center gap-3">
                <span className="text-green-300">•</span> Chính sách bảo mật thông tin
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-300">•</span> Hướng dẫn mua hàng
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-300">•</span> Chính sách đổi trả
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-300">•</span> Chính sách bảo hành
              </li>
            </ul>
          </div>

          {/* Cột 3: Nút Zalo + Domain */}
          <div className="flex flex-col items-center md:items-end space-y-10">
            {/* Nút Liên hệ Zalo */}
            <a
              href="https://zalo.me/0901862795" // Thay bằng số Zalo thực tế
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition transform hover:scale-105"
            >
              <Image
                src="https://deskie.io/tilda/5128349/images/tild3564-3462-4031-b337-353763336232__zalo.png"
                alt="Zalo"
                width={32}
                height={32}
                className="rounded-full"
              />
              Liên hệ qua Zalo
              <span className="text-2xl">&gt;</span>
            </a>

            {/* Domain dưới cùng */}
            <p className="text-lg md:text-xl text-green-300">nongsanxanh.vn</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}