"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Orb 1 - Blue to Purple */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient Orb 2 - Purple to Pink */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Gradient Orb 3 - Pink to Blue */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, -60, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
