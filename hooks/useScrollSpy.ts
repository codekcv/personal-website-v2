"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const lastSection = useRef<string>(sectionIds[0]);
  const isUserClicking = useRef<boolean>(false);

  const setActiveSectionImmediate = useCallback((sectionId: string) => {
    isUserClicking.current = true;
    lastSection.current = sectionId;
    setActiveSection(sectionId);

    // Reset the flag after scroll completes
    setTimeout(() => {
      isUserClicking.current = false;
    }, 1000);
  }, []);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Skip updates if user just clicked a nav item
      if (isUserClicking.current) {
        return;
      }

      // Find all intersecting sections
      const intersectingSections = entries.filter((entry) => entry.isIntersecting);

      if (intersectingSections.length > 0) {
        // Sort by intersection ratio (most visible section)
        intersectingSections.sort((a, b) => {
          return b.intersectionRatio - a.intersectionRatio;
        });

        const newSection = intersectingSections[0].target.id;

        // Only update if the section actually changed and has significant visibility
        if (newSection !== lastSection.current && intersectingSections[0].intersectionRatio > 0.3) {
          // Clear previous timer
          if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
          }

          // Debounce the state update to prevent flickering
          debounceTimer.current = setTimeout(() => {
            lastSection.current = newSection;
            setActiveSection(newSection);
          }, 150);
        }
      }
    };

    // Check if we're at the bottom of the page (for last section)
    let scrollTimer: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      // Skip if user just clicked
      if (isUserClicking.current) {
        return;
      }

      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        // If we're within 100px of the bottom, activate the last section
        if (pageHeight - scrollPosition < 100) {
          lastSection.current = sectionIds[sectionIds.length - 1];
          setActiveSection(sectionIds[sectionIds.length - 1]);
        }
      }, 100);
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.3, 0.5, 0.7],
      rootMargin: "-10% 0px -40% 0px",
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll listener for bottom detection
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Clear all timers on cleanup
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return { activeSection, setActiveSectionImmediate };
}
