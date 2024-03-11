"use client";

import Projects from "./Projects";
import Skills from "./Skills";

type HomeContentRightSideProps = {
 section: string;
 setSection: (section: string) => void;
};

const HomeContentRightSide = ({
 section,
 setSection,
}: HomeContentRightSideProps) => {
 return (
  <div className="mx-auto sm:flex sm:w-full sm:justify-end min-h-[314px]">
   {section === "projects" && <Projects />}
   {section === "skills" && <Skills />}
   {section === "contact" && <div>contact</div>}
  </div>
 );
};
export default HomeContentRightSide;
