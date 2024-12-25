import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import servicesnew from "../Content/servicenew";

const Services = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Function to handle section navigation
  const handleNavigation = (direction) => {
    setCurrentSectionIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? servicesnew.length - 1 : prevIndex - 1;
      }
      if (direction === "next") {
        return prevIndex === servicesnew.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  // Get the current section's content
  const currentSection = servicesnew[currentSectionIndex];
  const sidebar = [
    {
      title: "Team",
    },
    {
      title: "Serivices",
    },
    {
      title: "R&D",
    },
  ];
  return (
    <div className="bg-[#E8E9F4] py-10">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex">
          <div className="flex w-full flex-col">
            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentSection.content.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full backdrop-blur-lg bg-black/30 py-3">
                    <h3 className="text-center text-xl font-semibold text-white">
                      {item.heading}
                    </h3>
                    <p className="text-center text-sm text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex mt-4 ">
              <button className="flex w-full items-center justify-center gap-4 bg-[#c9bee0] border border-[#4E148D] text-[#4E148D] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition duration-300">
                View All
              </button>

              <div className="flex w-[30%] items-center justify-center md:gap-x-8">
                <AiOutlineArrowLeft
                  onClick={() => handleNavigation("prev")}
                  size={50}
                  className="text-[#4E148D] cursor-pointer border border-[#4E148D] rounded-full p-3"
                />
                <AiOutlineArrowRight
                  size={50}
                  onClick={() => handleNavigation("next")}
                  className="text-[#4E148D] cursor-pointer border border-[#4E148D] rounded-full p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
