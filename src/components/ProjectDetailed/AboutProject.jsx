import React from 'react'
import { BsBoxes } from 'react-icons/bs'
import { IoBulbOutline } from 'react-icons/io5'
import { LiaFlagSolid } from 'react-icons/lia'
import { TbReportAnalytics } from 'react-icons/tb'

const AboutProject = ({project}) => {
  return (
    <div className="md:w-[60%] w-full">
            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <BsBoxes />
              Overview
            </h2>
            <p className="mb-6">{project.overview}</p>

            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <LiaFlagSolid />
              Challenge
            </h2>
            <div className="mb-4">
              {project.challenges.map((challenge, index) => (
                <p className="mb-1" key={index}>
                  {challenge}
                </p>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <IoBulbOutline />
              Solutions
            </h2>

            <div className="mb-4">
              {project.solutions.map((solution, index) => (
                <p className="mb-1" key={index}>
                  {solution}
                </p>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <TbReportAnalytics />
              Results
            </h2>
            <div className="mb-4">
              {project.results.map((result, index) => (
                <p className="mb-1" key={index}>
                  {result}
                </p>
              ))}
            </div>
          </div>
  )
}

export default AboutProject