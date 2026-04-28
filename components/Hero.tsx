"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ArrowDown } from "lucide-react";

/* ─── 3D Tilt wrapper ──────────────────────────────────────────────────── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // ✅ Increased tilt range
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [22, -22]), {
    stiffness: 280,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-22, 22]), {
    stiffness: 280,
    damping: 28,
  });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      rawX.set((e.clientX - rect.left) / rect.width - 0.5);
      rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [rawX, rawY]
  );

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Text scramble on hover ───────────────────────────────────────────── */
const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function useScramble(original: string) {
  const [display, setDisplay] = useState(original);
  const rafRef = useRef<number>(0);

  const scramble = useCallback(() => {
    let step = 0;
    const total = original.length;

    const tick = () => {
      setDisplay(
        original
          .split("")
          .map((char, i) =>
            char === " "
              ? " "
              : i < step
                ? char
                : CHARSET[Math.floor(Math.random() * CHARSET.length)]
          )
          .join("")
      );
      step += 0.45;
      if (step < total) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(original);
      }
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [original]);

  return { display, scramble };
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */
export default function Hero() {
  const { display: nameDisplay, scramble: scrambleName } = useScramble(
    "Hi, I'm Aditya Pandey."
  );

  return (
    <section className="relative pt-40 pb-24 px-6 min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">

      {/* ✅ FULL WIDTH DOT BACKGROUND (FIXED) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-screen h-full left-1/2 -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#a1a1aa" fillOpacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* ❗ KEEP YOUR ORIGINAL LAYOUT EXACTLY */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-14 md:gap-20 w-full max-w-5xl mx-auto">

        {/* ── Left: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
          className="flex-shrink-0"
          style={{ perspective: "1000px" }}
        >
          <TiltCard>
            <div
              className="relative w-52 h-52 md:w-[300px] md:h-[300px] overflow-hidden border border-zinc-300 dark:border-zinc-700 rounded-full"
              style={{
                transform: "translateZ(0px)",
              }}
            >
              <Image
                src="/images/me.png"
                alt="Aditya Pandey"
                fill
                priority
                className="object-cover"
              />
            </div>
          </TiltCard>
        </motion.div>

        {/* ── Right: Text (UNCHANGED) ── */}
        <div className="flex-1 flex flex-col items-start text-left">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onMouseEnter={scrambleName}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-mono tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 leading-tight cursor-default select-none"
          >
            {nameDisplay}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl font-semibold text-zinc-500 dark:text-zinc-400 mb-6 tracking-tight"
          >
            Full-Stack Developer & AI Builder
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed"
          >
            Building scalable web applications with Next.js and MERN, and exploring
            AI-powered product features.
          </motion.p>

          {/* CTA buttons (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              View Projects
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </motion.a>

            <motion.a
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:aaditya06pandey@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Contact Me
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue (UNCHANGED) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-600"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

    </section>
  );
}