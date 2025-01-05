import React, { useRef, useEffect, useState } from 'react';
import ServiceGrid from './ServiceGrid';
import servicesnew from '../../Content/servicenew';

const ServiceSectionSlider = () => {
  const scrollContainerRef = useRef(null);
  const [serviceContent, setServiceContent] = useState(servicesnew);

  useEffect(() => {
    // Duplicate the first and last slides to create a seamless loop
    const newContent = [...servicesnew]; // Adding the slides
    setServiceContent(newContent);
  }, []);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const slideWidth = scrollContainer.clientWidth; // Width of one slide
      const scrollLeft = scrollContainer.scrollLeft; // Current scroll position
      const totalSlides = scrollContainer.children.length; // Total number of slides
      const currentIndex = Math.floor(scrollLeft / slideWidth); // Nearest slide index

      // Logic for seamless loop can be added here
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Auto-scroll interval (if needed)
    // const autoScrollInterval = setInterval(() => {
    //   handleScroll();
    // }, 5000);

    // Cleanup on component unmount
    // return () => {
    //   clearInterval(autoScrollInterval);
    // };
  }, []);

  const imageSection = [];
  for (let i = 0; i < serviceContent.length; i++) {
    imageSection.push(
      <div key={i} className="w-full shrink-0 rounded-3xl snap-center">
        <ServiceGrid servicecontent={serviceContent[i]} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <div className="md:max-w-4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        <section
          ref={scrollContainerRef}
          className="flex items-center space-x-10 snap-x snap-mandatory overflow-x-auto scrollbar-hide"
          onScroll={handleScroll}
        >
          {imageSection}
        </section>
      </div>
    </div>
  );
};

export default ServiceSectionSlider;
