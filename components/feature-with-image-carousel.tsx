"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkReducedMotion = () => {
      const saved = localStorage.getItem("reducedMotion") === "true";
      const hasClass =
        document.documentElement.classList.contains("reduce-motion");
      setReducedMotion(saved || hasClass);
    };

    checkReducedMotion();

    const observer = new MutationObserver(() => {
      checkReducedMotion();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return reducedMotion;
}

const carouselImages = [
  {
    src: "/img/sections/tabla.png",
    alt: "Producto destacado 1",
  },
  {
    src: "/img/sections/tabla.png",
    alt: "Producto destacado 2",
  },
  {
    src: "/img/sections/tabla.png",
    alt: "Producto destacado 3",
  },
  {
    src: "/img/sections/tabla.png",
    alt: "Producto destacado 4",
  },
  {
    src: "/img/sections/tabla.png",
    alt: "Producto destacado 5",
  },
];

function Feature() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play
  useEffect(() => {
    if (!api || reducedMotion) return;

    const interval = setInterval(
      () => {
        api.scrollNext();
      },
      isHovered ? 4000 : 2500,
    );

    return () => clearInterval(interval);
  }, [api, isHovered, reducedMotion]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  // Fondo según tema
  const bgColor = resolvedTheme === "light" ? "#dff4e5" : "var(--background)"; // verde claro en modo claro

  return (
    <div className="w-full py-20 lg:py-30 bg-[#434e4e] dark:bg-background">
      {" "}
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 min-h-[400px]">
          {/* TEXTO */}
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                ¡En la palma de tus manos!
              </Badge>
            </div>
            <div className="flex gap-3 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-6xl tracking-tighter lg:max-w-xl font-semibold text-left text-white">
                Sumergete en la Realidad Aumentada
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-white text-left">
                Prepárate para vivir la mejor experiencia con instrumentaria
                renderizada, visualizada con RA (Realidad Aumentada) con tu
                propio smartphone.
              </p>
            </div>

            {/* BOTÓN DEBAJO DE LA DESCRIPCIÓN */}
            {/* <Button
              asChild
              size="sm"
              className="h-10 rounded-full px-4 text-sm bg-[#60806b] hover:bg-[#85b18f] text-white mt-4"
            >
              <Link href="#link" className="flex items-center gap-1">
                <span>Comenzar a Construir</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button> */}
          </div>

          {/* CARRUSEL */}
          <div
            className="w-full max-w-full px-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                dragFree: false,
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex rounded-xl aspect-video  items-center justify-center overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="cursor-pointer -left-20 border-primary/30 text-primary hover:bg-primary/10" />
              <CarouselNext className="cursor-pointer right-1 border-primary/30 text-primary hover:bg-primary/10" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
