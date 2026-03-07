"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Featured Work.
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          A selection of projects proving I can build full-stack applications from scratch.
        </p>
      </motion.div>

      {/* Projects Container */}
      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            
            {/* 1. Media Container (Left Side) */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm relative aspect-video">
              {project.video ? (
                // If video exists, show the iframe
                <iframe
                  src={project.video}
                  title={`${project.title} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                ></iframe>
              ) : (
                // If no video, fallback to the image
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>

            {/* 2. Content Container (Right Side) */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                {project.title}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Conditional Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all text-sm"
                  >
                    Live Demo
                  </motion.a>
                )}

                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-transparent text-zinc-900 dark:text-zinc-50 font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-sm"
                  >
                    View Code
                  </motion.a>
                )}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}