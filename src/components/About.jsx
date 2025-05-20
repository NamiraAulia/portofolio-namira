import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative pb-4">
      <div className="absolute top-0 z-[-2]"></div>
      
      <h2 className="my-20 text-center text-4xl text-gray-800">
        About <span className="text-slate-900">Me</span>
      </h2>
      
      <div className="flex flex-wrap justify-center">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/3 p-4"
        >
          <div className="bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
            <p className="text-black text-lg">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;