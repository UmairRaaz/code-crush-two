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
      className="w-[90%] my-20 mb-28 mx-auto font-googleFonts"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 w-full">
          <img
            src={meetingImage}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#f4f5f7] text-[#203653] p-10">
          <h1 className="text-4xl font-bold">Experts Behind Your Digital Success</h1>
          <p className="text-lg mt-4">
            Our team of seasoned developers, designers, and tech specialists is committed to pushing the boundaries of technology. We work together to deliver bespoke software and strategic solutions that drive success and transform your business.
          </p>
          {/* <button className="bg-blue-500 text-white text-lg px-4 py-1 mt-4 rounded-full">
            Learn More
          </button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
