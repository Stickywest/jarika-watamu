import React, { useEffect } from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import the AOS CSS

const TestimonialsSection: React.FC = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-8 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Guests Say</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 shadow-lg rounded bg-white" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <FaUserCircle className="text-4xl text-gray-500" />
          </div>
          <p className="italic">
            "The best hotel experience I've ever had. Great service and beautiful rooms!"
          </p>
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <h4 className="mt-4 font-semibold">- John Doe</h4>
        </div>

        <div className="text-center p-4 shadow-lg rounded bg-white" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <FaUserCircle className="text-4xl text-gray-500" />
          </div>
          <p className="italic">
            "Amazing food and a relaxing atmosphere. Highly recommended!"
          </p>
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <h4 className="mt-4 font-semibold">- Jane Smith</h4>
        </div>

        <div className="text-center p-4 shadow-lg rounded bg-white" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <FaUserCircle className="text-4xl text-gray-500" />
          </div>
          <p className="italic">
            "Had a wonderful time! The staff was friendly and the rooms were great."
          </p>
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <h4 className="mt-4 font-semibold">- Mark Johnson</h4>
        </div>

        <div className="text-center p-4 shadow-lg rounded bg-white" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <FaUserCircle className="text-4xl text-gray-500" />
          </div>
          <p className="italic">
            "A memorable stay. The pool and the restaurant were top-notch!"
          </p>
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <h4 className="mt-4 font-semibold">- Emma Davis</h4>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
