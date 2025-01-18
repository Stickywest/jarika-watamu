import { useState, useEffect } from "react";
import { FaBed, FaUmbrellaBeach, FaMapMarkerAlt, FaClock, FaUtensils } from "react-icons/fa";

import "aos/dist/aos.css"; // Icons for amenities

const HeroSection = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Array of images
  const images = [
    "/src/assets/inside.avif",
    "/src/assets/jarika2.jpg",
    "/src/assets/jarika1.avif",
  ];

  // Change image every 4 seconds for smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image
        setFade(true); // Start fade in
      }, 1000); // Wait for fade out to complete
    }, 4000); // 4 seconds transition time

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Image Slideshow with Fade In/Out Transition */}
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <img
          src={images[imageIndex]}
          alt="Hotel Image"
          className={`w-full h-full object-cover opacity-${fade ? "100" : "0"} transition-opacity duration-1000 ease-in-out`}
        />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 md:px-12 z-20">
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-600 leading-tight text-center mb-6 animate__animated animate__fadeInDown"
        style={{
          fontFamily: "'Playfair Display', serif",
          animation: "typing 2s steps(30) 1s forwards, blink 0.75s step-end infinite",
          overflow: "hidden",
          whiteSpace: "nowrap",
           // Simulating cursor
        }}
      >
        Welcome to Jarika Hotel
      </h1>

      {/* Sliding-up animation for Paragraph */}
      <p
        className="text-lg sm:text-xl font-light mb-8 text-center text-white"
        data-aos="fade-up"
        data-aos-delay="1000" // Delay to make it appear after the h1 animation
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Experience luxury, comfort, and exceptional service in the heart of the city.
      </p>

  {/* Booking Button */}
  <button
    className="px-8 py-3 bg-[#632942] hover:bg-[#009fe3] text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate__animated animate__zoomIn animate__delay-2s"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    Book Now
  </button>
</div>

{/* Icon Section */}
<div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex justify-center flex-wrap z-20 bg-[#632942] p-4 rounded-xl shadow-lg max-w-full overflow-hidden">
  {/* Icon Row */}
  <div className="flex flex-wrap justify-center space-x-6 sm:space-x-4">
    {/* Icon 1 */}
    <div className="group flex flex-col items-center text-white">
      <FaMapMarkerAlt className="text-3xl sm:text-2xl opacity-90 transition-all duration-500 ease-in-out group-hover:text-orange-400" />
      <p className="hidden lg:block text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">
        Located in the heart of the city
      </p>
    </div>

    {/* Icon 2 */}
    <div className="group flex flex-col items-center text-white">
      <FaBed className="text-3xl sm:text-2xl opacity-90 transition-all duration-500 ease-in-out group-hover:text-orange-400" />
      <p className="hidden lg:block text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">
        Luxurious Rooms
      </p>
    </div>

    {/* Icon 3 */}
    <div className="group flex flex-col items-center text-white">
      <FaUmbrellaBeach className="text-3xl sm:text-2xl opacity-90 transition-all duration-500 ease-in-out group-hover:text-orange-400" />
      <p className="hidden lg:block text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">
        Beachfront Views
      </p>
    </div>

    {/* Icon 4 */}
    <div className="group flex flex-col items-center text-white">
      <FaClock className="text-3xl sm:text-2xl opacity-90 transition-all duration-500 ease-in-out group-hover:text-orange-400" />
      <p className="hidden lg:block text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">
        24/7 Service
      </p>
    </div>

    {/* Icon 5 */}
    
  </div>
</div>



    </section>
  );
};

export default HeroSection;
