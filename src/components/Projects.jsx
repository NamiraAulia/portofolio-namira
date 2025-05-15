import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-lg rounded-2xl bg-neutral-900 p-6 shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-neutral-400 hover:text-white text-2xl"
        >
          &times;
        </button>

       
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images?.map((img, idx) => (
            <img key={idx} src={img} alt={project.title} className="rounded border border-neutral-800" />
          ))}
        </div>


        <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
        <p className="text-neutral-300 mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="rounded bg-neutral-800 px-3 py-1 text-xs text-purple-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" className="text-sm text-white hover:text-purple-400 flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
          )}
          {project.figma && (
            <a href={project.figma} target="_blank" className="text-sm text-white hover:text-purple-400 flex items-center gap-2">
              <FiFigma /> Figma
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-neutral-200"
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="cursor-pointer rounded-xl bg-neutral-900 border border-neutral-800 hover:border-purple-500 p-4 shadow-sm transition"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 h-40 w-full object-cover rounded-md border border-neutral-700"
            />
            <p className="text-xs text-neutral-400 mb-1">{project.year}</p>
            <h3 className="text-lg font-medium text-white mb-1">{project.title}</h3>
            <p className="text-sm text-neutral-400 truncate">{project.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;