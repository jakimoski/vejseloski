import Image, { StaticImageData } from "next/image";

export default function BackgroundImg({
  src,
  hero,
}: {
  src: StaticImageData;
  hero: boolean;
}) {
  return (
    <div className="w-full h-full relative overflow-hidden ">
      <div className="w-full" data-scroll data-scroll-speed="-.2.5">
        <Image
          src={src}
          alt="img"
          priority={hero}
          className="w-full h-screen object-cover object-center"
        />
      </div>
    </div>
  );
}
