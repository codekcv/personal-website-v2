import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6",
        hover && "hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-300",
        className
      )}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
