import { useState } from 'react';
import { motion } from 'framer-motion';
import servicepagebg from "../assets/servicepagebg.jpg";
import { IoIosArrowRoundForward } from 'react-icons/io';
import projectBG from "../assets/projectBG.webp"

import projectOne from "../assets/projectImages/one.webp"
import projectTwo from "../assets/projectImages/two.webp"
import projectThree from "../assets/projectImages/three.webp"
import projectFour from "../assets/projectImages/four.webp"
import projectFive from "../assets/projectImages/five.webp"
import projectSix from "../assets/projectImages/six.webp"

import { useNavigate } from 'react-router-dom';
import LineEffect from '../components/Buttons/LineEffect';

const projects = {
  "Custom Websites": [
    { id: 1, title: "Project 1", imgSrc: projectOne },
    { id: 2, title: "Project 2", imgSrc: projectTwo },
  ],
  "Custom Software": [
    { id: 3, title: "Project 3", imgSrc: projectTwo },
    { id: 4, title: "Project 4", imgSrc: projectThree },
  ],
  "Mobile Apps": [
    { id: 5, title: "Project 5", imgSrc: projectThree },
    { id: 6, title: "Project 6", imgSrc: projectTwo },
  ],
  "Custom API": [
    { id: 7, title: "Project 7", imgSrc: projectFour },
    { id: 8, title: "Project 8", imgSrc: projectThree },
  ],
  "Themes Dev..": [
    { id: 9, title: "Project 9", imgSrc: projectSix },
    { id: 10, title: "Project 10", imgSrc: projectFour },
  ],
  "Game development": [
    { id: 11, title: "Project 11", imgSrc: projectSix },
    { id: 12, title: "Project 12", imgSrc: projectTwo },
  ],
};

const categories = Object.keys(projects);

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AllProjects = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleNavigate = (url) => {
    navigate("/view-project/:1");
    console.log("Navigating to:", url);
  };

  return (
    <div className="md:mt-20 my-20">
      <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${projectBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl tracking-widest uppercase font-bold">Projects</h1>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
          All Projects
        </h1>
        <LineEffect />
        <p className="text-center max-w-4xl mt-2 mx-auto">Explore our featured projects to see how Code Crush Technology transforms ideas into impactful solutions. Each project highlights our commitment to innovation, quality, and excellence. From cutting-edge app development to sophisticated web solutions, our portfolio demonstrates the breadth and depth of our expertise. Dive into our case studies and witness the difference our technology makes in real-world applications. </p>
        <div className="flex flex-wrap justify-center mt-10 gap-4 mb-10">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[activeCategory].map((project) => (
            <motion.div
              whileHover="visible"
              initial="hidden"
              onClick={() => handleNavigate(`/view-project/${project.id}`)}
              className="group flex bg-white  py-4 rounded-3xl shadow-2xl items-center justify-center hover:bg-[#E6E6FA] transition-all relative cursor-pointer"
              key={project.id}
            >
              <img src={project.imgSrc} alt="portfolio-img" className="w-72 rounded-xl" />
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 bg-white/80 w-full text-gray-700 py-5 px-10"
              >
                <h1 className="text-2xl font-bold">{project.title}</h1>
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
