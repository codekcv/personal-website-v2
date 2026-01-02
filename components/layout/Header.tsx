"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { navItems } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id));

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            data-magnetic="true"
          >
            <span className="gradient-text">Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-4 py-2 transition-all duration-300",
                  "hover:text-purple-500"
                )}
                data-magnetic="true"
              >
                <span className={cn(activeSection === item.id && "gradient-text font-semibold")}>
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden glass rounded-full p-3"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <IconX className="w-5 h-5" />
              ) : (
                <IconMenu2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 glass rounded-2xl p-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300",
                      "hover:bg-white/10 dark:hover:bg-black/10",
                      activeSection === item.id && "bg-white/10 dark:bg-black/10"
                    )}
                  >
                    <span className={cn(activeSection === item.id && "gradient-text font-semibold")}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
