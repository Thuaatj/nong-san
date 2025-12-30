'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Phone, Mail, MapPin, Shield, Truck, RefreshCw, Award } from 'lucide-react';

export default function Footer() {
  const policies = [
    { icon: Shield, text: 'Chính sách bảo mật thông tin' },
    { icon: Truck, text: 'Hướng dẫn mua hàng' },
    { icon: RefreshCw, text: 'Chính sách đổi trả' },
    { icon: Award, text: 'Chính sách bảo hành' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-150px' }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative mt-20 overflow-hidden bg-green-950"
    >
      {/* Background đẹp hơn: cánh đồng trà lúc bình minh/golden hour */}
      <Image
        src="https://thumbs.dreamstime.com/b/golden-sunrise-over-lush-green-tea-plantation-breathtaking-wide-angle-shot-vibrant-bathed-warm-light-sun-peeks-397289802.jpg"
        alt="Cánh đồng trà xanh Tây Nguyên lúc bình minh"
        fill
        className="object-cover brightness-50 scale-105"
        priority
      />

      {/* Overlay gradient xanh lá sang tối để chữ nổi & sinh động */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-900/80 to-transparent" />

      {/* Nội dung chính */}
      <div className="relative py-20 md:py-28 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 text-white">

          {/* Cột 1: Thông tin liên hệ - thêm icon sinh động */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-400" />
              <p className="text-xl md:text-2xl"><span className="font-bold text-green-300">Hotline:</span> 0901 862 795</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-green-400" />
              <p className="text-xl md:text-2xl"><span className="font-bold text-green-300">Email:</span> nutscornervn@gmail.com</p>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-green-400 mt-1" />
              <div>
                <p className="text-xl md:text-2xl"><span className="font-bold text-green-300">Địa chỉ:</span> 163/11 Vườn Lài, P. An Phú Đông, Q.12, TP.HCM</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-bold text-green-200">Số ĐKKD: 0315784541</p>
            <p className="text-lg opacity-90">Cấp bởi Sở Kế hoạch & Đầu tư TP.HCM – ngày 16/07/2019</p>
            <p className="text-xl">
              <span className="font-bold text-green-300">Website:</span>{' '}
              <a href="https://nutscorner.net" className="underline hover:text-green-300 transition">https://nutscorner.net</a>
            </p>
          </motion.div>

          {/* Cột 2: Logo + Chính sách - thêm icon & hiệu ứng nhẹ */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center space-y-12"
          >
            {/* Logo - bạn thay bằng logo thực hoặc dùng placeholder tạm */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/10 backdrop-blur-sm p-6 shadow-2xl border border-green-400/30">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/logo-tay-nguyen.png" // Thay bằng logo thật của bạn
                  alt="Nông Sản Tây Nguyên"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <Leaf className="absolute -top-4 -right-4 w-16 h-16 text-green-400 opacity-60" />
            </div>

            <ul className="space-y-6 text-center">
              {policies.map((policy, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-center gap-5 text-xl md:text-2xl"
                >
                  <policy.icon className="w-8 h-8 text-green-400" />
                  <span>{policy.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Cột 3: Nút Zalo + Domain - hiệu ứng mạnh hơn */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center lg:items-end space-y-16"
          >
            <a
              href="https://zalo.me/0901862795" // Cập nhật số Zalo chính xác
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-5 bg-red-600 hover:bg-red-500 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-red-600/60"
            >
              <Image
                src="https://i.pinimg.com/474x/83/9d/70/839d70266d162abd461f3a1dcb1507d3.jpg"
                alt="Zalo"
                width={48}
                height={48}
                className="rounded-full"
              />
              Liên hệ qua Zalo
              <span className="text-4xl group-hover:translate-x-4 transition-transform duration-300">›</span>
            </a>

            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold text-green-300 tracking-widest"
            >
              nongsanxanh.vn
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}