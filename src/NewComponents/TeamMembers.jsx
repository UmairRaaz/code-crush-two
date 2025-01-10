import { NavLink } from "react-router-dom";
import drAkhter from "/Images/TeamMemberImages/sirAkhtar.webp";
import engrFazal from "/Images/TeamMemberImages/sirFazal.webp";
import habib from "/Images/TeamMemberImages/sirHabib.webp";
import { GoArrowUpRight } from "react-icons/go";
import NewTeamMemberCard from "../components/TeamSection/NewTeamMemberCard";
import TeamSlider from "./TeamSlider";
import allTeamMembers from "../Content/teammembers";
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

        <div className="mt-4 px-4 md:px-0 min-h-72 grid gap-x-10 gap-8 grid-cols-1 md:grid-cols-3">
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
      <TeamSlider teamMembersTwo={allTeamMembers} />
    </div>
  );
};

export default TeamMembers;
