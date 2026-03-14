import React, { useState } from "react";
import { assets } from "../assets/assets";

// 1. We added setShowSignup as a prop here so the footer can open the modal!
const Footer = ({ setShowSignup }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Subscribing...");
    
    const formData = new FormData(event.target);

    // Paste your Web3Forms Access Key right here!
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("subject", "New Newsletter Subscriber!");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Side - Logo and Introduction */}
        <div className="w-full md:w-1/3">
          <img src={assets.logo} alt="logo" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner in finding the perfect home. We specialize in premium real estate, offering a seamless experience from property discovery to handing over the keys to your future.
          </p>
        </div>

        {/* Center - Company Links */}
        <div className="w-full md:w-1/5">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><a href="#Header" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#About" className="hover:text-white transition-colors">About us</a></li>
            
            {/* 2. Added Projects Link */}
            <li><a href="#Projects" className="hover:text-white transition-colors">Projects</a></li>
            
            <li><a href="#Contact" className="hover:text-white transition-colors">Contact us</a></li>
            
            {/* 3. Swapped Privacy Policy for Sign Up modal trigger */}
            <li>
              <button 
                onClick={() => setShowSignup(true)} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>

        {/* Right Side - Newsletter Setup */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
          
          <form onSubmit={onSubmit}>
            <div className="flex gap-2">
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500 w-full"
                required
              />
              <button type="submit" className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors shrink-0">
                Subscribe
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-2 h-4">
              {result}
            </div>
          </form>
        </div>

      </div>

      {/* Bottom Copyright Line */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm">
        Copyright 2026 © Estate. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;