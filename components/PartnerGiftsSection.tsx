"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

// Danh sách ảnh (thay bằng đường dẫn thực tế của bạn)
const gifts = [
  {
    id: 1,
    src: "https://png.pngtree.com/thumb_back/fw800/background/20250323/pngtree-closeup-macro-shot-of-tasty-almond-nuts-on-natural-background-photo-photo-image_67031652.webp",
    alt: "Hạt hạnh nhân giàu vitamin E, tốt cho tim mạch và làn da",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1669831177886-c2950f4dc506?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1peGVkJTIwbnV0c3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "Hạt óc chó giúp tăng cường trí não, giàu omega-3",
  },
  {
    id: 3,
    src: "https://media-cdn-v2.laodong.vn/storage/newsportal/2022/3/29/1028522/Mua-Hat-Hanh-Nhan-So.jpg?w=800&h=420&crop=auto&scale=both",
    alt: "Hạt mắc ca giàu chất béo tốt, hỗ trợ tim mạch",
  },
  {
    id: 4,
    src: "https://cdn.24h.com.vn/upload/2-2023/images/2023-05-15/dl-duy-studio-2487-1684146772-683-width1200height1199.jpg",
    alt: "Hạt điều cung cấp năng lượng, tốt cho xương khớp",
  },
  {
    id: 5,
    src: "https://bizweb.dktcdn.net/100/357/495/files/banh-ngu-coc-an-kieng-baker-baking-blog-1-27bb0234-51e4-4594-ba51-efde3449e37c.jpg?v=1608093539051",
    alt: "Hạt dẻ cười giàu protein, hỗ trợ kiểm soát cân nặng",
  },
  {
    id: 6,
    src: "https://png.pngtree.com/background/20250111/original/pngtree-a-mix-of-nuts-and-dried-fruit-picture-image_15859938.jpg",
    alt: "Các loại hạt dinh dưỡng – tăng đề kháng, tốt cho sức khỏe toàn diện",
  },
] as const;

// Variants với type an toàn
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
} as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
} as const;

export default function PartnerGiftsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-5 md:py-28 bg-gray-50/50 overflow-hidden">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-wider uppercase text-gray-800">
          CÁC HẠT DINH DƯỠNG TỐT CHO SỨC KHOẺ
        </h2>
        <div className="w-28 h-0.5 bg-amber-600 mx-auto mt-5 rounded-full" />
      </div>

      {/* Full width, no container limit */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      
<motion.div
  ref={ref}
  variants={containerVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1"  // ← Đổi gap-0 thành gap-1 (hoặc gap-px, gap-0.5 tùy ý)
>
  {gifts.map((gift) => (
    <motion.div
      key={gift.id}
      variants={itemVariants}
      className="relative aspect-[2/3] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHoveredId(gift.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {/* Phần còn lại giữ nguyên: Image, shine effect, overlay, caption */}
      <Image
        src={gift.src}
        alt={gift.alt}
        fill
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16.67vw"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgH3Xj0AAAAASUVORK5CYII="
      />

      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent 
          pointer-events-none transition-all duration-1200 ease-out
          ${hoveredId === gift.id ? "opacity-100 translate-x-full" : "opacity-0 -translate-x-full"}`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600" />

      <div
        className="
          absolute inset-0
          flex items-center justify-center
          px-4 text-center
          text-white
          text-sm md:text-base
          font-light
          opacity-0
          group-hover:opacity-100
          group-hover:text-lg
          group-hover:font-semibold
          transition-all
          duration-500
          drop-shadow-xl
        "
      >
        {gift.alt}
      </div>

    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
    
  );
}