import LogoMarquee from "./LogoMarquee";

export default function Marquee() {
  return (
    <section className="my-6 md:my-16 py-9 flex flex-col items-center">
      <LogoMarquee baseVelocity={5} />
    </section>
  );
}
