
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import ServiceGrid from "./ServiceGrid";
import servicesnew from "../../Content/servicenew";

const ServiceSection = () => {
  const imageRefs = useRef([]);
  const imageContainerRef = useRef();

  // Generate the image elements
  const imageSection = [];
  for (let i = 1; i <= 4; i++) {
    imageSection.push(
      <div
        key={i}
        className="w-[90vw] shrink-0 rounded-3xl "
        ref={(ref) => (imageRefs.current[i - 1] = ref)}
      >
        <ServiceGrid servicecontent={servicesnew[i-1]}/>
      </div>
    );
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a horizontal scrolling effect
    const scrollWidth =
      imageContainerRef.current.scrollWidth -
      imageContainerRef.current.offsetWidth;

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

  return (
    <div className="">
      <div className="md:max-w-4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0 mx-auto ">
        <section
          className="flex min-h-screen items-center space-x-10"
          ref={imageContainerRef}
        >
          {imageSection}
        </section>
      </div>
    </div>
  );
};

export default ServiceSection;