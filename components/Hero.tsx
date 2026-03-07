"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">
        
        {/* 1. The Photo Container (Kept Larger) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="flex-shrink-0 relative group"
        >
          {/* Image size is w-48 h-48 on mobile, w-72 h-72 on desktop */}
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 transition-colors group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
            <Image
              src="/images/me.png"
              alt="Aditya Pandey"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* 2. The Text Content (Reverted to original smaller size) */}
        <div className="flex-1 flex flex-col items-start text-center md:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Reverted to md:text-6xl */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
              Hi, I'm Aditya Pandey.<br />
              <span className="text-zinc-500 dark:text-zinc-400">I build reliable software.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed mx-auto md:mx-0"
          >
            I'm a 3rd-year Computer Science student specializing in full-stack web development. 
            I focus on writing clean, scalable MERN and Next.js code to build production-ready applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mx-auto md:mx-0"
          >
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="px-6 py-3 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent text-zinc-900 dark:text-zinc-50 font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              GitHub
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}