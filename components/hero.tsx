"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
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
    <section>
      <div>
        <div className="relative z-10 flex min-h-[84.5vh] lg:min-h-screen flex-col justify-end pt-20 pb-4 lg:pt-0 lg:pb-0 px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-8xl pb-4 lg:pb-33 sm:pb-20">
            <ScrollAnimation direction="up" delay={0.2}>
              <div
                className="flex flex-col items-start text-left lg:items-start lg:text-left"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Título principal — hero.titleLine1 + hero.titleLine2 */}
                <h1 className="text-hero-ttl text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tight">
                  {t("titleLine1")}
                  <br />
                  {t("titleLine2")}
                </h1>

                {/* Descripción — hero.description */}
                <p className="text-hero-desc w-full text-sm  sm:text-lg mt-1.5 sm:mt-2  md:text-xl sm:max-w-md md:max-w-xl leading-relaxed">
                  {t("description")}
                </p>

                {/* Botón demo */}
                <div className="mt-7.5 sm:mt-7.5">
                  <Button
                    asChild
                    size="lg"
                    className="h-11 lg:h-12 text-sm lg:text-base rounded-4xl bg-hero-bg-demo text-hero-txt-demo hover:bg-hero-hvr-demo"
                  >
                    <Link href="/demo">
                      <span className="text-nowrap">{t("cta")}</span>
                      <ChevronRight className="ml-0 sm:ml-0 size-4 lg:size-4.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Video Background */}
        <div className="bg-background absolute inset-0 overflow-hidden rounded-3xl lg:rounded-[2rem] border border-black/10 dark:border-white/5 bg-white dark:bg-black">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="
            absolute inset-0 
            lg:inset-5   
            w-full h-full object-cover
            -scale-x-100
            invert contrast-115 
            brightness-90
            dark:invert-0 
            dark:brightness-60" /*Mientras menos tenga menos se verá en modo oscuro*/
            src="/videos/video-hero.mp4"
          />
        </div>
      </div>
    </section>
  );
}
