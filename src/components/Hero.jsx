import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-b from-black via-gray-900 to-black 
                 text-center text-white px-6 overflow-x-hidden"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          Khushal Acharya
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8"
      >
        A Creative Developer focused on building{" "}
        <span className="text-cyan-400 font-semibold">modern, scalable,</span> and{" "}
        <span className="text-fuchsia-400 font-semibold">user-centric</span> web
        experiences.
      </motion.p>

      {/* Button */}
      <motion.a
        href="#projects"
        className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-full 
                   transition-colors hover:bg-cyan-400"
      >
        Explore My Work
      </motion.a>
    </section>
  );
}