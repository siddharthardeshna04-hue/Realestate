import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      // Added justify-center so it flexes directly to the middle of the screen!
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <div className="container text-center mx-auto px-6 md:px-20 lg:px-32 text-white mt-20">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold">
            Explore homes that fit your dreams
          </h2>
          <div className="space-x-6 mt-16">
            <Link to="/projects" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition">Projects</Link>
            <Link to="/contact" className="bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition">Contact Us</Link>
          </div>
      </div>
    </div>
  );
};

export default Header;