import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ServiceIcons from "./ServiceIcons";

import insideImage from "/src/assets/heroinside.avif";
import jarika2Image from "/src/assets/jarika2.jpg";
import jarika1Image from "/src/assets/jarika1.jpg";

import "aos/dist/aos.css";

const HeroSection: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  const images = [insideImage, jarika2Image, jarika1Image];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="absolute inset-0 flex justify-center items-center z-20">
        <img
          src={images[imageIndex]}
          alt="Hotel Image"
          className={`w-full h-full object-cover opacity-${fade ? "100" : "0"} transition-opacity duration-1000 ease-in-out`}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 md:px-12 z-20">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-600 leading-tight text-center mb-6 animate__animated animate__fadeInDown"
          style={{
            fontFamily: "'Playfair Display', serif",
            animation: "typing 2s steps(30) 1s forwards, blink 0.75s step-end infinite",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          Welcome to Jarika Hotel
        </h1>

        <p
          className="text-lg sm:text-xl font-light mb-8 text-center text-white"
          data-aos="fade-up"
          data-aos-delay="1000"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Experience luxury, comfort, and exceptional service in the heart of the city.
        </p>

        <button
          className="px-8 py-3 bg-[#632942] hover:bg-yellow text-white font-semibold rounded-lg shadow-lg shadow-pink-500 transform transition-all duration-300 ease-in-out animate__animated animate__zoomIn animate__delay-2s"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          onClick={() => navigate("/booking")} // Use navigate for routing
        >
          Book Now
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4">
        <ServiceIcons />
      </div>
    </section>
  );
};

export default HeroSection;
