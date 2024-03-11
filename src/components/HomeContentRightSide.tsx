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
  <div className="ml-auto">
   {section === "projects" && <Projects />}
   {section === "skills" && <Skills />}
   {section === "contact" && <div>contact</div>}
  </div>
 );
};
export default HomeContentRightSide;
