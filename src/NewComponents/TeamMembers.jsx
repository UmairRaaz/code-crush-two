import { NavLink } from "react-router-dom";
import drAkhter from "/Images/TeamMemberImages/sirAkhtar.webp";
import engrFazal from "/Images/TeamMemberImages/sirFazal.webp";
import habib from "/Images/TeamMemberImages/sirHabib.webp";
import { GoArrowUpRight } from "react-icons/go";
import NewTeamMemberCard from "../components/TeamSection/NewTeamMemberCard";
import AllTeamMembers from "../components/TeamSection/AllTeamMembers";
import { FaLinkedin } from "react-icons/fa";
import akhtar from "/Images/TeamMemberImages/akhtar_zaman_profile.webp";
import aliyan from "/Images/TeamMemberImages/aliyan_profile.webp";
import amir from "/Images/TeamMemberImages/amir_habib.webp";
import hamza from "/Images/TeamMemberImages/hamza_profile.webp";
import israr from "/Images/TeamMemberImages/israr_profile.webp";
import kashif from "/Images/TeamMemberImages/kashif_profile.webp";
import rahmat from "/Images/TeamMemberImages/rahmat_ullah_profile.webp";
import salman from "/Images/TeamMemberImages/salman_profile.webp";
import ubaid from "/Images/TeamMemberImages/ubaid_profile.webp";
import umair from "/Images/TeamMemberImages/umair_profile.webp";
import umar from "/Images/TeamMemberImages/umar_profile.webp";
import zain from "/Images/TeamMemberImages/zain_profile.webp";
import waqar from "/Images/TeamMemberImages/waqar_profile.webp";
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
    fullName: "Waqar Ahmed",
    designation: "Flutter Intern",
    careerSummary:
      "I am a skilled Flutter Developer with experience in Flutter, Firebase, SQL, local and push notifications, and role-based authentication, focused on creating efficient and user-friendly mobile applications.",
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
    fullName: "Umar Aziz",
    designation: "Digital Marketing Executive",
    careerSummary:
      "I am a digital marketer, managing social media platforms, SEO, and optimizing websites and apps. Skilled in running ad campaigns across Facebook, YouTube, Google, and more.",
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
const TeamMembers = () => {
  return (

      <div className="w-full  px-3 md:px-0">
        <div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full">
              {/* Header and Button */}
              <div className="flex  justify-between items-start ">
                <h1 className="text-4xl w-1/2 md:w-full text-left text-gray-700 md:text-5xl font-bold mb-4">
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

  );
};

export default TeamMembers;
