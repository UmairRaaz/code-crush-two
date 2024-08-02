import drAkhter from "../assets/drAkhter.png";
import engrFazal from "../assets/engrFazal.png";
import habib from "../assets/habib.png";


import { motion } from "framer-motion";
import TeamMemberCard from "./TeamSection/TeamMemberCard";
import ViewAllButton from "./Buttons/ViewAllButton";
import { Link } from "react-router-dom";
const MeetOurTeam = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className="my-20 mt-28 w-full"
    >
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0  mx-auto">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-8">
              Meet Our Expert Team of Creators, <br /> Designers, and Innovators
              </h1>
              <p className="text-base text-gray-600">
              Get to know the brilliant minds at Code Crush Technology who turn ideas into reality. Our team of visionary creators, expert designers, and skilled problem solvers brings a wealth of knowledge and creativity to every project. 
              {/* <Link className="text-blue-500">Read More</Link> */}
              </p>
            </div>
            <ViewAllButton link={"/all-members"} />
          </div>
          <div className="mt-8 min-h-72 grid gap-8 grid-cols-1 md:grid-cols-3">
            <TeamMemberCard
              image={habib}
              name={"Dr. Habib Shah"}
              role={"Chief Executive Officer (CEO)"}
            />
            <TeamMemberCard
              image={engrFazal}
              name={"Engr. Fazli Mola"}
              role={"Chief Technology Officer (CTO)"}
            />
            <TeamMemberCard
              image={drAkhter}
              name={"Dr. Akhtar Badshah"}
              role={"Chief Finance Officer (CFO)"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MeetOurTeam;
