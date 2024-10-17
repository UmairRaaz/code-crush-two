import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import portfolioOne from "../../assets/portfolioOne.png";
import { BsBoxes } from "react-icons/bs";
import { LiaFlagSolid } from "react-icons/lia";
import { IoBulbOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { projects } from "../../Content/ProjectContent/ProjectDeatils";
const projectDetails = {
  title: "Project 1",
  description:
    "This is a detailed description of Project 1. It includes all the key features and functionalities of the project. The project aims to solve specific problems and provide value to its users.",
  features: [
    "Feature 1: Responsive Design",
    "Feature 2: E-commerce Integration",
    "Feature 3: SEO Optimization",
    "Feature 4: Custom Web Applications",
  ],
  technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  imgSrc: portfolioOne,
  liveDemo: "https://example.com",
  githubRepo: "https://github.com/example/project1",
  overview: {
    title: "Overview",
    content:
      "Wise Medical Billing, a trusted provider of medical billing services, partnered with Webicosoft to refine their brand identity. This case study explores the challenges Wise Medical Billing faced, the solutions implemented, and the resulting impact on brand perception and communication.",
  },
  challenges: {
    title: "Challenges",
    content:
      "Their existing branding elements, including logo, letterhead, and business cards, may not have effectively conveyed their professionalism and expertise. So, brand identity was the biggest challenge to tackle because of the competitive medical billing market in the USA.",
  },
  solutions: {
    title: "Solutions",
    content:
      "Webicosoft developed a brand identity solution that aimed to:\n\n" +
      "- **Logo Design:** A new logo was designed to visually represent Wise Medical Billing’s core values. This could involve incorporating elements that symbolize efficiency, accuracy, and reliability, qualities crucial in the medical billing industry.",
  },
  results: {
    title: "Results",
    content:
      "The revamped brand identity aimed to deliver a memorable and distinct logo, along with consistent visual elements, would enhance brand recognition and create a lasting impression on potential clients. Further, delivering a professional and cohesive brand identity would project an image of reliability and expertise,",
  },
  servicesOffered: {
    title: "Services Offered",
    content:
      "Framework & Technology: Illustrator, Photoshop\n\n" +
      "Plugins & Packages: No Plugins & Packages Used\n\n" +
      "Business Industries: Medical Billing",
  },
  clientReview: {
    title: "Client Review",
    content:
      "Webicosoft created a professional and user-friendly website for Wise Medical Billing that has significantly improved our online presence. The design is modern, responsive, and tailored to meet the specific needs of our business. The team at Webicosoft took the time to understand our requirements and incorporated features that enhance the user experience, such as easy navigation, a prominent inquiry form, informative content, and a seamless interface for potential clients to contact us.\n\n",
  },
};

const ViewProjectTest = () => {
  const project = projectDetails;
const testProject = projects[0];
console.log(testProject)
  return (
    <>
      <div className="bg-[#4E148D] my-20 rounded-t rounded-3xl">
        <div className="w-[80%] mx-auto pt-10 text-white">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 flex flex-col ">
              <h1 className="text-4xl font-bold mb-4">{testProject.name}</h1>
              <p className="text-lg mb-6">{testProject.shortDescription}</p>
            </div>
            <div className="md:w-1/2 mb-10">
              <img
                src={testProject.image}
                alt={testProject.name}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 w-[90%] md:relative mx-auto flex md:flex-row flex-col gap-10 p-6 bg-white rounded-lg text-[#06496b]">
          <div className="md:w-[60%] w-full">
            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <BsBoxes />
              {project.overview.title}
            </h2>
            <p className="mb-6">{testProject.overview}</p>

            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <LiaFlagSolid />
              {project.challenges.title}
            </h2>
            <div className="mb-4">
            {testProject.challenges.map((challenge, index) => (
                <p className="mb-1" key={index}>{challenge}</p>
            ))}
            </div>
            {/* <p className="mb-6">{project.challenges.content}</p> */}

            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <IoBulbOutline />
              {project.solutions.title}
            </h2>
           
            <div className="mb-4">
            {testProject.solutions.map((solution, index) => (
                <p className="mb-1" key={index}>{solution}</p>
            ))}
            </div>
            <h2 className="text-2xl font-bold mb-4 flex gap-2 items-center">
              <TbReportAnalytics />
              {project.results.title}
            </h2>
            <div className="mb-4">
            {testProject.results.map((result, index) => (
                <p className="mb-1" key={index}>{result}</p>
            ))}
            </div>
          </div>
          <div className="md:w-[40%] w-full shadow-2xl min-h-20 p-4 md:absolute top-0 right-0">
            <ul className="list-disc list-inside space-y-2">
              {testProject.features.map((feature, index) => (
                <li key={index} className="">
                  {feature.title} : {feature.description}
                </li>
              ))}
            </ul>
            <div className="mt-6">
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
            </div>
            <div className="mt-6 flex md:flex-row flex-col gap-4">
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
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto  bg-gray-100 p-4 my-4 mb-10 rounded-lg shadow-md">
        <div className=" text-[#06496b] flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl font-bold mb-2">{testProject.clientReview.clientName}</h2>
          <p className="mb-4 text-center">
            {testProject.clientReview.review}
          </p>
          <div className="flex items-center">
            <p className="text-yellow-500 text-xl mr-2">⭐️⭐️⭐️⭐️⭐️</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProjectTest;