'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Shield, Truck, Award } from 'lucide-react';

const titleLines = ["Nông Sản Xanh", "Từ Tâm & Từ Thiên Nhiên"];

const descriptionWords = `Chúng tôi cam kết mang đến những sản phẩm nông sản sạch 100%, được trồng theo phương pháp hữu cơ, không phân bón hóa học, không thuốc trừ sâu độc hại. Mỗi hạt điều, hạt mắc ca, hạnh nhân... đều được chọn lọc kỹ lưỡng từ những vùng đất màu mỡ nhất Việt Nam, chăm sóc bằng tình yêu và trách nhiệm với môi trường.`.split(' ');

export default function AboutGreenAgriculture() {
  return (
    <section id = "about" className="relative bg-gradient-to-b from-emerald-50 to-white overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ===== CỘT TRÁI - CHỈ 2 ẢNH + CHỮ XUẤT HIỆN TỪ DƯỚI LÊN KHI HOVER ===== */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 space-y-10"
          >
            {/* Ảnh 1: Vườn trà hữu cơ Việt Nam */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://vncommex.com/wp-content/uploads/2025/03/organic-tea-area-vietnam.jpg"
                alt="Vườn trà hữu cơ xanh mướt tại Việt Nam"
                width={900}
                height={700}
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay tối dần từ dưới lên */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/30 to-transparent
                  opacity-100 lg:opacity-0
                  lg:group-hover:opacity-100
                  transition-opacity duration-700
                "
              />
          
              <div
                className="
                  absolute bottom-6 left-6 right-6
                  text-white
                  opacity-100 translate-y-0
                  lg:opacity-0 lg:translate-y-10
                  lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                  transition-all duration-700
                "
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2">
                  Vườn trà hữu cơ
                </h3>
                <p className="text-base sm:text-lg opacity-95">
                  Không thuốc trừ sâu, không phân hóa học – chỉ có thiên nhiên thuần khiết
                </p>
              </div>

            </div>

            {/* Ảnh 2: Các loại hạt dinh dưỡng tự nhiên */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.freepik.com/premium-photo/almonds-hazelnuts-cashews-brazilian-nuts-walnut-macadamia-pecans-pistachios-mixed-together-natural-background-healthy-food-top-view_114420-908.jpg"
                alt="Các loại hạt dinh dưỡng hữu cơ tự nhiên"
                width={900}
                height={700}
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay tối dần từ dưới lên */}
              <div   className="
                absolute inset-0
                bg-gradient-to-t from-black/80 via-black/30 to-transparent
                opacity-100 lg:opacity-0
                lg:group-hover:opacity-100
                transition-opacity duration-700
              "
            />
            <div
              className="
                absolute bottom-6 left-6 right-6
                text-white
                opacity-100 translate-y-0
                lg:opacity-0 lg:translate-y-10
                lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                transition-all duration-700
              "
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2">
                Hạt dinh dưỡng tự nhiên
              </h3>
              <p className="text-base sm:text-lg opacity-95">
                Tươi ngon, giàu dưỡng chất, an toàn tuyệt đối từ nông trại đến tay bạn
              </p>
            </div>
        
            </div>
          </motion.div>

          {/* ===== CỘT PHẢI - NỘI DUNG CHỮ CHẠY TỪNG TỪ KHI CUỘN XUỐNG ===== */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            {/* Tiêu đề - từng dòng */}
            <div className="overflow-hidden">
              {titleLines.map((line, index) => (
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.5 + 0.3, duration: 0.9 }}
                  className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight ${
                    index === 1 ? 'text-green-600' : 'text-emerald-900'
                  }`}
                >
                  {line}
                </motion.h2>
              ))}
            </div>

            {/* Mô tả - chữ chạy từng từ một khi scroll vào view */}
            <motion.p
              className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.04 } }
              }}
            >
              {descriptionWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mr-1.5"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* Các giá trị nổi bật */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: Shield, title: '100% Hữu cơ', desc: 'Không hóa chất độc hại' },
                { icon: Truck, title: 'Giao hàng nhanh', desc: 'Toàn quốc trong 2-4 ngày' },
                { icon: Leaf, title: 'Bền vững', desc: 'Thân thiện với môi trường' },
                { icon: Award, title: 'Chất lượng cao', desc: 'Đạt chuẩn VietGAP' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.7 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 text-center"
                >
                  <item.icon className="w-14 h-14 mx-auto text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-emerald-900">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}