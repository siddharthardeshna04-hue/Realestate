import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = ({ setShowSignup }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // 1. CHECK FOR LOGGED IN USER
  // We look in localStorage. If they exist, we parse the data. If not, this is 'null'
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // 2. LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Delete the user from memory
    window.location.reload(); // Refresh the page to update the Navbar
  };

  return (
    <div
      className={`w-full z-50 ${isHome ? "absolute top-0 left-0 bg-transparent" : "relative bg-gray-800"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li>
            <Link to="/" className="cursor-pointer hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="cursor-pointer hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="cursor-pointer hover:text-blue-400 transition">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" className="cursor-pointer hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* 3. DESKTOP CONDITIONAL BUTTONS */}
        {loggedInUser ? (
          <div className="hidden md:flex items-center gap-4">
            <span className="text-white font-medium">Hi, {loggedInUser.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-full font-sans cursor-pointer hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSignup(true)}
            className="hidden md:block bg-blue-600 text-white px-8 py-2 rounded-full font-sans cursor-pointer hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        )}

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="Open Menu"
          className="md:hidden cursor-pointer w-7"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-gray-800 text-white overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          showMobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt="Close Menu"
            className="w-8 cursor-pointer bg-white p-2 rounded-full"
          />
        </div>
        
        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center gap-6 mt-10 text-xl font-medium">
          <li>
            <Link onClick={() => setShowMobileMenu(false)} to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMobileMenu(false)} to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMobileMenu(false)} to="/projects" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMobileMenu(false)} to="/testimonials" className="hover:text-blue-400">
              Testimonials
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMobileMenu(false)} to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
          
          {/* 4. MOBILE CONDITIONAL BUTTONS */}
          {loggedInUser ? (
            <li className="mt-4 flex flex-col items-center gap-3">
              <span className="text-gray-300 text-lg">Logged in as {loggedInUser.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-8 py-2 rounded-full font-sans hover:bg-red-700 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="mt-4">
              <button
                onClick={() => {
                  setShowMobileMenu(false);
                  setShowSignup(true);
                }}
                className="bg-blue-600 text-white px-8 py-2 rounded-full font-sans hover:bg-blue-700 transition"
              >
                Sign up
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;