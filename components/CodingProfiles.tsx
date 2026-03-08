"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CodingProfiles() {
  const profiles = [
    {
      platform: "LeetCode",
      icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg",
      link: "https://leetcode.com/u/AdityaPandey1368/",
      metrics: [
        { label: "Max Rating", value: "1806" },
        { label: "Problems Solved", value: "400+" }
      ]
    },
    {
      platform: "CodeChef",
      icon: "https://img.icons8.com/color/512/codechef.png",
      link: "https://www.codechef.com/users/grey_matter_06",
      metrics: [
        { label: "Max Rating", value: "3 Star" },
        { label: "Focus", value: "Competitive Logic" }
      ]
    }
  ];

  return (
    <section id="dsa" className="pt-24 pb-12 px-6 max-w-6xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
          Algorithmic Logic
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Problem solving and competitive programming.
        </p>
      </motion.div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.platform}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              bounce: 0.3 
            }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="flex flex-col p-6 md:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
          >
            
            {/* Top Row: Icon & Name */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={profile.icon} 
                    alt={profile.platform} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {profile.platform}
                </h3>
              </div>
              <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors" />
            </div>

            {/* Bottom Row: Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mt-auto border-t border-zinc-200 dark:border-zinc-800 pt-6">
              {profile.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">
                    {metric.label}
                  </span>
                  <span className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

          </motion.a>
        ))}
      </div>

    </section>
  );
}