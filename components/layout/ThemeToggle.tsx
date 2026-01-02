"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "glass rounded-full p-3 transition-all duration-300",
        "hover:shadow-lg hover:shadow-purple-500/20"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-magnetic="true"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 180 : 0,
          scale: theme === "dark" ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <IconMoon className="w-5 h-5" />
        ) : (
          <IconSun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
