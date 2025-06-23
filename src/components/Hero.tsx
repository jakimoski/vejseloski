import BackgroundImg from "./BackgroundImg";
import backgroundImage from "@/app/assets/Hero.webp";

export default function Hero() {
  return (
    <section className=" w-screen h-screen overflow-hidden relative">
      <BackgroundImg src={backgroundImage} hero={true} />
    </section>
  );
}
