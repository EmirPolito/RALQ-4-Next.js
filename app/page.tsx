"use client";

import React from "react";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";

import { Hero } from "@/components/hero";
import { Carousel1 } from "@/components/carrusel-1";
import { Carrusel2 } from "@/components/carrusel-2";
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
      <Carousel1 />

      {/* imagene automatico*/}
      <ScrollAnimation direction="up" delay={0.1}>
        <Carrusel2 />
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
