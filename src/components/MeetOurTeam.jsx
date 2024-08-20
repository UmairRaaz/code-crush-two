// import drAkhter from "../assets/drAkhter.png";
// import engrFazal from "../assets/engrFazal.png";
// import habib from "../assets/habib.png";
import drAkhter from "../assets/drAkhtertwo.png";
import engrFazal from "../assets/engrFazaltwo.png";
import habib from "../assets/habibtwo.png";

import { motion } from "framer-motion";
import TeamMemberCard from "./TeamSection/TeamMemberCard";
import ViewAllButton from "./Buttons/ViewAllButton";
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
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-4xl text-center md:text-left md:text-5xl font-bold mb-4">
                Our Leadership
              </h1>
              <p className="text-base text-center md:text-left text-gray-600">
                Meet the driving forces behind Code Crush Technologies. Get to
                know the visionary leaders who guide our company with expertise
                and innovation.
                {/* <Link className="text-blue-500">Read More</Link> */}
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <ViewAllButton link={"/all-members"} />
            </div>
          </div>
          <div className="mt-8 px-4 md:px-0 min-h-72 grid gap-8 grid-cols-1 md:grid-cols-3">
            <TeamMemberCard
              image={habib}
              status={"Founder"}
              name={"Dr. Habib Shah"}
              role={"Chief Executive Officer (CEO)"}
              links={"https://www.linkedin.com/in/drhabibshah/"}
            />
            <TeamMemberCard
              image={engrFazal}
              status={"Co-Founder"}
              name={"Engr. Fazli Mola"}
              role={"Chief Technology Officer (CTO)"}
              links={"https://www.linkedin.com/in/fazalbhai/"}
            />
            <TeamMemberCard
              image={drAkhter}
              status={"Co-Founder"}
              name={"Dr. Akhtar Badshah"}
              role={"Chief Finance Officer (CFO)"}
              links={"https://www.linkedin.com/in/akhtar-badshah-41813638/"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MeetOurTeam;
