import { NavLink } from "react-router-dom";
import drAkhter from "/Images/TeamMemberImages/sirAkhtar.webp";
import engrFazal from "/Images/TeamMemberImages/sirFazal.webp";
import habib from "/Images/TeamMemberImages/sirHabib.webp";
import { GoArrowUpRight } from "react-icons/go";
import NewTeamMemberCard from "../components/TeamSection/NewTeamMemberCard";
import AllTeamMembers from "../components/TeamSection/AllTeamMembers";
import { FaLinkedin } from "react-icons/fa";
import akhtar from "/Images/TeamMemberImages/akhtar_zaman_profile.webp";
import amir from "/Images/TeamMemberImages/amir_habib.webp";
import kashif from "/Images/TeamMemberImages/kashif_profile.webp";
import salman from "/Images/TeamMemberImages/salman_profile.webp";
import zain from "/Images/TeamMemberImages/zain_profile.webp";
import TeamSlider from "./TeamSlider";
const teamMembers = [
  {
    image: habib,
    status: "Founder",
    name: "Dr. Habib Shah",
    role: "Chief Executive Officer (CEO)",
    links: "https://www.linkedin.com/in/drhabibshah/",
  },
  {
    image: engrFazal,
    status: "Co-Founder",
    name: "Engr. Fazli Mola",
    role: "Chief Technology Officer (CTO)",
    links: "https://www.linkedin.com/in/fazalbhai/",
  },
  {
    image: drAkhter,
    status: "Co-Founder",
    name: "Dr. Akhtar Badshah",
    role: "Chief Finance Officer (CFO)",
    links: "https://www.linkedin.com/in/akhtar-badshah-41813638/",
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
    designation: "Senior Graphic & UI/UX Designer",
    careerSummary:
      "I am Salman, a creative and detail-oriented Graphic & UI/UX Designer with over 4+ years of experience. I excel in designing user-friendly interfaces for both web and mobile applications, focusing on enhancing user experiences. My skills include wireframing, prototyping, and utilizing industry-standard design tools such as Figma, Adobe Illustrator, Adobe After Effects, and Adobe Photoshop. I am passionate about crafting intuitive and visually appealing designs that align with user needs and business objectives.",
    image: salman,
  },
  {
    fullName: "Akhtar Zaman",
    designation: "Sr. Graphic & UI/UX Designer",
    careerSummary:
      "I am Akhtar Zaman, a creative and detail-oriented Graphic & UI/UX Designer with over 3+ years of experience. I excel in designing user-friendly interfaces for both web and mobile applications, focusing on enhancing user experiences. My skills include wireframing, prototyping, and utilizing industry-standard design tools such as Figma, Adobe Illustrator, Adobe After Effects, and Adobe Photoshop. I am passionate about crafting intuitive and visually appealing designs that align with user needs and business objectives.",
    image: akhtar,
  },
];
const TeamMembers = () => {
  return (
    <div>
      <div className="w-full">
        <div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full">
              {/* Header and Button */}
              <div className="flex w-full justify-between items-start ">
                <h1 className="text-4xl text-left text-gray-700 md:text-5xl font-bold mb-4">
                  Our Leadership
                </h1>

                <div className="flex justify-center md:justify-end">
                  <NavLink
                    className="text-xl rounded-full flex gap-x-2 items-center justify-center text-white h-10 bg-[#4e148d] whitespace-nowrap px-4 py-1"
                    to={"/all-members"}
                  >
                    <p>View All</p>
                    <span>
                      <GoArrowUpRight size={20} />
                    </span>
                  </NavLink>
                </div>
              </div>

              {/* Description Text */}
              <p className="text-base text-left md:text-left text-gray-600">
                Meet the driving forces behind Code Crush Technologies. Get to
                know the visionary leaders who guide our company with expertise
                and innovation.
              </p>
            </div>
          </div>

          <div className="mt-8 px-4 md:px-0 min-h-72 grid gap-x-10 gap-8 grid-cols-1 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <NewTeamMemberCard
                key={index}
                image={member.image}
                status={member.status}
                name={member.name}
                role={member.role}
                links={member.links}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex mt-8 flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-4xl text-left text-gray-700 md:text-5xl font-bold mb-4">
              Core team
              </h1>
              <p className="text-base text-left md:text-left text-gray-600">
                Follow our team on LinkedIn for updates, achievements, and
                industry insights. See how we’re making an impact in the tech
                world.
              </p>
            </div>
          </div>
         
        </div>
        <TeamSlider teamMembersTwo={teamMembersTwo} />
      </div>
    </div>
  );
};

export default TeamMembers;
