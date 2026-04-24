"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = ["projects", "skills", "dsa"] as const;

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll-progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-zinc-900 dark:bg-zinc-50 z-[60]"
      />

      <header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo — restored to original "Aditya Pandey" */}
          <Link href="/" aria-label="Home">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50 select-none"
            >
              Aditya Pandey
            </motion.div>
          </Link>

          {/* Nav links + actions */}
          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">

            <div className="hidden sm:flex items-center gap-6">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="relative group capitalize hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-200"
                >
                  {item}
                  {/* Underline slides in from left on hover */}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-700 hidden sm:block" />

            {/* Resume */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/Aditya_Pandey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 font-medium text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </motion.a>

            <ThemeToggle />
          </nav>

        </div>
      </header>
    </>
  );
}