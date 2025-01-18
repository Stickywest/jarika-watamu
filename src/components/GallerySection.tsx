import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import AOS CSS

const GallerySection: React.FC = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-8 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="relative" data-aos="zoom-in-up">
          <img
            src="/src/assets/gallery.jpg"
            alt="Gallery 1"
            className="w-full h-40 object-cover rounded shadow-lg transform transition-all hover:rotate-3"
          />
        </div>
        <div className="relative" data-aos="zoom-in-up" data-aos-delay="100">
          <img
            src="/src/assets/gallery1.jpg"
            alt="Gallery 2"
            className="w-full h-40 object-cover rounded shadow-lg transform transition-all hover:rotate-3"
          />
        </div>
        <div className="relative" data-aos="zoom-in-up" data-aos-delay="200">
          <img
            src="/src/assets/gallery2.jpg"
            alt="Gallery 3"
            className="w-full h-40 object-cover rounded shadow-lg transform transition-all hover:rotate-3"
          />
        </div>
        <div className="relative" data-aos="zoom-in-up" data-aos-delay="300">
          <img
            src="/src/assets/gallery3.jpg"
            alt="Gallery 4"
            className="w-full h-40 object-cover rounded shadow-lg transform transition-all hover:rotate-3"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
