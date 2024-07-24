import { useNavigate } from "react-router-dom";
import servicepagebg from "../assets/servicepagebg.jpg";
import {
  FaRegLightbulb,
  FaCode,
  FaMobileAlt,
  FaChartLine,
  FaSearch,
  FaLock,
  FaPaintBrush,
  FaServer,
  FaHeadset,
  FaShoppingCart,
} from "react-icons/fa";
import LineEffect from "../components/Buttons/LineEffect";
import { industries, rAndDProjects, services } from "../Content/Services";



const AllServices = () => {
  const navigate = useNavigate();
  const allupdatesServices = [...services, ...industries, ...rAndDProjects]
  return (
    <div className="mt-20">
      <div
        className="relative h-[50vh] border"
        style={{
          backgroundImage: `url(${servicepagebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Services</h1>
        </div>
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        All Services
      </h1>
      <LineEffect />
      <div className="w-[80%] mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allupdatesServices.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(`/view-service/${service.id}`)}
            className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden group  transform hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer transition-all"
          >
            <div className=" z-10 flex items-center justify-center mb-4 text-blue-500 group-hover:text-white text-5xl">
              <FaCode />
            </div>
            <h3 className="z-10 text-xl text-center font-semibold mb-2 group-hover:text-white">
              {service.title}
            </h3>
            <p className=" z-10 text-gray-600 text-center group-hover:text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
