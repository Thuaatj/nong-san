'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { num: '01.', title: '100% hạt tuyển chọn Tây Nguyên' },
    { num: '02.', title: 'Bán bằng sự tin cậy, không bằng lời hứa' },
    { num: '03.', title: 'Hạt đúng vụ - không gom hàng tồn' },
    { num: '04.', title: 'Giao nhanh tại TP. HCM' },
  ];

  const scrollToNext = () => {
    document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] md:h-[80vh] lg:h-[70vh] overflow-visible">
      {/* Ảnh nền */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md brightness-85 scale-105"
        style={{
          backgroundImage:
            'url(https://thumbs.dreamstime.com/b/golden-rice-terraces-glowing-sunrise-mu-cang-chai-vietnam-stunning-landscape-golden-rice-terraces-glowing-401157998.jpg)',
        }}
      />

      {/* Phủ trắng */}
      <div
        className="absolute top-0 left-0 w-full bg-white"
        style={{ height: '80vh' }}
      />

      {/* Nội dung */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 pt-16 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            Tại sao nên chọn chúng tôi?
          </h2>
          <p className="text-xl md:text-3xl font-medium text-green-700 mt-4">
            Nông sản xanh
          </p>
        </motion.div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-6xl w-full px-4 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                y: -14,
                scale: 1.03,
                boxShadow: '0 40px 80px -20px rgba(16,185,129,0.55)',
              }}
              className="
                relative rounded-3xl p-7
                bg-gradient-to-br from-emerald-700 via-green-600 to-emerald-500
                shadow-xl overflow-hidden group
              "
            >
              <span className="
                absolute inset-0 -translate-x-full
                group-hover:translate-x-full
                transition-transform duration-1000
                bg-gradient-to-tr from-transparent via-white/35 to-transparent skew-x-12
              " />

              <span className="relative z-10 text-4xl font-black text-white block mb-3">
                {reason.num}
              </span>
              <p className="relative z-10 text-lg text-white">
                {reason.title}
              </p>

              <div className="absolute inset-0 rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* 🔥 NÚT NỔI RANH GIỚI */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          onClick={scrollToNext}
          className="
            absolute left-1/2 -translate-x-1/2
            top-[80vh] -mt-35 mt-[-40] lg:mt-[-140]
            z-50
            bg-orange-500 hover:bg-orange-600
            text-white rounded-full p-7
            shadow-2xl transition-all
            hover:shadow-orange-500/60
          "
        >
          <ChevronDown size={30} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
