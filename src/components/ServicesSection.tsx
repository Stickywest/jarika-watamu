import React, { useEffect } from "react";
import { FaConciergeBell, FaUtensils, FaSwimmer, FaChurch, FaHandshake, FaTree } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ServicesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-white via-gray-50 to-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Service Item Template */}
        {[
          { icon: <FaConciergeBell />, title: "Room Service", description: "Enjoy 24/7 room service with a variety of options tailored for your comfort." },
          { icon: <FaUtensils />, title: "Fine Dining", description: "Indulge in gourmet meals crafted by our world-class chefs." },
          { icon: <FaHandshake />, title: "Event Hosting", description: "Host memorable events with our professional event planning services." },
          { icon: <FaChurch />, title: "Weddings & Picnics", description: "Make your special day unforgettable with our beautiful venues and services." },
          { icon: <FaSwimmer />, title: "Swimming Pool", description: "Relax and rejuvenate in our serene and sparkling pool area." },
          { icon: <FaTree />, title: "Meetings", description: "Conduct meetings in our fully equipped and professional meeting rooms." },
        ].map((service, index) => (
          <div
            key={index}
            className="text-center p-4 shadow-md rounded bg-white transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            {/* Icon */}
            <div className="text-orange-500 text-4xl mb-3 mx-auto">{service.icon}</div>
            {/* Title */}
            <h3 className="text-sm sm:text-lg font-semibold mb-1">{service.title}</h3>
            {/* Description for larger screens */}
            <p className="hidden md:block text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
