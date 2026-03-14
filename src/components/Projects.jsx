import React, { useState } from "react";
import { projectsData } from "../assets/assets";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCards, setVisibleCards] = useState(6);

  const displayedProjects = projectsData.slice(0, visibleCards);

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      {/* Section Header */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-center text-gray-800">
        Our <span className="text-blue-600 drop-shadow-md">Projects</span>
      </h1>
      <p className="text-center text-gray-600 max-w-80 mx-auto mb-8">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Projects Grid Container */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {displayedProjects.map((project, index) => (
          <div 
            key={index} 
            className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-82.5 group"
          >
            {/* Project Image */}
            <div 
              className="overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
              />
            </div>

            {/* Project Details */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{project.location}</p>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-blue-600">{project.price}</span>
                <button className="text-sm border border-blue-600 text-blue-600 px-4 py-1.5 rounded hover:bg-blue-600 hover:text-white transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NEW: Toggle between "Show More" and "Show Less" */}
      <div className="flex justify-center mt-12">
        {visibleCards < projectsData.length ? (
          <button 
            onClick={() => setVisibleCards(projectsData.length)} // Show all cards
            className="bg-blue-600 text-white px-10 py-3 rounded hover:bg-blue-700 transition-colors shadow-md font-medium"
          >
            Show More
          </button>
        ) : (
          <button 
            onClick={() => setVisibleCards(6)} // Reset back to 6 cards
            className="bg-gray-800 text-white px-10 py-3 rounded hover:bg-gray-900 transition-colors shadow-md font-medium"
          >
            Show Less
          </button>
        )}
      </div>

      {/* The Full-Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-gray-300 z-50 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Full size project" 
            className="max-w-full max-h-[90vh] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;