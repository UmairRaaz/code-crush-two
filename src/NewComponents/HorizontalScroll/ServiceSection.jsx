import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ServiceGrid from "./ServiceGrid";
import servicesnew from "../../Content/servicenew";

const ServiceSection = () => {
  const imageRefs = useRef([]);
  const imageContainerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = servicesnew.length;

  // Generate the image elements
  const imageSection = [];
  for (let i = 0; i < totalSlides; i++) {
    imageSection.push(
      <div
        key={i}
        className="w-[90vw] shrink-0 rounded-3xl "
        ref={(ref) => (imageRefs.current[i] = ref)}
      >
        <ServiceGrid servicecontent={servicesnew[i]} />
      </div>
    );
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal scrolling effect
    const scrollWidth =
      imageContainerRef.current.scrollWidth - imageContainerRef.current.offsetWidth;

    gsap.to(imageRefs.current, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top top",
        end: `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true, // Adjusts on resize
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleNext = () => {
    if (activeIndex < totalSlides - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      imageRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      imageRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div className="md:max-w-4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0 mx-auto relative">
        <section
          className="flex min-h-screen items-center space-x-10 overflow-hidden"
          ref={imageContainerRef}
        >
          {imageSection}
        </section>

        {/* Arrows */}
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className={`p-2 rounded-full bg-gray-700 text-white ${
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            ←
          </button>
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className={`p-2 rounded-full text-5xl bg-gray-700 text-white ${
              activeIndex === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
