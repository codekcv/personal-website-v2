"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/constants";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { GradientText } from "@/components/ui/GradientText";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Experience</GradientText>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        {/* Vertical timeline line (desktop only) */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        </div>

        <div className="space-y-0">
          {timeline.map((entry, index) => (
            <TimelineItem key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
