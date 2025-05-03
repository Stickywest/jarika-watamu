import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Imagegallery from '/src/assets/gallery.jpg';// Don't forget to import AOS CSS
import Imagegallery1 from '/src/assets/gallery1.jpg';
import Imagegallery2 from '/src/assets/gallery2.jpg';
import Imagegallery3 from '/src/assets/gallery3.jpg';
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
            src={Imagegallery}
            alt="Gallery 1"
            className="w-full h-40 object-cover rounded shadow-lg transform transition-all hover:rotate-3"
          />
        </div>
        <div className="relative" data-aos="zoom-in-up" data-aos-delay="100">
          <img
            src={Imagegallery1}
            alt="Gallery 2"
            className="w-full h-40 object-cover rounded shadow-lg transform transition-all hover:rotate-3"
          />
        </div>
        <div className="relative" data-aos="zoom-in-up" data-aos-delay="200">
          <img
            src={Imagegallery2}
            alt="Gallery 3"
            className="w-full h-40 object-cover rounded shadow-lg transform transition-all hover:rotate-3"
          />
        </div>
        <div className="relative" data-aos="zoom-in-up" data-aos-delay="300">
          <img
            src={Imagegallery3}
            alt="Gallery 4"
            className="w-full h-40 object-cover rounded shadow-lg transform transition-all hover:rotate-3"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
