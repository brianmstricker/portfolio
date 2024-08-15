import HTML from "../assets/HTML.png";
import REACT from "../assets/react.png";
import JAVASCRIPT from "../assets/Javascript.png";
import CSS from "../assets/CSS.png";
import TAILWIND from "../assets/tailwind.png";
import TYPESCRIPT from "../assets/typescript.png";
import VUE from "../assets/vue.png";
import NUXT from "../assets/nuxt.png";
import Image from "next/image";

const images = [
 { name: HTML, style: "shadow-orange-500", text: "HTML" },
 { name: CSS, style: "shadow-blue-600", text: "CSS" },
 { name: JAVASCRIPT, style: "shadow-yellow-400", text: "Javascript" },
 { name: REACT, style: "shadow-cyan-400", text: "React" },
 { name: REACT, style: "shadow-cyan-400", text: "React Native" },
 { name: TAILWIND, style: "shadow-blue-400", text: "Tailwind" },
 { name: TYPESCRIPT, style: "shadow-blue-400", text: "Typescript" },
 { name: VUE, style: "shadow-green-400", text: "Vue" },
 { name: NUXT, style: "shadow-lime-700", text: "Nuxt" },
];

const Skills = () => {
 return (
  <div>
   <div className="grid grid-cols-3 gap-x-4 gap-y-3">
    {images.map((image) => (
     <div className="group select-none pointer-events-none" key={image.text}>
      <div
       className={`bg-main py-3 px-2 sm:px-4 flex flex-col gap-2 rounded-2xl shadow-md mx-auto w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] ${image.style}`}
      >
       <Image
        className="object-contain mx-auto w-full h-full lg:min-w-[50px] lg:min-h-[50px]"
        placeholder="blur"
        src={image.name}
        alt={image.text}
        width={50}
        height={50}
       />
      </div>
      <p className="text-center mx-auto text-[11px] sm:text-sm mt-2 w-fit">{image.text}</p>
     </div>
    ))}
   </div>
  </div>
 );
};
export default Skills;
