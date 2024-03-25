"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const links = [
 {
  text: "Github",
  href: "https://github.com/brianmstricker",
  icon: <FaGithub />,
  hoverColor: "text-slate-400",
 },
 {
  text: "LinkedIn",
  href: "https://www.linkedin.com/in/brian-stricker-a1559b250",
  icon: <FaLinkedin />,
  hoverColor: "text-blue-500",
 },
 {
  text: "Email",
  href: "mailto::hello@brianstricker.com",
  icon: <LuMail />,
  hoverColor: "text-red-500",
 },
];
const Socials = () => {
 const [hovered, setHovered] = useState<string | null>(null);
 return (
  <div className="flex items-center gap-5">
   {links.map((link) => (
    <div key={link.text} className="group">
     <Link
      onMouseEnter={() => setHovered(link.text)}
      onMouseLeave={() => setHovered(null)}
      href={link.href}
      target="_blank"
      className="transition-all duration-300 flex flex-col items-center group"
     >
      <div className="absolute text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -top-20 group-hover:top-28 sm:group-hover:top-[2.75rem] select-none pointer-events-none bg-black px-2 py-1 rounded-lg bg-opacity-0 group-hover:bg-opacity-100 group-hover:z-[6]">
       {link.text}
      </div>
      <span
       className={cn(
        "text-[28px] hover:scale-[110%] transition-all duration-300",
        hovered && hovered !== link.text && "opacity-10",
        hovered && hovered === link.text && link.hoverColor + " z-[5]"
       )}
      >
       {link.icon}
      </span>
     </Link>
     <div className="bg-black/40 backdrop-blur-[2px] fixed z-[2] pointer-events-none w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-300 ease-in group-hover:inset-0 top-1/2 bottom-1/2 left-1/2 right-1/2" />
    </div>
   ))}
  </div>
 );
};
export default Socials;
