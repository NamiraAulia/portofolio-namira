import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-gray-300 pb-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className="my-10 text-center text-4xl text-gray-800" // Warna teks cerah
      >
        Get in Touch
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 0.5 }} 
        className="text-center tracking-tighter text-gray-700" // Warna teks cerah
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b border-gray-500 hover:text-purple-500 transition-colors" // Warna hover yang cerah
        >
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;