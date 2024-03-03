import Image from "next/image";
import Link from "next/link";
import { UserCircle } from "./UserCircle";

const Header = () => {
 return (
  <div className="w-full absolute p-4">
   <header className="flex justify-between items-center">
    <UserCircle />
    <nav>
     <ul className="flex space-x-4">
      <li>
       <Link href="#about">about</Link>
      </li>
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
