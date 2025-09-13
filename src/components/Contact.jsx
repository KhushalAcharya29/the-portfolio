import { motion } from "framer-motion";
import RevealSection from "./RevealSection";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-black text-gray-200">
      <RevealSection
            id="experience"
            className="w-full py-20 bg-black text-gray-200"
          >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-lg font-mono text-cyan-400"
        >
        What&apos;s Next?
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h3>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-6 leading-relaxed"
        >
          Whether you want to discuss a project, share feedback, collaborate on
          something cool, or just talk tech — my inbox is open.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          You can reach me directly at{" "}
          <span className="text-cyan-400">khushal.acharya29@gmail.com</span> or call/text me
          at <span className="text-cyan-400">+91 9004550623</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-300 italic mb-10"
        >
          Let’s build something meaningful together — or grab a coffee and chat
          about code ☕
        </motion.p>

        {/* CTA Button */}
        <motion.a
  href="mailto:khushal.acharya29@gmail.com"
  whileTap={{ scale: 0.95 }}
  className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 
             hover:from-fuchsia-500 hover:to-cyan-400 
             text-black font-bold rounded-full transition-colors duration-300"
>
  Say Hello
</motion.a>
      </div>
      </RevealSection>
    </section>
  );
}