import React from "react";
import { useSpring, animated } from "react-spring";
import deluxeImage from '/src/assets/Deluxe.jpg';
import suitImage from '/src/assets/suit.jpg';
import familyImage from '/src/assets/family.jpg';


const RoomsSection: React.FC = () => {
  // Tallying animation for Deluxe Room
  const deluxePrice = useSpring({
    from: { number: 0 },
    to: { number: 200 },
    config: { duration: 2000 }, // 2 seconds
  });

  // Tallying animation for Suite Room
  const suitePrice = useSpring({
    from: { number: 0 },
    to: { number: 350 },
    config: { duration: 2000 }, // 2 seconds
  });

  // Tallying animation for Family Room
  const familyPrice = useSpring({
    from: { number: 0 },
    to: { number: 250 },
    config: { duration: 2000 }, // 2 seconds
  });

  return (
    <section className="py-8 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded shadow-lg overflow-hidden">
        <img src={deluxeImage} alt="Deluxe Room" className="w-full h-40 object-cover" />

          <div className="p-4">
            <h3 className="text-xl font-semibold">Deluxe Room</h3>
            <p>A perfect blend of luxury and comfort for your stay.</p>
            <animated.p className="text-lg font-bold text-yellow-600 mt-4">
              $
              <animated.span>
                {deluxePrice.number.to((n) => n.toFixed(0))}
              </animated.span>{" "}
              / night
            </animated.p>
          </div>
        </div>
        <div className="rounded shadow-lg overflow-hidden">
        <img src={suitImage} alt="suit Room" className="w-full h-40 object-cover" />

          <div className="p-4">
            <h3 className="text-xl font-semibold">Suite Room</h3>
            <p>Experience unmatched luxury in our suite rooms.</p>
            <animated.p className="text-lg font-bold text-yellow-600 mt-4">
              $
              <animated.span>
                {suitePrice.number.to((n) => n.toFixed(0))}
              </animated.span>{" "}
              / night
            </animated.p>
          </div>
        </div>
        <div className="rounded shadow-lg overflow-hidden">
        <img src={familyImage} alt="family Room" className="w-full h-40 object-cover" />

          <div className="p-4">
            <h3 className="text-xl font-semibold">Family Room</h3>
            <p>Spacious and cozy, perfect for families.</p>
            <animated.p className="text-lg font-bold text-yellow-600 mt-4">
              $
              <animated.span>
                {familyPrice.number.to((n) => n.toFixed(0))}
              </animated.span>{" "}
              / night
            </animated.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
