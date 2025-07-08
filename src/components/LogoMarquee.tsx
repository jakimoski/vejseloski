"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import logo1 from "@/app/assets/partners/ceresit.webp";
import logo2 from "@/app/assets/partners/delta.webp";
import logo3 from "@/app/assets/partners/eti.webp";
import logo4 from "@/app/assets/partners/firat.webp";
import logo5 from "@/app/assets/partners/inko.webp";
import logo6 from "@/app/assets/partners/sudal.webp";
import logo7 from "@/app/assets/partners/metalkamajur.webp";
import logo8 from "@/app/assets/partners/tiemme.webp";
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
const logosToRender = [...logos, ...logos, ...logos];

export default function LogoMarquee({
  baseVelocity = 100,
}: {
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex whitespace-nowrap flex-wrap">
      <motion.div
        className="flex whitespace-nowrap items-center flex-nowrap"
        style={{ x }}
      >
        {logosToRender &&
          logosToRender?.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`logo-${index}`}
              width={170}
              height={45}
              className="mx-6"
            />
          ))}
      </motion.div>
    </div>
  );
}
