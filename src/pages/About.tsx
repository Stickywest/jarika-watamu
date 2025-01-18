import React from 'react';

const About = () => {
  return (
    <div className="py-8 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      
      <p className="text-lg text-center mb-4">
        Jarika Hotel is a premier hotel located in the heart of Nakuru City. Our hotel offers a unique blend of relaxation and luxury for both business and leisure travelers.
      </p>
      <p className="text-lg text-center mb-6">
        With premium services, beautiful rooms, and exceptional hospitality, we ensure a memorable experience for all our guests.
      </p>

      {/* Google Map Embed */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-center mb-4">Find Us Here</h3>
        <div className="max-w-full overflow-hidden rounded-lg shadow-lg">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.042601424634634!2d35.13623461475233!3d-0.30372223535894115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182937418a71fd5d%3A0x542a4043f5b4227!2sJarika%20Hotel!5e0!3m2!1sen!2ske!4v1684368521123!5m2!1sen!2ske"
  width="100%"
  height="450"
  allowFullScreen={true} // Set as boolean instead of a string
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg"
></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
