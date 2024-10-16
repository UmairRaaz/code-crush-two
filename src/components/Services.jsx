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
      "text-base px-1 md:text-xl h-14 flex-1 md:px-4 md:py-2 border border-gray-400 whitespace-nowrap ";
    const activeClass = "bg-[#4e148d] text-white";
    const inactiveClass = "border-gray-300 hover:bg-[#4e148d] hover:text-white transition-all text-gray-700 bg-transparent";

    return `${baseClass} ${
      activeComponent === component ? activeClass : inactiveClass
    }`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className=" md:mt-0 py-1 pt-28 md:pt-32  w-full  font-googleFonts"
      id="services"
    >
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0  mx-auto flex flex-col   md:justify-between my-4 ">
        <div className="flex justify-between ">
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
        <div className="flex justify-end">
          <NavLink
            className="md:text-xl text-sm  md:w-40  flex items-center justify-end md:h-14 text-[#4e148d] font-semibold flex-row whitespace-nowrap  px-4 py-2"
            to="/all-services"
          >
            <p>View All</p>
            <span>
              <MdKeyboardArrowRight size={30} />
            </span>
          </NavLink>
        </div>
      </div>
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 md:px-0  mx-auto flex  space-x-4 mb-4 -mt-4">
        {renderComponent()}
      </div>
    </motion.div>
  );
};

export default Services;
