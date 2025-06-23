import BackgroundImg from "./BackgroundImg";
import backgroundImage from "@/app/assets/Hero.webp";
import TextMask from "./TextMask";

const phrases = ["Железара", "Вејселоски"];

export default function Hero() {
  return (
    <section className=" w-screen h-screen overflow-hidden relative">
      <BackgroundImg src={backgroundImage} hero={true} />
      <div className="absolute hero-text top-1/2 left-1/2 transform text-9xl text-blue-700 font-bold uppercase -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <TextMask>{phrases}</TextMask>
      </div>
    </section>
  );
}
