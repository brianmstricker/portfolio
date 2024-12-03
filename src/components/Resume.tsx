"use client";

const Resume = ({ setSection }: { setSection: (section: string) => void }) => {
 return (
  <div className="fixed inset-0 bg-black/70 w-full h-full z-[9999] flex items-center justify-center" onClick={() => setSection("projects")}>
   <div onClick={(e) => e.stopPropagation()} className="w-[90%] h-[90%]">
    <iframe src="/Brian-Stricker-Resume.pdf" className="w-full h-full" />
   </div>
  </div>
 );
};
export default Resume;
