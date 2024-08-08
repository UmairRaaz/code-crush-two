import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Industries from "./ServiceSection/Industries";
import ServicesSection from "./ServiceSection/ServicesSection";
import Products from "./ServiceSection/Products";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Services = () => {
  const [activeComponent, setActiveComponent] = useState("Services");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Services":
        return <ServicesSection />;
      case "Industries":
        return <Industries />;
      case "Products":
        return <Products />;
      case "AllIndustries":
        return <div>All Industries</div>;
      default:
        return <Industries />;
    }
  };

  const getButtonClass = (component) => {
    const baseClass =
      "text-base px-1 md:text-xl rounded-t-xl md:rounded-t-2xl md:w-40 md:h-14 md:px-4 md:py-2 border-r border-l border-t border-gray-400 whitespace-nowrap ";
    const activeClass = "bg-[#0e3f8b] text-white";
    const inactiveClass = "border-gray-300 text-gray-700 bg-transparent";

    return `${baseClass} ${
      activeComponent === component ? activeClass : inactiveClass
    }`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease:"linear" }}
      className=" md:mt-0 py-1 pt-28 md:pt-32  w-full  font-googleFonts"
       id="services"
    >
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0  mx-auto flex  md:justify-between my-4 ">
        <div className="flex  md:space-x-4">
        <button
          className={getButtonClass("Services")}
          onClick={() => setActiveComponent("Services")}
        >
          Services
        </button>
        <button
          className={getButtonClass("Industries")}
          onClick={() => setActiveComponent("Industries")}
        >
          Industries
        </button>
        <button
          className={getButtonClass("Products")}
          onClick={() => setActiveComponent("Products")}
        >
          R&D
        </button>
        </div>
        <NavLink
          className="md:text-xl text-sm  md:w-40  flex items-center justify-center md:h-14 text-[#4b7dc8] flex-row whitespace-nowrap mr-14  px-4 py-2"
          to="/all-services"
        >
          <p>View all</p>
          <span>
            <MdKeyboardArrowRight size={30} />
          </span>
        </NavLink>
      </div>
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0  mx-auto flex  space-x-4 mb-4 -mt-4">
        {renderComponent()}
      </div>
    </motion.div>
  );
};

export default Services;
