// CareerPage.js
import React from "react";
import { useForm } from "react-hook-form";
import "tailwindcss/tailwind.css";
import workWiuthUsBG from "../assets/workWiuthUsBG.webp";
import { NavLink } from "react-router-dom";
import careerPage from "../assets/careerPage.jpg";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRocket } from "react-icons/fa6";
import { GiChaingun } from "react-icons/gi";
const CareerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const features = [
    {
      icon: <BsFillPeopleFill />,
      title: "We Put People First",
      description: `Our strength lies in our team and community. We foster a culture of respect, empathy, and support for everyone.`,
    },
    {
      icon: <FaRocket />,
      title: "We're Always Growing",
      description: `We believe in continuous learning and innovation. Growth is a journey, and we're committed to pushing boundaries.`,
    },
    {
      icon: <GiChaingun />,
      title: "We Are Accessible",
      description: `We ensure our services and opportunities are available to all. Accessibility and inclusivity are at the core of our mission.`,
    },
  ];

  const positions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description:
        "Work on the latest web technologies to build user-friendly interfaces.",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      description: "Develop robust backend systems using modern frameworks.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      description:
        "Design intuitive and engaging user experiences for our products.",
    },
    {
      title: "Project Manager",
      location: "Remote",
      description:
        "Lead project teams to deliver high-quality software solutions.",
    },
  ];
  return (
    <div className="mt-20 bg-gray-50">
      <div
        className="relative h-[70vh] sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[40vh] border"
        style={{
          backgroundImage: `url(${workWiuthUsBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 className="text-white px-4 md:px-10 tracking-widest leading-[3rem] text-center uppercase text-4xl md:text-5xl font-bold">
            Explore Exciting Career <br /> Opportunities with Us
          </h1>
        </div>
      </div>
      <div className="min-h-screen max-w-6xl 2xl:max-w-7xl mx-auto">
        <section className="py-12">
          <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row px-4">
            <div className="w-full md:w-[40%] flex items-center justify-center">
              <img
                src={careerPage}
                alt="careerPage"
                className="w-80 rounded-xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-[60%]">
              <h1 className="text-5xl  font-semibold mb-4">
                Diversity, equity <br />& inclusion
              </h1>
              <p className="text-justify">
                At Code Crush Technology, we believe that diversity fuels
                innovation, equity fosters growth, and inclusion drives success.
                We are committed to building a workplace where every individual
                feels valued, respected, and empowered to bring their authentic
                selves to work. Our diverse team is our greatest strength, and
                we strive to create an environment where different perspectives
                are not only welcomed but celebrated. By embracing diversity,
                promoting equity, and fostering inclusion, we aim to create a
                culture where everyone can thrive and contribute to our shared
                vision.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div>
            <div className="text-center">
              <h1 className="text-5xl font-bold">Intersted in our mission?</h1>
              <p className="text-xl text-gray-700 mt-4">
                Help shape the future with us
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className=" shadow-md p-6 rounded-lg text-center flex flex-col items-center"
                >
                  <div className="text-4xl text-[#4E148D] bg-blue-100 rounded-full p-4 mb-4">
                    {feature.icon}
                  </div>{" "}
                  {/* Icon */}
                  <h2 className="text-2xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 ">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-8">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col gap-8 md:gap-0 md:flex-row justify-between rounded-xl p-6 bg-gray-50 border border-gray-300"
                >
                  <div className="flex flex-col ">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-semibold ">
                        {position.title}
                      </h3>
                      <div>
                        <NavLink
                          to="/careers/apply"
                          className=" text-white bg-[#4E148D] hover:bg-[#6828E8] outline-none text-nowrap rounded-lg px-4 py-2"
                        >
                          Apply Now
                        </NavLink>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{position.location}</p>
                    <p className="text-gray-700">{position.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerPage;
