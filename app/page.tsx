import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Timeline />
        <Footer />
      </main>
    </>
  );
}
