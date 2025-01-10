import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate()
  return (
    <div
      className={`bg-white cursor-pointer h-full shadow-lg rounded-xl pb-6 overflow-hidden relative hover:scale-105 transition-transform duration-300 ease-in-out group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(service.link)}
    >
      {/* Image Container */}
      <div className="relative">
        <img
          src={service.image}
          alt={service.heading}
          className="w-full h-28 object-cover rounded-t-lg"
        />

        {/* Black Overlay */}
        <div
          className="absolute inset-0 bg-[#20083a] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
        ></div>

        {/* Description */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h3 className="text-lg font-bold">{service.heading}</h3>
          <p className="text-sm">{service.description}</p>
        </div>
      </div>

      {/* Icon */}
      <div
        className="bg-white absolute bottom-14 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:bg-[#4e148e]"
      >
        <img
          src={hovered ? service.hoverIcon : service.icon}  
          alt="Icon"
          className="w-8 h-8 transition-all duration-300 group-hover:text-white group-hover:filter group-hover:brightness-200"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl mt-10 font-semibold text-gray-800 text-center px-4">
        {service.heading}
      </h3>
    </div>
  );
};

export default ServiceCard;
