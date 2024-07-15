import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Industries from "./ServiceSection/Industries";
import ServicesSection from "./ServiceSection/ServicesSection";
import Products from "./ServiceSection/Products";
const Services = () => {
  const [activeComponent, setActiveComponent] = useState("Industries");

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
    const baseClass = "text-2xl w-40 h-14 px-4 py-2 border-r border-l border-t border-gray-200";
    const activeClass = "bg-[#0e3f8b] text-white";
    const inactiveClass = "border-gray-300 text-gray-700 bg-transparent";

    return `${baseClass} ${
      activeComponent === component ? activeClass : inactiveClass
    }`;
  };

  return (
    <div className="min-h-screen w-full font-googleFonts">
      <div className="w-[90%] mx-auto flex space-x-4 my-4">
        <button
          className={getButtonClass("Industries")}
          onClick={() => setActiveComponent("Industries")}
        >
          Industries
        </button>
        <button
          className={getButtonClass("Services")}
          onClick={() => setActiveComponent("Services")}
        >
          Services
        </button>
        <button
          className={getButtonClass("Products")}
          onClick={() => setActiveComponent("Products")}
        >
          Products
        </button>
        <button
          className="text-xl w-40 flex items-center justify-center h-14 text-[#4b7dc8] whitespace-nowrap px-4 py-2"
          onClick={() => setActiveComponent("AllIndustries")}
        >
          <span>All Industries</span>
          <span>
            <MdKeyboardArrowRight size={30} />
          </span>
        </button>
      </div>
      <div className="w-[90%] mx-auto flex space-x-4 mb-4 -mt-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Services;
