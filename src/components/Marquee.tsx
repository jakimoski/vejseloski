import { TMarqueeProps } from "@/types/types";
import LogoMarquee from "./LogoMarquee";

export default function Marquee({ title, className }: TMarqueeProps) {
  return (
    <LogoMarquee baseVelocity="0.7">
      <h1
        className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white  whitespace-nowrap tracking-[-5px] ${className}`}
      >
        {title} &nbsp;
      </h1>
      <h1
        className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white  whitespace-nowrap tracking-[-5px] ${className}`}
      >
        {title} &nbsp;
      </h1>
    </LogoMarquee>
  );
}
