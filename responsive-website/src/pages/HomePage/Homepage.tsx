import React from 'react';

import MainSection from '../../components/HomePage/MainSection';
import CareerSection from '../../components/HomePage/CareerSection';
import ServicesSection from '../../components/HomePage/ServicesSection';
import AchievementsSection from '../../components/HomePage/AchievementsSection';
import FeaturedCourses from '../../components/HomePage/FeaturedCourses';
import WhyChooseSection from '../../components/HomePage/WhyChooseSection';
import TrustedPartners from '../../components/HomePage/TrustedPartners';
import Testimonials from '../../components/HomePage/Testimonials';
import Footer from '../../components/HomePage/Footer';
import Header from '../../components/Header/Header';
const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <CareerSection />
      <ServicesSection />
      <AchievementsSection />
      <FeaturedCourses />
      <WhyChooseSection />
      <TrustedPartners />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;