"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
}

const colorMap = {
  purple: "bg-purple-400 shadow-purple-400/50",
  blue: "bg-blue-400 shadow-blue-400/50",
  pink: "bg-pink-400 shadow-pink-400/50",
  cyan: "bg-cyan-400 shadow-cyan-400/50",
};

export function FloatingParticles({ count = 8, color = "purple" }: FloatingParticlesProps) {
  // Generate stable random values once using useState initializer
  const [particles] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 20 - 10,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
    }))
  );

  const colorClasses = colorMap[color as keyof typeof colorMap] || colorMap.purple;

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-1.5 h-1.5 ${colorClasses} rounded-full shadow-lg pointer-events-none`}
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
    </>
  );
}
