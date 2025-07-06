"use client";
import image1 from "@/app/assets/Gallery/gallery-1.webp";
import image2 from "@/app/assets/Gallery/gallery-2.webp";
import image3 from "@/app/assets/Gallery/gallery-3.webp";
import image4 from "@/app/assets/Gallery/gallery-4.webp";
import image5 from "@/app/assets/Gallery/gallery-5.webp";
import image6 from "@/app/assets/Gallery/gallery-6.webp";
import image7 from "@/app/assets/Gallery/gallery-7.webp";
import image8 from "@/app/assets/Gallery/gallery-8.webp";
import BackgroundImg from "@/components/BackgroundImg";
import { useEffect } from "react";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function GalleryPage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      new LocomotiveScroll();
    })();
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-4xl text-center font-bold my-4 md:my-20">
        📸 Галерија
      </h1>
      <section
        className="relative grid w-full mt-16 gap-12 px-4 md:px-14 md:py-6 py-4 text-white
                   grid-cols-1 md:grid-cols-2"
      >
        {images &&
          images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <BackgroundImg src={image} hero={false} />
            </div>
          ))}
      </section>
    </section>
  );
}
