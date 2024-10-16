import ourTeamBG from "../assets/ourTeamBG.webp";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import LineEffect from "../components/Buttons/LineEffect";
import drAkhter from "/teamImages/sirAkhtar.webp";
import engrFazal from "/teamImages/sirFazal.webp";
import habib from "/teamImages/sirHabib.webp";

import akhtar from "/teamImages/akhtar_zaman_profile.webp";
import aliyan from "/teamImages/aliyan_profile.webp";
import amir from "/teamImages/amir_habib.webp";
import hamza from "/teamImages/hamza_profile.webp";
import israr from "/teamImages/israr_profile.webp";
import kashif from "/teamImages/kashif_profile.webp";
import rahmat from "/teamImages/rahmat_ullah_profile.webp";
import salman from "/teamImages/salman_profile.webp";
import ubaid from "/teamImages/ubaid_profile.webp";
import umair from "/teamImages/umair_profile.webp";
import umar from "/teamImages/umar_profile.webp";
import zain from "/teamImages/zain_profile.webp";
import waqar from "/teamImages/waqar_profile.png";
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
    fullName: "Engr. Amir Habib",
    designation: "Team Lead Code Crush Technologies, Malakand Branch",
    careerSummary:
      "I am an academic researcher with over two years of experience in cybersecurity research and web development. Currently pursuing a PhD in Cybersecurity, I have led multiple IT projects as an IT manager. With over five years of teaching experience, I combine technical and academic expertise to drive innovation.",
    image: amir,
  },
  {
    fullName: "Kashif Chandio",
    designation: "Senior Software Engineer - Mobile",
    careerSummary:
      "Mobile App Developer with 3 years of working experience in flutter, Android & Nodejs. Eager to learn new skills and loves to solve complex problems.",
    image: kashif,
  },
  {
    fullName: "Zainullah Khan",
    designation: "Full Stack Developer",
    careerSummary:
      "I am a highly skilled Full Stack Developer with extensive experience in building dynamic and responsive web applications using MongoDB, Express, React, and Node.js. I specialize in delivering scalable, high-performance solutions with a strong focus on user experience and cutting-edge technology.",
    image: zain,
  },
  {
    fullName: "Salman",
    designation: "Graphic & UI/UX Designer",
    careerSummary:
      "I am Salman, a creative and detail-oriented Graphic & UI/UX Designer with over 4+ years of experience. I excel in designing user-friendly interfaces for both web and mobile applications, focusing on enhancing user experiences. My skills include wireframing, prototyping, and utilizing industry-standard design tools such as Figma, Adobe Illustrator, Adobe After Effects, and Adobe Photoshop. I am passionate about crafting intuitive and visually appealing designs that align with user needs and business objectives.",
    image: salman,
  },
  {
    fullName: "Akhtar Zaman",
    designation: "Graphic & UI/UX Designer",
    careerSummary:
      "I am Akhtar Zaman, a creative and detail-oriented Graphic & UI/UX Designer with over 3+ years of experience. I excel in designing user-friendly interfaces for both web and mobile applications, focusing on enhancing user experiences. My skills include wireframing, prototyping, and utilizing industry-standard design tools such as Figma, Adobe Illustrator, Adobe After Effects, and Adobe Photoshop. I am passionate about crafting intuitive and visually appealing designs that align with user needs and business objectives.",
    image: akhtar,
  },
  {
    fullName: "Rehmat Ullah",
    designation: "Flutter Developer",
    careerSummary:
      "I'm a Flutter developer focused on building seamless, high-performance apps with stunning designs and smooth user experiences. I bring creative solutions to life through clean, efficient code and modern development practices.",
    image: rahmat,
  },
  {
    fullName: "Muhammad Israr",
    designation: "Flutter Intern",
    careerSummary:
      "I specialize in crafting intuitive, cross-platform mobile applications leveraging Flutter's cutting-edge technology. Proficient in developing scalable, user-centric interfaces, I strive to deliver innovative solutions.",
    image: israr,
  },
  {
    fullName: "Waqar",
    designation: "s simply dummy text of the printing and",
    careerSummary:
      "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer t",
    image: waqar,
  },
  {
    fullName: "Umair Raaz",
    designation: "Full Stack Web Developer",
    careerSummary:
      "I am a Full Stack Web Developer with expertise in the MERN stack and Next.js, specializing in building scalable, user-centric applications. I excel in both frontend and backend development, delivering efficient, modern web solutions.",
    image: umair,
  },
  {
    fullName: "Aliyan Rahim",
    designation: "UI/UX Intern",
    careerSummary:
      "I'm a self-motivated and seasoned UI/UX designer with 1 year of hands-on experience. I’m excited to continue growing in the field and contributing to impactful projects.",
    image: aliyan,
  },
  {
    fullName: "umar",
    designation: "s simply dummy text of the printing and",
    careerSummary:
      "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer t",
    image: umar,
  },
  {
    fullName: "Hamza Kashif",
    designation: "Quality Engineer",
    careerSummary:
      "I am Hamza Kashif, working as a Quality Engineer responsible for ensuring products meet high standards through quality control processes and system improvements. I focus on analyzing production systems and driving excellence in product quality.",
    image: hamza,
  },
  {
    fullName: "Ubaid Ullah",
    designation: "Flutter Developer Intern",
    careerSummary:
      "I am a skilled Flutter developer with experience in building cross-platform mobile applications. I specialize in creating high-performance, responsive UIs and integrating complex APIs. My expertise in Dart, combined with a focus on scalable and maintainable code, allows me to deliver efficient solutions for modern app development.",
    image: ubaid,
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
              className="team-member bg-white py-6 px-3 rounded-lg shadow-md flex flex-col gap-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="rounded-full w-20 h-20 object-cover object-center flex-shrink-0 border border-blue-600"
                />
                <div>
                  <div className="flex gap-2 items-center">
                    <h2 className="text-xl font-bold">{member.name}</h2>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      className="text-gray-600 hover:text-gray-400"
                    >
                      <FaLinkedin size={20} className="text-[#0A66C2]" />
                    </a>
                  </div>
                  <p className="text-sm">
                    <i>
                      <span className="text-red-800">{member.status}</span> &{" "}
                      {member.role}
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

        <div className="grid grid-cols-1 mt-20 md:grid-cols-3 gap-4 gap-y-8">
          {teamMembersTwo.map((member, index) => (
            <div
              key={index}
              className="team-member bg-white py-6 px-5 rounded-lg shadow-lg flex flex-col gap-6 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={member.image}
                  alt={member.fullName}
                  className="rounded-full w-20 h-20 object-cover object-center flex-shrink-0 border-2 border-blue-500"
                />
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-blue-800">
                    {member.fullName}
                  </h2>
                  <p className="text-gray-600 mb-2">{member.designation}</p>
                </div>
              </div>
              <div className="border-b border-gray-200"></div>
              <p className="text-gray-700 leading-relaxed text-justify px-3">
                {member.careerSummary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTeamMembers;
