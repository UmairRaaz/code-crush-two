import React from 'react'

const ProjectFeatures = ({project}) => {
  return (
    <div className="md:w-[37%] w-full shadow-2xl min-h-20 p-4 md:absolute top-0 right-0">
            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="">
                  <span className='font-semibold'>{feature.title}</span> : {feature.description}
                </li>
              ))}
            </ul>
            {/* <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div> */}
            {/* <div className="mt-6 flex md:flex-row flex-col gap-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 whitespace-nowrap text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 whitespace-nowrap text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
              >
                GitHub Repo
              </a>
            </div> */}
          </div>
  )
}

export default ProjectFeatures