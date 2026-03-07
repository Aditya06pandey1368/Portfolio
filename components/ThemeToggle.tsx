"use client"; // Needs "use client" because it has an onClick event!

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      <Sun className="h-5 w-5 hidden dark:block text-zinc-50" />
      <Moon className="h-5 w-5 block dark:hidden text-zinc-900" />
    </motion.button>
  );
}