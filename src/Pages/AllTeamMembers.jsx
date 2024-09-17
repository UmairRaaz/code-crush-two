import ourTeamBG from "../assets/ourTeamBG.webp";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import LineEffect from "../components/Buttons/LineEffect";
// import drAkhter from "../assets/drAkhter.png";
// import engrFazal from "../assets/engrFazal.png";
// import habib from "../assets/habib.png";

import drAkhter from "../assets/drAkhtertwo.png";
import engrFazal from "../assets/engrFazaltwo.png";
import habib from "../assets/habibtwo.png";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Habib Shah",
    role: "Chief Executive Officer (CEO)",
    status: "Founder",
    description:
      "Dr. Habib Shah leads our company with a strategic vision and unwavering commitment to excellence. With extensive experience in executive leadership, he ensures that our organization achieves its goals and delivers exceptional value to our clients.",
    imageUrl: habib,
    social: {
      linkedin: "https://www.linkedin.com/in/drhabibshah/",
    },
  },
  {
    id: 2,
    name: "Engr. Fazli Mola",
    role: "Chief Technology Officer (CTO)",
    status: "Co-Founder",
    description:
      "Engr. Fazli Mola oversees our technology strategy, driving innovation and ensuring the highest standards in our tech solutions. His expertise in engineering and technology leadership is key to our company's success in delivering cutting-edge products.",
    imageUrl: engrFazal,
    social: {
      linkedin: "https://www.linkedin.com/in/fazalbhai/",
    },
  },
  {
    id: 3,
    name: "Dr. Akhtar Badshah",
    role: "Chief Finance Officer (CFO)",
    status: "Co-Founder",
    description:
      "Dr. Akhtar Badshah manages our financial operations with precision and insight. His leadership in financial planning and analysis ensures our company's fiscal health, supporting sustainable growth and long-term success.",
    imageUrl: drAkhter,
    social: {
      linkedin: "https://www.linkedin.com/in/akhtar-badshah-41813638/",
    },
  },
];
const teamMembersTwo = [
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
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
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
  {
    id: 7,
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
  {
    id: 8,
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
          backgroundImage: `url(${ourTeamBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
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
      <p className="text-center max-w-4xl mt-2 mx-auto">
        Get to know the brilliant minds at Code Crush Technology who turn ideas
        into reality. Our team of visionary creators, expert designers, and
        skilled problem solvers brings a wealth of knowledge and creativity to
        every project. Explore their profiles to see how their dedication and
        expertise contribute to delivering innovative and effective solutions
        that exceed expectations.
      </p>
      <div className="w-[80%] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-member bg-white py-6 px-3 rounded-lg shadow-md flex flex-col gap-4 cursor-pointer transition-all"
            >
              <div className="flex  gap-4 items-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="rounded-full  w-20 h-20 object-cover object-center flex-shrink-0 border border-blue-600"
                />
                <div className="">
                  <div className="flex gap-2 items-center">
                    <h2 className="text-xl font-bold">{member.name}</h2>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      className="text-gray-600 hover:text-gray-400"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                  <p className="text-sm">
                    <i>
                      <span className="">{member.status}</span> & {member.role}
                    </i>
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-300 mb-2"></div>
              <p className="text-gray-700 mb-4 text-justify px-3">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="grid grid-cols-1 mt-20 md:grid-cols-4 gap-4 gap-y-8">
          {teamMembersTwo.map((member) => (
            <div
              key={member.id}
              className="team-member bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 cursor-pointer transition-all"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full mx-auto w-20 h-20 object-cover object-center flex-shrink-0"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mt-4 items-center justify-between">
                    <h2 className="text-sm font-bold">{member.name}</h2>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-600 hover:text-gray-400"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                  <p className="text-gray-600 mb-2 text-xs">{member.role}</p>
                  <div className="border-b border-gray-300 mb-2"></div>
                  <p className="text-gray-700 mb-4 text-xs">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AllTeamMembers;
