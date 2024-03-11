"use client";

import { useState } from "react";
import Header from "./Header";
import HomeContentRightSide from "./HomeContentRightSide";

const ContentWrapper = () => {
 const [section, setSection] = useState("projects");
 return (
  <div className="h-full sm:max-h-[80%] w-full relative">
   <Header section={section} setSection={setSection} />
   <div className="h-full sm:grid sm:grid-cols-2 gap-2 sm:gap-4 sm:items-center mt-32 sm:mt-0 flex flex-col justify-evenly max-h-[80%] sm:max-h-full sm:justify-normal">
    <div className="my-1 sm:my-0">
     <div className="flex flex-col max-w-fit mx-auto sm:mx-0">
      <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-widest">
       Welcome.
      </h1>
      <div className="w-full h-1 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-600" />
     </div>
     <p className="mt-2 sm:mt-6 max-w-[29ch] sm:max-w-prose text-stone-400 mx-auto sm:mx-0 text-[15px] sm:text-base leading-snug sm:leading-normal">
      I&apos;m Brian Stricker, a{" "}
      <span className="text-white">software engineer</span> with a focus on{" "}
      <span className="text-white">web development</span>. I&apos;m based in New
      Jersey, and I enjoy all aspects of development, from design to deployment.
     </p>
    </div>
    <HomeContentRightSide section={section} setSection={setSection} />
   </div>
  </div>
 );
};
export default ContentWrapper;
