import React from "react";
import { FaLinkedin } from "react-icons/fa";
const NewTeamMemberCard = ({ links, status, image, name, role }) => {
  return (
    <div className="pb-4 border border-gray-300  hover:border hover:border-gray-600 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl cursor-pointer py-6">
      <div className="w-full">
        <img
          src={image}
          alt="portrait"
          className="h-[10rem] md:h-[15rem] w-[10rem] md:w-[15rem] mx-auto"
        />
      </div>
      <div className="mt-4 px-4 text-gray-700">
        <div className="flex justify-between mb-1">
          <h1 className="text-xl font-bold text-left flex-1">{name}</h1>
          <a
            href={links}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-400"
          >
            <FaLinkedin size={23} className="text-[#0A66C2]" />
          </a>
        </div>
        <p className="text-left pr-2">
          <span className="font-bold text-red-500">{status}</span> & {role}
        </p>
      </div>
    </div>
  );
};

export default NewTeamMemberCard;
