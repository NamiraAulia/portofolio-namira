import {
  SiMongodb,
  SiMysql,
  SiFigma,
  SiLaravel,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiExpo,
  SiCplusplus,
} from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  initial: { y: 0 },
  animate: (custom) => ({
    y: [10, -10],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: custom * 0.2, // Delay berbeda tiap icon
    },
  }),
};

const icons = [
  { icon: <SiLaravel className="text-7xl text-red-600" />, key: "laravel" },
  { icon: <SiPhp className="text-7xl text-indigo-700" />, key: "php" },
  { icon: <SiMysql className="text-7xl text-blue-600" />, key: "mysql" },
  { icon: <SiJavascript className="text-7xl text-yellow-400" />, key: "js" },
  { icon: <SiHtml5 className="text-7xl text-orange-500" />, key: "html" },
  { icon: <SiCss3 className="text-7xl text-blue-500" />, key: "css" },
  { icon: <SiBootstrap className="text-7xl text-purple-700" />, key: "bootstrap" },
  { icon: <SiReact className="text-7xl text-cyan-400" />, key: "react1" },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, key: "node" },
  { icon: <SiReact className="text-7xl text-cyan-500" />, key: "react2" },
  { icon: <SiExpo className="text-7xl text-black" />, key: "expo" },
  { icon: <SiFigma className="text-7xl text-pink-600" />, key: "figma" },
  { icon: <SiCplusplus className="text-7xl text-blue-700" />, key: "cpp" },
  { icon: <FaPython className="text-7xl text-yellow-600" />, key: "python" },
];

const Technologies = () => {
  return (
    <div className="pb-4">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {icons.map((item, index) => (
          <motion.div
            key={item.key}
            variants={iconVariants}
            custom={index}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
