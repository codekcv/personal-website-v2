"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/constants";
import { TechIcon } from "@/components/ui/TechIcon";
import { GradientText } from "@/components/ui/GradientText";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Tech Stack</GradientText>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <TechIcon key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
