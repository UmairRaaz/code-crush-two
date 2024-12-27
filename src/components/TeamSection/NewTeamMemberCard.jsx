import React from 'react'
import { FaLinkedin } from "react-icons/fa";
const NewTeamMemberCard = ({ links, status, image, name, role }) => {
  return (
      <div className=" pb-4 rounded-xl  cursor-pointer py-6">
          <div className="w-full ">
            <img
              src={image}
              alt="portrait"
              className="h-[10rem] md:h-[15rem] w-[10rem] md:w-[15rem] mx-auto "
            />
          </div>
          <div className="mt-4 px-4 text-gray-700">
            <div className="flex justify-between mb-1">
              <h1 className="text-xl font-bold text-left flex-1">{name}</h1>
              <a
                href={links}
                target="_blank"
                className="text-gray-600 hover:text-gray-400"
              >
                <FaLinkedin size={23} className="text-[#0A66C2]" />
              </a>
            </div>
    
            <p className="text-left ">
              <span className="font-bold text-red-500">{status}</span> & {role}
            </p>
          </div>
        </div>
  )
}

export default NewTeamMemberCard