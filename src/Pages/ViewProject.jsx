import { projects } from "../Content/ProjectContent/ProjectDeatils";

import ProjectHero from "../components/ProjectDetailed/ProjectHero";
import AboutProject from "../components/ProjectDetailed/AboutProject";
import ProjectFeatures from "../components/ProjectDetailed/ProjectFeatures";
import ProjectTechnologies from "../components/ProjectDetailed/ProjectTechnologies";
import ProjectNotesAndReview from "../components/ProjectDetailed/ProjectNotesAndReview";

const ViewProject = () => {
  const project = projects[0];
  console.log("project", project);
  return (
    <div>
      <ProjectHero
        name={project.name}
        shortDescription={project.shortDescription}
        image={project.image}
      />
      <div>
        <div className="mt-10 w-[90%] md:relative mx-auto flex md:flex-row flex-col gap-10 p-6 bg-white rounded-lg text-[#06496b]">
          <AboutProject project={project}/>
          <ProjectFeatures project={project}/>
        </div>
      </div>
      <ProjectTechnologies project={project}/>
      <ProjectNotesAndReview project={project}/>
    </div>
  );
};

export default ViewProject;
