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
};

const ProjectNames = ({ projectNames, project, setProject, projectCodes, projectSites }: ProjectNamesProps) => {
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
  <div className="flex flex-col sm:gap-4 lg:w-[275px] xl:w-[300px]">
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
     {project !== projName && <div className="w-full h-[2px] rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-600" />}
    </button>
   ))}
  </div>
 );
};
export default ProjectNames;
