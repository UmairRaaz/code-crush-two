import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { slidesContent } from "../Content/hero-content";

const HeroUpdated = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesContent.length);
        setIsSliding(false);
      }, 500); // Match this to the CSS transition duration
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesContent.length]);

  const slide = slidesContent[currentSlide];
  const nextSlide = slidesContent[(currentSlide + 1) % slidesContent.length];

  return (
    <div className="bg-white px-2 py-1 overflow-hidden">
      <div
        key={currentSlide}
        className={`h-[70vh] md:h-[100vh] w-[99%] rounded-3xl mx-auto overflow-hidden bg-cover bg-center flex flex-col justify-between relative`}
      >
        {/* Background Image with Fade Transition */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isSliding ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Preload Next Image */}
        <img
          src={nextSlide.backgroundImage}
          alt="Preloading next slide"
          style={{ display: "none" }}
        />

        {/* Content Section */}
        <div className="absolute w-full left-0 bottom-10 right-10 flex justify-between space-x-4">
          <div className="ml-4 md:ml-10 pr-3 md:pr-0">
            <div className="text-white border border-white bg-black bg-opacity-40 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-md relative flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-2xl mb-10">{slide.description}</p>
              </div>
              <button className="md:text-xl text-xs rounded-full p-10 w-full md:w-96 flex gap-x-2 items-center justify-center text-white h-10 md:h-14 bg-[#4e148d] whitespace-nowrap md:px-4 py-1">
                <p>Hire Code Crush Technologies</p>
                <span>
                  <GoArrowUpRight size={20} />
                </span>
              </button>
            </div>

            <div className="flex items-center w-full mt-4">
              <span className="text-white text-sm font-bold">01</span>
              <div className="flex-grow mx-4 relative">
                <div className="flex justify-between relative">
                  {slidesContent.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 mx-[1px] w-[12.5%] rounded-full ${
                        index <= currentSlide
                          ? "bg-blue-800"
                          : "bg-white bg-opacity-70 backdrop-blur-md"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <span className="text-white text-sm font-bold">
                {slidesContent.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroUpdated;
