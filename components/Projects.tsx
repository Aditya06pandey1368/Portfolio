"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
          Featured Work.
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A selection of production-grade systems and technical architectures.
        </p>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              
              {/* 1. Media Container: Strictly optimized for the YouTube Iframe */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
                className="w-full lg:w-3/5 rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-900 shadow-lg relative aspect-video"
              >
                {project.video ? (
                  <iframe
                    src={project.video}
                    title={`${project.title} Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </motion.div>

              {/* 2. Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col items-start">
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-4 mt-auto"
                >
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all text-sm shadow-sm"
                    >
                      Source Code
                    </motion.a>
                  )}

                  {project.liveLink && (
                    <div className="flex flex-col items-start gap-1">
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-transparent text-zinc-900 dark:text-zinc-50 font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-sm"
                      >
                        Live Demo
                      </motion.a>
                    </div>
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