import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
}

export function ParallaxSection({ children, speed = 50 }: ParallaxSectionProps) {
  const y = useParallax(speed);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}
