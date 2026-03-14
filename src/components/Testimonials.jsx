import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Testimonials"
    >
      {/* Section Header - Matching the Shadow Style! */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-center text-gray-800">
        Customer <span className="text-blue-600 drop-shadow-md">Testimonials</span>
      </h1>
      <p className="text-center text-gray-600 max-w-80 mx-auto mb-8">
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index} 
            className="max-w-85 border shadow-lg rounded px-8 py-12 text-center bg-white hover:shadow-xl transition-shadow duration-300"
          >
            {/* Profile Image */}
            <img 
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gray-100" 
              src={testimonial.image} 
              alt={testimonial.alt} 
            />
            
            {/* Name & Title */}
            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            
            {/* Dynamic Star Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }, (item, i) => (
                <img key={i} src={assets.star_icon} alt="star" className="w-4 h-4" />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;