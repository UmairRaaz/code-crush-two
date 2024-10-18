import React from 'react'
import { FaCogs, FaRobot } from 'react-icons/fa'
import { MdOutlineBubbleChart } from 'react-icons/md'

const ProjectTechnologies = ({project}) => {
  return (
    <div className="max-w-6xl my-10 mx-auto p-8 bg-white  rounded-lg border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#06496b]">
          Technologies Used
        </h2>
        <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.technologiesUsed.map((tech, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 shadow-md hover:shadow-lg h-48" // Add fixed height
            >
              <div className="w-16 h-16 flex items-center justify-center text-blue-500">
                {index % 3 === 0 ? (
                  <FaCogs className="w-full h-full" />
                ) : index % 3 === 1 ? (
                  <FaRobot className="w-full h-full" />
                ) : (
                  <MdOutlineBubbleChart className="w-full h-full" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {tech.title}
              </h3>
              <p className="text-gray-600 text-center">{tech.description}</p>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default ProjectTechnologies