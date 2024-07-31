import { FaCode, FaWhatsapp } from "react-icons/fa";
import viewservice from "../assets/detailedservices.png";
import { FaRegLightbulb, FaDraftingCompass, FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';
const ViewService = () => {
  const services = [
    {
      id: 1,
      heading: "Frontend Development",
      description:
        "We craft beautiful and responsive user interfaces using modern technologies like React, Angular, and Vue.js. Our frontend development ensures a seamless and engaging user experience across all devices.",
    },
    {
      id: 2,
      heading: "Backend Development",
      description:
        "Our backend development services focus on building robust server-side applications and APIs using technologies like Node.js, Python, and Ruby on Rails. We ensure high performance and scalability for your web solutions.",
    },
    {
      id: 3,
      heading: "Full-Stack Development",
      description:
        "From frontend to backend, our full-stack development services cover all aspects of web development. We integrate various technologies to deliver complete and efficient solutions tailored to your needs.",
    },
  ];
  const processSteps = [
    {
      id: 1,
      heading: 'Discovery',
      description: 'We start by understanding your business needs, goals, and challenges to create a tailored development plan.',
      bgColor: 'bg-green-100',
      icon: <FaRegLightbulb className="h-12 w-12 text-green-500" />
    },
    {
      id: 2,
      heading: 'Design',
      description: 'Our design team crafts wireframes and prototypes to visualize the user interface and user experience of your project.',
      bgColor: 'bg-yellow-100',
      icon: <FaDraftingCompass className="h-12 w-12 text-yellow-500" />
    },
    {
      id: 3,
      heading: 'Development',
      description: 'We build your project using the latest technologies and best practices to ensure high performance and scalability.',
      bgColor: 'bg-blue-100',
      icon: <FaCode className="h-12 w-12 text-blue-500" />
    },
  ];
  
  // Array for Tech Stack
  const techStack = [
    {
      id: 1,
      heading: 'Frontend Technologies',
      description: 'Utilizing modern frontend frameworks such as React, Angular, and Vue.js to build interactive and responsive user interfaces.',
      bgColor: 'bg-purple-100',
      icon: <FaLaptopCode className="h-12 w-12 text-purple-500" />
    },
    {
      id: 2,
      heading: 'Backend Technologies',
      description: 'Leveraging robust backend frameworks and languages like Node.js, Python, and Ruby on Rails to handle server-side operations efficiently.',
      bgColor: 'bg-red-100',
      icon: <FaServer className="h-12 w-12 text-red-500" />
    },
    {
      id: 3,
      heading: 'Database Technologies',
      description: 'Employing powerful databases such as MongoDB, PostgreSQL, and MySQL to manage and store your data securely and efficiently.',
      bgColor: 'bg-teal-100',
      icon: <FaDatabase className="h-12 w-12 text-teal-500" />
    },
  ];
  return (
    <div className="min-h-screen md:mt-20">
      <div className="rounded-b-3xl py-10 bg-[#1588b7] text-white">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 flex flex-col ">
              <FaCode className="text-6xl  mb-4" />
              <h1 className="text-5xl font-bold mb-4">
                Web Development Service
              </h1>
              <p className="text-2xl mb-6 ">
                Conceptualize, Personalize & Go Live.
              </p>
              <p className="text-base mb-6 ">
                Your website serves as the initial point of interaction with
                your customers. Our website development services ensure a
                user-friendly browsing experience. Our team of expert web
                developers integrates interactive elements into an SEO-optimized
                design, guaranteeing exceptional web experiences.
              </p>
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
                src={
                  "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={"image"}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] py-24 mx-auto ">
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="mt-20">
              <h1 className="text-5xl font-semibold">
                Website Development Services We Provide
              </h1>
              <p className="mt-4 text-gray-700">
                Elevate your digital presence with our professional website
                development services. Utilize our expertise to optimize your
                website, making it a strategic asset for driving increased
                traffic and revenue through advanced design and development
                strategies.
              </p>
              <button className="bg-green-600 px-4 py-2 text-white rounded-full mt-4">
                Get a Quote
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={viewservice} alt="image" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border-l-2 border-blue-900 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {service.heading}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="py-12 pb-24 bg-[#1a8aba]">
      <div className="w-[80%] text-white mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Development Process & Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Process of Development Cards */}
          {processSteps.map(step => (
            <div
              key={step.id}
              className={`bg-white shadow-lg rounded-lg overflow-hidden ${step.bgColor}`}
            >
              <div className="p-6 text-center flex flex-col items-center">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl text-gray-700 font-semibold mb-4">{step.heading}</h3>
                <p className="text-gray-700 text-center">{step.description}</p>
              </div>
            </div>
          ))}
          
          {/* Tech Stack Cards */}
          {techStack.map(tech => (
            <div
              key={tech.id}
              className={`bg-white shadow-lg rounded-lg overflow-hidden ${tech.bgColor}`}
            >
              <div className="p-6 flex flex-col items-center">
                <div className="mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl text-gray-700 font-semibold mb-4">{tech.heading}</h3>
                <p className="text-gray-700 text-center">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ViewService;
