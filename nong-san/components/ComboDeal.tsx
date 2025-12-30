'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function ComboDeal() {
  const scrollToNext = () => {
    document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-52">
      {/* MẢNG XANH TRANG TRÍ */}
      <div
        className="
            absolute top-[0px] left-[350px]
            w-[240px] h-[220px]
            bg-green-700
            rounded-3xl
            hidden lg:block
            z-0
        "
        />

            <div
        className="
            absolute top-[32%] right-[40px]
            -translate-y-1/2
            w-[550px] h-[600px]
            bg-green-700
            rounded-3xl
            hidden lg:block
            z-0
        "
        />


      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:-mt-[100px]">
          {/* BÊN TRÁI */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
              Deal hời khi <br /> mua ComBo
            </h2>

            {/* ẢNH LỚN */}
            <div className="relative inline-block">
              <div className="overflow-hidden rounded-[28px] shadow-2xl">
                <Image
                  src="https://c8.alamy.com/comp/3B8TMX2/background-of-nuts-pecan-macadamia-brazil-nut-walnut-almonds-hazelnuts-pistachios-cashews-peanuts-pine-nutscopy-space-isolated-one-edge-o-3B8TMX2.jpg"
                  alt="Combo hạt"
                  width={900}
                  height={700}
                  className="object-cover w-full max-w-xl"
                />
              </div>

              {/* NÚT CAM */}
              <motion.button
                onClick={scrollToNext}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-1/2 right-[-100px] -translate-y-1/2
                  bg-orange-500 hover:bg-orange-600
                  w-20 h-20 rounded-full
                  flex items-center justify-center
                  text-white shadow-xl hover:scale-110 transition"
              >
                <ChevronDown size={36} className="animate-bounce" />
              </motion.button>
            </div>
          </motion.div>

          {/* BÊN PHẢI */}
            <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mb-110 lg:translate-x-16"
            >
            <div className="relative z-10 overflow-hidden rounded-[28px] shadow-2xl">
                <Image
                src="https://c8.alamy.com/comp/3CBC8DX/healthy-dried-fruit-and-nut-mix-in-a-bowl-side-view-close-up-3CBC8DX.jpg"
                alt="Combo phụ"
                width={1100}
                height={420}
                className="
                    object-cover
                    w-full
                    max-w-[980px]
                    lg:max-w-[1100px]
                "
                />
            </div>
            </motion.div>

        </div>

        {/* TEXT DƯỚI */}
        <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center -mt-12 lg:-mt-30 lg:mr-150 text-3xl font-medium text-green-700"
            >
            Introduction
            </motion.p>

      </div>
    </section>
  );
}
