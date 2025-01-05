import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceGrid = ({ servicecontent }) => {

  return (
    <div className=" rounded-xl bg-[#e9e9f4]">
      <h1 className="text-4xl ml-14 pt-4 pb-1 mb-2 font-semibold">{servicecontent.sectionName}</h1>
      <div className="grid pb-10 px-10 grid-cols-2 gap-6">
        {servicecontent.content.map((service, index) => (
          <ServiceCard
            service={service}
            key={index}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
