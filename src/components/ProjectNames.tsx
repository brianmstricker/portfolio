"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

type ProjectNamesProps = {
 projectNames: string[];
 projectSites: (string | undefined)[];
 projectCodes: (string | undefined)[];
 project: string | null;
 setProject: (project: string | null) => void;
 projectTags: (string | undefined)[];
};

const ProjectNames = ({ projectNames, project, setProject, projectCodes, projectSites, projectTags }: ProjectNamesProps) => {
 const [finished, setFinished] = useState(true);
 const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  if (!finished) return;
  const name = e.currentTarget.id;
  const projectDiv = document.getElementById("projectDiv");
  if (name !== project) {
   setProject(name);
  }
  if (name === project) {
   setFinished(false);
   projectDiv?.classList.remove("animate-slideIn");
   projectDiv?.classList.add("animate-slideOut");
   setTimeout(() => {
    setProject(null);
   }, 800);
   setTimeout(() => {
    setFinished(true);
   }, 1000);
  }
 };
 return (
  <div className="flex flex-col gap-1 sm:gap-8 lg:w-[275px] xl:w-[300px] whitespace-nowrap">
   {projectNames.map((projName) => (
    <button
     onClick={handleClick}
     key={projName}
     id={projName}
     tabIndex={project === projName ? -1 : 0}
     className={cn(
      "font-semibold text-xl w-fit transition-all duration-300 ease-in-out group project-name relative cursor-pointer outline-none",
      project === projName && "text-stone-400 hover:text-stone-400/70",
      project !== projName && "hover:scale-110 lg:hover:tracking-wider focus:scale-110 lg:focus:tracking-widest"
     )}
    >
     {project !== projName && (
      <div className="absolute -left-4 bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-600 text-transparent bg-clip-text opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-focus:opacity-100">
       •
      </div>
     )}
     {project === projName && (
      <div className="absolute -left-4 top-2 lg:-left-5 lg:top-1.5 transition-all duration-300 ease-in-out">
       <IoClose className="text-red-500 text-sm lg:text-base" />
      </div>
     )}
     <span className="text-sm lg:text-lg">{projName}</span>
     {projectTags[projectNames.indexOf(projName)] && (
      <span
       className={cn(
        "text-xs text-stone-200 bg-orange-600 p-0.5 sm:p-1 rounded-md absolute sm:-bottom-6 sm:left-0 pointer-events-none ml-2 mt-1.5 sm:ml-0 sm:mt-0",
        project === projName ? "opacity-100 duration-1000 ease-in-out" : "opacity-0 duration-0"
       )}
      >
       {projectTags[projectNames.indexOf(projName)]}
      </span>
     )}
     {project !== projName && <div className="w-full h-[2px] rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-600" />}
    </button>
   ))}
  </div>
 );
};
export default ProjectNames;
