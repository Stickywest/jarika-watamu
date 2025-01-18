import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-8 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-lg text-center mb-6">
        For inquiries, bookings, and more, get in touch with us:
      </p>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your message"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg">Or reach us directly:</p>
        <p className="text-lg font-semibold">Email: <a href="mailto:contact@jarikahotel.com" className="text-yellow-600">contact@jarikahotel.com</a></p>
        <p className="text-lg font-semibold">Phone: <a href="tel:+123456789" className="text-yellow-600">+123 456 789</a></p>
      </div>
    </div>
  );
};

export default Contact;
