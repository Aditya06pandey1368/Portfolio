"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
          © {currentYear} Aditya Pandey. All rights reserved.
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-6">
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:your.email@example.com" 
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>

      </div>
    </footer>
  );
}