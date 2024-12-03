"use client";
import { UserCircle } from "./UserCircle";
import Socials from "./Socials";
import { cn } from "@/utils/cn";

type HeaderProps = {
 section: string;
 setSection: (section: string) => void;
};

const links = ["about", "projects", "skills", "resume"];

const Header = ({ section, setSection }: HeaderProps) => {
 const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const name = e.currentTarget.name;
  setSection(name);
 };
 return (
  <div className="w-full mt-20">
   <header className="flex justify-between sm:items-center flex-col sm:flex-row">
    <div className="flex items-center gap-7 justify-between">
     <UserCircle />
     <Socials />
    </div>
    <nav className="mx-auto sm:mx-0 mt-4 sm:mt-0">
     <ul className="flex space-x-4">
      {links.map((link) => (
       <li key={link} className={cn("relative group flex justify-center", link === "about" && "block sm:hidden")}>
        <button
         className={cn("outline-none", section === link && "text-stone-400 cursor-default")}
         onClick={onButtonClick}
         name={link}
         tabIndex={section === link ? -1 : 0}
        >
         <span className="text-[15px] sm:text-base capitalize">{link}</span>
        </button>
        {section !== link && (
         <div className="bg-orange-400 -bottom-1 rounded-full absolute w-0 h-0 opacity-0 group-hover:w-full group-hover:h-1 group-hover:opacity-100 group-focus-within:w-full group-focus-within:h-1 group-focus-within:opacity-100 transition-all duration-200 mx-auto" />
        )}
       </li>
      ))}
     </ul>
    </nav>
   </header>
  </div>
 );
};
export default Header;
