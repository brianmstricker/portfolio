"use client";
import ProjectNames from "./ProjectNames";
import Resume from "./Resume";
import Skills from "./Skills";

type HomeContentRightSideProps = {
 section: string;
 setSection: (section: string) => void;
 projectNames: string[];
 projectSites: (string | undefined)[];
 projectCodes: (string | undefined)[];
 project: string | null;
 setProject: (project: string | null) => void;
 projectTags: (string | undefined)[];
};

const HomeContentRightSide = ({
 section,
 setSection,
 projectNames,
 projectSites,
 projectCodes,
 project,
 setProject,
 projectTags,
}: HomeContentRightSideProps) => {
 return (
  <div className="mx-auto sm:flex sm:w-full sm:justify-end sm:order-2">
   {section === "projects" && (
    <ProjectNames
     projectNames={projectNames}
     project={project}
     setProject={setProject}
     projectSites={projectSites}
     projectCodes={projectCodes}
     projectTags={projectTags}
    />
   )}
   {section === "skills" && <Skills />}
   {section === "resume" && <Resume setSection={setSection} />}
  </div>
 );
};
export default HomeContentRightSide;
