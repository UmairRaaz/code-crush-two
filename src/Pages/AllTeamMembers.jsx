import React from "react";
import servicepagebg from "../assets/servicepagebg.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import LineEffect from "../components/Buttons/LineEffect";
import drAkhter from "../assets/drAkhter.png";
import engrFazal from "../assets/engrFazal.png";
import habib from "../assets/habib.png";
const teamMembers = [
  {
    id: 1,
    name: "Dr. Habib Shah",
    role: "Chief Executive Officer (CEO)",
    description:
      "Dr. Habib Shah leads our company with a strategic vision and unwavering commitment to excellence. With extensive experience in executive leadership, he ensures that our organization achieves its goals and delivers exceptional value to our clients.",
    imageUrl: habib,
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Engr. Fazli Mola",
    role: "Chief Technology Officer (CTO)",
    description:
      "Engr. Fazli Mola oversees our technology strategy, driving innovation and ensuring the highest standards in our tech solutions. His expertise in engineering and technology leadership is key to our company's success in delivering cutting-edge products.",
    imageUrl: engrFazal,
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: 3,
    name: "Dr. Akhtar Badshah",
    role: "Chief Finance Officer (CFO)",
    description:
      "Dr. Akhtar Badshah manages our financial operations with precision and insight. His leadership in financial planning and analysis ensures our company's fiscal health, supporting sustainable growth and long-term success.",
    imageUrl: drAkhter,
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
];


const AllTeamMembers = () => {
  return (
    <div className="bg-[#f4f5fa] mt-20">
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
          <h1 className="text-white tracking-widest uppercase text-2xl md:text-4xl font-bold">
            Our Team
          </h1>
        </div>
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        All Team Members
      </h1>
      <LineEffect />
      <p className="text-center max-w-4xl mt-2 mx-auto">Get to know the brilliant minds at Code Crush Technology who turn ideas into reality. Our team of visionary creators, expert designers, and skilled problem solvers brings a wealth of knowledge and creativity to every project. Explore their profiles to see how their dedication and expertise contribute to delivering innovative and effective solutions that exceed expectations.</p>
      <div className="w-[80%] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8">
        {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-member bg-white p-6 rounded-lg shadow-md flex md:flex-row flex-col gap-4 cursor-pointer transition-all"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full w-20 h-20 object-cover object-center flex-shrink-0"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <div className="border-b border-gray-300 mb-2"></div>
                  <p className="text-gray-700 mb-4">{member.description}</p>
                </div>
                <div className="flex gap-2 mt-4 items-center">
                  <a href={member.social.twitter} className="text-gray-600 hover:text-gray-400">
                    <BsTwitter size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-gray-400">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.social.dribbble || member.social.github} className="text-gray-600 hover:text-gray-400">
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
