"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import HomeContentRightSide from "./HomeContentRightSide";
import airbnb from "../assets/airbnb.png";
import airbnb1 from "../assets/airbnb1.png";
import airbnb2 from "../assets/airbnb2.png";
import airbnb7 from "../assets/airbnb7.png";
import airbnb9 from "../assets/airbnb9.png";
import airbnb10 from "../assets/airbnb10.png";
import chirp from "../assets/chirp.png";
import { cn } from "@/utils/cn";
import About from "./About";
import ProjectCard from "./ProjectCard";

const projects = [
 {
  name: "Airbnb Clone",
  images: [airbnb, airbnb1, airbnb2, airbnb7, airbnb9, airbnb10],
  text: "React, Next.js, Tailwind, Prisma, Typescript",
  site: "https://airbnb.brianstricker.com/",
  code: "https://github.com/brianmstricker/airbnb-clone",
  description:
   "This is a clone of Airbnb that comes with full booking functionality, image carousels, complete filter and search features, sleek animations, image display modals that are shareable, favorites, and a sleek mobile design.",
 },
 {
  name: "Chirp - Twitter Clone",
  images: [chirp],
  text: "React, Next.js 14, Tailwind, Drizzle ORM, Typescript",
  description: "A clone of the Twitter website, including a full user authentication system.",
 },
];

const ContentWrapper = () => {
 const [section, setSection] = useState("projects");
 const [project, setProject] = useState<null | string>(null);
 const [windowWidth, setWindowWidth] = useState(0);
 useEffect(() => {
  if (!window) return;
  const handleResize = () => {
   setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);
 useEffect(() => {
  if (windowWidth > 640 && section === "about") {
   setSection("projects");
  }
 }, [section, windowWidth]);
 return (
  <div id="contentWrapper" className="h-full min-h-screen w-full relative flex flex-col">
   <Header section={section} setSection={setSection} />
   <div
    className={cn(
     "flex-1 h-full sm:grid gap-10 xl:gap-0 sm:items-center mt-6 sm:mt-0 flex flex-col  sm:max-h-full sm:justify-normal mb-20",
     project && "grid-cols-[2fr_1fr] md:grid-cols-[2.5fr_1fr]",
     !project && "sm:grid-cols-2"
    )}
   >
    <HomeContentRightSide
     section={section}
     projectNames={projects.map((project) => project.name)}
     projectSites={projects.map((project) => project.site)}
     projectCodes={projects.map((project) => project.code)}
     project={project}
     setProject={setProject}
    />
    <div className="my-1 sm:my-0 sm:order-1">
     <About project={project} section={section} />
     {project && section === "projects" && (
      <div className="mx-auto sm:mx-0 mt-2 sm:mt-8">
       {projects
        .filter((proj) => proj.name === project)
        .map((proj) => (
         <ProjectCard key={proj.name} proj={proj} />
        ))}
      </div>
     )}
    </div>
   </div>
  </div>
 );
};
export default ContentWrapper;
