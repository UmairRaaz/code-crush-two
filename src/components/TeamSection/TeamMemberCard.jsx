import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const TeamMemberCard = ({ links, status, image, name, role }) => {
  return (
    <div className=" pb-4 rounded-xl hover:scale-105 transition-all cursor-pointer py-6">
      <div className="w-full ">
        <img
          src={image}
          alt="portrait"
          className="h-[10rem] md:h-[13rem] w-[10rem] md:w-[13rem]  rounded-full mx-auto "
        />
      </div>
      <div className="mt-4 px-4 text-gray-700">
        <div className="flex justify-between mb-1">
          <h1 className="text-xl font-bold text-center flex-1">{name}</h1>
          <a
            href={links}
            target="_blank"
            className="text-gray-600 hover:text-gray-400"
          >
            <FaLinkedin size={23} />
          </a>
        </div>

        <p className="text-center text-nowrap">
          {status} & {role}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
