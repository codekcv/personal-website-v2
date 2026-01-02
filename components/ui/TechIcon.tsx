import { motion } from "framer-motion";
import { TechStack } from "@/lib/types";

interface TechIconProps {
  tech: TechStack;
  index: number;
}

export function TechIcon({ tech, index }: TechIconProps) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      data-magnetic="true"
    >
      <div className="text-4xl">{tech.icon}</div>
      <p className="text-sm font-medium text-center">{tech.name}</p>
    </motion.div>
  );
}
