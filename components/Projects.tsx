"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { projects } from "../lib/data";

/* ─── 3D Tilt wrapper ──────────────────────────────────────────────────── */
function TiltMedia({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 40,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 40,
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

/* ─── Projects ─────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-200 dark:border-zinc-800"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-24"
      >
        <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 mb-3 tracking-widest uppercase">
          Selected Work
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A selection of production-grade systems and technical architectures.
        </p>
      </motion.div>

      {/* Project list */}
      <div className="space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const num = String(index + 1).padStart(2, "0");

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* ── Media: 3D tilt ── */}
              <div
                className="w-full lg:w-3/5"
                style={{ perspective: "1200px" }}
              >
                <TiltMedia>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                      type: "spring",
                      bounce: 0.25,
                    }}
                    className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900"
                    style={{
                      boxShadow: "6px 6px 0px 0px #e4e4e7",
                    }}
                  >
                    {project.video ? (
                      <iframe
                        src={project.video}
                        title={`${project.title} Demo`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </motion.div>
                </TiltMedia>
              </div>

              {/* ── Content ── */}
              <div className="w-full lg:w-2/5 flex flex-col items-start">

                {/* Project number — inline, small, intentional */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-3 mb-3"
                >
                  <span className="font-mono text-[11px] font-bold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase">
                    {num}
                  </span>
                  <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                  <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 tracking-widest uppercase">
                    Project
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm md:text-[15px] text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  {project.github && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                    >
                      Source Code
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        ↗
                      </span>
                    </motion.a>
                  )}

                  {project.liveLink && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                    >
                      Live Demo
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        ↗
                      </span>
                    </motion.a>
                  )}
                </motion.div>

              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}