"use client";
import { motion } from "framer-motion";

export default function TextMask({ children }: { children: string[] }) {
  return (
    <div>
      {children?.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.h1
            custom={index}
            variants={{
              initial: { y: "100%" },
              enter: (i: number) => ({
                y: "0",
                transition: {
                  duration: 0.75,
                  ease: [0.33, 1, 0.68, 1],
                  delay: i * 0.5,
                },
              }),
            }}
            initial="initial"
            animate="enter"
          >
            {phrase}
          </motion.h1>
        </div>
      ))}
    </div>
  );
}
