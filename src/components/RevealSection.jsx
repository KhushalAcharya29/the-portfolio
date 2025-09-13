// components/RevealSection.jsx
"use client";

import { motion } from "framer-motion";

export default function RevealSection({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
