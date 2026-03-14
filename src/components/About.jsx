import React, { useState } from "react";
import { assets } from "../assets/assets";

const About = () => {
  // 1. Add state to track if the extra content is visible
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-gray-800">
        About <span className="text-blue-600 [text-shadow:2px_2px_4px_rgb(0_0_0/35%)]">Our Brand</span>
      </h1>
      <p className="text-center text-gray-600 max-w-80 mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* Left Side: Brand Image */}
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />

        {/* Right Side: Stats & Info */}
        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          {/* Description */}
          <div className="my-10 max-w-lg text-gray-600 text-center md:text-left leading-relaxed">
            <p>
              At our core, we believe that finding the perfect property is more
              than just a transaction—it's the foundation for your future. With a
              deep understanding of the market and a commitment to transparency,
              we guide you through every step of your real estate journey. Whether
              you are searching for your dream home or a high-yield investment,
              our dedicated team ensures a seamless and rewarding experience from
              start to finish.
            </p>

            {/* 2. The Hidden Content Block */}
            {/* Tailwind handles the smooth opening animation */}
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showMore ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-semibold text-gray-800 mb-2">Our Core Values:</p>
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li><span className="font-medium text-gray-800">Integrity:</span> Honest, transparent transactions with zero hidden fees.</li>
                <li><span className="font-medium text-gray-800">Excellence:</span> Curating only premium properties that meet the highest architectural standards.</li>
                <li><span className="font-medium text-gray-800">Client-First:</span> Your vision drives our mission. We succeed when you find exactly what you are looking for.</li>
              </ul>
            </div>
          </div>

          {/* 3. Action Button toggles the state! */}
          <button 
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors shadow-md"
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;