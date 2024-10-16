import { motion } from "framer-motion";


import projectOne from "../assets/projectImages/one.webp"
import projectTwo from "../assets/projectImages/two.webp"
import projectThree from "../assets/projectImages/three.webp"
import projectFour from "../assets/projectImages/four.webp"
import projectFive from "../assets/projectImages/five.webp"
import { IoIosArrowRoundForward } from "react-icons/io";
import ViewAllButton from "./Buttons/ViewAllButton";
import { useNavigate } from "react-router-dom";
import LineEffect from "./Buttons/LineEffect";

const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className="w-full py-10 my-20 bg-[#f6fafd] text-black"
     
    >
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0 mx-auto">
        <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        Showcasing Our Success Stories
        </h1>
        <LineEffect />
        <p className="text-center max-w-3xl mt-3 mx-auto">Explore our featured projects to see how Code Crush Technology transforms ideas into impactful solutions. Each project highlights our commitment to innovation, quality, and excellence.
           {/* <Link 
        to={"/all-projects"}
        className="text-blue-500">Read More</Link> */}
        </p>
        <div className="flex justify-center md:justify-end">
          <ViewAllButton link={"/all-projects"} />
        </div>
        <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-14 md:gap-4">
          <motion.div
            whileHover="visible"
            initial="hidden"
            className="group bg-white rounded-3xl shadow-2xl flex items-center justify-center hover:bg-[#ADD8E6] relative transition-all cursor-pointer"
            onClick={() => navigate("/view-project/1")}
          >
            <img src={projectFive} alt="portfolio-img" className="w-52" />
            <motion.div
              variants={overlayVariants}
              transition={{ duration: 0.5 }}
              onClick={() => navigate("/view-project/1")}
              className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
            >
              <h1 className="text-2xl font-bold">Mobile App</h1>
              {/* <p className="flex items-center gap-1 text-sm mt-2">
                <span>View Project</span>
                <span className="mt-1">
                  <IoIosArrowRoundForward size={20} />
                </span>
              </p> */}
            </motion.div>
          </motion.div>
          <div className="flex flex-col justify-between gap-10">
            <motion.div
              onClick={() => navigate("/view-project/1")}
              whileHover="visible"
              initial="hidden"
              className="group bg-white py-4 pt-4  rounded-3xl shadow-2xl flex items-center justify-center hover:bg-[#90EE90] transition-all relative"
            >
              <img src={projectOne} alt="portfolio-img" className="w-72 rounded-xl" />
              <motion.div
                variants={overlayVariants}
                onClick={() => navigate("/view-project/1")}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">Web App</h1>
                {/* <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p> */}
              </motion.div>
            </motion.div>
            <motion.div
              whileHover="visible"
              onClick={() => navigate("/view-project/1")}
              initial="hidden"
              className="group bg-white py-4 rounded-3xl h-full shadow-2xl flex items-center justify-center  hover:bg-[#87CEFA] transition-all relative"
            >
              <img src={projectTwo} alt="portfolio-img" className="w-72 rounded-xl" />
              <motion.div
                variants={overlayVariants}
                onClick={() => navigate("/view-project/1")}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">Web App</h1>
                {/* <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p> */}
              </motion.div>
            </motion.div>
          </div>
          <div className="flex justify-between flex-col gap-10 ">
            <motion.div
              whileHover="visible"
              initial="hidden"
              onClick={() => navigate("/view-project/1")}
              className="group flex bg-white pt-4 py-4 rounded-3xl shadow-2xl items-center justify-center hover:bg-[#E6E6FA] transition-all relative"
            >
              <img src={projectThree} alt="portfolio-img" className="w-72 rounded-xl" />
              <motion.div
                variants={overlayVariants}
                onClick={() => navigate("/view-project/1")}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">Web App</h1>
                {/* <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p> */}
              </motion.div>
            </motion.div>
            <motion.div
              whileHover="visible"
              onClick={() => navigate("/view-project/1")}
              initial="hidden"
              className="group flex bg-white h-full rounded-3xl shadow-2xl items-center justify-center hover:bg-[#FFA07A] transition-all relative"
            >
              <img src={projectFour} alt="portfolio-img" className="w-72 rounded-xl"  />
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
                onClick={() => navigate("/view-project/1")}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">Web App</h1>
                {/* <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
