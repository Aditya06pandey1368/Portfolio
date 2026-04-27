"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
import { skills } from "../lib/data";

/* ─── Lightweight 3D Tilt for skill cards ──────────────────────────────── */
function SkillTilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [4, -4]), {
    stiffness: 320,
    damping: 45,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 320,
    damping: 45,
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

/* ─── Skills Section ───────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-200 dark:border-zinc-800"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 mb-3 tracking-widest uppercase">
          Skills & Technologies
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
          Technical Arsenal
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Languages, frameworks, and tools I use to build scalable and robust applications.
        </p>
      </motion.div>

      {/* Single skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {skills.map((skill, index) => (
          <SkillTilt key={skill.name}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
                type: "spring",
                bounce: 0.25,
              }}
              className="relative p-4 md:p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 group cursor-default overflow-hidden transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
              style={{
                boxShadow: "3px 3px 0px 0px #e4e4e7",
              }}
              whileHover={{
                boxShadow: "4px 4px 0px 0px #18181b",
              }}
            >
              {/* Flex container for icon and text */}
              <div className="relative flex flex-col items-center gap-3">
                {/* Icon with hover animation */}
                <motion.div
                  className="relative w-8 h-8 md:w-10 md:h-10"
                  whileHover={{
                    scale: 1.18,
                    y: -3,
                    rotateZ: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-md"
                    loading="lazy"
                  />
                </motion.div>

                {/* Skill name */}
                <span className="text-xs md:text-sm font-semibold text-zinc-700 dark:text-zinc-300 text-center group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors duration-300 leading-tight">
                  {skill.name}
                </span>
              </div>

              {/* Subtle glow pulse on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-lg opacity-0 transition-opacity duration-300"
                style={{
                  boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.05)",
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </SkillTilt>
        ))}
      </div>

    </section>
  );
}