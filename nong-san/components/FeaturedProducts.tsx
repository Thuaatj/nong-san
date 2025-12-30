'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    name: 'Hạt điều',
    price: '120.000đ / kg',
    image: 'https://thumbs.dreamstime.com/b/close-up-cashews-bowl-sackcloth-69300722.jpg',
  },
  {
    name: 'Hạt mắc ca',
    price: '280.000đ / kg',
    image: 'https://www.shutterstock.com/image-photo/few-macadamia-nuts-key-open-260nw-1681197721.jpg',
  },
  {
    name: 'Hạt dẻ cười',
    price: '320.000đ / kg',
    image: 'https://thumbs.dreamstime.com/b/closeup-feast-organic-roasted-pistachios-highquality-food-image-featuring-bountiful-pile-delicious-kernels-indulge-your-352018177.jpg',
  },
  {
    name: 'Hạnh nhân',
    price: '260.000đ / kg',
    image: 'https://thumbs.dreamstime.com/b/almonds-background-close-up-healthy-food-122946900.jpg',
  },
  {
    name: 'Óc chó',
    price: '300.000đ / kg',
    image: 'https://thumbs.dreamstime.com/b/walnuts-shell-kernel-wooden-table-healthy-food-124456213.jpg',
  },
  {
    name: 'Mít sấy',
    price: '180.000đ / kg',
    image: 'https://thumbs.dreamstime.com/b/dried-jackfruit-snack-close-up-healthy-food-186827204.jpg',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative bg-white overflow-x-hidden pt-6 pb-32 md:pt-0 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-16">

          {/* ===== CỘT TRÁI ===== */}
          <div className="relative flex flex-col items-center lg:items-start">
            {/* THẺ XANH TRÊN */}
            <div className="hidden lg:block w-65 h-56 bg-green-700 rounded-b-2xl rounded-t-none mb-10" />

            {/* TIÊU ĐỀ */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight text-center lg:text-left">
              Sản<br />phẩm<br />nổi bật
            </h2>

            <p className="mt-6 text-2xl md:text-3xl font-medium text-green-700 text-center lg:text-left">
              của chúng tôi
            </p>

            {/* THẺ XANH DƯỚI TIÊU ĐỀ */}
            <div className="hidden lg:block w-65 h-66 bg-green-700 rounded-2xl mt-14" />

            <div className="hidden lg:block w-65 h-66 bg-green-700 rounded-2xl mt-14" />
            {/* THẺ XANH SÁT ĐÁY SECTION */}
            {/* <div className="hidden lg:block absolute bottom-0 left-0 w-full h-24 bg-green-700 rounded-2xl" /> */}
          </div>

          {/* ===== CỘT PHẢI ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 lg:mt-24">
  {products.map((item, index) => {
    const isMiddle = index % 3 === 1;

    return (
      <motion.div
  key={index}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  className={`
    relative group rounded-3xl shadow-2xl overflow-hidden
    h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px]
    ${isMiddle ? 'lg:translate-y-42' : ''}
  `}
>
  {/* ẢNH */}
  <Image
    src={item.image}
    alt={item.name}
    fill
    className="
      object-cover
      transition-transform duration-700 ease-in-out
      group-hover:scale-110
    "
  />

  {/* ÁNH SÁNG TRẮNG LƯỚT */}
  <div
    className="
      pointer-events-none
      absolute inset-[-50%]
      bg-white/12
      rotate-12
      translate-x-[-120%] translate-y-[120%]
      group-hover:translate-x-[120%] group-hover:translate-y-[-120%]
      transition-transform duration-1200 ease-in-out
    "
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  {/* TEXT */}
  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:translate-y-[-6px]">
    <h3 className="text-xl lg:text-2xl font-bold">{item.name}</h3>
    <p className="mt-1 text-base lg:text-lg text-white/90">{item.price}</p>
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
