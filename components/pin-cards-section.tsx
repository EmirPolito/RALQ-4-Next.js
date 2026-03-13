"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { Beaker, Atom, FlaskConical } from "lucide-react";

export default function PinCardsSection() {
  return (
    <section className="py-20 lg:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-5">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-7">
            <h2 className="text-tarjetas-ttl1 text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight  text-balance">
              Laboratorios Especializados
            </h2>

            <p className="text-tarjetas-desc2 mt-4 text-lg  max-w-5xl mx-auto whitespace-nowrap">
              Explora tres categorias de laboratorio con instrumentos y equipos
              detallados en modelos 3D interactivos.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
          
          {/* Pin 1 */}
          <div className="h-[27rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer title="Plantas Quimicas" href="#laboratorios">
              <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[22rem] h-[22rem] from-card to-card/50 backdrop-blur-sm  rounded-xl">
                
                <div className="flex items-center gap-2">
                  <div className="text-tarjetas-txt3 text-xs">
                    Laboratorio Industrial
                  </div>
                </div>

                <div className="flex-1 mt-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <Beaker className="h-8 w-8 text-primary" />
                    <div className="text-tarjetas-ttl4 text-xl font-bold">
                      Plantas Quimicas
                    </div>
                  </div>

                  <p className="text-tarjetas-desc5 text-[15px] leading-relaxed">
                    Explora procesos industriales mediante modelos 3D de
                    reactores, columnas de destilacion y sistemas de enfriamiento.
                  </p>

                  <div className="grid grid-cols-3 gap-20 mt-10">
                    <div className="space-y-1">

                      <div className="text-tarjetas-1txt6 text-4xl font-bold">
                        +2
                      </div>

                      <div className="text-tarjetas-desc7 text-xs">
                        Categorias
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-1txt6 text-4xl font-bold">
                        3D
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Modelos
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-1txt6 text-4xl font-bold">
                        RA
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Visual
                      </div>
                    </div>

                  </div>

                  <div className="py-3.5 flex justify-between items-end">
                    <div className="text-tarjetas-txt8 text-xs">
                      Exploracion industrial interactiva
                    </div>
                  </div>

                </div>
              </div>
            </PinContainer>
          </div>


          {/* Pin 2 */}
          <div className="h-[25rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer title="Analisis Instrumental" href="#laboratorios">
              <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[22rem] h-[22rem] from-card to-card/50 backdrop-blur-sm  rounded-xl">
                
                <div className="flex items-center gap-2">
                  <div className="text-tarjetas-txt3 text-xs">
                    Instrumentacion Avanzada
                  </div>
                </div>

                <div className="flex-1 mt-4 space-y-4">

                  <div className="flex items-center gap-2">
                    <Atom className="h-8 w-8 text-secondary" />
                    <div className="text-tarjetas-ttl4 text-xl font-bold">
                      Analisis Instrumental
                    </div>
                  </div>

                  <p className="text-tarjetas-desc5 text-[15px] leading-relaxed">
                    Analiza muestras con espectrofotometros, cromatografos y
                    sensores digitales representados en modelos 3D interactivos.
                  </p>

                  <div className="grid grid-cols-3 gap-20 mt-10">

                    <div className="space-y-1">
                      <div className="text-tarjetas-2txt6 text-4xl font-bold">
                        8+
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Instrumentos
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-2txt6 text-4xl font-bold">
                        RA
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Compatible
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-2txt6 text-4xl font-bold">
                        3D
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Modelos
                      </div>
                    </div>

                  </div>

                  <div className="flex justify-between items-end">
                    <div className="py-3.5 text-tarjetas-txt8 text-xs">
                      Precision analitica interactiva
                    </div>
                  </div>

                </div>
              </div>
            </PinContainer>
          </div>


          {/* Pin 3 */}
          <div className="h-[25rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer title="Quimica General" href="#laboratorios">
              <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[22rem] h-[22rem] from-card to-card/50 backdrop-blur-sm  rounded-xl">
                
                <div className="flex items-center gap-2">
                  <div className="text-tarjetas-txt3 text-xs">
                    Laboratorio Basico
                  </div>
                </div>

                <div className="flex-1 mt-4 space-y-4">

                  <div className="flex items-center gap-2">
                    <FlaskConical className="h-8 w-8 text-primary" />
                    <div className="text-tarjetas-ttl4 text-xl font-bold">
                      Quimica General
                    </div>
                  </div>

                  <p className="text-tarjetas-desc5 text-[15px] leading-relaxed">
                    Aprende fundamentos con matraces, balanzas y mecheros
                    mediante modelos 3D educativos y exploracion interactiva.
                  </p>

                  <div className="grid grid-cols-3 gap-20 mt-10">

                    <div className="space-y-1">
                      <div className="text-tarjetas-3txt6 text-4xl font-bold">
                        15+
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Materiales
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-3txt6 text-4xl font-bold">
                        360
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Vista 3D
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-3txt6 text-4xl font-bold">
                        RA
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Interactivo
                      </div>
                    </div>

                  </div>

                  <div className="flex justify-between items-end">
                    <div className="py-3.5 text-tarjetas-txt8 text-xs">
                      Aprendizaje practico visual
                    </div>
                  </div>

                </div>
              </div>
            </PinContainer>
          </div>

        </div>
      </div>
    </section>
  );
}