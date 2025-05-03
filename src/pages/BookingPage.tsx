import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { FiWifi, FiCoffee } from "react-icons/fi";
import { IoBedOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineAcUnit, MdOutlineLocalBar, MdTv } from "react-icons/md";

type RoomType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  amenities: {
    name: string;
    icon: React.ReactNode;
  }[];
  size: string;
  occupancy: string;
  featured?: boolean;
};

const RoomsSection: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rooms: RoomType[] = [
    {
      id: "single",
      title: "Deluxe Single Room",
      description: "Perfectly designed for solo travelers with premium comfort and all essential amenities.",
      price: 3000,
      image: "/images/single.jpg",
      amenities: [
        { name: "Free WiFi", icon: <FiWifi /> },
        { name: "Smart TV", icon: <MdTv /> },
        { name: "Air Conditioning", icon: <MdOutlineAcUnit /> },
      ],
      size: "20 m²",
      occupancy: "1 adult",
    },
    {
      id: "double",
      title: "Luxury Double Room",
      description: "Spacious retreat for couples with enhanced comfort and modern facilities.",
      price: 4000,
      image: "/images/double.jpg",
      amenities: [
        { name: "Free WiFi", icon: <FiWifi /> },
        { name: "Smart TV", icon: <MdTv /> },
        { name: "Air Conditioning", icon: <MdOutlineAcUnit /> },
        { name: "Coffee Maker", icon: <FiCoffee /> },
      ],
      size: "28 m²",
      occupancy: "2 adults",
      featured: true,
    },
    {
      id: "triple",
      title: "Family Suite",
      description: "Comfortable for groups or families of three with extra space.",
      price: 5000,
      image: "/images/triple.jpg",
      amenities: [
        { name: "Free WiFi", icon: <FiWifi /> },
        { name: "Smart TV", icon: <MdTv /> },
        { name: "Air Conditioning", icon: <MdOutlineAcUnit /> },
        { name: "Mini Fridge", icon: <MdOutlineLocalBar /> },
      ],
      size: "35 m²",
      occupancy: "3 adults",
    },
    {
      id: "executive",
      title: "Executive Suite",
      description: "Top-tier luxury experience with premium services and exclusive amenities.",
      price: 10000,
      image: "/images/executive.jpg",
      amenities: [
        { name: "Free WiFi", icon: <FiWifi /> },
        { name: "Smart TV", icon: <MdTv /> },
        { name: "Air Conditioning", icon: <MdOutlineAcUnit /> },
        { name: "Espresso Machine", icon: <FiCoffee /> },
        { name: "Premium Mini Bar", icon: <MdOutlineLocalBar /> },
      ],
      size: "50 m²",
      occupancy: "2 adults",
    },
  ];

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: config.slow,
  });

  const PriceDisplay: React.FC<{ price: number; visible: boolean }> = ({ price, visible }) => {
    const spring = useSpring({
      number: visible ? price : 0,
      from: { number: 0 },
      config: { duration: 1500 },
    });

    return (
      <animated.span className="text-2xl font-bold text-yellow-600">
        {spring.number.to((n) => `KES ${n.toFixed(0)}`)}
      </animated.span>
    );
  };

  return (
    <section
      ref={ref}
      id="rooms"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <animated.div style={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms & Suites</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience comfort and luxury in our carefully designed accommodations
          </p>
        </animated.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => {
            const cardAnimation = useSpring({
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 30,
              delay: rooms.indexOf(room) * 100,
              config: config.gentle,
            });

            return (
              <animated.div
                key={room.id}
                style={cardAnimation}
                className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white ${
                  room.featured ? "ring-2 ring-yellow-400" : ""
                }`}
                onMouseEnter={() => setActiveRoom(room.id)}
                onMouseLeave={() => setActiveRoom(null)}
              >
                {room.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      activeRoom === room.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full">
                      {room.size}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{room.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <IoBedOutline className="mr-1" />
                        <span className="mr-3">{room.size}</span>
                        <IoPeopleOutline className="mr-1" />
                        <span>{room.occupancy}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <PriceDisplay price={room.price} visible={inView} />
                      <p className="text-sm text-gray-500">per night</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Amenities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity) => (
                        <div key={amenity.name} className="flex items-center">
                          <span className="text-yellow-500 mr-2">{amenity.icon}</span>
                          <span className="text-sm text-gray-700">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-md">
                      Book Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 hover:border-yellow-500 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:shadow-md">
                      Details
                    </button>
                  </div>
                </div>
              </animated.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
            View All Room Options
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;