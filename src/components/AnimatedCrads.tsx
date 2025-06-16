"use client";
import React from "react";

import AnimatedBox, { GridCardProps } from "./AnimatedBox";

const CARDS: GridCardProps[] = [
  {
    heading: "Next.js",
    description:
      "A powerful React framework that supports hybrid static & server rendering, route pre-fetching, and more.",
  },
  {
    heading: "React",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces with ease.",
  },
  {
    heading: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that enable rapid and responsive design development.",
  },
  {
    heading: "GSAP",
    description:
      "A robust JavaScript library for high-performance animations that work seamlessly in every major browser.",
  },
  {
    heading: "TypeScript",
    description: (
      // We can inline JSX in the description like this because it's of type ReactNode
      <>
        A <b>strongly typed</b> superset of JavaScript that enhances code
        quality and maintainability for large projects.
      </>
    ),
  },
  {
    heading: "WebGL",
    description:
      "A JavaScript API for rendering interactive 2D and 3D graphics directly in the browser, without plugins.",
  },
] as const;

export default function AnimatedGridPage() {
  return <AnimatedBox cards={CARDS} className="horizontal-padding" />;
}
