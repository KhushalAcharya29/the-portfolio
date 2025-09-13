import { motion } from "framer-motion";
import RevealSection from "./RevealSection";

const skills = [
  {
    category: "Frontend Development 🎨",
    items: ["JavaScript ⚛️", "Tailwind CSS ⚡", "React.js 🔄", "Redux"],
  },
  {
    category: "Backend Development 🟢",
    items: ["Node.js 🚀", "Next.js ⚙", "PHP 🐘"],
  },
  {
    category: "Mobile Development 📱",
    items: ["React Native"],
  },
  {
    category: "Realtime Communication 🔗",
    items: ["Socket.io", "WebRTC 📹"],
  },
  {
    category: "Database 🗄️",
    items: ["MySQL", "MongoDB 🍃", "PostgreSQL 🐘"],
  },
  {
    category: "DevOps & Tools 🛠️",
    items: ["Docker 🐳", "Kubernetes ☸️", "Cloudinary ☁️", "Git 🌿", "CI/CD 🔁"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-black text-gray-200">
      <RevealSection
      id="experience"
      className="w-full py-20 bg-black text-gray-200"
    >
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-6 rounded-xl shadow-md hover:shadow-cyan-500/30 transition"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    className="px-4 py-2 rounded-lg border border-cyan-500 text-cyan-300 
                               bg-black/40 backdrop-blur-md hover:scale-105 transition-transform"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-lg text-gray-300 italic"
        >
          Passionately turning ideas into interactive realities 🚀
        </motion.p>

        {/* CTA */}
        <motion.a
  href="#projects"
  whileTap={{ scale: 0.95 }}
  className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 
             hover:from-fuchsia-500 hover:to-cyan-400 
             text-black font-bold rounded-full transition-colors duration-300"
>
  See What I&apos;ve Built
</motion.a>
      </div>
      </RevealSection>
    </section>
  );
}