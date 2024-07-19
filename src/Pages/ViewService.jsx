import { FaCode, FaWhatsapp } from "react-icons/fa";

const ViewService = () => {
  const serviceDetails = {
    icon: <FaCode className="text-6xl  mb-4" />,
    heading: "Web Development",
    description:
      "Our web development service focuses on creating responsive, dynamic, and visually appealing websites. We utilize the latest technologies and frameworks to ensure your website is fast, secure, and scalable.",
    features: [
      "Responsive Design",
      "E-commerce Integration",
      "Content Management Systems",
      "SEO Optimization",
      "Custom Web Applications",
    ],
    image:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="min-h-screen py-28 bg-[#1588b7] text-white">
      <div className=" w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex flex-col ">
            {serviceDetails.icon}
            <h1 className="text-4xl font-bold mb-4">
              {serviceDetails.heading}
            </h1>
            <p className="text-lg mb-6 ">
              {serviceDetails.description}
            </p>
            <ul className="list-disc list-inside  space-y-2 mb-6">
              {serviceDetails.features.map((feature, index) => (
                <li key={index} className="">
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/1234567890" // Replace with your WhatsApp number
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg  w-40 hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp className="text-2xl mr-2" />
              Hire Now
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={serviceDetails.image}
              alt={serviceDetails.heading}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewService;
