import { projects } from "../Content/ProjectContent/ProjectDeatils";

import ProjectHero from "../components/ProjectDetailed/ProjectHero";
import AboutProject from "../components/ProjectDetailed/AboutProject";
import ProjectFeatures from "../components/ProjectDetailed/ProjectFeatures";
import ProjectTechnologies from "../components/ProjectDetailed/ProjectTechnologies";
import ProjectNotesAndReview from "../components/ProjectDetailed/ProjectNotesAndReview";
import { useParams } from "react-router-dom";
import SuperAdminFeatures from "../components/ProjectDetailed/SuperAdminFeatures";
import AdditionalFeatures from "../components/ProjectDetailed/AdditionalFeatures";
import DetailedFeatures from "../components/ProjectDetailed/DetailedFeatures";

const ViewProject = () => {
  const { projectid } = useParams();
  let project = projects.filter(
    (project) => project.id === parseInt(projectid)
  )[0];

  return (
    <div>
      <ProjectHero
        name={project.name}
        shortDescription={project.shortDescription}
        image={project.image}
        link={project.link}
      />
      <div>
        <div className="mt-10 w-[90%] md:relative mx-auto flex md:flex-row flex-col gap-10 p-6 bg-white rounded-lg text-[#06496b]">
          <div className={`${project.features ? "md:w-[70%]" : "md:w-[70%] w-full"}`}>
            <AboutProject project={project} projectOverViewDetailed={project.overViewDetail} projectOverView={project.overview} />
          </div>
          {project.features && (
            <div className="md:w-1/2">
              <ProjectFeatures project={project} />
            </div>
          )}
        </div>
      </div>

      {project.SuperAdminFeatures && <SuperAdminFeatures project={project} />}
      {project.additionalFeatures && <AdditionalFeatures project={project} />}
      {project.detailedFeatures && <DetailedFeatures project={project} />}
      <ProjectTechnologies project={project} />
      <ProjectNotesAndReview project={project} />
    </div>
  );
};

export default ViewProject;
