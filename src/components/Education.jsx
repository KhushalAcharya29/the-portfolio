import { motion } from "framer-motion";
import RevealSection from "./RevealSection";

const education = [
  {
    college: "NES Ratnam College",
    program: "B.Sc. Information Technology",
    period: "Aug 2022 – Apr 2025",
    location: "Bhandup, Mumbai",
    details: [
      "Branch - Information Technology",
      "Aggregate - GPA 9.09",
      "University - Mumbai University",
      "Medium - English",
    ],
  },
  {
    college: "Model College of Science & Commerce",
    program: "Higher Secondary Education",
    period: "Completed before 2022",
    location: "Mumbai",
    details: ["Science Stream"],
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full py-20 bg-black text-gray-200">
      <RevealSection
            id="experience"
            className="w-full py-20 bg-black text-gray-200"
          >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-3xl md:text-4xl font-bold"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        {/* Education Cards */}
        <div className="flex flex-col gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0a192f] p-6 md:p-8 rounded-xl border border-gray-800 hover:border-cyan-500/40 transition"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">
                {edu.program}
              </h3>
              <p className="text-sm text-fuchsia-400">{edu.college}</p>
              <p className="text-xs text-gray-400 mb-4">
                {edu.period} • {edu.location}
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {edu.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      </RevealSection>
    </section>
  );
}