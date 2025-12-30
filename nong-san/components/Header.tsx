'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { useState, useEffect, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    {
      image: 'https://mymodernmet.com/wp/wp-content/uploads/2021/11/albert-dros-colorful-forest-landscape-thumbnail.jpg',
      subtitle: 'Tinh túy từ thiên nhiên',
      title: 'NÔNG SẢN',
      highlight: 'XANH',
    },
    {
      image: 'https://thumbs.dreamstime.com/b/misty-forest-path-lined-ancient-trees-lush-greenery-morning-light-serene-pathway-winds-towering-bathed-soft-362631825.jpg',
      subtitle: 'Canh tác bền vững',
      title: 'THỰC PHẨM',
      highlight: 'SẠCH',
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/069/756/744/large_2x/lush-green-forest-enveloped-in-fog-creating-serene-and-tranquil-atmosphere-in-morning-light-free-photo.jpeg',
      subtitle: 'Vì sức khỏe cộng đồng',
      title: 'GIÁ TRỊ',
      highlight: 'THẬT',
    },
  ];
const menu = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Blog", href: "/blog" }, // 👈 BLOG Ở ĐÂY
  { label: "Liên hệ", href: "/contact" },
];

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-6'
        }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <motion.span
            animate={{ scale: scrolled ? 0.9 : 1 }}
            className={`text-4xl font-black tracking-tight ${
              scrolled ? 'text-green-700' : 'text-white drop-shadow-2xl'
            }`}
          >
            NÔNG SẢN XANH
          </motion.span>


          <ul className="hidden md:flex gap-12">
            {menu.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`font-semibold text-lg transition ${
                    scrolled
                      ? "text-gray-800 hover:text-green-600"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

        </nav>
      </motion.header>

      {/* SLIDER */}
      <section className="h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          speed={1000}
          loop
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          navigation
          onSlideChange={(swiper: { realIndex: SetStateAction<number>; }) => setActiveSlide(swiper.realIndex)}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image src={slide.image} alt="" fill className="object-cover scale-105 animate-bg-zoom" />
                <div className="absolute inset-0 bg-black/35" />

                {/* CONTENT CENTER */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <AnimatePresence mode="wait">
                    {activeSlide === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1 }}
                        className="text-white max-w-4xl"
                      >

                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="text-5xl md:text-8xl font-black"
                        >
                          {slide.title}
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-lg md:text-2xl mb-4"
                        >
                          {slide.subtitle}
                        </motion.p>

                        <motion.h2
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 }}
                          className="text-6xl md:text-9xl font-black text-green-300"
                        >
                          {slide.highlight}
                        </motion.h2>

                        {/* BUTTON */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="mt-10 flex justify-center gap-6 flex-wrap"
                        >
                          <motion.button
                            whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(253,224,71,0.9)' }}
                            className="bg-yellow-300 text-green-900 px-8 py-4 rounded-full font-bold text-lg"
                          >
                            Xem sản phẩm
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.08, backgroundColor: 'rgba(255,255,255,0.35)' }}
                            className="bg-white/20 backdrop-blur px-8 py-4 rounded-full font-semibold text-lg"
                          >
                            Tư vấn ngay
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <style jsx>{`
        @keyframes bg-zoom {
          from {
            transform: scale(1.15);
          }
          to {
            transform: scale(1.05);
          }
        }
        .animate-bg-zoom {
          animation: bg-zoom 10s ease-out forwards;
        }
      `}</style>
    </>
  );
}
