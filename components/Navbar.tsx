"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
      {/* Updated to max-w-6xl to perfectly align with your Projects and Skills grids */}
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            <span className="text-zinc-500 dark:text-zinc-400">Aditya Pandey</span>
          </motion.div>
        </Link>

        {/* Links & Actions */}
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          
          <div className="hidden sm:flex items-center gap-6">
            <Link href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Skills
            </Link>
            {/* Added the DSA link so they can jump straight to your LeetCode stats */}
            <Link href="#dsa" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              DSA
            </Link>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-700 hidden sm:block"></div>

          {/* Resume Download Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Aditya_Pandey_Resume.pdf" // This path looks directly inside the 'public' folder
            target="_blank" // Opens the PDF in a new tab
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </motion.a>

          <ThemeToggle />
          
        </nav>

      </div>
    </header>
  );
}