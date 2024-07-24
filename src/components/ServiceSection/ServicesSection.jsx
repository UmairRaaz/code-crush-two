import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { FaAppStore } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { NavLink } from "react-router-dom";

import { services } from "../../Content/Services";
const ServicesSection = () => {
  const icons = [
    <LuBrainCircuit size={70}  key={0}/>,
    <CgWebsite size={70}  key={1}/>,
    <FaAppStore size={70}  key={2}/>,
    <SiBmcsoftware size={70} key={3} />,
  ];

  const updatedServices = services.slice(0, 4).map((service, index) => {
    return { ...service, image: icons[index] };
  });
  return (
    <div className="w-full text-black  grid grid-cols-1 md:grid-cols-2">
      {updatedServices.map((service, index) => (
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
