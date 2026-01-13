'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, ShieldCheck, Sun } from 'lucide-react';

export default function HeroCleanSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20"
        >
          <span className="text-green-600 font-semibold tracking-widest mb-4">
            NÔNG SẢN XANH
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-900 leading-tight">
            Sạch Từ <br />
            <span className="text-green-600">Nguồn Gốc</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Nông sản được nuôi trồng tự nhiên, thu hoạch thủ công và
            mang trọn tinh hoa đất Việt đến từng bữa ăn.
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-block w-fit bg-green-600 hover:bg-green-500 text-white font-semibold px-10 py-4 rounded-full transition"
            href="#products"
          >
            Khám phá sản phẩm
          </motion.a>
        </motion.div>

        {/* ===== RIGHT IMAGE ===== */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="relative"
        >
          <Image
            src="https://images.pexels.com/photos/5041981/pexels-photo-5041981.jpeg"
            alt="Nông sản xanh"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent lg:hidden" />
        </motion.div>
      </div>

      {/* ===== VALUE STRIP ===== */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 -mt-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              icon: Leaf,
              title: 'Tự Nhiên 100%',
              desc: 'Không hóa chất, không phụ gia độc hại',
            },
            {
              icon: ShieldCheck,
              title: 'An Toàn & Minh Bạch',
              desc: 'Nguồn gốc rõ ràng – kiểm định nghiêm ngặt',
            },
            {
              icon: Sun,
              title: 'Tinh Hoa Đất Trời',
              desc: 'Nuôi dưỡng bằng nắng, gió và đất lành',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <item.icon className="w-12 h-12 mx-auto text-green-600 mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
