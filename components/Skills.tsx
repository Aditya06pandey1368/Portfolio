"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "../lib/data";

export default function Skills() {
  return (
    // The id="skills" allows the Navbar links to scroll down to this section
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
      
      {/* Section Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} // Triggers when the element is 100px into the screen
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-12 tracking-tight">
          Technical Arsenal.
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // We multiply the delay by the index so they cascade in one by one!
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors group"
          >
            {/* The SVG Icon */}
            <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
              <Image 
                src={skill.image} 
                alt={skill.name} 
                fill 
                className="object-contain" 
              />
            </div>
            {/* The Skill Name */}
            <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}