import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import aboutUs from "/Images/AboutSectionImages/aboutUs.webp";

const AboutUs = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview, controls]);

  return (
    <section
      id="about"
      ref={ref}
      className="md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0   md:pt-32 pt-20 md:mt-0 mx-auto font-googleFonts"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{once: true}}
        className="w-full flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 w-full">
          <img
            src={aboutUs}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#f4f5f7] text-[#203653] p-10">
          <h1 className="text-4xl font-bold">
            Experts Behind Your Digital Success
          </h1>
          <p className="text-lg mt-4">
            Our team of seasoned developers, designers, and tech specialists is
            committed to pushing the boundaries of technology. <br /> We work together
            to deliver bespoke software and strategic solutions that drive
            success and transform your business.
          </p>
          {/* <button className="bg-blue-500 text-white text-lg px-4 py-1 mt-4 rounded-full">
            Learn More
          </button> */}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
