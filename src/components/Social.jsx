import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/KhushalAcharya29",
    color: "hover:text-gray-100 hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/khushal-acharya-385657245/",
    color: "hover:text-blue-600 hover:bg-blue-100",
  },
];

export default function Socials() {
  return (
    <section id="socials" className="w-full py-16 bg-black text-gray-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
        >
          Connect With Me
        </motion.h2>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 flex items-center justify-center rounded-full 
                          bg-[#111827] text-2xl transition ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}