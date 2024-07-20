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

const services = [
  {
    icon: <FaRegLightbulb />,
    heading: "Consulting",
    description: "Expert advice to guide your business.",
    link: "/view-service/:1",
  },
  {
    icon: <FaCode />,
    heading: "Web Development",
    description: "Building responsive and dynamic websites.",
    link: "/view-service/:1",
  },
  {
    icon: <FaMobileAlt />,
    heading: "Mobile Apps",
    description: "Creating mobile applications for Android and iOS.",
    link: "/view-service/:1",
  },
  {
    icon: <FaChartLine />,
    heading: "SEO",
    description: "Improving your search engine ranking.",
    link: "/view-service/:1",
  },
  {
    icon: <FaSearch />,
    heading: "Market Research",
    description: "In-depth analysis to understand market trends.",
    link: "/view-service/:1",
  },
  {
    icon: <FaLock />,
    heading: "Cybersecurity",
    description: "Protecting your data from cyber threats.",
    link: "/view-service/:1",
  },
  {
    icon: <FaPaintBrush />,
    heading: "Graphic Design",
    description: "Crafting visual content to communicate messages.",
    link: "/view-service/:1",
  },
  {
    icon: <FaServer />,
    heading: "Hosting",
    description: "Reliable and secure hosting services.",
    link: "/view-service/:1",
  },
  {
    icon: <FaHeadset />,
    heading: "Support",
    description: "24/7 customer support to assist you.",
    link: "/view-service/:1",
  },
  {
    icon: <FaShoppingCart />,
    heading: "E-commerce",
    description: "Developing online stores to boost your sales.",
    link: "/view-service/:1",
  },
];

const AllServices = () => {
  const navigate = useNavigate();
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
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.link)}
            className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden group  transform hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer transition-all"
          >
            <div className=" z-10 flex items-center justify-center mb-4 text-blue-500 group-hover:text-white text-5xl">
              {service.icon}
            </div>
            <h3 className="z-10 text-xl text-center font-semibold mb-2 group-hover:text-white">
              {service.heading}
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
