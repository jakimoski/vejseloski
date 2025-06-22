"use client";
import React from "react";
import alat from "@/app/assets/alat.webp";
import kosilka from "@/app/assets/kosilka.webp";
import pumpa from "@/app/assets/kompresor.webp";

import AnimatedBox, { GridCardProps } from "./AnimatedBox";

const CARDS: GridCardProps[] = [
  {
    image: alat,
    heading: "АЛАТ",
  },
  { image: kosilka, heading: "КОСИЛКИ" },

  {
    image: pumpa,
    heading: "ПУМПИ",
  },
];

export default function AnimatedGridPage() {
  return <AnimatedBox cards={CARDS} className="horizontal-padding" />;
}
