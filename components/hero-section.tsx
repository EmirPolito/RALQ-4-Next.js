"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { ChevronRight } from "lucide-react";
import { Feature } from "@/components/feature-with-image-carousel";
import SectionWithMockup from "@/components/section-with-mockup";
import FAQs from "@/components/preguntas-frec";
import StackingCardsDemo from "@/components/scroll-comp";
import Footer from "@/components/footer";
import WobbleCardSection from "@/components/wobble-card-section";
import PinCardsSection from "@/components/pin-cards-section";
import { useReducedMotion } from "@/components/theme-controls";

const circleItems = [
  { image: "/img/carrusel/carrusel1.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel2.png", title: "Reloj" },
  { image: "/img/carrusel/carrusel4.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel5.png", title: "Reloj" },
  { image: "/img/carrusel/carrusel6.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel7.png", title: "Reloj" },
];

export default function HeroSection() {
  const reducedMotion = useReducedMotion();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (!videoRef.current) return;

    if (reducedMotion) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  }, [reducedMotion]);

  return (
    <>
      <HeroHeader />

      <main className="overflow-x-hidden">
        {/* HERO */}
        <section>
          <div>
            <div className="aspect-2/3 relative z-10 flex flex-col justify-end px-6 lg:aspect-video">
              <div className="mx-auto w-full max-w-8xl pb-6 lg:px-35 lg:pb-92">
                <ScrollAnimation direction="up" delay={0.2}>
                  <div className="max-w-8xl relative mx-auto pt-28 md:pt-32 pb-20 md:pb-10 px-5 w-full left-0 top-0">
                    <h1 className="text-hero-ttl text-xl md:text-7xl font-bold">
                      Aprende desde
                      <br />
                      cualquier dispositivo
                    </h1>

                    <p className="text-hero-desc max-w-2xl text-base md:text-lg mt-6 dark:text-neutral-200">
                      Visualiza instrumentos y moléculas 3D en Realidad
                      Aumentada
                    </p>

                    <div className="mt-8 flex items-center gap-2">
                      <Button
                        asChild
                        size="lg"
                        className="h-12 rounded-full pl-5 pr-3 text-base bg-hero-bg-demo text-hero-txt-demo hover:bg-primary-hero-bg-btn-demo/80"
                      >
                        <Link href="/demo">
                          <span className="text-nowrap">Ver demo</span>
                          <ChevronRight className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* VIDEO BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl bg-hero-bg">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -scale-x-100 opacity-90"
                src="https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"
              />
            </div>
          </div>
        </section>

        {/* CARRUSEL */}

        <section className="bg-background py-2">
          <div className="group relative m-auto max-w-8xl px-10 -mt-30">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-52 md:border-r md:border-[#9cc2a9]/30 md:pr-10 shrink-0">
                <p className="text-carrusel-ttl text-start text-sm md:text-left">
                  Hora de aprender
                </p>
              </div>

              <div className="relative py-6 md:w-[calc(100%-10rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={56}>
                  {circleItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3"
                    >
                      {/* CIRCULO */}

                      <div className="h-50 w-50 rounded-full bg-carrusel-bg flex items-center justify-center overflow-hidden p-2 shadow-lg border-2">
                        <Image
                          src={item.image}
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

                {/* GRADIENTES */}

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>

                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>

                {/* BLUR */}

                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />

                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>

        <PinCardsSection />

        <ScrollAnimation direction="up" delay={0.1}>
          <Feature />
        </ScrollAnimation>

        <WobbleCardSection />

        <SectionWithMockup
          title={
            <>
              Intelligence,
              <br />
              delivered to you.
            </>
          }
          description={
            <>
              Get a tailored Monday morning brief directly in
              <br />
              your inbox, crafted by your virtual personal
              <br />
              analyst, spotlighting essential watchlist stories
              <br />
              and earnings for the week ahead.
            </>
          }
          imageSrc="/img/sections/section1.png"
          reverseLayout={false}
        />

        <SectionWithMockup
          title={
            <>
              Insights,
              <br />
              at your fingertips.
            </>
          }
          description={
            <>
              Access real-time market data and analytics
              <br />
              designed for informed decision-making.
              <br />
              Your personalized dashboard keeps you
              <br />
              ahead of the curve.
            </>
          }
          imageSrc="/img/sections/section2.png"
          reverseLayout={true}
        />

        <section className="py-20 lg:py-32 bg-background"></section>

        <StackingCardsDemo />

        <FAQs />

        <Footer />
      </main>
    </>
  );
}
