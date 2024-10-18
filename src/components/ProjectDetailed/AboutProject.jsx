import React from 'react';
import { BsBoxes } from 'react-icons/bs';
import { IoBulbOutline } from 'react-icons/io5';
import { LiaFlagSolid } from 'react-icons/lia';
import { TbReportAnalytics } from 'react-icons/tb';
import DetailedOverView from './DetailedOverView';

const AboutProject = ({ project, projectOverViewDetailed, projectOverView }) => {
  console.log(projectOverView)
  console.log(projectOverViewDetailed)
  return (
    <div className="w-full">
      {/* Show either projectOverView or projectOverViewDetailed depending on which one is defined */}
      {projectOverView && !projectOverViewDetailed && (
        <div>
          <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
            <BsBoxes />
            Overview
          </h2>
          <p className="mb-6 text-justify">{projectOverView}</p>
        </div>
      )}

      {projectOverViewDetailed && !projectOverView && (
        <div>
          <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
            <BsBoxes />
            Detailed Overview
          </h2>
          {/* <p className="mb-6 text-justify">{projectOverViewDetailed}</p> */}
          <DetailedOverView projectOverViewDetailed={projectOverViewDetailed}/>
        </div>
      )}

      {/* Other project sections */}
      <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
        <LiaFlagSolid />
        Challenge
      </h2>
      <div className="mb-4">
        {project.challenges.map((challenge, index) => (
          <p className="mb-1 text-justify" key={index}>
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
          <p className="mb-1 text-justify" key={index}>
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
          <p className="mb-1 text-justify" key={index}>
            {result}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutProject;
