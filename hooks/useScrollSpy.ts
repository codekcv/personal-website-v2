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

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-20% 0px -50% 0px",
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}
