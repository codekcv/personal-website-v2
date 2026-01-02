"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Project } from "@/lib/types";
import { GradientText } from "./GradientText";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      data-magnetic="true"
    >
      <motion.div
        className="glass rounded-xl overflow-hidden group"
        whileHover={{ y: -8 }}
      >
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
          {/* Placeholder for project image */}
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
            🚀
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                <GradientText>{project.title}</GradientText>
              </h3>
              <p className="text-sm text-white/90 mb-4">
                {project.description}
              </p>
              <div className="flex gap-3 justify-center">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full p-3 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Live demo"
                  >
                    <IconExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full p-3 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="GitHub repository"
                  >
                    <IconBrandGithub className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-foreground/70 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs rounded-full glass">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
