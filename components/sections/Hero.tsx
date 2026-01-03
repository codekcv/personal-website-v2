"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconArrowDown } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { GradientText } from "@/components/ui/GradientText";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50" />
              <Image
                src="/profile.jpg"
                alt="Christian Villamin"
                width={160}
                height={160}
                className="relative rounded-full border-4 border-background shadow-2xl object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-4 text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <GradientText>Christian Villamin</GradientText>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Building modern web experiences with cutting-edge technologies.
            Passionate about creating intuitive, performant, and beautiful applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="glass rounded-full px-8 py-4 font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              data-magnetic="true"
            >
              <span className="gradient-text">View Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="glass rounded-full px-8 py-4 font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              data-magnetic="true"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-4 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              data-magnetic="true"
              aria-label="GitHub"
            >
              <IconBrandGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-4 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              data-magnetic="true"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-4 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              data-magnetic="true"
              aria-label="Twitter"
            >
              <IconBrandTwitter className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              onClick={() => scrollToSection("tech-stack")}
              className="text-foreground/60 hover:text-foreground transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              aria-label="Scroll down"
            >
              <IconArrowDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
