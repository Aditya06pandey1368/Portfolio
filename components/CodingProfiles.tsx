"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";

/* ─── 3D Tilt wrapper for profile cards ───────────────────────────────── */
function ProfileTilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 40,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), {
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

export default function CodingProfiles() {
  const profiles = [
    {
      platform: "LeetCode",
      icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg",
      link: "https://leetcode.com/u/AdityaPandey1368/",
      color: "#FFA116",
      metrics: [
        { label: "Max Rating", value: "1835", highlight: true },
        { label: "Problems Solved", value: "450+", highlight: false }
      ]
    },
    {
      platform: "CodeChef",
      icon: "https://img.icons8.com/color/512/codechef.png",
      link: "https://www.codechef.com/users/grey_matter_06",
      color: "#5B56E9",
      metrics: [
        { label: "Max Rating", value: "3★", highlight: true },
        { label: "Focus", value: "Competitive Logic", highlight: false }
      ]
    }
  ];

  return (
    <section
      id="dsa"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-200 dark:border-zinc-800"
    >

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 mb-3 tracking-widest uppercase">
          Competitive Programming
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
          Algorithmic Logic
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Problem solving and competitive programming.
        </p>
      </motion.div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {profiles.map((profile, index) => (
          <ProfileTilt key={profile.platform}>
            <motion.a
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
                bounce: 0.25,
              }}
              className="relative flex flex-col h-full p-6 md:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 group overflow-hidden transition-all duration-300"
              style={{
                boxShadow: "4px 4px 0px 0px #e4e4e7",
              }}
              whileHover={{
                boxShadow: `5px 5px 0px 0px ${profile.color}40`,
              }}
            >
              {/* Accent bar on top — platform color */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: profile.color }}
              />

              {/* Top Row: Icon & Platform Name */}
              <motion.div
                className="flex items-center justify-between mb-8 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                <div className="flex items-center gap-4">
                  {/* Icon with animation */}
                  <motion.div
                    className="w-11 h-11 relative rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center transition-all duration-300"
                    whileHover={{
                      scale: 1.15,
                      rotateZ: 8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  >
                    <img
                      src={profile.icon}
                      alt={profile.platform}
                      className="w-6 h-6 object-contain"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                      {profile.platform}
                    </h3>
                  </div>
                </div>

                {/* External link icon */}
                <motion.div
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                >
                  <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors duration-300" />
                </motion.div>
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-zinc-200 via-zinc-200 to-transparent dark:from-zinc-800 dark:via-zinc-800 dark:to-transparent mb-6" />

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6 mt-auto">
                {profile.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.2 + metricIndex * 0.05,
                    }}
                    className="flex flex-col"
                  >
                    {/* Metric label with icon */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {metric.label}
                      </span>
                      {metric.highlight && (
                        <TrendingUp
                          className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: profile.color }}
                        />
                      )}
                    </div>

                    {/* Metric value */}
                    <motion.span
                      className="text-lg md:text-2xl font-black tracking-tight"
                      style={{ color: metric.highlight ? profile.color : "inherit" }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <span className="text-zinc-900 dark:text-zinc-50">
                        {metric.value}
                      </span>
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-xl opacity-0 transition-opacity duration-300"
                style={{
                  boxShadow: `inset 0 0 25px ${profile.color}15`,
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </ProfileTilt>
        ))}
      </div>

    </section>
  );
}