"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-zinc-900 dark:text-zinc-50 font-bold text-lg tracking-tight">
            Aditya Pandey<span className="text-zinc-500 dark:text-zinc-400"></span>
          </div>
          <div className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
            © {currentYear} All rights reserved.
          </div>
        </div>

        {/* Right Side: Social Links & Back to Top */}
        <div className="flex items-center gap-6">
          
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Aditya06pandey1368" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/adityapandey06" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:aaditya06pandey@gmail.com" 
            className="text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
          </motion.a>

          {/* Vertical Divider */}
          <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 mx-2 hidden sm:block"></div>

          {/* Back to Top Button */}
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors p-2 -mr-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}