'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Introduction() {
  const contentLines = [
    "Mỗi sản phẩm của Nông Sản Xanh là kết tinh của đất, nắng và công sức người trồng.",
    "Chúng tôi đồng hành cùng nông hộ Tây Nguyên để giữ gìn giá trị bản địa, tạo đầu ra bền vững và mang những sản vật lành – sạch – minh bạch đến từng bữa ăn gia đình Việt.",
  ];

  const scrollToNext = () => {
  const el = document.getElementById('hero');
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
    <section id="introduction" className="relative min-h-screen overflow-hidden">
      {/* ẢNH NỀN MỜ PHÍA DƯỚI */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md brightness-90 scale-110"
        style={{
          backgroundImage:
            'url(https://thumbs.dreamstime.com/b/golden-rice-terraces-glowing-sunrise-mu-cang-chai-vietnam-stunning-landscape-golden-rice-terraces-glowing-401157998.jpg)',
        }}
      />

      {/* NỘI DUNG */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-6 pt-30 pb-40">
        {/* KHỐI TRẮNG BỌC CHUNG */}
        <div className="relative bg-white rounded-[2.8rem] shadow-2xl p-6 md:p-10 lg:p-14 overflow-hidden">
          
          {/* HIỆU ỨNG NỀN SÁNG LƯỚT NHẸ KHI HOVER */}
          <div className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/60 to-transparent
            opacity-0
            hover:opacity-100
            transition-opacity duration-500
            before:absolute before:inset-0
            before:translate-x-[-120%]
            hover:before:translate-x-[120%]
            before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent
            before:transition-transform before:duration-1000
          " />

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            {/* ẢNH BÊN TRÁI */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full lg:w-5/12 overflow-hidden rounded-3xl shadow-xl relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://media.istockphoto.com/id/695071562/photo/nuts-assortment-on-rustic-wood-table.jpg?s=612x612&w=0&k=20&c=G1ndYym-HLo9FCKnA2kh9qq4_2Lz_fYJH6QPZmpPw_Q="
                  alt="Sản phẩm hạt dinh dưỡng Nông Sản Xanh"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>

              {/* LOGO TRÊN ẢNH */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-full px-6 py-2 shadow-lg">
                <span className="text-xl md:text-2xl font-bold text-green-700">
                  Nông Sản Xanh
                </span>
              </div>
            </motion.div>

            {/* TEXT BÊN PHẢI */}
            <div className="w-full lg:w-7/12">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
              >
                Lời ngỏ
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-green-700 mb-10"
              >
                Đôi nét về chúng tôi
              </motion.p>

              <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                {contentLines.map((line, lineIndex) => {
                  const words = line.split(' ');
                  return (
                    <motion.p
                      key={lineIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap"
                    >
                      {words.map((word, wordIndex) => (
                        <motion.span
                          key={wordIndex}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{
                            delay: (lineIndex * words.length + wordIndex) * 0.05,
                          }}
                          className="inline-block mr-2"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                  );
                })}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl font-medium text-green-700 mt-12"
              >
                Nông sản xanh
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* NÚT CUỘN */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollToNext}
        className="
          absolute right-8 lg:right-16 bottom-10 z-20
          bg-orange-500 hover:bg-orange-600 text-white
          rounded-full p-6 shadow-2xl
          transition-all hover:scale-110
        "
        aria-label="Cuộn xuống phần tiếp theo"
      >
        <ChevronDown size={56} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
