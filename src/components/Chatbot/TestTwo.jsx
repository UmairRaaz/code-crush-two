import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import portfolioOne from "../assets/portfolioOne.png";
import { BsBoxes } from "react-icons/bs";
import { LiaFlagSolid } from "react-icons/lia";
import { IoBulbOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { projects } from "../Content/ProjectContent/ProjectDeatils";


const TestTwo = () => {
  const { projectid } = useParams();
  const projectContent = projects.filter(
    (project) => project.id === parseInt(projectid, 10)
  );
  const project = projectContent[0];
  return (
    <>
      <div className="bg-[#4E148D] min-h-screen mt-20 rounded-t rounded-3xl">
        <div className="w-[80%] mx-auto flex items-center justify-center pt-28 text-white">
          <div className="flex flex-col md:flex-row  gap-10">
            <div className="md:w-1/2 flex flex-col  ">
              <h1 className="text-5xl font-bold mb-4">{project.name}</h1>
              <h1 className="text-2xl font-semibold mb-4">{project.tagline}</h1>
              <p className="text-lg mb-6">{project.shortDescription}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10  bg-white  mx-auto flex md:flex-row flex-col gap-10 rounded-lg text-[#4E148D]">
          <div className=" w-full">
            <div className="w-[90%] mx-auto">
              <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
                <BsBoxes />
                <span className="border-b-2 border-[#4E148D]">Overview</span>
              </h2>
              {project.overview && (
                <p className="mb-6 text-lg">{project.overview}</p>
              )}
              {project.overViewDetail && (
                <p className="mb-6">
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold mb-4">
                      {project.overViewDetail.name}
                    </h1>
                    <p className="mb-4">{project.overViewDetail.description}</p>
                    <h2 className="text-xl font-semibold mb-2">Components</h2>
                    <ul className="list-disc list-inside mb-4">
                      {project.overViewDetail.components.map(
                        (component, index) => (
                          <li key={index} className="mb-2">
                            <span className="font-semibold">
                              {component.name}:
                            </span>{" "}
                            {component.functionality}
                          </li>
                        )
                      )}
                    </ul>

                    <h2 className="text-xl font-semibold">Benefits</h2>
                    <p>{project.overViewDetail.benefits}</p>
                  </div>
                </p>
              )}
              <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
                <LiaFlagSolid />
                <span className="border-b-2 border-[#4E148D]">Challenges</span>
              </h2>
              <div className="text-lg mb-4 flex flex-col gap-2 ">
                {project.challenges.map((challenge, index) => (
                  <p key={index}>{challenge}</p>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
                <IoBulbOutline />
                <span className="border-b-2 border-[#4E148D]">Solutions</span>
              </h2>
              <div className="mb-6">
                {project.solutions.map((solution, index) => (
                  <p key={index}>{solution}</p>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
                <TbReportAnalytics />
                <span className="border-b-2 border-[#4E148D]">Results</span>
              </h2>
              <div className="mb-6">
                {project.results.map((result, index) => (
                  <p key={index}>{result}</p>
                ))}
              </div>
            </div>
            {project.features && (
              <div className="bg-[#4E148D] py-6 px-10 text-white">
                <div className="w-[90%] mx-auto">
                  <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
                    <TbReportAnalytics />
                    Features
                  </h2>
                  <div className="list-disc list-inside space-y-2">
                    {project.features.map((feature, index) => (
                      <>
                        <div key={index} className="flex gap-2 ">
                          <span className="font-semibold">{feature.title}</span>
                          :{" "}
                          {Array.isArray(feature.description) ? (
                            <ul className=" pl-5">
                              {feature.description.map((desc, descIndex) => (
                                <li key={descIndex}>{desc}</li>
                              ))}
                            </ul>
                          ) : (
                            <p> {feature.description}</p>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="w-[90%] mx-auto px-4 py-8">
              {project.detailedFeatures && (
                <>
                  <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
                    <TbReportAnalytics />
                    Features
                  </h2>
                  {project.detailedFeatures.map((app, index) => (
                    <div
                      key={index}
                      className="mb-6 p-4 border rounded-lg shadow-lg bg-white"
                    >
                      <h2 className="text-xl font-bold text-gray-800 mb-2">
                        {app.appType}
                      </h2>
                      <ul className="list-disc list-inside text-gray-700">
                        {app.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="mb-1">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="w-[90%] mx-auto">
              {project.SuperAdminFeatures && (
                <>
                  <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
                    <TbReportAnalytics />
                    Super Admin Features
                  </h2>
                  <div className="">
                    {project.SuperAdminFeatures.map((feature, index) => (
                      <div key={index} className="flex ">
                        <h1>
                          <span className="font-semibold">{feature.title}</span>{" "}
                          : {feature.description}
                        </h1>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="mt-6 w-[90%] mx-auto">
              <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
              {project.technologiesUsed.map((tech, index) => (
                <div key={index} className="flex ">
                  <h1>
                    <span className="font-semibold">{tech.title}</span> :{" "}
                    {tech.description}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto text-[#06496b]  bg-gray-100 p-4 my-4 mb-10 rounded-lg shadow-md">
        <h1 className="text-xl text-center font-bold">Additional Notes</h1>
        {project.additionalNotes}
      </div>
      <div className="w-[90%] mx-auto  bg-gray-100 p-4 my-4 mb-10 rounded-lg shadow-md">
        <div className=" text-[#06496b] flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl font-bold mb-2">Client Review</h2>
          <p className="mb-4 text-center">{project.clientReview.review}</p>
          <span>{project.clientReview.clientName}</span>
          <div className="flex items-center">
            <p className="text-yellow-500 text-xl mr-2">⭐️⭐️⭐️⭐️⭐️</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestTwo;
