import React from 'react'

const ProjectHero = ({name, shortDescription, image}) => {
  return (
    <div className="bg-[#4E148D] my-20 rounded-t rounded-3xl">
        <div className="w-[80%] mx-auto pt-10 text-white">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 flex flex-col ">
              <h1 className="text-4xl font-bold mb-4">{name}</h1>
              <p className="text-lg mb-6">{shortDescription}</p>
            </div>
            <div className="md:w-1/2 mb-10">
              <img
                src={image}
                alt={name}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectHero