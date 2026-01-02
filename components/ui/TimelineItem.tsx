"use client";

import { motion } from "framer-motion";
import { TimelineEntry } from "@/lib/types";
import { GradientText } from "./GradientText";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-center gap-8"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Desktop layout - alternating sides */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 w-full items-center">
        {/* Left side content */}
        <div className={`${isEven ? "" : "md:col-start-3"}`}>
          {isEven && (
            <div className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    <GradientText>{entry.role}</GradientText>
                  </h3>
                  <p className="text-lg font-semibold text-foreground/90">{entry.company}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/60 mb-4">{entry.period}</p>
              <ul className="space-y-2">
                {entry.description.map((item, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-purple-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Center timeline dot */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

        {/* Right side content */}
        <div className={`${isEven ? "md:col-start-3" : ""}`}>
          {!isEven && (
            <div className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    <GradientText>{entry.role}</GradientText>
                  </h3>
                  <p className="text-lg font-semibold text-foreground/90">{entry.company}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/60 mb-4">{entry.period}</p>
              <ul className="space-y-2">
                {entry.description.map((item, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-purple-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout - all on left side */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          {index < 2 && <div className="w-0.5 h-full bg-border mt-2" />}
        </div>

        <div className="glass rounded-2xl p-6 flex-1 mb-8">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold mb-1">
                <GradientText>{entry.role}</GradientText>
              </h3>
              <p className="text-base font-semibold text-foreground/90">{entry.company}</p>
            </div>
          </div>
          <p className="text-sm text-foreground/60 mb-4">{entry.period}</p>
          <ul className="space-y-2">
            {entry.description.map((item, i) => (
              <li key={i} className="text-sm text-foreground/80 flex gap-2">
                <span className="text-purple-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
