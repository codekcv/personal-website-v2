"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find all intersecting sections
      const intersectingSections = entries.filter((entry) => entry.isIntersecting);

      if (intersectingSections.length > 0) {
        // Sort by intersection ratio (most visible section)
        intersectingSections.sort((a, b) => {
          return b.intersectionRatio - a.intersectionRatio;
        });

        // Set the most visible section as active
        setActiveSection(intersectingSections[0].target.id);
      }
    };

    // Check if we're at the bottom of the page (for last section)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // If we're within 100px of the bottom, activate the last section
      if (pageHeight - scrollPosition < 100) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-20% 0px -35% 0px", // Less aggressive bottom margin
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll listener for bottom detection
    window.addEventListener("scroll", handleScroll);

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
