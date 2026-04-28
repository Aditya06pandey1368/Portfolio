"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleScrollTop);
    return () => window.removeEventListener("scroll", toggleScrollTop);
  }, []);

  useEffect(() => {
    // Check dark mode on mount and listen for changes
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const distance = startPosition;
    const duration = 800; // milliseconds
    let start: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const run = easeInOutQuad(elapsed, startPosition, -distance, duration);
      window.scrollTo(0, run);

      if (elapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(animation);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Aditya06pandey1368",
      lightColor: "#000000",
      darkColor: "#ffffff",
      hoverColor: "#6b7280",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/adityapandey06",
      lightColor: "#0077B5",
      darkColor: "#0077B5",
      hoverColor: "#005885",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:aaditya06pandey@gmail.com",
      lightColor: "#EA4335",
      darkColor: "#EA4335",
      hoverColor: "#c5221f",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-16 mt-32 overflow-hidden">
      {/* Top animated border glow */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-900 dark:via-zinc-50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left Side: Branding & Copyright */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <motion.div
              whileHover={{ letterSpacing: "0.05em" }}
              className="text-zinc-900 dark:text-zinc-50 font-bold text-lg tracking-tight transition-all duration-300"
            >
              Aditya Pandey
            </motion.div>
            <div className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm font-mono tracking-wider uppercase">
              © {currentYear} All rights reserved
            </div>
          </motion.div>

          {/* Right Side: Social Links & Back to Top */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 md:gap-6"
          >
            {/* Social Links */}
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              const iconColor = isDarkMode ? link.darkColor : link.lightColor;

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  whileHover={{ y: -4 }}
                >
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 flex items-center justify-center"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: `0 0 20px ${iconColor}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <Icon
                      className="w-5 h-5 md:w-5.5 md:h-5.5 transition-colors duration-300"
                      style={{
                        color: iconColor,
                      }}
                    />

                    {/* Tooltip */}
                    <motion.span
                      className="absolute -top-8 text-xs font-medium text-zinc-900 dark:text-zinc-50 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                      initial={{ opacity: 0, y: 4 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>

                    {/* Glow background on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${iconColor}20 0%, transparent 70%)`,
                      }}
                    />
                  </motion.a>
                </motion.div>
              );
            })}

            {/* Vertical Divider */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-px h-8 bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent mx-1 hidden sm:block"
              style={{ transformOrigin: "center" }}
            />

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            >
              <motion.button
                onClick={scrollToTop}
                className="relative group p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 flex items-center justify-center"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 20px rgba(24, 24, 27, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={showScrollTop ? { opacity: 1 } : { opacity: 0.5 }}
                disabled={!showScrollTop}
                aria-label="Scroll to top"
              >
                <motion.div
                  animate={showScrollTop ? { y: [0, -4, 0] } : {}}
                  transition={{
                    repeat: showScrollTop ? Infinity : 0,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUp className="w-5 h-5 md:w-5.5 md:h-5.5 text-zinc-900 dark:text-zinc-50" />
                </motion.div>

                {/* Tooltip */}
                <motion.span
                  className="absolute -top-8 text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, y: 4 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Back to Top
                </motion.span>

                {/* Glow background */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300 bg-gradient-to-br from-zinc-900/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}