'use client';

import AboutGreenAgriculture from '@/components/AboutGreenAgriculture';
import BackToTopButton from '@/components/BackToTopButton';
import ComboDeal from '@/components/ComboDeal';
import ContactDock from '@/components/ContactDock';
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
      <BackToTopButton />
      <ContactDock />
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