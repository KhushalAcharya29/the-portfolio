import { motion } from "framer-motion";

export default function About() {

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-black text-gray-200"
    >
      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          Hey there, I’m{" "}
          <span className="text-cyan-400 font-semibold">Khushal Acharya</span> — 
          a developer who loves building things that feel intuitive, meaningful, 
          and future-ready.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          I craft <span className="text-fuchsia-400 font-medium">full-stack applications</span> 
          that not only work seamlessly but also bring ideas to life. From designing clean 
          interfaces with <b>React.js & Tailwind CSS</b> to building scalable backends with 
          <b> Node.js, Express, and MongoDB</b>, I enjoy every step of the process.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          What drives me most is <span className="text-cyan-400 font-medium">
          creating products that solve real problems</span>. I’m constantly brainstorming, 
          refining, and turning ideas into solutions that make a difference.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          I care deeply about writing <b>clean, maintainable code</b>, designing for 
          <b> performance</b>, and always asking — 
          <i className="text-fuchsia-400"> “how can this be better?”</i> Every project 
          is an opportunity to <b>learn, innovate, and build something valuable</b>.
        </p>

        <p className="text-gray-300 mb-10 leading-relaxed text-lg">
          When I’m not coding, I’m usually exploring new tech trends, brainstorming 
          product ideas, or sharpening my skills to stay ahead in the fast-changing dev world.
        </p>
      </motion.div>
    </section>
  );
}