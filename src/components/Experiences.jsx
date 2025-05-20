import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="relative pb-4">
      <div className="absolute top-0 z-[-2]"></div>
      
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className="my-20 text-center text-4xl text-gray-900" // Warna teks yang lebih gelap
      >
        Experiences
      </motion.h2>

      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-gray-800">{experience.year}</p> {/* Warna teks yang lebih gelap */}
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="text-lg font-semibold text-gray-900"> {/* Warna teks yang lebih gelap */}
              {experience.role} -{" "}
              <span className="text-sm text-purple-600"> {/* Warna lebih kontras */}
                {experience.company}
              </span>
            </h6>
            <p className="mb-4 text-gray-700">{experience.description}</p> {/* Warna teks yang lebih gelap */}
            <div className="flex flex-wrap">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-2 rounded bg-purple-100 px-2 py-1 text-sm font-medium text-purple-800 shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;