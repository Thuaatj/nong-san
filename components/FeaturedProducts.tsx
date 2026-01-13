'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const products = [
  {
    name: 'Hạt điều',
    // price: '120.000đ / kg',
    image:
    'https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000'
  },
  {
    name: 'Hạt mắc ca',
    // price: '280.000đ / kg',
    image:
    'https://www.richardfranco.com/wp-content/uploads/2024/11/Macadamia-1.png'
  },
  {
    name: 'Hạt dẻ cười',
    // price: '320.000đ / kg',
    image:
    'https://plus.unsplash.com/premium_photo-1723701877440-ebe348b830da?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGlzdGFjaGlvfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000'
  },
  {
    name: 'Hạnh nhân',
    // price: '260.000đ / kg',
    image:
    'https://images.unsplash.com/photo-1631815333332-e3ffb24e2bf8?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000'
  },
  {
    name: 'Óc chó',
    // price: '300.000đ / kg',
    image:
    'https://www.photos-public-domain.com/wp-content/uploads/2017/11/walnuts-in-the-shell.jpg'
  },
  {
    name: 'Mít sấy',
    // price: '180.000đ / kg',
    image:
    'https://down-vn.img.susercontent.com/file/d46221164023dfd31def69b375d4b5b6'
  },
];


export default function FeaturedProducts() {
  return (
    <section className="relative bg-white overflow-hidden pt-0 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-16">

          {/* ===== CỘT TRÁI ===== */}
          <div className="relative flex flex-col items-center lg:items-start">
            <div className="hidden lg:block w-65 h-56 bg-green-700 rounded-b-2xl mb-10" />

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight text-center lg:text-left">
              Sản<br />phẩm<br />nổi bật
            </h2>

            <p className="mt-6 text-2xl md:text-3xl font-medium text-green-700 text-center lg:text-left">
              của chúng tôi
            </p>

            <div className="hidden lg:block w-65 h-66 bg-green-700 rounded-2xl mt-14" />
            <div className="hidden lg:block w-65 h-66 bg-green-700 rounded-2xl mt-14" />
          </div>

          {/* ===== CỘT PHẢI ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-12 lg:gap-y-0 lg:mt-24">
            {products.map((item, index) => {
              const isMiddle = index % 3 === 1;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const ref = useRef(null);

              // eslint-disable-next-line react-hooks/rules-of-hooks
              const { scrollYProgress } = useScroll({
                target: ref,
                offset: ['start end', 'end start'],
              });

              // eslint-disable-next-line react-hooks/rules-of-hooks
              const yImage = useTransform(scrollYProgress, [0, 1], [0, -40]);

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`
                    relative group overflow-hidden rounded-3xl
                    shadow-xl hover:shadow-2xl
                    transition-all duration-500
                    h-[260px] sm:h-[300px] md:h-[340px] lg:h-[420px]
                    ${isMiddle ? 'lg:translate-y-48' : ''}
                  `}
                >
                  {/* ẢNH – PARALLAX */}
                  <motion.div style={{ y: yImage }} className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 mt-5 lg:mt-5"
                    />
                  </motion.div>

                  {/* ÁNH SÁNG */}
                  <div
                    className="
                      pointer-events-none
                      absolute inset-[-50%]
                      bg-white/15
                      rotate-12
                      translate-x-[-120%] translate-y-[120%]
                      group-hover:translate-x-[120%] group-hover:translate-y-[-120%]
                      transition-transform duration-1200
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold drop-shadow">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm md:text-base lg:text-lg text-white/90">
                      {/* {item.price} */}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
