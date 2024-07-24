import portraitOne from "../assets/portraitTwo.jpg";
import portraitTwo from "../assets/portraitThree.jpg";
import portraitThree from "../assets/portraitTen.jpg";
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
      <div className="w-[80%] mx-auto">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-8">
              Meet Our Expert Team of Creators, <br /> Designers, and Innovators
              </h1>
              <p className="text-base text-gray-600">
              Get to know the brilliant minds at Code Crush Technology who turn ideas into reality. Our team of visionary creators, expert designers, and skilled problem solvers brings a wealth of knowledge and creativity to every project. <Link className="text-blue-500">Read More</Link>
              </p>
            </div>
            <ViewAllButton link={"/all-members"} />
          </div>
          <div className="mt-8 min-h-72 grid gap-8 grid-cols-1 md:grid-cols-3">
            <TeamMemberCard
              image={portraitOne}
              name={"Ahmed Khan"}
              role={"Lead Software Engineer"}
            />
            <TeamMemberCard
              image={portraitTwo}
              name={"Ahmed Khan"}
              role={"Lead Software Engineer"}
            />
            <TeamMemberCard
              image={portraitThree}
              name={"Ahmed Khan"}
              role={"Lead Software Engineer"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MeetOurTeam;
