import { motion } from "framer-motion";
import mobileImage from "../assets/portfolioFIve.png";
import monitorImage from "../assets/portfolioOne.png";
import websitrSS from "../assets/portfolioThree.png";
import laptopScreen from "../assets/portfolioTwo.png";
import tabletScreen from "../assets/portfolioFour.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full my-20 bg-[#f6fafd] text-black">
      <div className="w-[90%] mx-auto">
        <h1 className="text-5xl pt-10 font-bold text-center font-googleFonts text-gray-700">
          Featured Projects
        </h1>
        <div className="my-10 grid grid-cols-3 gap-4">
          <motion.div
            whileHover="visible"
            initial="hidden"
            className="group bg-white rounded-3xl shadow-2xl flex items-center justify-center h-[90vh] hover:bg-[#ADD8E6] relative transition-all cursor-pointer"
          >
            <img src={mobileImage} alt="portfolio-img" className="w-72" />
            <motion.div
              variants={overlayVariants}
              transition={{ duration: 0.5 }}
              className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
            >
              <h1 className="text-2xl font-bold">Mobile App</h1>
              <p className="flex items-center gap-1 text-sm mt-2">
                <span>View Project</span>
                <span className="mt-1">
                  <IoIosArrowRoundForward size={20} />
                </span>
              </p>
            </motion.div>
          </motion.div>
          <div className="flex flex-col gap-10 h-[90vh]">
            <motion.div
              whileHover="visible"
              initial="hidden"
              className="group bg-white py-4 pt-10 rounded-3xl shadow-2xl flex items-center justify-center hover:bg-[#90EE90] transition-all relative"
            >
              <img src={monitorImage} alt="portfolio-img" className="w-72" />
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">Web App</h1>
                <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              whileHover="visible"
              initial="hidden"
              className="group bg-white py-4 rounded-3xl h-full shadow-2xl flex items-center justify-center hover:bg-[#87CEFA] transition-all relative"
            >
              <img src={websitrSS} alt="portfolio-img" className="w-72" />
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">Web App</h1>
                <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-10 h-[90vh]">
            <motion.div
              whileHover="visible"
              initial="hidden"
              className="group flex bg-white pt-10 py-4 rounded-3xl shadow-2xl items-center justify-center hover:bg-[#E6E6FA] transition-all relative"
            >
              <img src={laptopScreen} alt="portfolio-img" className="w-64" />
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">Web App</h1>
                <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              whileHover="visible"
              initial="hidden"
              className="group flex bg-white h-full rounded-3xl shadow-2xl items-center justify-center hover:bg-[#FFA07A] transition-all relative"
            >
              <img src={tabletScreen} alt="portfolio-img" className="w-52" />
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">Web App</h1>
                <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
