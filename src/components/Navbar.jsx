import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import  { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <div className="mx-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-xl font-extrabold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
          NA
        </div>
      </div>

      <div className="m-8 flex flex-shrink-0 items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <BsGithub />
        <AiFillMail />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar; 
