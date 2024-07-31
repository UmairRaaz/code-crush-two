import { useState } from 'react';
import { motion } from 'framer-motion';
import servicepagebg from "../assets/servicepagebg.jpg";
import { IoIosArrowRoundForward } from 'react-icons/io';
import portfolioOne from '../assets/portfolioOne.png'; 
import portfolioTwo from '../assets/portfolioTwo.png'; 
import portfolioThree from '../assets/portfolioThree.png'; 
import portfolioFour from '../assets/portfolioFour.png'; 
import portfolioFive from '../assets/portfolioFIve.png'; 
import { useNavigate } from 'react-router-dom';
import LineEffect from '../components/Buttons/LineEffect';

const projects = {
  "Custom Websites": [
    { id: 1, title: "Project 1", imgSrc: portfolioOne },
    { id: 2, title: "Project 2", imgSrc: portfolioTwo },
  ],
  "Custom Software": [
    { id: 3, title: "Project 3", imgSrc: portfolioTwo },
    { id: 4, title: "Project 4", imgSrc: portfolioThree },
  ],
  "Mobile Apps": [
    { id: 5, title: "Project 5", imgSrc: portfolioThree },
    { id: 6, title: "Project 6", imgSrc: portfolioTwo },
  ],
  "Custom API": [
    { id: 7, title: "Project 7", imgSrc: portfolioFour },
    { id: 8, title: "Project 8", imgSrc: portfolioThree },
  ],
  "Themes Dev..": [
    { id: 9, title: "Project 9", imgSrc: portfolioFive },
    { id: 10, title: "Project 10", imgSrc: portfolioFour },
  ],
  "Game development": [
    { id: 11, title: "Project 11", imgSrc: portfolioFive },
    { id: 12, title: "Project 12", imgSrc: portfolioFive },
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
    <div className="min-h-screen md:mt-20 my-20">
      <div
        className="relative h-[50vh] border"
        style={{
          backgroundImage: `url(${servicepagebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Projects</h1>
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
              className="group flex bg-white pt-10 py-4 rounded-3xl shadow-2xl items-center justify-center hover:bg-[#E6E6FA] transition-all relative cursor-pointer"
              key={project.id}
            >
              <img src={project.imgSrc} alt="portfolio-img" className="w-64" />
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
