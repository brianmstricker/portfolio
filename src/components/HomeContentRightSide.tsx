"use client";
import ProjectNames from "./ProjectNames";
import Skills from "./Skills";

type HomeContentRightSideProps = {
 section: string;
 projectNames: string[];
 projectSites: (string | undefined)[];
 projectCodes: (string | undefined)[];
 project: string | null;
 setProject: (project: string | null) => void;
};

const HomeContentRightSide = ({ section, projectNames, projectSites, projectCodes, project, setProject }: HomeContentRightSideProps) => {
 return (
  <div className="mx-auto sm:flex sm:w-full sm:justify-end sm:order-2">
   {section === "projects" && (
    <ProjectNames
     projectNames={projectNames}
     project={project}
     setProject={setProject}
     projectSites={projectSites}
     projectCodes={projectCodes}
    />
   )}
   {section === "skills" && <Skills />}
  </div>
 );
};
export default HomeContentRightSide;
