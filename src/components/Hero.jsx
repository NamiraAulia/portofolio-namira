import { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/3X4.png";
import { motion } from "framer-motion";

const roles = ["Frontend Developer", "UI/UX Designer", "Full Stack Developer"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pb-16 text-6xl text-gray-800 font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Namira Aulia
            </motion.h1>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent">
              {roles[currentRoleIndex]}
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-gray-600">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex justify-center"
          >
            <img 
              src={profilePic} 
              alt="Namira Aulia" 
              className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;