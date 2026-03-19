import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
//import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import IndustriesSection from '@/components/home/IndustriesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      {/* <ServicesOverview />*/}
      <WhyChooseUs />
      <ProjectsPreview />
      {/*<IndustriesSection />*/}
      {/* <TestimonialsSection /> */}
      <CTASection />
    </>
  );
};

export default HomePage;
