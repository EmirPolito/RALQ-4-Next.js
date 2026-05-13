"use client";

import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const tech = [
  {
    name: "Next.js",
    url: "https://nextjs.org",
    roleKey: "nextjs",
    imageSrc: "/img/img-cursor/Next.png",
  },
  {
    name: "Blender",
    url: "https://www.blender.org",
    roleKey: "blender",
    imageSrc: "/img/img-cursor/Blender.png",
  },
  {
    name: "Sketchfab",
    url: "https://sketchfab.com",
    roleKey: "sketchfab",
    imageSrc: "/img/img-cursor/Sketchfab.png",
  },
  {
    name: "Avogadro",
    url: "https://avogadro.cc",
    roleKey: "avogadro",
    imageSrc: "/img/img-cursor/Avogadro.png",
  },
  {
    name: "Tripo.ai",
    url: "https://www.tripo3d.ai",
    roleKey: "tripo",
    imageSrc: "/img/img-cursor/Tripo.png",
  },
  {
    name: "MyWebAR",
    url: "https://miwebar.com/",
    roleKey: "mywebar",
    imageSrc: "/img/img-cursor/MiWebAR.jpg",
  },
];

export default function ImgCursor() {
  const t = useTranslations("imgCursor");
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="resources"
      className="relative bg-imgcursor-bg px-5 py-7.5 md:px-8 md:py-0"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Centered Title */}
        <motion.div
          key={`img-cursor-header-${reducedMotion}`}
          initial={
            reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
          }
          whileInView={
            reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
          }
          viewport={{ once: true }}
          /* Distancia de la descripción del titulo*/
          className="mb-1.5 md:mb-12 text-center"
        >
          {/* Título — "Construido sobre / las mejores tecnologías" */}
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-titulos">{t("titleLine1")}</span>
            <br />
            <span className="text-imgcursor-ttl">{t("titleLine2")}</span>
          </h2>
        </motion.div>

        {/* Tarjeta grande */}
        <div className="grid grid-cols-1 gap-11 lg:gap-20 lg:grid-cols-[1fr_1.5fr] items-start">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              key={`img-cursor-left-${reducedMotion}`}
              initial={
                reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              whileInView={
                reducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
              }
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
              }
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              <p className=" px-2 md:px-0 mb-8 md:mb-11.5 text-center text-sm lg:text-base leading-relaxed text-imgcursor-desc lg:text-left max-w-[510px]">
                {t("description")}
              </p>

              {/* Tech grid - 6 items in rectangular format */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4.5 md:gap-5">
                {tech.map((item, i) => (
                  <motion.div
                    key={`tech-grid-${i}-${reducedMotion}`}
                    initial={
                      reducedMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.92 }
                    }
                    whileInView={
                      reducedMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 1, scale: 1 }
                    }
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
                    }
                    viewport={{ once: true }}
                  >
                    <LinkPreview
                      url={item.url}
                      isStatic
                      imageSrc={item.imageSrc}
                      disabled={reducedMotion}
                      className={cn(
                        "group inline-flex flex-col rounded-xl border border-imgcursor-izq-borde bg-imgcursor-izq-bg px-3 md:px-8.5 py-4 transition-all cursor-pointer no-underline w-[120px] md:w-[150px]",
                        !reducedMotion &&
                          "hover:border-primary/25 hover:shadow-sm hover:-translate-y-0.5",
                      )}
                    >
                      <span className="text-[14px] font-bold text-imgcursor-izq-ttl group-hover:text-imgcursor-izq-hvr transition-colors truncate">
                        {item.name}
                      </span>
                      <span className="text-[9.5px] text-imgcursor-izq-desc truncate">
                        {t(`roles.${item.roleKey}`)}
                      </span>
                    </LinkPreview>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column — big editorial pull quote */}
          <motion.div
            key={`img-cursor-right-${reducedMotion}`}
            initial={
              reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            whileInView={
              reducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }
            }
            viewport={{ once: true }}
            className="relative flex flex-col"
          >
            <div className="relative rounded-[1.5rem] border border-imgcursor-der-borde/60 bg-imgcursor-der-bg p-8 md:p-12 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              {/* Large decorative quote - subtle background */}
              <div className="pointer-events-none absolute -top-8.5 left-0 text-9xl font-black leading-none text-primary/10 select-none">
                "
              </div>

              <p className="relative text-sm lg:text-base leading-[1.8] text-imgcursor-der-des font-semibold tracking-tight">
                {t("quote.p1")}
                <LinkPreview
                  url="https://nextjs.org"
                  isStatic
                  imageSrc="/img/img-cursor/Next.png"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor1 underline-offset-4 decoration-current/30 underline"
                >
                  Next.js
                </LinkPreview>
                {t("quote.p2")}
                <LinkPreview
                  url="https://www.blender.org"
                  isStatic
                  imageSrc="/img/img-cursor/Blender.png"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor2 underline-offset-4 decoration-current/30 underline"
                >
                  Blender
                </LinkPreview>
                {t("quote.p3")}
                <LinkPreview
                  url="https://sketchfab.com"
                  isStatic
                  imageSrc="/img/img-cursor/Sketchfab.png"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor3 underline-offset-4 decoration-current/30 underline"
                >
                  Sketchfab
                </LinkPreview>
                {t("quote.p4")}
                <LinkPreview
                  url="https://avogadro.cc"
                  isStatic
                  imageSrc="/img/img-cursor/Avogadro.png"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor4 underline-offset-4 decoration-current/30 underline"
                >
                  Avogadro
                </LinkPreview>
                {t("quote.p5")}
                <LinkPreview
                  url="https://mywebar.com"
                  isStatic
                  imageSrc="/img/img-cursor/MiWebAR.jpg"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor5 underline-offset-4 decoration-current/30 underline"
                >
                  MyWebAR
                </LinkPreview>
                {t("quote.p6")}
                <LinkPreview
                  url="https://www.tripo3d.ai"
                  isStatic
                  imageSrc="/img/img-cursor/Tripo.png"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor5 underline-offset-4 decoration-current/30 underline"
                >
                  Tripo.ai
                </LinkPreview>
                {t("quote.p7")}
              </p>

              {/* Attribution */}
              <div className="mt-7 flex items-center gap-3.5 border-t border-imgcursor-der-linea/60 pt-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-imgcursor-der-c-bg border border-imgcursor-der-linea/60">
                  <span className="text-sm font-semibold text-imgcursor-der-c">
                    E
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-imgcursor-der-ttl">
                    {t("attribution.team")}
                  </p>
                  <p className="text-[11px] text-imgcursor-der-desc opacity-70 font-medium">
                    {t("attribution.role")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
