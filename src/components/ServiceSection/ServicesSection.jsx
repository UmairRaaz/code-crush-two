import appDevelopment from "../../assets/ServicesSection/services/appDevelopment.webp";
import webDevlopment from "../../assets/ServicesSection/services/webDevelopment.webp";
import socialMediaMarketing from "../../assets/ServicesSection/services/socialMediaMarketing.webp";
import UIUX from "../../assets/ServicesSection/services/UIUX.webp";
import { NavLink } from "react-router-dom";
import { services } from "../../Content/ServiceContent";

const ServicesSection = () => {
  const updatedServices = services.slice(0, 4).map((service, index) => {
    const images = [webDevlopment, appDevelopment, UIUX, socialMediaMarketing];
    return { ...service, image: images[index] };
  });

  return (
    <div className="w-full text-white gap-2 md:gap-5 grid  grid-cols-1 md:grid-cols-2">
      {updatedServices.map((service, index) => (
        <div key={index} className="relative border border-gray-100 min-h-[300px]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
            style={{ minHeight: "400px" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center py-8 px-4 md:px-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold mb-2">
              {service.title}
            </h2>
            <p className="text-left md:pr-20 text-lg  text-gray-300">
              {service.description}
            </p>
            {/* <NavLink
              to={`/view-service/${index + 1}`}
              className="bg-white text-gray-700 mt-4 md:mt-20 w-28 md:w-32 md:text-lg text-sm px-4 py-1 rounded-full"
            >
              Learn More
            </NavLink> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
