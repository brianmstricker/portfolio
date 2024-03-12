"use client";

import { useState } from "react";
import Header from "./Header";
import HomeContentRightSide from "./HomeContentRightSide";
import airbnb from "../assets/airbnb.png";
import chirp from "../assets/chirp.png";
import Image from "next/image";
import { cn } from "@/utils/cn";
import About from "./About";

const projects = [
 {
  name: "Airbnb Clone",
  image: airbnb,
  text: "React, Next.js, Tailwind, Prisma, Typescript",
  site: "https://airbnb-clone-brianmstricker.vercel.app/",
  code: "https://github.com/brianmstricker/airbnb-clone",
  description:
   "This is a clone of Airbnb that comes with full booking functionality, image carousels, complete filter and search features, sleek animations, image display modals that are shareable, favorites, and a sleek mobile design.",
 },
 {
  name: "Chirp - Twitter Clone",
  image: chirp,
  text: "React, Next.js 14, Tailwind, Drizzle ORM, Typescript",
  description:
   "A clone of the Twitter website, including a full user authentication system.",
 },
];

const ContentWrapper = () => {
 const [section, setSection] = useState("projects");
 const [project, setProject] = useState<null | string>(null);
 return (
  <div className="h-full sm:max-h-[80%] w-full relative">
   <Header section={section} setSection={setSection} />
   <div
    className={cn(
     "h-full sm:grid gap-2 sm:gap-4 sm:items-center mt-32 sm:mt-0 flex flex-col max-h-[80%] sm:max-h-full sm:justify-normal",
     project && "grid-cols-[2fr_1fr] md:grid-cols-[2.5fr_1fr]",
     !project && "sm:grid-cols-2"
    )}
   >
    <HomeContentRightSide
     section={section}
     projectNames={projects.map((project) => project.name)}
     project={project}
     setProject={setProject}
    />
    <div className="my-1 sm:my-0 sm:order-1">
     <About project={project} section={section} />
     {project && section === "projects" && (
      <div className="mx-auto sm:mx-0">
       {projects
        .filter((proj) => proj.name === project)
        .map((proj) => (
         <div key={proj.name}>
          <div className="text-center font-bold text-xl mb-2">{proj.name}</div>
          <div className="w-fit h-fit">
           <Image
            src={proj.image}
            alt={proj.name}
            width={850}
            className="object-cover"
           />
          </div>
          <div className="text-stone-200/90 mt-1">
           <span className="font-bold text-white">Built with:</span> {proj.text}
          </div>
          <div className="w-full h-2 bg-stone-800/80 rounded-full my-2" />
          <div className="mt-1 text-sm leading-snug sm:leading-normal">
           {proj.description}
          </div>
         </div>
        ))}
      </div>
     )}
    </div>
   </div>
  </div>
 );
};
export default ContentWrapper;
