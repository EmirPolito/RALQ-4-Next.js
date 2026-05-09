"use client";

import React from "react";
import Image from "next/image";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { useTranslations } from "next-intl";

export function Carousel1() {
  const t = useTranslations("carrusel1");
  const [gap, setGap] = React.useState(56);

  const items = t.raw("items") as { title: string }[];

  const images = [
    "/img/carrusel1/carrusel1.png",
    "/img/carrusel1/carrusel2.png",
    "/img/carrusel1/carrusel3.png",
    "/img/carrusel1/carrusel4.png",
    "/img/carrusel1/carrusel5.png",
    "/img/carrusel1/carrusel6.png",
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setGap(window.innerWidth < 768 ? 52 : 56);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-background py-6 md:py-15">
      <div className="group relative m-auto max-w-8xl px-0 mt-9 md:-mt-15">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative py-13 w-full">
            <InfiniteSlider speedOnHover={20} speed={40} gap={gap}>
              {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-5">
                  <div className="bg-carrusel2-bg h-36 w-36 md:h-55 md:w-55 rounded-full flex items-center justify-center overflow-hidden p-1.5">
                    <Image
                      src={images[index] ?? images[0]}
                      alt={item.title}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-sm text-carrusel-desc font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
