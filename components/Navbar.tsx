"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            <span className="text-zinc-500 dark:text-zinc-400">Aditya Pandey</span>
          </motion.div>
        </Link>

        {/* Links & Toggle */}
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            Projects
          </Link>
          <ThemeToggle />
        </nav>

      </div>
    </header>
  );
}