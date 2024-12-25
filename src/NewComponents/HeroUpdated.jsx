import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroUpdated = () => {
  const slidesContent = [
    {
      title: "Innovative Software Development",
      description:
        "Delivering scalable and efficient software solutions for your unique needs.",
      backgroundImage: "/Images/hero/first.png",
      visionImage: "/Images/hero/second.png",
    },
    {
      title: "Vision",
      description:
        "To be the largest and most innovative IT Development Company by 2030.",
      backgroundImage: "/Images/hero/second.png",
      visionImage: "/Images/hero/third.png",
    },
    {
      title: "Transform Your Vision Into Reality",
      description:
        "Unlock the potential of your ideas with our custom tech solutions.",
      backgroundImage: "/Images/hero/third.png",
      visionImage: "/Images/hero/fourth.png",
    },
    {
      title: "Strategic Tech Consulting",
      description:
        "Guiding your business with expert advice and innovative technology strategies.",
      backgroundImage: "/Images/hero/fourth.png",
      visionImage: "/Images/hero/fifth.png",
    },
    {
      title: "Digital Win Technology",
      description:
        "Unlock the potential of your ideas with our custom tech solutions.",
      backgroundImage: "/Images/hero/fifth.png",
      visionImage: "/Images/hero/sixth.png",
    },
    {
      title: "Your Partner in Digital Transformation",
      description:
        "Drive growth and efficiency with our seamless tech integration and innovation.",
      backgroundImage: "/Images/hero/sixth.png",
      visionImage: "/Images/hero/seventh.png",
    },
    {
      title: "Cyber Security",
      description:
        "Protect your data and build resilience against cyber threats.",
      backgroundImage: "/Images/hero/seventh.png",
      visionImage: "/Images/hero/eight.png",
    },
    {
      title: "Digital Twin Technology",
      description:
        "Leverage the power of digital twins to optimize and protect your operations.",
      backgroundImage: "/Images/hero/eight.png",
      visionImage: "/Images/hero/first.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesContent.length);
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval);
  }, [slidesContent.length]);

  const slide = slidesContent[currentSlide];

  // Get the next slide index with wrap-around logic
  const nextSlide = slidesContent[(currentSlide + 1) % slidesContent.length];
  return (
    <div
      className="h-[70vh] md:h-screen overflow-hidden bg-cover bg-center flex flex-col justify-between relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${slide.backgroundImage})`,
      }}
    >
      <div className="absolute w-full left-0 bottom-10 right-10 flex justify-between space-x-4">
        {/* Left Div */}
        <div className="ml-4 md:ml-10 md:w-[600px] w-[62%]">
          <div
            className=" border text-white border-white bg-black bg-opacity-40 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-md relative flex flex-col justify-between"
            style={{ minHeight: "200px", maxHeight: "400px" }}
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-10">{slide.description}</p>
            </div>

            {/* Fixed Button */}
            <button className="md:text-xl text-xs rounded-full p-10 w-full md:w-96 flex gap-x-2 items-center justify-center text-white h-10 bg-[#4e148d] whitespace-nowrap md:px-4 py-1">
              <p>Hire Code Crush Technologies</p>
              <span>
                <GoArrowUpRight size={20} />
              </span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center w-full mt-4 ">
            {/* Left Slide Number */}
            <span className="text-white text-sm font-bold">01</span>

            {/* Progress Bar */}
            <div className="flex-grow mx-4 relative">
              {/* Segmented Progress Bar */}
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

            {/* Right Slide Number */}
            <span className="text-white text-sm font-bold">
              {slidesContent.length}
            </span>
          </div>
        </div>

        {/* Right Div */}
        <div className="md:w-56 absolute right-2 md:right-8 bottom-10 md:bottom-0 h-32 overflow-hidden flex items-center justify-center transition-transform duration-1000 ">
          {/* Image */}
          <img
            src={nextSlide.backgroundImage}
            alt="Vision"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col  bg-black bg-opacity-30 text-white px-4 py-2">
            <h3 className="md:text-md leading-tight font-semibold">{nextSlide.title}</h3>
            <p className="text-xs mt-1">{nextSlide.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroUpdated;
