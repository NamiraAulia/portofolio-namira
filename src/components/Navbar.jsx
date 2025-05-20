import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <div className="mx-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-xl font-extrabold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
          NA
        </div>
      </div>

      <div className="m-8 flex flex-shrink-0 items-center justify-center gap-4 text-2xl text-gray-800"> {/* Changed text color */}
        <a href="https://www.linkedin.com/in/namira-aulia-333135261/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://github.com/NamiraAulia" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
          <BsGithub />
        </a>
        <a href="mailto:its.namiraaulia@gmail.com" className="hover:text-purple-500 transition-colors">
          <AiFillMail />
        </a>
        <a href="https://www.instagram.com/your_instagram_handle/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;