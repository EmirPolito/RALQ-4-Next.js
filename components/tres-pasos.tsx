"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { memo, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useTranslations } from "next-intl";

import img1 from "../public/img/tresPasos/paso1.jpg";
import img2 from "../public/img/tresPasos/paso2.jpg";
import img3 from "../public/img/tresPasos/paso3.jpg";

const StepImage = memo(
  ({
    src,
    alt,
    priority,
    index,
    varMiniBorder,
    reducedMotion,
  }: {
    src: any;
    alt: string;
    priority: boolean;
    index: number;
    varMiniBorder: string;
    reducedMotion: boolean;
  }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <motion.div
        initial={
          reducedMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.98, y: 10 }
        }
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05,
              }
        }
        viewport={{ once: true, amount: 0.2 }}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 border aspect-[16/10] w-full will-change-transform",
          varMiniBorder,
        )}
      >
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          quality={75}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-all duration-500 ease-out",
            isLoaded
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-105 blur-sm",
            "dark:opacity-90",
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 650px"
        />

        {/* Loading Overlay - optional but helps for smoothness */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse" />
        )}
      </motion.div>
    );
  },
);

StepImage.displayName = "StepImage";

function TresPasosLaboratorioComponent() {
  const t = useTranslations("tresPasos");
  const reducedMotion = useReducedMotion();

  const steps = useMemo(
    () => [
      {
        step: "01",
        title: t("step1.title"),
        description: t("step1.description"),
        image: img1,
        tag: t("step1.tag"),
        details: [t("step1.detail1"), t("step1.detail2"), t("step1.detail3")],
        align: "left",
        color: "from-brand-subtle to-teal-50",
        accentColor: "bg-emerald-500",
        textColor: "text-emerald-600",
        varNum: "text-tres-num",
        varMiniBg: "bg-tres-mini-bg",
        varMiniBorder: "border-tres-mini-borde",
        varMiniTxt: "text-tres-mini-txt",
        varTtl: "text-tres-ttl",
        varDesc: "text-tres-desc",
        varMarcos:
          "bg-tres-caracteristicas-bg border-tres-caracteristicas-border",
        varMarcosTxt: "text-tres-caracteristicas-txt",
        varPuntos: "bg-tres-caracteristicas-puntos",
      },
      {
        step: "02",
        title: t("step2.title"),
        description: t("step2.description"),
        image: img2,
        tag: t("step2.tag"),
        details: [t("step2.detail1"), t("step2.detail2"), t("step2.detail3")],
        align: "right",
        color: "from-teal-50 to-sky-50",
        accentColor: "bg-teal-500",
        textColor: "text-teal-600",
        varNum: "text-tres-num",
        varMiniBg: "bg-tres-mini-bg",
        varMiniBorder: "border-tres-mini-borde",
        varMiniTxt: "text-tres-mini-txt",
        varTtl: "text-tres-ttl",
        varDesc: "text-tres-desc",
        varMarcos:
          "bg-tres-caracteristicas-bg border-tres-caracteristicas-border",
        varMarcosTxt: "text-tres-caracteristicas-txt",
        varPuntos: "bg-tres-caracteristicas-puntos",
      },
      {
        step: "03",
        title: t("step3.title"),
        description: t("step3.description"),
        image: img3,
        tag: t("step3.tag"),
        details: [t("step3.detail1"), t("step3.detail2"), t("step3.detail3")],
        align: "left",
        color: "from-sky-50 to-indigo-50",
        accentColor: "bg-sky-500",
        textColor: "text-sky-600",
        varNum: "text-tres-num",
        varMiniBg: "bg-tres-mini-bg",
        varMiniBorder: "border-tres-mini-borde",
        varMiniTxt: "text-tres-mini-txt",
        varTtl: "text-tres-ttl",
        varDesc: "text-tres-desc",
        varMarcos:
          "bg-tres-caracteristicas-bg border-tres-caracteristicas-border",
        varMarcosTxt: "text-tres-caracteristicas-txt",
        varPuntos: "bg-tres-caracteristicas-puntos",
      },
    ],
    [t],
  );

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-tres-bg px-5 md:px-12 py-[15px] md:py-20"
    >
      {/* Section heading — left-anchored, not centered */}
      <div className="mx-auto max-w-[1400px]">
        <div className="-mb-3.5 md:mb-0 mx-auto max-w-4xl text-center">
          {/* Título — tresPasos.titleLine1 + tresPasos.titleLine2 */}
          <h2 className="text-titulos font-semibold leading-[1.2] tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">{t("titleLine1")}</span>
            <span className="block text-tres-ttl">{t("titleLine2")}</span>
          </h2>
        </div>

        {/* Alternating steps */}
        <div className="flex flex-col gap-0 md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={
                reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.05,
                    }
              }
              viewport={{ once: true, amount: 0.1, margin: "-20px" }}
              style={{ willChange: "transform, opacity" }}
              className={cn(
                "group relative grid grid-cols-1 gap-10 py-11 md:py-16 lg:pt-10 lg:pb-24 lg:grid-cols-2 lg:gap-24 lg:gap-y-0",
                step.align === "right" &&
                  "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
              )}
            >
              {/* Text side */}
              {/* Texto lado izquierdo: número, tag, título, descripción, pills */}
              <div className="flex flex-col justify-center">
                <div className="flex items-start gap-3.5 md:gap-6">
                  {/* Step number — large */}
                  <span
                    className={`shrink-0 text-7xl font-black leading-none ${step.varNum} mt-0 md:mt-0`}
                  >
                    {step.step}
                  </span>
                  <div>
                    <span
                      className={`mb-2 md:mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${step.varMiniBg} ${step.varMiniBorder} ${step.varMiniTxt}`}
                    >
                      {step.tag}
                    </span>
                    <h3
                      className={`text-2xl font-semibold tracking-tight ${step.varTtl}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-3.5 md:mt-4 text-sm lg:text-base leading-relaxed ${step.varDesc}`}
                    >
                      {step.description}
                    </p>

                    {/* Detail pills */}
                    <div className="mt-6 md:mt-6 flex flex-wrap gap-2.5 md:gap-3">
                      {step.details.map((d) => (
                        <span
                          key={d}
                          className={`flex items-center gap-1.5 md:gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${step.varMarcos} ${step.varMarcosTxt}`}
                        >
                          <span
                            className={`h-1 w-1 rounded-full ${step.varPuntos}`}
                          />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <div className="w-full relative">
                <StepImage
                  src={step.image}
                  alt={step.title}
                  priority={index < 1} // Only first image eager
                  index={index}
                  varMiniBorder={step.varMiniBorder}
                  reducedMotion={reducedMotion}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TresPasosLaboratorio = memo(TresPasosLaboratorioComponent);
export default TresPasosLaboratorio;
