"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconCopy, IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { GradientText } from "@/components/ui/GradientText";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 px-6 glass mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Let&apos;s Connect</GradientText>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Email with copy button */}
          <div className="glass rounded-full px-6 py-4 flex items-center gap-3">
            <IconMail className="w-5 h-5" />
            <span className="text-lg">your.email@example.com</span>
            <button
              onClick={copyEmail}
              className="glass rounded-full p-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              data-magnetic="true"
              aria-label="Copy email"
            >
              {copied ? (
                <IconCheck className="w-4 h-4 text-green-500" />
              ) : (
                <IconCopy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
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
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sm text-foreground/60 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Portfolio. Built with Next.js & Framer Motion.</p>
        </motion.div>
      </div>
    </footer>
  );
}
