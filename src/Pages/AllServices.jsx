import { useNavigate } from "react-router-dom";
import serviceBG from "../assets/serviceBG.webp"

import LineEffect from "../components/Buttons/LineEffect";
import { industries, rAndDProjects, services } from "../Content/ServiceContent.jsx";
import AllServiceCard from "../components/ServiceSection/AllServicesCard.jsx";



const AllServices = () => {
  const navigate = useNavigate();
  return (
    <div className="my-20 bg-white">
      <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${serviceBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl tracking-widest uppercase font-bold">Services</h1>
        </div>
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        All Services
      </h1>
      <LineEffect />
      <div className="w-[90%] md:max-w-6xl lg:max-w-7xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {services.map((service, index) => (
          <AllServiceCard page={"view-service"} deatiledServiceId={service.deatiledServiceId} key={index} image={service.image}  heading={service.title} desc={service.description}
          reverse={index % 2 === 0}
          />
        ))}
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        Industires
      </h1>
      <LineEffect />
      <div className="w-[90%] md:max-w-6xl lg:max-w-7xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {industries.map((service, index) => (
          <AllServiceCard page={"view-industries"} key={index} image={service.image}  heading={service.title} desc={service.description}
          reverse={index % 2 === 0}
          />
        ))}
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        Research & Development
      </h1>
      <LineEffect />
      <div className="w-[90%] md:max-w-6xl lg:max-w-7xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {rAndDProjects.map((service, index) => (
          <AllServiceCard key={index} page={"view-research-and-development"} deatiledServiceId={service.linkid} image={service.image}  heading={service.title} desc={service.description}
          reverse={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
