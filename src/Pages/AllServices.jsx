import { useNavigate } from "react-router-dom";
import servicepagebg from "../assets/servicepagebg.jpg";


import LineEffect from "../components/Buttons/LineEffect";
import { industries, rAndDProjects, services } from "../Content/ServiceContent.jsx";
import AllServiceCard from "../components/ServiceSection/AllServicesCard.jsx";



const AllServices = () => {
  const navigate = useNavigate();
  const allupdatesServices = [...services, ...industries, ...rAndDProjects]
  return (
    <div className="mt-20">
      <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${servicepagebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl tracking-widest uppercase font-bold">Services</h1>
        </div>
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        All Services
      </h1>
      <LineEffect />
      <div className="w-[90%] md:max-w-6xl lg:max-w-7xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {services.map((service, index) => (
          <AllServiceCard key={index} image={service.image}  heading={service.title} desc={service.description}
          reverse={index % 2 === 0}
          />
        ))}
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        Industires
      </h1>
      <LineEffect />
      <div className="w-[90%] md:max-w-6xl lg:max-w-7xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {industries.map((service, index) => (
          <AllServiceCard key={index} image={service.image}  heading={service.title} desc={service.description}
          reverse={index % 2 === 0}
          />
        ))}
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        Research and Development Projects
      </h1>
      <LineEffect />
      <div className="w-[90%] md:max-w-6xl lg:max-w-7xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {rAndDProjects.map((service, index) => (
          <AllServiceCard key={index} image={service.image}  heading={service.title} desc={service.description}
          reverse={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
