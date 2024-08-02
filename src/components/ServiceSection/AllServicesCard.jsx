import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import webDevelopment from "../../assets/ServicesSection/services/webDevelopment.webp";

const AllServicesCard = ({ image, heading, desc, reverse }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);
  return (
    <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-4xl 2xl:max-w-7xl rounded-xl bg-gray-100/70 mx-auto md:py-2 my-8 overflow-hidden cursor-pointer shadow-lg">
      <div
        className={`w-full flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } h-full px-4 md:px-0  md:gap-2`}
      >
        <div className="md:w-1/2 p-2 w-full h-full md:px-8 py-4">
          <h1 className="text-3xl my-4 text-blue-800 uppercase font-bold">
            {heading}
          </h1>
          <p className="text-base  text-gray-700">{desc}</p>
        </div>
        <div className="md:w-1/2 p-2 flex items-center justify-center w-full h-full" ref={ref}>
          <motion.img
            src={image}
            alt="laptop-image"
            className="md:ml-10 w-[20rem] rounded-md shadow-lg"
            animate={controls}
            initial={reverse ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
