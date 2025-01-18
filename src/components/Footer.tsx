import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#632942] text-white py-8 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">Jarika Hotel</h2>
            <p>Follow us on social media</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-400 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Our Policies</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-orange-400 transition duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <ul className="space-y-1">
              <li>
                <p>Email: contact@jarikahotel.com</p>
              </li>
              <li>
                <p>Phone: +254 700 123 456</p>
              </li>
              <li>
                <p>Address: 123 City Center, Nairobi</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 mt-6" />

      {/* Footer Bottom */}
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Jarika Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
