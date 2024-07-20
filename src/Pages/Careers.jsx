// CareerPage.js
import React from "react";
import { useForm } from "react-hook-form";
import "tailwindcss/tailwind.css";
import servicepagebg from "../assets/servicepagebg.jpg";
import { NavLink } from "react-router-dom";
const CareerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const cards = [
    {
      icon: "🔥", // Replace with actual icon
      heading: "Innovative Projects",
      description: "Work on cutting-edge projects that make a difference.",
    },
    {
      icon: "🌐", // Replace with actual icon
      heading: "Global Team",
      description: "Collaborate with a diverse team from around the world.",
    },
    {
      icon: "📈", // Replace with actual icon
      heading: "Career Growth",
      description:
        "Opportunities for continuous learning and career advancement.",
    },
    {
      icon: "💼", // Replace with actual icon
      heading: "Professional Environment",
      description:
        "A professional environment that fosters creativity and excellence.",
    },
    {
      icon: "🕒", // Replace with actual icon
      heading: "Flexible Hours",
      description:
        "Enjoy a flexible work schedule to maintain work-life balance.",
    },
    {
      icon: "🎉", // Replace with actual icon
      heading: "Great Culture",
      description:
        "Be part of a company culture that values collaboration and fun.",
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
    <div className="mt-20 bg-gray-100">
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
          <h1 className="text-white text-4xl font-bold">Work With Us</h1>
        </div>
      </div>
      <div className="min-h-screen w-[80%] mx-auto">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              About Working Here
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="text-4xl mr-4">{card.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {card.heading}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Open Positions
            </h2>
            <div className="grid gap-8">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gray-100 border-b border-gray-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold ">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{position.location}</p>
                    <p className="text-gray-700">{position.description}</p>
                  </div>
                  <div>
                    <NavLink to="/careers/apply" className="mt-4 text-white bg-blue-500 rounded-full px-4 py-2 hover:underline">
                      Apply Now
                    </NavLink>
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
