import React, { useState } from "react";
import Slider from "react-slick";
import servicesnew from "../../Content/servicenew";

const MobileService = () => {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-4  bg-[#e9e9f5] ">
      {servicesnew.map((section, index) => (
        <div key={index} className="my-4 ">
          <h2 className="text-2xl font-bold text-left mb-4">
            {section.sectionName}
          </h2>

          <Slider {...settings}>
            {section.content.map((service, idx) => {
              const [hovered, setHovered] = useState(false);

              return (
                <div
                  key={idx}
                  className={`bg-white  h-full border border-gray-300 rounded-xl pb-6 overflow-hidden relative hover:scale-105 transition-transform duration-300 ease-in-out group`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {/* Image Container */}
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.heading}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-[#20083a] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

                    {/* Description */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-bold">{service.heading}</h3>
                      <p className="text-sm px-4">{service.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="bg-white absolute bottom-14 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:bg-[#4e148e]">
                    <img
                      src={hovered ? service.hoverIcon : service.icon}  // Change icon on hover
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
            })}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default MobileService;
