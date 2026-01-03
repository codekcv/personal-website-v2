"use client";

import dynamic from "next/dynamic";

// Lazy load expensive client components with ssr: false
const MagneticCursor = dynamic(() => import("@/components/effects/MagneticCursor"), {
  ssr: false,
});

const GlobalFloatingParticles = dynamic(
  () => import("@/components/effects/GlobalFloatingParticles").then(mod => ({ default: mod.GlobalFloatingParticles })),
  {
    ssr: false,
  }
);

export function ClientEffects() {
  return (
    <>
      <GlobalFloatingParticles />
      <MagneticCursor />
    </>
  );
}
