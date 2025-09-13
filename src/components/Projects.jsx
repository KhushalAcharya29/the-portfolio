// src/components/Projects.jsx
import { motion } from "framer-motion";
import RevealSection from "./RevealSection";

const projects = [
  {
    title: "Campus Connection",
    description:
      "A private social networking platform for college students to connect, collaborate, and share securely.",
    tech: ["Next.js","Tailwind", "MongoDB"],
    img: "/projects/campus.png",
    demo: "https://your-demo-link.com",
  },
  {
    title: "AutoMark",
    description:
      "A gym attendance app with location-based check-ins, attendance tracking, and profile management.",
    tech: ["React Native", "Node.js", "MongoDB"],
    img: "/projects/automark.png",
    demo: "https://drive.google.com/file/d/1VnYXdEYGbJwm0S3EsIkpuFPAU4m2jLOy/view?usp=drive_link",
  },
  {
  title: "SourceCard",
  description:
    "A developer profile generator that creates shareable cards using GitHub, LeetCode, and Stack Overflow data with a clean UI.",
  tech: ["React", "Tailwind CSS", "Framer Motion"],
  img: "/projects/sourcecard.png",
  demo: "https://sourcecard.vercel.app", // replace with your deployed link
}
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 bg-gradient-to-b from-[#01020a] via-[#061226] to-[#000000] text-white"
    >
      <RevealSection
            id="experience"
            className="w-full py-20 bg-black text-gray-200"
          >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-12">
          {/* <span className="text-cyan-300 mr-3">03.</span> */}
          <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden transform-gpu"
            >
              {/* Image */}
              <div className="w-full h-48 md:h-56 bg-[#071022]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay: visible on mobile, appears on hover on desktop */}
              <div
                className="absolute inset-0 p-6 flex flex-col justify-center
                          opacity-100 md:opacity-0 md:group-hover:opacity-100
                          transition-opacity duration-400 z-10
                          bg-[rgba(6,6,12,0.55)]"
              >
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r  to-fuchsia-500 from-cyan-500">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-[#081226] border border-[#0d1420] px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer with buttons (always clickable, above overlay) */}
              <div className="relative z-20 bg-[#050714] p-4 flex justify-between items-center border-t border-[#0d1220]">
                <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-cyan-400 hover:bg-white/20 hover:scale-110 transition"
  >
    🔗
  </a>
              </div>

              {/* subtle border + glow on hover */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl
                              border border-transparent group-hover:border-[#3b2a6e]/30
                              transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
      </RevealSection>
    </section>
  );
}