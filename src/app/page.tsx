"use client";
import About from "@/components/About";
import AnimatedGridPage from "@/components/AnimatedCrads";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <Hero />
      <AnimatedGridPage />
      <Marquee />
      <About />
    </main>
  );
}
