import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import projectBG from "/Images/Banners/projectBG.webp";

import { useNavigate } from "react-router-dom";
import LineEffect from "../components/Buttons/LineEffect";
import { projects } from "../Content/ProjectContent/ProjectDeatils";
import CommonHeader from "../components/CommonHeader";

const categories = Object.keys(projects);

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AllProjects = () => {
  const navigate = useNavigate();
  // const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleNavigate = (id) => {
    navigate(`/view-project/${id}`);
  };

  return (
    <div className="md:mb-20 mb-20 bg-white">
      {/* <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${projectBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl tracking-widest uppercase font-bold">
            Projects
          </h1>
        </div>
      </div> */}
      <CommonHeader image={projectBG} text={"Projects"}/>
      <div className="w-[80%] mx-auto">
        <h1 className="text-5xl pt-10 mb-6 font-remoteResourceFont font-bold text-center  text-gray-700">
          All Projects
        </h1>
        <LineEffect />
        <p className="text-justify  max-w-4xl font-remoteResourceFont mt-2 mb-4 mx-auto">
          Explore our featured projects to see how Code Crush Technology
          transforms ideas into impactful solutions. Each project highlights our
          commitment to innovation, quality, and excellence. From cutting-edge
          app development to sophisticated web solutions, our portfolio
          demonstrates the breadth and depth of our expertise. Dive into our
          case studies and witness the difference our technology makes in
          real-world applications.{" "}
        </p>
        {/* <div className="flex flex-wrap justify-center mt-10 gap-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-full ${
                activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              } relative whitespace-nowrap`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="triangle"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500"
                />
              )}
            </button>
          ))}
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              whileHover="visible"
              initial="hidden"
              onClick={() => handleNavigate(project.id)}
              className="group flex bg-white  py-4 rounded-3xl shadow-2xl items-center justify-center hover:bg-[#E6E6FA] transition-all relative cursor-pointer"
              key={project.id}
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
                <p className="flex items-center gap-1 text-sm mt-2">
                  <span>View Project</span>
                  <span className="mt-1">
                    <IoIosArrowRoundForward size={20} />
                  </span>
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
