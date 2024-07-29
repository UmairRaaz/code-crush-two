import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import webDevelopment from '../../assets/ServicesSection/services/webDevelopment.webp';

const AllServicesCard = ({image, heading, desc, reverse}) => {
    const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);
  return (
    <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl rounded-xl bg-gray-100/70 mx-auto md:py-10 my-8 overflow-hidden">
    <div className={`w-full flex flex-col ${reverse ? "md:flex-row-reverse" :  "md:flex-row" } h-full px-4 md:px-0 justify-between md:gap-8`}>
      <div className="md:w-1/2 w-full h-full md:px-8 py-4">
        <h1 className="text-4xl my-4 text-blue-800 uppercase font-bold">
          {heading}
        </h1>
        <p className="text-xl  text-gray-700">
        {desc}
        </p>
      </div>
      <div className="md:w-1/2 w-full h-full" ref={ref}>
        <motion.img
          src={image}
          alt="laptop-image"
          className="md:ml-10 w-[27rem]"
          animate={controls}
          initial={reverse ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  </div>
  )
}

export default AllServicesCard