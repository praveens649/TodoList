import React from "react";
import Image1 from "../asset/p1.png";
import Image3 from "../asset/p3.png";
import Image4 from "../asset/p4.png";
import Image5 from "../asset/p5.png";
import Image6 from "../asset/p6.png";
const Gallery = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 py-12 bg-black">
        {/* Gallery Section Wrapper */}
        <div className="relative w-full max-w-6xl">
          {/* Gallery Heading */}
          <div className="text-center pb-8">
            <h2 className="animate__animated animate__fadeInDown animate__delay-1s text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Gallery
            </h2>
            <p className="text-blue-400 max-w-2xl mx-auto">
              Explore our gallery to see TodoMatrix in action and get inspired for your next project.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
              <img 
                className="w-full h-auto object-cover" 
                src={Image1} 
                alt="TodoMatrix dashboard overview" 
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                <img 
                  className="w-full h-full object-cover" 
                  src={Image6} 
                  alt="Task management"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                <img 
                  className="w-full h-full object-cover" 
                  src={Image3} 
                  alt="Project organization" 
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                <img 
                  className="w-full h-full object-cover" 
                  src={Image4} 
                  alt="Team collaboration" 
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                <img 
                  className="w-full h-full object-cover" 
                  src={Image5} 
                  alt="Progress tracking" 
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                <img 
                  className="w-full h-full object-cover" 
                  src={Image6} 
                  alt="Mobile responsive" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
