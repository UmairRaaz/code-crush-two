import React from "react";
import servicepagebg from "../assets/servicepagebg.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs"; 

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    description:
      "Passionate about creating scalable web applications. Loves exploring new technologies.",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    description:
      "Expert in creating intuitive user interfaces. Enjoys solving design challenges.",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    description:
      "Passionate about creating scalable web applications. Loves exploring new technologies.",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    description:
      "Expert in creating intuitive user interfaces. Enjoys solving design challenges.",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    description:
      "Passionate about creating scalable web applications. Loves exploring new technologies.",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    description:
      "Expert in creating intuitive user interfaces. Enjoys solving design challenges.",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
  },
];

const AllTeamMembers = () => {
  return (
    <div className="bg-[#f4f5fa] min-h-screen mt-20">
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
          <h1 className="text-white text-4xl font-bold">All Team Members</h1>
        </div>
      </div>
      <div className="w-[80%] mx-auto py-20">
        <div className="grid grid-cols-2 gap-4 gap-y-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-member bg-white p-6 rounded-lg shadow-md flex"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full w-20 h-20 object-cover mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">{member.name}</h2>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <div className="border-b border-gray-300 mb-2"></div>
                <p className="text-gray-700 mb-4">{member.description}</p>
                <div className="flex gap-2 mt-4 items-center">
                  <a href="#" className="text-gray-600 hover:text-gray-400">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-400">
                    <BsTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-400">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-400">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTeamMembers;
