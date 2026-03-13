"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";

export default function WobbleCardSection() {
  return (
    <section className="py-20 lg:py-45 bg-background">
      <div className="container mx-auto px-5">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-15">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
              Explora RALQ
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-6xl mx-auto text-balance">
              Una plataforma educativa que transforma el aprendizaje de quimica
              a traves de realidad aumentada y visualizacion 3D interactiva.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-8xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-4 h-full min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Laboratorio Virtual Interactivo
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  Familiarizate con los instrumentos de laboratorio antes de
                  entrar a uno real. Microscopios, autoclaves, centrifugas,
                  pipetas y mas en modelos 3D detallados.
                </p>
              </div>
              <img
                src="/img/carrusel/carrusel1.png"
                width={500}
                height={500}
                alt="Instrumentos de laboratorio RALQ"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-primary/80">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Tabla Periodica Interactiva
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Accede a informacion completa de los 118 elementos: masa
                atomica, configuracion electronica, propiedades quimicas y mas.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]" >
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Visualiza Moleculas en Realidad Aumentada con tu Smartphone
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                  Agua, cafeina, alcohol bencilico, glicerol y mas. Explora
                  estructuras moleculares desde cualquier angulo con modelos 3D
                  interactivos directamente en tu entorno real.
                </p>
              </div>
              <img
                src="/img/carrusel/carrusel2.png"
                width={500}
                height={500}
                alt="Moleculas en RA"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
