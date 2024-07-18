import portraitOne from "../assets/portraitTwo.jpg";
import portraitTwo from "../assets/portraitThree.jpg";
import portraitThree from "../assets/portraitTen.jpg";

import TeamMemberCard from "./TeamSection/TeamMemberCard";
import ViewAllButton from "./Buttons/ViewAllButton";
const MeetOurTeam = () => {
  return (
    <div className="min-h-screen my-20 mt-28 w-full">
      <div className="w-[80%] mx-auto">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-8">
                Meet our team of <i>creators</i>, <br /> <i>designers</i>, and
                world-class <br />
                <i>problem solvers</i>
              </h1>
              <p className="text-xl text-gray-600">
                Discover the talent behind our innovative solutions
              </p>
              <p className="text-xl text-gray-600">
                and experience excellence in every project we undertake
              </p>
            </div>
            <ViewAllButton link={"/all-members"}/>
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
    </div>
  );
};

export default MeetOurTeam;
