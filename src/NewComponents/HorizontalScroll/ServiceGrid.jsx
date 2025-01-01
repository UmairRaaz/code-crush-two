import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceGrid = ({ servicecontent }) => {
  const colors = [
    "#EF9A9A", // Light Red
    "#F48FB1", // Pink
    "#CE93D8", // Purple
    "#B39DDB", // Deep Purple
    "#90CAF9", // Blue
    "#81D4FA", // Light Blue
    "#80DEEA", // Cyan
    "#A5D6A7", // Light Green
    "#E6EE9C", // Lime
    "#FFF59D", // Yellow
    "#FFE082", // Amber
    "#FFCC80", // Orange
    "#B0BEC5", // Blue Grey
    "#CFD8DC", // Light Blue Grey
    "#C5E1A5", // Soft Green
    "#DCE775"  // Lemon Green
  ];
  
  return (
    <div className="min-h-screen rounded-xl bg-[#e9e9f4]">
      <h1 className="text-4xl ml-14 mt-20 pt-10 mb-2 font-semibold">{servicecontent.sectionName}</h1>
      <div className="grid pb-10 px-10 grid-cols-2 gap-6">
        {servicecontent.content.map((service, index) => (
          <ServiceCard
            service={service}
            key={index}
            color={colors[index]}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
