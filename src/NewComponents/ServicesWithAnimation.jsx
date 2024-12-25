import React, { useState } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// Service Card Component
const ServiceCard = ({ title, backgroundImage, isVisible, toggleVisibility }) => {
  return (
    <div
      onClick={toggleVisibility}
      className={`bg-white items-center  justify-center max-h-[30rem] shadow-md p-6 w-20 rounded-3xl relative overflow-hidden cursor-pointer ${isVisible ? "flex " : "hidden"}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-lg"></div>
      <h3 className="text-3xl -rotate-90 font-bold text-white text-center relative z-10">
        {title}
      </h3>
    </div>
  );
};

// Main Component for Services with Animation
const ServicesWithAnimation = () => {
  const [visibleCards, setVisibleCards] = useState({
    about: false,
    services: false,
    rnd: false,
    industries: false,
  });
  const sections = ["about", "services", "rnd", "industries"];
  const [currentSection, setCurrentSection] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentSection((prev) => {
      if (direction === "next") {
        return (prev + 1) % sections.length; // Loop to the start
      } else if (direction === "prev") {
        return (prev - 1 + sections.length) % sections.length; // Loop to the end
      }
      return prev;
    });
  };

  
  const toggleCard = (card) => {
    setVisibleCards((prev) => ({
      about: card === "about" ? !prev.about : prev.about,
      services: card === "services" ? !prev.services : prev.services,
      rnd: card === "rnd" ? !prev.rnd : prev.rnd,
      industries: card === "industries" ? !prev.industries : prev.industries,
    }));
  };


  const servicesContent = {
    about: [
      {
        image: "/Images/services/about/development.png",
        heading: "Development",
        description: "Delivering scalable software solutions for your unique needs.",
      },
      {
        image: "/Images/services/about/internship.png",
        heading: "Research",
        description: "Designing and building intuitive mobile and web applications to meet your business needs.",
      },
      {
        image: "/Images/services/about/marketing.png",
        heading: "Marketing",
        description: "Crafting intuitive and visually appealing interfaces to improve user satisfaction.",
      },
      {
        image: "/Images/services/about/research.png",
        heading: "Internship",
        description: "Creating and managing targeted social media campaigns to build brand awareness.",
      },
    ],
    services: [
      {
        image: "/Images/services/gigs/app.png",
        heading: "App Development",
        description: "Custom solutions tailored to your business needs.",
      },
      {
        image: "/Images/services/gigs/web.png",
        heading: "Web Development",
        description: "Designing and building intuitive mobile and web applications that meet your business needs.",
      },
      {
        image: "/Images/services/gigs/uiux.png",
        heading: "UIUX Design",
        description: "Crafting intuitive and visually appealing interfaces that improve user satisfaction.",
      },
      {
        image: "/Images/services/gigs/digital.png",
        heading: "Digital Marketing",
        description: "Creating and managing targeted social media campaigns to build brand awareness.",
      },
    ],
    rnd: [
      {
        image: "/Images/services/randD/ai.png",
        heading: "Artificial Intelligence (AI)",
        description: "Delivering scalable software solutions for your unique needs.",
      },
      {
        image: "/Images/services/randD/machine.png",
        heading: "Machine Learning (ML)",
        description: "Designing and building intuitive mobile and web applications that meet your business needs.",
      },
      {
        image: "/Images/services/randD/nlp.png",
        heading: "NLP",
        description: "Crafting intuitive and visually appealing interfaces to improve user satisfaction.",
      },
      {
        image: "/Images/services/randD/blockchain.png",
        heading: "Blockchain Technology",
        description: "Creating and managing targeted social media campaigns to build brand awareness.",
      },
    ],
    industries: [
      {
        image: "/Images/services/industries/travel.png",
        heading: "Travel",
        description: "Enhancing travel experiences with innovative solutions for booking, itinerary management, and more.",
      },
      {
        image: "/Images/services/industries/healthcare.png",
        heading: "Healthcare",
        description: "Designing and building intuitive mobile and web applications that meet healthcare needs.",
      },
      {
        image: "/Images/services/industries/education.png",
        heading: "Education",
        description: "Crafting intuitive and visually appealing interfaces for the education sector.",
      },
      {
        image: "/Images/services/industries/retail.png",
        heading: "Retail",
        description: "Creating and managing targeted social media campaigns to build brand awareness in retail.",
      },
    ],
  };

  // Render the content dynamically based on the active toggle
  const renderContent = () => {
    let sectionContent = [];

    if (visibleCards.about) {
      sectionContent = servicesContent.about;
    } else if (visibleCards.services) {
      sectionContent = servicesContent.services;
    } else if (visibleCards.rnd) {
      sectionContent = servicesContent.rnd;
    } else if (visibleCards.industries) {
      sectionContent = servicesContent.industries;
    } else {
      sectionContent = servicesContent.about; // Default to "About" content if none are selected
    }

    return (
      <div className="flex w-full md:w-[80%] flex-col mr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionContent.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-48 object-cover"
              />
              <div className="absolute px-4 bottom-0 left-0 w-full backdrop-blur-sm bg-black/30 py-3">
                <h3 className="text-left text-xl font-semibold text-white">
                  {item.heading}
                </h3>
                <p className="text-left text-sm text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex mt-4">
          <button className="flex w-full items-center justify-center gap-4 bg-[#c9bee0] border border-[#4E148D] text-[#4E148D] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition duration-300">
            View All
          </button>

          <div className="flex w-[30%] items-center justify-center gap-x-4">
            <AiOutlineArrowLeft
              onClick={() => handleNavigation("prev")}
              size={50}
              className="text-[#4E148D] cursor-pointer border border-[#4E148D] rounded-full p-3"
            />
            <AiOutlineArrowRight
              size={50}
              onClick={() => handleNavigation("next")}
              className="text-[#4E148D] cursor-pointer border border-[#4E148D] rounded-full p-3"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#E8E9F4] py-10 ">
      <div className="container flex justify-end gap-2 mx-auto px-6 md:px-10 h-full lg:px-20">
         <ServiceCard
          title="Services"
          backgroundImage="/Images/services/about/internship.png"
          isVisible={visibleCards.services}
          toggleVisibility={() => toggleCard("services")}
        />
        <ServiceCard
          title="R&D"
          backgroundImage="/Images/services/about/internship.png"
          isVisible={visibleCards.rnd}
          toggleVisibility={() => toggleCard("rnd")}
        />
         <ServiceCard
          title="Industries"
          backgroundImage="/Images/services/about/internship.png"
          isVisible={visibleCards.industries}
          toggleVisibility={() => toggleCard("industries")}
        />
        {/* Content Section */}
        {renderContent()}

        {/* Reverse Service Cards */}
        <ServiceCard
          title="Services"
          backgroundImage="/Images/services/about/internship.png"
          isVisible={!visibleCards.services}
          toggleVisibility={() => toggleCard("services")}
        />
         <ServiceCard
          title="R&D"
          backgroundImage="/Images/services/about/internship.png"
          isVisible={!visibleCards.rnd}
          toggleVisibility={() => toggleCard("rnd")}
        />
        <ServiceCard
          title="Industries"
          backgroundImage="/Images/services/about/internship.png"
          isVisible={!visibleCards.industries}
          toggleVisibility={() => toggleCard("industries")}
        />
      </div>
    </div>
  );
};

export default ServicesWithAnimation;
