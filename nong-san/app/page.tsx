'use client';

import AboutGreenAgriculture from '@/components/AboutGreenAgriculture';
import ComboDeal from '@/components/ComboDeal';
import CustomerReviews from '@/components/CustomerReviews';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import FooterGreen from '@/components/FooterGreen';
import Header from '@/components/Header';
import HeroIntroSection from '@/components/HeroIntroSection';
import Introduction from '@/components/Introduction';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header cố định */}
      <Header />
      <WhyChooseUs />
      <Introduction />
      <HeroIntroSection />
      <FeaturedProducts />
      <ComboDeal />
      <AboutGreenAgriculture />
      <CustomerReviews />
      <FooterGreen />
    </main>
  );
}