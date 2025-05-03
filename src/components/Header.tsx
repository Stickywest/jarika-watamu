import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt,FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa"; // FontAwesome Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to determine the text color based on the current page
  const getLinkClass = (path: string): string =>
    location.pathname === path
      ? "text-[#632942]" // Active link color
      : "text-black";   // Default link color

  return (
    <>
      {/* Phone Number and Social Icons */}
      <div className="bg-[#632942] text-white py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-lg" />
          <a href="tel:+254728402547" className="text-lg text-yellow-500 hover:underline">
  +254 728402547
           </a>

        </div>
        <div className="flex space-x-4">
        <a
  href="https://wa.me/254728402547"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="text-xl hover:text-[#25D366] transition-all duration-300" />
</a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-[#009fe3] transition-all duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-[#009fe3] transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#eeeee4] shadow-md w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <span className="text-xl font-semibold text-black">Jarika Watamu</span>
          </div>

          {/* Toggle Button */}
          <button
            className="md:hidden text-blue-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
  className={`md:flex md:space-x-8 items-center absolute md:static top-0 left-0 w-full md:w-auto bg-[#eeeee4] md:bg-transparent shadow-md md:shadow-none z-30 transition-all duration-300 ease-in-out ${
    isOpen ? "block" : "hidden"
  }`}
>
  <li className="border-b md:border-none border-lightGray">
    <Link
      to="/"
      className={`block py-3 px-6 md:px-0 font-medium hover:text-[#009fe3] ${getLinkClass("/")}`}
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>
  </li>
  <li className="border-b md:border-none border-lightGray">
    <Link
      to="/booking"
      className={`block py-3 px-6 md:px-0 font-medium hover:text-[#009fe3] ${getLinkClass("/booking")}`}
      onClick={() => setIsOpen(false)}
    >
      booking
    </Link>
  </li>
  <li className="border-b md:border-none border-lightGray">
    <Link
      to="/about"
      className={`block py-3 px-6 md:px-0 font-medium hover:text-[#009fe3] ${getLinkClass("/about")}`}
      onClick={() => setIsOpen(false)}
    >
      About
    </Link>
  </li>
  <li className="border-b md:border-none border-lightGray">
    <Link
      to="/services"
      className={`block py-3 px-6 md:px-0 font-medium hover:text-[#009fe3] ${getLinkClass("/services")}`}
      onClick={() => setIsOpen(false)}
    >
      Services
    </Link>
  </li>
  <li className="border-b md:border-none border-lightGray">
    <Link
      to="/contact"
      className={`block py-3 px-6 md:px-0 font-medium hover:text-[#009fe3] ${getLinkClass("/contact")}`}
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
  </li>
</ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
