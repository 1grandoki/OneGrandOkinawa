import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "@/public/Images/9.jpeg";
import image2 from "@/public/Images/10.jpeg";
import image3 from "@/public/Images/11.jpeg";
import image4 from "@/public/Images/16.jpeg";
import image5 from "@/public/Images/12.jpeg";
import image6 from "@/public/Images/13.jpeg";
import image7 from "@/public/Images/14.jpeg";
import image8 from "@/public/Images/15.png";
import Image from "next/image";
type Props = {};

export default function Section2({}: Props) {
  return (
    <div className="flex font-Zen overflow-hidden sm:text-lg font-medium relative flex-col items-start max-w-[1200px] mx-auto justify-start gap-y-6 py-12 w-full">
      <Carousel className="w-full aspect-video" showArrows showThumbs>
        <div className="w-full h-full aspect-square md:aspect-video">
          <Image
            src={image1}
            alt="car"
            height={1000}
            width={1000}
            className="object-cover w-full h-full aspect-square md:aspect-video"
          />
        </div>
        <div className="w-full h-full aspect-square md:aspect-video">
          <Image
            src={image2}
            alt="car"
            height={1000}
            width={1000}
            className="object-cover w-full h-full aspect-square md:aspect-video"
          />
        </div>

        <div className="w-full h-full aspect-square md:aspect-video">
          <Image
            src={image3}
            alt="car"
            height={1000}
            width={1000}
            className="object-cover w-full h-full aspect-square md:aspect-video"
          />
        </div>
        <div className="w-full h-full aspect-square md:aspect-video">
          <Image
            src={image4}
            alt="car"
            height={1000}
            width={1000}
            className="object-cover w-full h-full aspect-square md:aspect-video"
          />
        </div>
        <div className="w-full h-full aspect-square md:aspect-video">
          <Image
            src={image5}
            alt="car"
            height={1000}
            width={1000}
            className="object-cover w-full h-full aspect-square md:aspect-video"
          />
        </div>
        <div className="w-full h-full aspect-square md:aspect-video">
          <Image
            src={image6}
            alt="car"
            height={1000}
            width={1000}
            className="object-cover w-full h-full aspect-square md:aspect-video"
          />
        </div>
        <div className="w-full h-full aspect-square md:aspect-video">
          <Image
            src={image7}
            alt="car"
            height={1000}
            width={1000}
            className="object-cover w-full h-full aspect-square md:aspect-video"
          />
        </div>
        <div className="w-full h-full aspect-square md:aspect-video">
          <Image
            src={image8}
            alt="car"
            height={1000}
            width={1000}
            className="object-cover w-full h-full aspect-square md:aspect-video"
          />
        </div>
      </Carousel>
    </div>
  );
}
