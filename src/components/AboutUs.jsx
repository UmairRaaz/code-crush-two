import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import meetingImage from "../assets/meetingImage.jpg";

const AboutUs = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <div
    ref={ref}
      className="min-h-[80vh] w-[90%] my-20 mb-0 mx-auto font-googleFonts"
      id="about"
    >
      <motion.div
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="w-full h-full flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 w-full h-full md:relative">
          <img
            src={meetingImage}
            alt="image"
            className="md:absolute md:top-14 md:-right-9"
          />
        </div>
        <div className="md:w-1/2 w-full h-full bg-[#f4f5f7] text-[#203653]">
          <div className="max-w-[70%] mx-auto md:mt-20 py-10 md:py-10">
            <h1 className="text-4xl font-bold">Experts Behind Your Digital Success </h1>
            
            <p className="text-lg mt-4">
            Our team of seasoned developers, designers, and tech specialists is committed to pushing the boundaries of technology. We work together to deliver bespoke software and strategic solutions that drive success and transform your business.
            </p>
            {/* <button className="bg-blue-500 text-white text-lg px-4 py-1 mt-4 rounded-full">
              Learn More
            </button> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
