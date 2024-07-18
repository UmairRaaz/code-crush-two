import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Industries from "./ServiceSection/Industries";
import ServicesSection from "./ServiceSection/ServicesSection";
import Products from "./ServiceSection/Products";
const Services = () => {
  const [activeComponent, setActiveComponent] = useState("Services");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Services":
        return <ServicesSection/>;
      case "Industries":
        return <Industries/>;
      case "Products":
        return <Products/>;
      case "AllIndustries":
        return <div>All Industries</div>;
      default:
        return <Industries/>;
    }
  };

  const getButtonClass = (component) => {
    const baseClass = "text-xl px-2 py-1 md:text-xl rounded-t-2xl md:w-40 md:h-14 md:px-4 md:py-2 border-r border-l border-t border-gray-400 whitespace-nowrap ";
    const activeClass = "bg-[#0e3f8b] text-white";
    const inactiveClass = "border-gray-300 text-gray-700 bg-transparent";

    return `${baseClass} ${
      activeComponent === component ? activeClass : inactiveClass
    }`;
  };

  return (
    <div className="min-h-screen mt-28 md:mt-0 w-full font-googleFonts">
      <div className="w-[90%] mx-auto flex md:space-x-4 my-4">
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
          R&D Projects
        </button>
        <a
          className="text-xl w-40 hidden md:visible md:flex items-center justify-center h-14 text-[#4b7dc8] whitespace-nowrap px-4 py-2"
          href="all-services"
        >
          <p>View all</p>
          <span>
            <MdKeyboardArrowRight size={30} />
          </span>
        </a>
      </div>
      <div className="w-[90%] mx-auto flex space-x-4 mb-4 -mt-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Services;
