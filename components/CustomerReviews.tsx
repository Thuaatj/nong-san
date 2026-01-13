'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import { useState, useEffect } from 'react';

const reviews = [
  { name: 'Tdung', content: 'Hạt mới, thơm, ăn không bị hôi dầu. Mua thử mà ưng ghê!', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Đt Mai', content: 'Mình mua mix hạt về ăn thử vì đang muốn giảm đồ ngọt. Mở túi ra là thấy mùi hạt rất thơm, không có mùi dầu hay mùi lạ.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Meomeo', content: 'Biểu người lớn rất hợp vì là quà sức khỏe.', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { name: 'Anh Tuấn', content: 'Sản phẩm chất lượng cao, đóng gói sang trọng. Rất phù hợp làm quà biếu.', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Chị Lan', content: 'Hạt rang vừa miệng, giữ nguyên độ giòn và hương vị tự nhiên. Sẽ tiếp tục ủng hộ!', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { name: 'Minh Ngọc', content: 'Hạt óc chó và mắc ca tuyệt vời! Ăn rất nghiện và tốt cho sức khỏe.', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden py-16 md:py-24 lg:py-32 ">
      {/* Background tinh tế nhẹ nhàng */}
      <Image
        src="https://thumbs.dreamstime.com/b/ai-generated-luxury-minimalist-botanical-artwork-green-cream-leaves-fine-gold-line-details-clean-neutral-background-424034364.jpg"
        alt="Lá trang trí"
        fill
        className="object-cover opacity-10"
        priority
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 lg:mt-8">
        {/* Tiêu đề gọn gàng hơn */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 tracking-tight">
            Đánh giá từ khách hàng
          </h2>
          <p className="mt-3 text-lg md:text-xl text-emerald-700 font-medium">
            Lời chứng thực chân thực từ cộng đồng Nông Sản Xanh
          </p>
        </motion.div>

        {/* Slider gọn, thanh lịch */}
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 200, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -200, scale: 0.95 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className=" backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-10 text-center"
              >
                {/* Dấu ngoặc kép nhỏ hơn */}
                <div className="text-6xl font-serif text-emerald-500 opacity-30 -mt-8 mb-2">“</div>

                {/* Avatar nhỏ gọn hơn */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative inline-block mb-6"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-emerald-200 shadow-lg">
                    <Image
                      src={reviews[currentIndex].avatar}
                      alt={reviews[currentIndex].name}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full hover:scale-110 transition duration-700"
                    />
                  </div>
                </motion.div>

                {/* Tên và nội dung gọn hơn */}
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl font-semibold text-emerald-900 mb-3"
                >
                  {reviews[currentIndex].name}
                </motion.h3>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto mb-6"
                >
                  {reviews[currentIndex].content}
                </motion.p>

                {/* Sao nhỏ xinh */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                  className="flex justify-center gap-1.5"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 fill-amber-400 text-amber-400"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nút điều khiển nhỏ gọn, gần card hơn */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-emerald-600 text-emerald-700 hover:text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-emerald-600 text-emerald-700 hover:text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots nhỏ gọn */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-emerald-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}