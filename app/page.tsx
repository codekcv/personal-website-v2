import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

// Lazy load below-the-fold sections
const TechStack = dynamic(() => import("@/components/sections/TechStack"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <div className="min-h-[600px]" />,
});

const Timeline = dynamic(() => import("@/components/sections/Timeline"), {
  loading: () => <div className="min-h-[500px]" />,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<div className="min-h-[600px]" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <Timeline />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}
