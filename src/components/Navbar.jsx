import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-cyan-500/30 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
        Khushal
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-200 items-center">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {link}
            </a>
          </li>
        ))}
        {/* Resume Button */}
        <li>
          <a
            href="https://drive.google.com/file/d/19s5js3bwUpClPaz-cR8oykKMp4P8-QYr/view?usp=drive_link" // 🔗 replace with your actual resume link
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold rounded-full hover:opacity-90 transition"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="absolute top-16 right-0 bg-black/90 w-2/3 h-screen flex flex-col items-center justify-center space-y-8 text-xl text-white"
        >
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          {/* Resume Button in Mobile Menu */}
          <li>
            <a
              href="https://drive.google.com/your-resume-link" // 🔗 replace with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold rounded-full hover:opacity-90 transition"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
