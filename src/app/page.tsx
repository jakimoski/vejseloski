"use client";
import AnimatedGridPage from "@/components/AnimatedCrads";
import Hero from "@/components/Hero";
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
      <div className="h-[100vh]"></div>
    </main>
  );
}
