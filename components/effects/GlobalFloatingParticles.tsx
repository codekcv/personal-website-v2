"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function GlobalFloatingParticles() {
  // Generate stable random values once using useState initializer
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 20 - 10,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
      // Vary colors
      color: ["purple", "blue", "pink", "cyan"][Math.floor(Math.random() * 4)],
    }))
  );

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      purple: "bg-purple-400 shadow-purple-400/50",
      blue: "bg-blue-400 shadow-blue-400/50",
      pink: "bg-pink-400 shadow-pink-400/50",
      cyan: "bg-cyan-400 shadow-cyan-400/50",
    };
    return colorMap[color] || colorMap.purple;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[2]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-1.5 h-1.5 ${getColorClasses(particle.color)} rounded-full shadow-lg`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
