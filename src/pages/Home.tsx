import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import RoomsSection from '../components/RoomsSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';


const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
    
      {/* Other Sections */}
      <ServicesSection />
      <RoomsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      
    </div>
  );
};

export default Home;
