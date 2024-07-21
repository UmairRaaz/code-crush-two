import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { FaAppStore } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { NavLink } from "react-router-dom";
const ServicesSection = () => {
  const services = [
    {
      name: "Website Development",
      image: <CgWebsite size={70} />,
      description:
        "We provide custom-tailored solutions for each phase of development from designing to coding and implementation.",
    },
    {
      name: "App Development",
      image: <FaAppStore size={70} />,
      description:
        "We build native apps optimized for iOS and Android to provide users with a seamless mobile experience that leverages the full power of the OS.",
    },
    {
      name: "AI Integrations",
      image: <LuBrainCircuit size={70} />,
      description:
        "We can help you unlock your business potential with our cutting-edge Machine Learning and Artificial Intelligence capabilities.",
    },
   
    {
      name: "Social Media Marketing",
      image: <SiBmcsoftware size={70} />,
      description:
        "We bring your ideas to life with our turnkey solutions that are custom-designed to fit into your enterprise software ecosystem.",
    },
  ];
  return (
    <div className="w-full text-black  grid grid-cols-1 md:grid-cols-2">
      {services.map((service, index) => (
        <div key={index} className=" py-8 border border-gray-200 font-googleFonts">
          <div className="mt-10 mr-5 px-4 md:px-10">
            <div className="text-blue-800">{service.image}</div>
            <h1 className="text-2xl whitespace-nowrap md:text-5xl mt-4 font-bold text-gray-700">{service.name}</h1>
            <p className="text-xl mt-4 text-gray-700">{service.description}</p>
            <button className="hover:bg-blue-800 transition-all border border-blue-800 text-blue-800 hover:text-white text-lg px-4 py-2 mt-8 rounded-full">
            <NavLink
            to={"/view-service/:1"}
            >Learn More</NavLink>
            </button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
