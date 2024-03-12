"use client";
import { cn } from "@/utils/cn";
import ProjectNames from "./ProjectNames";
import Skills from "./Skills";

type HomeContentRightSideProps = {
 section: string;
 projectNames: string[];
 project: string | null;
 setProject: (project: string | null) => void;
};

const HomeContentRightSide = ({
 section,
 projectNames,
 project,
 setProject,
}: HomeContentRightSideProps) => {
 return (
  <div className="mx-auto sm:flex sm:w-full sm:justify-end sm:order-2">
   {section === "projects" && (
    <ProjectNames
     projectNames={projectNames}
     project={project}
     setProject={setProject}
    />
   )}
   {section === "skills" && <Skills />}
   {section === "contact" && <div>contact</div>}
  </div>
 );
};
export default HomeContentRightSide;
