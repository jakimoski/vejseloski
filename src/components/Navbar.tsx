"use client";
import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import TextHover from "./TextHover";

const navbarItems = [
  {
    id: 1,
    title: "Дома",
    href: "/",
  },
  {
    id: 2,
    title: "Продукти",
    href: "/products",
  },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          hidden: { y: "-100%" },
          visible: {
            y: 0,
            transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 },
          },
        }}
        className="w-full h-[8vh] px-6 fixed top-0 left-0 z-50 bg-white   items-center justify-between hidden sm:flex "
        animate={hidden ? "hidden" : "visible"}
      >
        <div className="w-[50%]">
          <Link href={"/"}>
            <span className="uppercase title font-bold text-3xl">
              Vejseloski
            </span>
          </Link>
        </div>
        <div className="flex gap-x-[20px] w-[50%]">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className={`w-fit paragraph font-medium text-lg capitalize flex flex-col hover ${
                item.id === 5 && "ml-auto"
              }`}
              href={item.href}
            >
              <TextHover titile1={item.title} titile2={item.title} />
            </Link>
          ))}
        </div>
      </motion.nav>
      <MobileNav />
    </>
  );
}
