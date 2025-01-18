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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Room Service */}
        <div
          className="text-center p-4 shadow-md rounded bg-white transform transition duration-300 hover:scale-105"
          data-aos="fade-up" // Animation type
        >
          <div className="text-orange-500 text-3xl mb-3 sm:text-2xl">
            <FaConciergeBell />
          </div>
          <h3 className="text-xl font-semibold mb-1 sm:text-lg">Room Service</h3>
          <p className="text-sm sm:text-xs">
            Enjoy 24/7 room service with a variety of options tailored for your comfort.
          </p>
        </div>

        {/* Fine Dining */}
        <div
          className="text-center p-4 shadow-md rounded bg-white transform transition duration-300 hover:scale-105"
          data-aos="fade-up" // Animation type
          data-aos-delay="100" // Delay between animations
        >
          <div className="text-orange-500 text-3xl mb-3 sm:text-2xl">
            <FaUtensils />
          </div>
          <h3 className="text-xl font-semibold mb-1 sm:text-lg">Fine Dining</h3>
          <p className="text-sm sm:text-xs">
            Indulge in gourmet meals crafted by our world-class chefs.
          </p>
        </div>

        {/* Event Hosting */}
        <div
          className="text-center p-4 shadow-md rounded bg-white transform transition duration-300 hover:scale-105"
          data-aos="fade-up" // Animation type
          data-aos-delay="200" // Delay between animations
        >
          <div className="text-orange-500 text-3xl mb-3 sm:text-2xl">
            <FaHandshake />
          </div>
          <h3 className="text-xl font-semibold mb-1 sm:text-lg">Event Hosting</h3>
          <p className="text-sm sm:text-xs">
            Host memorable events with our professional event planning services.
          </p>
        </div>

        {/* Weddings & Picnics */}
        <div
          className="text-center p-4 shadow-md rounded bg-white transform transition duration-300 hover:scale-105"
          data-aos="fade-up" // Animation type
          data-aos-delay="300" // Delay between animations
        >
          <div className="text-orange-500 text-3xl mb-3 sm:text-2xl">
            <FaChurch />
          </div>
          <h3 className="text-xl font-semibold mb-1 sm:text-lg">Weddings & Picnics</h3>
          <p className="text-sm sm:text-xs">
            Make your special day unforgettable with our beautiful venues and services.
          </p>
        </div>

        {/* Swimming Pool */}
        <div
          className="text-center p-4 shadow-md rounded bg-white transform transition duration-300 hover:scale-105"
          data-aos="fade-up" // Animation type
          data-aos-delay="400" // Delay between animations
        >
          <div className="text-orange-500 text-3xl mb-3 sm:text-2xl">
            <FaSwimmer />
          </div>
          <h3 className="text-xl font-semibold mb-1 sm:text-lg">Swimming Pool</h3>
          <p className="text-sm sm:text-xs">
            Relax and rejuvenate in our serene and sparkling pool area.
          </p>
        </div>

        {/* Meetings */}
        <div
          className="text-center p-4 shadow-md rounded bg-white transform transition duration-300 hover:scale-105"
          data-aos="fade-up" // Animation type
          data-aos-delay="500" // Delay between animations
        >
          <div className="text-orange-500 text-3xl mb-3 sm:text-2xl">
            <FaTree />
          </div>
          <h3 className="text-xl font-semibold mb-1 sm:text-lg">Meetings</h3>
          <p className="text-sm sm:text-xs">
            Conduct meetings in our fully equipped and professional meeting rooms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
