"use client";

import React from "react";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { Hero } from "@/components/hero";
import { Carousel } from "@/components/carrusel-1";
import { Feature } from "@/components/carrusel-2";
import PinCardsSection from "@/components/3d-pin-demo";
import TresPasosLaboratorio from "@/components/tres-pasos";
import ImgCursor from "@/components/img-cursor";
import Preguntas1 from "@/components/preguntas-frecuentes";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <Hero />

      {/* Carrusel 1*/}
      <Carousel />

      {/* imagene automatico*/}
      <ScrollAnimation direction="up" delay={0.1}>
        <Feature />
      </ScrollAnimation>

      {/* 3 tarjetas pin */}
      <PinCardsSection />

      {/* 3 pasos para laboratorio completo*/}
      <TresPasosLaboratorio />

      {/* Tecnologias utilizadas*/}
      <ImgCursor />

      {/*Preguntas frecuentes 2*/}
      <Preguntas1 />

      {/* Footer*/}
      <Footer />
    </main>
  );
}
