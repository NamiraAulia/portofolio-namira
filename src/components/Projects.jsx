import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) return null;

  const hasMultipleImages = project.images && project.images.length > 1;
  
  const nextImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };
  
  const prevImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[95%] max-w-lg max-h-[90vh] rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-xl border border-neutral-700 overflow-hidden flex flex-col"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-60 text-white hover:bg-purple-500 transition-all"
          aria-label="Close modal"
        >
          <IoClose size={18} />
        </button>

        {/* Image Gallery - Full Width */}
        <div className="w-full relative bg-neutral-900">
          {project.images && project.images.length > 0 ? (
            <div className="relative w-full">
              <div className="w-full overflow-auto" style={{ maxHeight: '40vh' }}>
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {hasMultipleImages && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-70 p-2 text-white hover:bg-purple-500 transition-all"
                    aria-label="Previous image"
                  >
                    <FaArrowLeft size={16} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-70 p-2 text-white hover:bg-purple-500 transition-all"
                    aria-label="Next image"
                  >
                    <FaArrowRight size={16} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`h-2.5 w-2.5 rounded-full ${
                          idx === currentImageIndex ? "bg-purple-500" : "bg-white bg-opacity-50"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex h-[200px] items-center justify-center text-neutral-500 text-sm">
              No images available
            </div>
          )}
        </div>

        {/* Content - Scrollable */}
        <div className="px-5 py-4 overflow-y-auto flex-1" style={{ maxHeight: 'calc(50vh - 40px)' }}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-neutral-300 mb-4 text-sm leading-relaxed">{project.description}</p>
            </div>
            
            {/* Technologies */}
            <div className="mb-2">
              <h4 className="text-sm font-medium text-neutral-300 mb-2">Teknologi</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-neutral-700 px-2.5 py-1 text-xs font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Fitur Utama */}
            {project.features && project.features.length > 0 && (
              <div className="mb-4">
                <h3 className="text-white text-sm font-medium mb-2">Fitur Utama</h3>
                <ul className="grid grid-cols-1 gap-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300 text-sm">
                      <span className="mr-2 text-purple-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Links - Fixed at bottom */}
        <div className="px-5 py-3 border-t border-neutral-700 bg-neutral-900 flex gap-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-purple-400 flex items-center gap-2 transition-colors"
            >
              <FaGithub size={14} /> GitHub
            </a>
          )}
          {project.figma && (
            <a 
              href={project.figma} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-purple-400 flex items-center gap-2 transition-colors"
            >
              <FiFigma size={14} /> Figma
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-purple-400 flex items-center gap-2 transition-colors"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
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
            {/* Thumbnail dengan ukuran tetap */}
            <div className="mb-4 h-40 w-full rounded-md border border-neutral-700 bg-neutral-800 overflow-hidden flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
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