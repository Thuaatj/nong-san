'use client';

import ComboDeal from '@/components/ComboDeal';
import CustomerReviews from '@/components/CustomerReviews';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import FooterGreen from '@/components/FooterGreen';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header cố định */}
      <Header />

      {/* Phần "Tại sao chọn chúng tôi?" */}
      <WhyChooseUs />
      <Introduction />
      <FeaturedProducts />
      <ComboDeal />
      {/* <Footer /> */}
      <CustomerReviews />
      <FooterGreen />
    </main>
  );
}