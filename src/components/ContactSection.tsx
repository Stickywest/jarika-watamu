import React from "react";

const ContactSection: React.FC = () => (
  <section className="py-8 px-6 bg-white">
    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
    <form className="max-w-lg mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded"
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full p-3 border rounded"
      />
      <button
        type="submit"
        className="w-full py-3 bg-[#632942] text-white rounded"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default ContactSection;
