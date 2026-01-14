'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { useState, useEffect, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { Phone, ShoppingCart } from 'lucide-react';
import { useCart } from "@/context/CartContext";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const slides = [
  {
    image: 'https://png.pngtree.com/background/20250121/original/pngtree-mixed-nuts-on-a-black-background-the-concept-of-healthy-eating-picture-image_15711434.jpg',
    // subtitle: 'Tinh túy từ đất trời',
    // title: 'NÔNG SẢN',
    // highlight: 'XANH',
  },
  
  {
    image: 'https://images.unsplash.com/photo-1543158181-1274e5362710?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl4ZWQlMjBudXRzfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
    // subtitle: 'Từ thiên nhiên đến bàn ăn',
    // title: 'GIÁ TRỊ',
    // highlight: 'THẬT',
  },
  {
    image: 'https://foodinstitute.com/wp-content/uploads/2024/02/macadamia.jpg',
    // subtitle: 'Giá trị từ hạt giống',
    // title: 'THỰC PHẨM',
    // highlight: 'SẠCH',
  },
];


   const menu = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/products" },
    { label: "Giới thiệu", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Liên hệ", href: "#" },
  ];

  const { cartCount } = useCart();

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
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo bên trái */}
            {/* Logo bên trái - CHỮ "NÔNG SẢN XANH" SÁNG HƠN BAN ĐẦU (khi chưa scroll) */}
            <motion.span
              animate={{ scale: scrolled ? 0.9 : 1 }}
              className={`text-4xl font-black tracking-tight whitespace-nowrap ${
                scrolled 
                  ? 'text-green-700' 
                  : 'text-green-300 drop-shadow-2xl'  // Đổi thành màu xanh sáng (green-300) thay vì trắng
              }`}
            >
              NÔNG SẢN XANH
            </motion.span>

            {/* Menu desktop - chính giữa */}
            <ul className="hidden md:flex gap-12 absolute left-1/2 -translate-x-1/2">
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

            {/* PHẦN BÊN PHẢI - Hotline + Social icons */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6">
              {/* Hotline */}
              <a
                href="tel:0392806307"
                className={`hidden lg:flex items-center gap-3 font-semibold text-lg transition ${
                  scrolled ? 'text-green-700 hover:text-green-600' : 'text-white hover:text-green-300'
                }`}
              >
                <Phone className="w-6 h-6" />
                0392806307
              </a>

              {/* Icon mạng xã hội */}
             <div className="flex items-center gap-4">
              {/* Zalo */}
              <a 
                href="https://zalo.me/0392806307" // Thay bằng số/link Zalo thực tế
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:scale-110 transition duration-300"
              >
                <Image 
                  src="https://1000logos.net/wp-content/uploads/2022/02/Zalo-Logo.png" 
                  alt="Zalo" 
                  width={36} 
                  height={36} 
                  className="rounded-full object-contain bg-white p-1 shadow-md" 
                />
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1GBC3FmRjK/?mibextid=wwXIfr" // Thay bằng link Facebook thực tế
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:scale-110 transition duration-300"
              >
                <Image 
                  src="https://www.freeiconspng.com/thumbs/facebook-logo-png/photos-facebook-logo-png-transparent-background-13.png" 
                  alt="Facebook" 
                  width={36} 
                  height={36} 
                  className="rounded-full object-contain bg-white p-1 shadow-md" 
                />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/quatetxanh?igsh=YzFxdnhtb2gwOHUx" // Thay bằng link Instagram thực tế
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:scale-110 transition duration-300"
              >
                <Image 
                  src="https://toppng.com/uploads/preview/instagram-logo-11716322843gm1jnosicz.png" 
                  alt="Instagram" 
                  width={36} 
                  height={36} 
                  className="rounded-full object-contain bg-white p-1 shadow-md" 
                />
              </a>
            </div>
            {/* Cart icon */}
              <Link
                href="/cart"
                className={`relative transition ${
                  scrolled
                    ? 'text-green-700 hover:text-green-600'
                    : 'text-white hover:text-green-300'
                }`}
              >
                <ShoppingCart className="w-7 h-7" />

                {/* Badge số lượng */}
                {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                </span>
                )}
              </Link>
            </div>

            {/* Hamburger button cho mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden z-50 relative w-8 h-8"
            >
              <Image
                src={mobileMenuOpen ? "https://www.clipartmax.com/png/middle/364-3643287_menu-open-menu-close-failure-icon.png" : "https://www.clipartmax.com/png/middle/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"}
                alt="Menu toggle"
                fill
                className={`object-contain transition-all duration-300 ${
                  scrolled && !mobileMenuOpen
                    ? 'brightness-0'    // ⬅ KHI CUỘN XUỐNG → icon ĐEN
                    : 'brightness-100'  // ⬅ CHƯA CUỘN → icon TRẮNG
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-[60] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
            className={`
                fixed right-0 top-0 h-full w-80
                bg-white
                backdrop-blur-none
                shadow-2xl
                z-[999]
                md:hidden
                flex flex-col
              `}
            >
              <div className="p-8 border-b">
                <span className="text-3xl font-black text-green-700">
                  NÔNG SẢN XANH
                </span>
              </div>

              <ul className="flex flex-col p-8 gap-6">
                {menu.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-semibold text-gray-800 hover:text-green-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 mb-6 text-lg font-semibold text-green-700"
              >
                <ShoppingCart className="w-6 h-6" />
                Giỏ hàng ({cartCount})
              </Link>

              <div className="mt-auto p-8 border-t">
                <a
                  href="tel:0392806307"
                  className="flex items-center justify-center w-full gap-3 text-lg font-semibold text-green-700"
                >
                  <Phone className="w-6 h-6" />
                  0392806307
                </a>
                <div className="flex gap-6 mt-6 justify-center">
                {/* Zalo */}
                <a
                  href="https://zalo.me/0392806307"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://1000logos.net/wp-content/uploads/2022/02/Zalo-Logo.png"
                    alt="Zalo"
                    width={44}
                    height={44}
                    className="rounded-full shadow-md"
                  />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/nongsanxanh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://www.freeiconspng.com/thumbs/facebook-logo-png/photos-facebook-logo-png-transparent-background-13.png"
                    alt="Facebook"
                    width={44}
                    height={44}
                    className="rounded-full shadow-md"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/quatetxanh?igsh=YzFxdnhtb2gwOHUx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://toppng.com/uploads/preview/instagram-logo-11716322843gm1jnosicz.png"
                    alt="Instagram"
                    width={44}
                    height={44}
                    className="rounded-full shadow-md"
                  />
                </a>
              </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* SLIDER - giữ nguyên */}
      <section className="h-[70vh] md:h-[55vh] pt-20 md:pt-0">
 {/* pt-20 để tránh chồng header trên mobile */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          speed={1000}
          loop
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          onSlideChange={(swiper: { realIndex: SetStateAction<number>; }) => setActiveSlide(swiper.realIndex)}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image 
                  src={slide.image} 
                  alt={`Nông sản xanh Việt Nam`} 
                  fill 
                  quality={90}
                  sizes="100vw"
                  className="object-cover scale-105 animate-bg-zoom" 
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/35" />

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
                          {/* {slide.title} */}
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-lg md:text-2xl mb-4"
                        >
                          {/* {slide.subtitle} */}
                        </motion.p>

                        <motion.h2
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 }}
                          className="text-6xl md:text-9xl font-black text-green-300"
                        >
                          {/* {slide.highlight} */}
                        </motion.h2>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="mt-10 flex justify-center gap-6 flex-wrap"
                        >
                          {/* <motion.button
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
                          </motion.button> */}
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
          animation: bg-zoom 12s ease-out forwards;
        }
      `}</style>
    </>
  );
}