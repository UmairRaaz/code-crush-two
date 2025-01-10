import React from "react";
import Slider from "react-slick";
import servicesnew from "../../Content/servicenew";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-[#e9e9f5]">
      {servicesnew.map((section, index) => (
        <div key={index} className="my-4">
          <h2 className="text-2xl cursor-pointer font-bold text-left mb-4">
            {section.sectionName}
          </h2>

          <Slider {...settings}>
            {section.content.map((service, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => navigate(service.link)}
                  className="bg-white cursor-pointer h-full border border-gray-300 rounded-xl pb-6 overflow-hidden relative"
                >
                  {/* Image Container */}
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.heading}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                  </div>

                  {/* Icon */}
                  <div className="bg-white absolute bottom-14 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg">
                    <img
                      src={service.icon} // No hover effect, just the icon
                      alt="Icon"
                      className="w-8 h-8"
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
