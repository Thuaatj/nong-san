'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Truck,
  RefreshCw,
  Award,
  Leaf,
} from 'lucide-react';

const policies = [
  { icon: Shield, text: 'Bảo mật thông tin' },
  { icon: Truck, text: 'Hướng dẫn mua hàng' },
  { icon: RefreshCw, text: 'Đổi trả linh hoạt' },
  { icon: Award, text: 'Bảo hành chất lượng' },
];

export default function Footer() {
  return (
    <footer className="relative bg-green-950 overflow-hidden">
      {/* BACKGROUND PARALLAX - gọn hơn */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.pexels.com/photos/34238061/pexels-photo-34238061/free-photo-of-sunrise-over-lush-tea-hills-in-phu-th-vietnam.jpeg"
          alt="Nông sản xanh - Đồi chè lúc bình minh"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
      </motion.div>

      {/* OVERLAY + GLOW nhỏ hơn */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-900/80 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/10 blur-[100px]" />

      {/* CONTENT - thu gọn chiều cao, font nhỏ hơn */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          {/* COL 1: CONTACT - nhỏ gọn */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-green-300">Liên hệ</h3>
            <div className="space-y-3 text-sm md:text-base opacity-90">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400" />
                0392806307
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-400" />
                nongsanxanh@gmail.com
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                <span className="text-sm">
                  Thôn 4 - Krông Buk - Krong Pắc - Đăk lăk
                </span>
              </div>
              <p className="text-xs opacity-70">
                ĐKKD 0392806307 – 16/07/2019
              </p>
            </div>
          </motion.div>

          {/* COL 2: LOGO + POLICY - logo nhỏ hơn, policy ít khoảng cách */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* LOGO BADGE nhỏ hơn */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-xl border border-green-400/30 shadow-xl">
              <Image
                src="data:image/png;base64,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"
                alt="Logo Nông Sản Xanh"
                fill
                className="object-contain p-6 rounded-full"
              />
              <Leaf className="absolute -top-3 -right-3 w-10 h-10 text-green-400 opacity-80" />
            </div>

            {/* POLICIES - ít khoảng cách hơn */}
            <ul className="space-y-3 text-center text-sm md:text-base">
              {policies.map((p, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 opacity-90"
                >
                  <p.icon className="w-4 h-4 text-green-400" />
                  {p.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* COL 3: CTA - nhỏ gọn hơn */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center md:items-end gap-8"
          >
            <motion.a
              href="https://zalo.me/0392806307"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 bg-red-600 hover:bg-red-500 px-8 py-4 rounded-full shadow-xl text-base font-semibold"
            >
              <Image
                src="https://logores.yrucd.com/wp-content/uploads/2022/05/Zalo-Logo-PNG2.png!a"
                alt="Chat Zalo"
                width={36}
                height={36}
                className="rounded-full"
              />
              Chat Zalo ngay
            </motion.a>

            <motion.p className="text-2xl md:text-3xl font-bold text-green-300 tracking-wider">
              nongsanxanh.vn
            </motion.p>
          </motion.div>
        </div>

        {/* COPYRIGHT - nhỏ hơn */}
        <div className="text-center py-6 text-xs md:text-sm text-white/60 border-t border-white/10">
          © {new Date().getFullYear()} Nông Sản Xanh Tây Nguyên. All rights reserved.
        </div>
      </div>
    </footer>
  );
}