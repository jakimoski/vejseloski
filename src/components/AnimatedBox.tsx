"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type GridCardProps = {
  image?: StaticImageData;
  heading: string;
};

type Props = {
  className?: string;
  cards: GridCardProps[];
};

export default function AnimatedBox({ className, cards = [] }: Props) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      // Initialize matchMedia for responsive animations
      const matchMedia = gsap.matchMedia();

      // Smaller screens
      matchMedia.add("screen and (max-width: 639px)", () => {
        const cards = gsap.utils.toArray(".card") as HTMLDivElement[];
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.9,
              y: 24,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.in",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
        // Reset Y temporarily when the scroll trigger refreshes for calculation
        ScrollTrigger.addEventListener("refreshInit", () => {
          gsap.set(".card", { y: 0 });
        });
      });

      // Larger screens
      matchMedia.add("screen and (min-width: 640px)", () => {
        const staggerParams: gsap.StaggerVars = {
          each: 0.12,
          from: "start",
          grid: "auto",
          ease: "power2.inOut",
        };
        // Animation timeline with a scroll trigger on the container
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top 75%", // start when the top of the <section> is at 75% of the viewport (25% from the bottom)
              toggleActions: "play none none reverse", // play animation when in view, reverse when out
            },
          })
          .fromTo(
            ".card",
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              stagger: staggerParams,
            }
          )
          .fromTo(
            "img",
            { opacity: 0, scale: 0.6 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
              stagger: staggerParams,
            },
            0.5
          )
          .fromTo(
            "h5",
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3"
          );
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <section
      ref={container}
      className={`relative grid w-full grid-cols-1 mt-16 gap-6 px-4 md:px-14 md:py-6 py-4 text-white ${
        cards?.length === 3
          ? "grid-cols-1 md:grid-cols-3"
          : cards?.length === 4
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      } ${className}`}
    >
      {cards.map((item, index) => (
        <div
          key={index}
          className="card rounded-xl bg-white/5 p-4 pb-12 opacity-0 shadow-2xl"
        >
          {item?.image && (
            <Image
              src={item?.image}
              alt={item?.heading}
              className="h-full aspect-[940/788] object-cover"
            />
          )}
          <h5 className="text-2xl mt-2 font-semibold text-black text-center uppercase ">
            {item?.heading}
          </h5>
        </div>
      ))}
    </section>
  );
}
