import { StaticImageData } from "next/image";
import Carousel from "./Carousel";
import Link from "next/link";
import { FaLink, FaCode } from "react-icons/fa6";

const ProjectCard = ({
 proj,
}: {
 proj: { name: string; images: StaticImageData[]; text: string; description: string; code?: string; site?: string };
}) => {
 return (
  <div key={proj.name} id="projectDiv" className="animate-slideIn">
   <div className="mb-4 flex items-center relative justify-end">
    <h3 className="font-bold text-2xl absolute left-0 min-[400px]:left-1/2 min-[400px]:-translate-x-1/2 w-max">{proj.name}</h3>
    <div className="flex items-center gap-4 text-lg">
     {proj.code && (
      <div className="codeLink relative text-sm rounded-md transition-all duration-300 hover:bg-black focus-within:bg-black">
       <Link href={proj.code} target="_blank" className="block p-2 outline-none">
        <FaCode />
       </Link>
      </div>
     )}
     {proj.site && (
      <div className="siteLink relative text-sm rounded-md transition-all duration-300 hover:bg-black focus-within:bg-black">
       <Link href={proj.site} target="_blank" className="block p-2 outline-none">
        <FaLink />
       </Link>
      </div>
     )}
    </div>
   </div>
   <Carousel images={proj.images} projName={proj.name} />
   <div>
    <div className="text-stone-200/90 mt-1">
     <span className="font-bold text-white">Built with:</span> {proj.text}
    </div>
    <div className="w-full h-2 bg-stone-800/80 rounded-full my-2" />
    <div className="mt-1 text-sm leading-snug sm:leading-normal">{proj.description}</div>
   </div>
  </div>
 );
};
export default ProjectCard;
