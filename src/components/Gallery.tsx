import React from "react";
import image1 from "@/app/assets/1.webp";
import image2 from "@/app/assets/2.webp";
import image3 from "@/app/assets/3.webp";
import BackgroundImg from "./BackgroundImg";

const images = [image1, image2, image3];

export default function Gallery() {
  return (
    <section
      className="relative grid w-full mt-16 gap-12 px-4 md:px-14 md:py-6 py-4 text-white
             grid-cols-1 md:grid-cols-3"
    >
      {images &&
        images?.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <BackgroundImg src={image} hero={false} />
          </div>
        ))}
    </section>
  );
}
