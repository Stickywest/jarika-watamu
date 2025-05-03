import React from "react";
import { FaCar, FaWifi, FaUtensils, FaSwimmingPool } from "react-icons/fa";

const ServiceIcons: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-[#632942] p-4 rounded-xl shadow-lg max-w-full">
      {[
        { Icon: FaCar, label: "Ample Parking" },
        { Icon: FaWifi, label: "Strong WiFi" },
        { Icon: FaUtensils, label: "Delicious Meals" },
        { Icon: FaSwimmingPool, label: "Swimming Pool" },
      ].map(({ Icon, label }, index) => (
        <div
          key={index}
          className="group flex flex-col items-center mx-2 my-2 text-yellow-400"
        >
          <Icon className="text-3xl sm:text-2xl transition-transform duration-300 group-hover:scale-110" />
          <p className="hidden lg:block text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceIcons;
