"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">("default");

  useEffect(() => {
    // Use requestAnimationFrame to throttle updates
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", handleMouseMove);

    // Find all magnetic elements
    const magneticElements = document.querySelectorAll("[data-magnetic]");
    magneticElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      magneticElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      border: "2px solid rgba(59, 130, 246, 0.8)"
    },
    hover: {
      scale: 1.5,
      backgroundColor: "rgba(139, 92, 246, 0.8)",
      border: "2px solid rgba(139, 92, 246, 1)"
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />
      {/* Trailing cursor ring */}
      <motion.div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-[9998] border-2 border-purple-500/30 hidden md:block"
        animate={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
