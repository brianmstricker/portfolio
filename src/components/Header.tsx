import Link from "next/link";
import { UserCircle } from "./UserCircle";
import Socials from "./Socials";

const Header = () => {
 return (
  <div className="w-full absolute">
   <header className="flex justify-between items-center">
    <div className="flex items-center gap-7">
     <UserCircle />
     <Socials />
    </div>
    <nav>
     <ul className="flex space-x-4">
      <li>
       <Link href="#projects">projects</Link>
      </li>
      <li>
       <Link href="#contact">contact</Link>
      </li>
     </ul>
    </nav>
   </header>
  </div>
 );
};
export default Header;
