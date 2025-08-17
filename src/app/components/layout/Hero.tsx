import Image from "next/image";
import React from "react";
import Carousel from "../ui/carousel";

const slides = [
  {
    title: (
      <>
        Discover your next <br />
        <span className="text-[#0b7b99]">perfect outfit</span>
      </>
    ),
    description:
      "Shop our latest collection with confidence. Find elegant and stylish clothes for every occasion.",
    buttonText: "Shop Now",
    image: "/e1.jpeg",
  },
  {
    title: (
      <>
        Upgrade your <span className="text-[#0b7b99]">style game</span>
      </>
    ),
    description:
      "Explore our exclusive collection tailored for modern trends and timeless elegance.",
    buttonText: "Explore Now",
    image: "/c2.jpg",
  },
];

export default function Hero() {
  return (
    <div className="w-full bg-button text-gray-100 rounded-lg shadow-xl overflow-hidden h-[calc(100dvh-150px)] mt-12 relative">
      <Carousel
        className="rounded-lg w-full mx-auto h-full"
        slidesToShow={1}
        responsive={[]}
        autoSlideInterval={5000}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="flex flex-col-reverse md:flex-row items-center justify-between h-full w-full gap-10 bg-background"
          >
            {/* النصوص */}
            <div className="ps-4 w-full space-y-4 animate-fadeIn text-center md:text-left">
              <h1 className="text-4xl font-bold md:text-5xl leading-snug">
                {slide.title}
              </h1>
              <p className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0">
                {slide.description}
              </p>
            </div>

            {/* الصورة */}
            <div className="relative h-[calc(50dvh-75px)] md:h-[calc(100dvh-150px)] w-full md:w-full rounded-lg overflow-hidden animate-fadeIn">
              <Image
                src={slide.image}
                alt="Catalogue"
                width={1000}
                height={1000}
                quality={100}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
