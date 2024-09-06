import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AllServicesCard = ({ image, heading, desc, deatiledServiceId, page }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div
        className="rounded-xl bg-gray-100/70 mx-auto md:pb-2  overflow-hidden shadow-lg h-96 cursor-pointer"
        onClick={() => navigate(`${page}/${deatiledServiceId}`)}
      >
        <div className="flex flex-col h-full">
          <div className="h-1/2" ref={ref}>
            <img
              src={image}
              alt="laptop-image"
              className="h-full w-full object-cover rounded-t-md"
            />
          </div>
          <div className="h-1/2 px-4 py-2 pb-1">
            <h1 className="text-2xl my-2  text-[#4e148d] font-bold">
              {heading}
            </h1>
            <p className="text-base text-gray-700">{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllServicesCard;
