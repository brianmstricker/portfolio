"use client";

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
   {section === "projects" && <div>projects</div>}
   {section === "skills" && <div>skills</div>}
   {section === "contact" && <div>contact</div>}
  </div>
 );
};
export default HomeContentRightSide;
