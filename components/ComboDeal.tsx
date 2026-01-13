'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function ComboDeal() {
  const { scrollYProgress } = useScroll();

  // PARALLAX
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollToNext = () => {
  const el = document.getElementById('about');
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
    <section className="relative bg-white overflow-hidden py-20 lg:py-42">

      {/* MẢNG XANH TRANG TRÍ */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-[-40px] left-[350px] w-[260px] h-[220px] bg-green-700 rounded-3xl hidden lg:block z-0"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute top-[32%] right-[40px] -translate-y-1/2 w-[550px] h-[600px] bg-green-700 rounded-3xl hidden lg:block z-0"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:-mt-[30px]">

          {/* ================= BÊN TRÁI ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative text-center lg:text-left"
          >
            {/* TIÊU ĐỀ */}
            <motion.h2
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8"
            >
              Deal hời khi <br className="hidden lg:block" /> mua ComBo
            </motion.h2>

            {/* ẢNH LỚN */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative inline-block w-full"
            >
              {/* KHUNG CỐ ĐỊNH */}
              <div className="overflow-hidden rounded-[24px] lg:rounded-[28px] shadow-2xl">
                {/* CHỈ SCALE ẢNH */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <Image
                    src="https://file.hstatic.net/1000403382/file/cac-loai-hat-an-ngay-tet_58d18cbe60c842e588bc25dd0a682d8c_1024x1024.jpg"
                    alt="Combo hạt"
                    width={900}
                    height={700}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>

              {/* NÚT CAM */}
              <motion.button
                onClick={scrollToNext}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
                className="
                  absolute
                  bottom-[-100px] sm:bottom-[-44px]
                  right-1/2 translate-x-1/2

                  lg:top-1/2 lg:right-[-100px] lg:bottom-auto
                  lg:translate-x-0 lg:-translate-y-1/2

                  bg-orange-500 hover:bg-orange-600
                  w-16 h-16 lg:w-20 lg:h-20
                  rounded-full flex items-center justify-center
                  text-white shadow-xl
                "
              >
                <ChevronDown size={32} className="animate-bounce" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ================= BÊN PHẢI ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative z-10 flex justify-center lg:justify-end mt-16 lg:mt-10 lg:mb-90 lg:translate-x-16"
          >
            {/* KHUNG CỐ ĐỊNH */}
            <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] shadow-2xl w-full">
              {/* CHỈ SCALE ẢNH */}
              <motion.div
                style={{ y: imageY }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <Image
                  
                  src="https://www.traviet.com/wp-content/uploads/2023/12/banner-cac-loai-hat-4-1200x750.jpg"
                  alt="Combo phụ"
                  width={1100}
                  height={420}
                  className="object-cover w-full h-full lg:mt-10"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* TEXT DƯỚI */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="
            text-center
            -mt-8 sm:-mt-10
            lg:-mt-30 lg:mr-150
            text-2xl sm:text-3xl
            font-medium text-green-700
          "
        >
          COMBO HẤP DẪN
        </motion.p>
      </div>
    </section>
  );
}
