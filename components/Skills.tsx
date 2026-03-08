"use client";

import { motion } from "framer-motion";
import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
          Technical Arsenal
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          The languages, frameworks, and tools I use to build scalable and robust applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05,
              type: "spring",
              bounce: 0.3 
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-center gap-4 p-4 md:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group cursor-default"
          >
            
            {/* UPDATED: Original colors stay 100% visible, icon scales up slightly on hover */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
              <img 
                src={skill.image} 
                alt={skill.name} 
                className="w-full h-full object-contain drop-shadow-sm" 
              />
            </div>
            
            <span className="font-semibold text-sm md:text-base text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors duration-300">
              {skill.name}
            </span>
            
          </motion.div>
        ))}
      </div>

    </section>
  );
}