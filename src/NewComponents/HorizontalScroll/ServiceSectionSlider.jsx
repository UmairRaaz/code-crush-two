import React, { useRef, useEffect, useState } from "react";
import ServiceGrid from "./ServiceGrid";
import servicesnew from "../../Content/servicenew";

const ServiceSectionSlider = () => {
  const scrollContainerRef = useRef(null);
  const [serviceContent, setServiceContent] = useState(servicesnew);
  const [slideIndex, setSlideIndex] = useState(1);
  
  const totalSlides = serviceContent.length;

  useEffect(() => {
    // Initialize service content
    setServiceContent([...servicesnew]);
  }, []);

  const handleNext = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const slideWidth = scrollContainer.clientWidth;
      scrollContainer.scrollBy({ left: slideWidth, behavior: "smooth" });
      setSlideIndex((prev) => Math.min(prev + 1, totalSlides));
    }
  };

  const handlePrevious = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const slideWidth = scrollContainer.clientWidth;
      scrollContainer.scrollBy({ left: -slideWidth, behavior: "smooth" });
      setSlideIndex((prev) => Math.max(prev - 1, 1));
    }
  };

  const imageSection = serviceContent.map((content, index) => (
    <div key={index} className="w-full shrink-0 rounded-3xl snap-center">
      <ServiceGrid servicecontent={content} />
    </div>
  ));

  return (
    <div className="relative overflow-hidden">
      <div className="md:max-w-4xl relative lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        {/* Left Arrow */}
        {slideIndex > 1 && (
          <button
            className="absolute -left-12 top-1/2 transform bg-gray-100 z-50 -translate-y-1/2 p-2 rounded-full shadow-lg"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-12 h-12 rotate-180"
            >
              <path
                d="m14.707 11.293-4-4A1 1 0 0 0 9 8v8a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414z"
                fill="#50128e"
                data-name="Right"
              />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {slideIndex < totalSlides && (
          <button
            className="absolute bg-gray-100 z-50 -right-12 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-lg"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path
                d="m14.707 11.293-4-4A1 1 0 0 0 9 8v8a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414z"
                fill="#50128e"
                data-name="Right"
              />
            </svg>
          </button>
        )}

        {/* Slides */}
        <section
          ref={scrollContainerRef}
          className="flex items-center space-x-10 snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        >
          {imageSection}
        </section>
      </div>
    </div>
  );
};

export default ServiceSectionSlider;
