import { motion } from "framer-motion"; 
import RevealSection from "./RevealSection";

const experiences = [
  {
    role: "Website Developer",
    company: "Freelance – The Motif Interiors",
    companyLink: "https://motif-interior-00lk.onrender.com/",
    period: "May 2024 – June 2024",
    description: [
      "Developed a responsive and accessible website using HTML, CSS, and JavaScript.",
      "Integrated APIs (Cloudinary, WebForms) to enhance site functionality and user experience.",
      "Collaborated with the client to deliver solutions aligned with their brand and vision."
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-20 bg-black text-gray-200"
    >
      <RevealSection
        id="experience"
        className="w-full py-20 bg-black text-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          {/* Experience Cards */}
          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">
                  {exp.role}
                </h3>
                <p className="text-sm text-fuchsia-400 mb-2">
                  Freelance –{" "}
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-fuchsia-300"
                  >
                    The Motif Interiors
                  </a>
                </p>
                <p className="text-xs text-gray-400 mb-4">{exp.period}</p>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
