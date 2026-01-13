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
  const el = document.getElementById('introduction');
  if (!el) return;

  const headerOffset = 80; // chỉnh theo chiều cao header fixed
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition =
    elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Nội dung */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen md:min-h-0 px-4 pt-10 pb-10 md:pb-20">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
            Tại sao nên chọn chúng tôi?
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-green-700 mt-4">
            Nông sản xanh
          </p>
        </motion.div>

        {/* Grid card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl w-full mb-10 md:mb-4 lg:mb-6">
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
                relative rounded-3xl
                p-4 sm:p-6 lg:p-7
                bg-gradient-to-br from-emerald-700 via-green-600 to-emerald-500
                shadow-xl overflow-hidden group
              "
            >
              {/* ánh sáng quét */}
              <span
                className="
                  absolute inset-0 -translate-x-full
                  group-hover:translate-x-full
                  transition-transform duration-1000
                  bg-gradient-to-tr from-transparent via-white/35 to-transparent skew-x-12
                "
              />

              <span className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-black text-white block mb-3">
                {reason.num}
              </span>
              <p className="relative z-10 text-base sm:text-lg text-white">
                {reason.title}
              </p>

              <div className="absolute inset-0 rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Nút tròn */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          onClick={scrollToNext}
          className="
            relative z-50
            mt-6 md:-mt-2 lg:-mt-[-24px]
            bg-orange-500 hover:bg-orange-600
            text-white rounded-full
            p-4 sm:p-5 md:p-6 lg:p-7
            shadow-2xl transition-all duration-300
            hover:shadow-orange-500/60
          "
          aria-label="Cuộn xuống phần tiếp theo"
        >
          <ChevronDown className="animate-bounce w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </motion.button>
      </div>
    </section>
  );
}
