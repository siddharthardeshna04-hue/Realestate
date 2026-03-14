import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setShowSignup }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; 
    }
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <img src={assets.logo} alt="logo" className="w-32 cursor-pointer" />

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
          <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a></li>
        </ul>

        {/* Sign Up Button */}
        <button 
          onClick={() => setShowSignup(true)} 
          className="hidden md:block bg-white text-black px-8 py-2 rounded-full font-sans cursor-pointer hover:bg-gray-100 transition"
        >
          Sign up
        </button>

        {/* Mobile Hamburger Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="Open Menu"
          className="md:hidden cursor-pointer w-7"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-800 text-white overflow-hidden transition-all duration-300 ease-in-out ${
          showMobileMenu
            ? "max-h-96 py-4 px-6 opacity-100"
            : "max-h-0 py-0 px-0 opacity-0"
        }`}
      >
        <div className="flex justify-end">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt="Close Menu"
            className="w-8 cursor-pointer mb-4 bg-white p-2 rounded-full"
          />
        </div>
        <ul className="flex flex-col gap-4 pb-4">
          <li><a onClick={() => setShowMobileMenu(false)} href="#Header" className="cursor-pointer hover:text-gray-400 block">Home</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#About" className="cursor-pointer hover:text-gray-400 block">About</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#Projects" className="cursor-pointer hover:text-gray-400 block">Projects</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="cursor-pointer hover:text-gray-400 block">Testimonials</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;