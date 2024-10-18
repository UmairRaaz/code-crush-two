import { motion } from "framer-motion";

import { IoIosArrowRoundForward } from "react-icons/io";
import ViewAllButton from "./Buttons/ViewAllButton";
import { useNavigate } from "react-router-dom";
import LineEffect from "./Buttons/LineEffect";
import { projects } from "../Content/ProjectContent/ProjectDeatils";

const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  const navigate = useNavigate();
  console.log("projects", projects)
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
        <p className="text-center max-w-3xl mt-3 mx-auto">
          Explore our featured projects to see how Code Crush Technology
          transforms ideas into impactful solutions. Each project highlights our
          commitment to innovation, quality, and excellence.
          {/* <Link 
        to={"/all-projects"}
        className="text-blue-500">Read More</Link> */}
        </p>
        <div className="flex justify-center md:justify-end">
          <ViewAllButton link={"/all-projects"} />
        </div>
        <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-14 md:gap-4">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={index}
              whileHover="visible"
              initial="hidden"
              onClick={() => navigate(`/view-project/${project.id}`)}
              className={`group cursor-pointer bg-white py-4 rounded-3xl shadow-2xl flex items-center justify-center hover:bg-[${project.backgroundColor}] transition-all relative`}
            >
              <img
                src={project.image}
                alt="portfolio-img"
                className="w-72 rounded-xl"
              />
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">{project.name}</h1>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
