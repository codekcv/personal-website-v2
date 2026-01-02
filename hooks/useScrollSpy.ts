"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
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

        // Only update if the section actually changed
        if (newSection !== lastSection.current) {
          lastSection.current = newSection;
          setActiveSection(newSection);
        }
      }
    };

    // Check if we're at the bottom of the page (for last section)
    const handleScroll = () => {
      // Skip if user just clicked
      if (isUserClicking.current) {
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // If we're at the bottom, activate the last section
      if (pageHeight - scrollPosition < 50) {
        const lastSectionId = sectionIds[sectionIds.length - 1];
        if (lastSection.current !== lastSectionId) {
          lastSection.current = lastSectionId;
          setActiveSection(lastSectionId);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-80px 0px -80% 0px",
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
