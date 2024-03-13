import { cn } from "@/utils/cn";

type AboutProps = {
 section: string;
 project: string | null;
};

const About = ({ project, section }: AboutProps) => {
 return (
  <>
   {(!project || section !== "projects") && (
    <div className={cn(section !== "about" && "hidden sm:block")}>
     <div className="flex flex-col max-w-fit mx-auto sm:mx-0">
      <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-widest">
       Welcome
      </h1>
      <div className="w-full h-1 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-600" />
     </div>
     <p className="mt-4 sm:mt-6 max-w-[45ch] sm:max-w-[37ch] lg:max-w-prose text-stone-400 mx-auto sm:mx-0 text-[15px] sm:text-base leading-snug sm:leading-normal">
      I&apos;m Brian Stricker, a{" "}
      <span className="text-white">software engineer</span> with a focus on{" "}
      <span className="text-white">web development</span>. I&apos;m based in New
      Jersey, and I enjoy all aspects of development, from design to deployment.
     </p>
    </div>
   )}
  </>
 );
};
export default About;
