"use client";
import { UserCircle } from "./UserCircle";
import Socials from "./Socials";
import { cn } from "@/utils/cn";

type HeaderProps = {
 section: string;
 setSection: (section: string) => void;
};

const links = ["projects", "skills", "contact"];

const Header = ({ section, setSection }: HeaderProps) => {
 const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const name = e.currentTarget.name;
  setSection(name);
 };
 return (
  <div className="w-full absolute mt-4">
   <header className="flex justify-between sm:items-center flex-col sm:flex-row">
    <div className="flex items-center gap-7 justify-between">
     <UserCircle />
     <Socials />
    </div>
    <nav className="mx-auto sm:mx-0 mt-4 sm:mt-0">
     <ul className="flex space-x-4">
      {links.map((link) => (
       <li key={link} className="relative group flex justify-center">
        <button
         className={cn(section === link && "text-stone-400 cursor-default")}
         onClick={onButtonClick}
         name={link}
        >
         {link}
        </button>
        {section !== link && (
         <div className="bg-orange-400 -bottom-1 rounded-full absolute w-0 h-0 opacity-0 group-hover:w-full group-hover:h-1 group-hover:opacity-100 transition-all duration-200 mx-auto" />
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
