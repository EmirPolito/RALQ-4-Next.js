"use client";

import React from "react";
import {
  Flame,
  BookOpen,
  BarChart3,
  ChevronRight,
  FlaskConical,
  Play,
  ArrowRight,
  BookMarked,
} from "lucide-react";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function ContenidoMenu() {
  return (
    <div className="w-full flex flex-col items-center pt-5 px-4 md:px-8 pb-5 bg-menu-d-bg">
      <div className="w-full max-w-5xl pl-0 pr-2">
        <div className="flex items-center gap-2 md:gap-4 mb-2">
          <SidebarTrigger className="md:hidden -ml-1 text-menu-d-ttl1 shrink-0" />
          <h1 className="text-lg md:text-3xl font-extrabold text-menu-d-ttl1 tracking-tight leading-tight">
            Química General - Nivel
          </h1>
          <div className="w-7 h-7 md:w-9 md:h-9 shrink-0 rounded-full bg-menu-d-nivel-bg flex items-center justify-center text-base md:text-xl font-bold text-menu-d-bg border-2 border-transparent shadow-sm">
            1
          </div>

          <div className="flex items-center gap-3 md:gap-5 text-muted-foreground mr-1 md:mr-4 ml-auto">
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
              <Flame className="w-4 h-4 md:w-5 md:h-5 text-menu-d-racha1" />
              <span className="font-semibold text-sm md:text-base text-menu-d-racha-num">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar Row */}
        <div className="flex items-center gap-2 md:gap-4 mb-6">
          <span className="text-[12px] md:text-sm font-medium text-menu-d-nivel1 whitespace-nowrap">
            Al nivel 2
          </span>
          <div className="w-full h-2 md:h-2.5 bg-menu-d-progreso1 rounded-full overflow-hidden">
            <div
              className="h-full bg-menu-d-progreso-llenado rounded-full transition-all duration-1000"
              style={{ width: "72%" }}
            />
          </div>
          <span className="text-[12px] md:text-sm font-bold text-menu-d-nivel1 whitespace-nowrap">
            72/100
          </span>
        </div>

        {/* SCORE BANNER */}
        <div className="w-full bg-menu-d-bg-tarjeta2 rounded-t-xl px-4 md:px-6 py-3 flex items-center justify-between shadow-sm border-x border-t border-menu-d-bordes2">
          <h2 className="text-lg md:text-xl font-semibold tracking-tight text-menu-d-ttl2">
            Mi puntuación
          </h2>
          <span className="text-lg md:text-xl font-semibold text-menu-d-desc2">
            72 pts
          </span>
        </div>

        {/* STATS PANELS */}
        <div className="w-full bg-menu-d-bg-tarjeta2 border border-t-0 border-menu-d-bordes2 rounded-b-xl px-6 py-8 flex flex-col md:flex-row gap-8 shadow-sm">
          {/* Panel 1 */}
          <div className="flex-1 p-5 rounded-xl border border-menu-d-bordes2 bg-menu-d-bg3/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-bold text-menu-d-ttl2">
                <FlaskConical className="w-4 h-4 text-menu-d-iconos2" />{" "}
                Aprender
              </div>
              <span className="font-bold text-menu-d-desc2">72 pts</span>
            </div>

            <div className="text-sm text-menu-d-desc2 font-medium">
              <p>18 Instrumentos aprendidos</p>
              <p>0 En progreso</p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="flex-1 p-5 rounded-xl border border-menu-d-bordes2 bg-transparent">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-bold text-menu-d-ttl2 transition-colors cursor-pointer">
                <Play className="w-4 h-4 text-menu-d-iconos2" /> Visualizar
              </div>
              <span className="font-bold text-menu-d-desc2">0 pts</span>
            </div>

            <div className="text-sm text-menu-d-desc2 font-medium opacity-70">
              <p>0 Moléculas observadas</p>
              <p>0 En repetición</p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="flex-1 p-5 rounded-xl border border-menu-d-bordes2 bg-transparent">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-bold text-menu-d-ttl2 transition-colors cursor-pointer">
                <BookOpen className="w-4 h-4 text-menu-d-iconos2" /> Evaluar
              </div>
              <span className="font-bold text-menu-d-desc2">0 pts</span>
            </div>

            <div className="text-sm text-menu-d-desc2 font-medium opacity-70">
              <p>0 Modos interactivos</p>
              <p>0 Prácticas completadas</p>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* LABS CARD */}
          <div className="border border-menu-d-bordes2 bg-menu-d-bg3 rounded-xl p-6 relative overflow-hidden group shadow-sm">
            <h3 className="font-bold text-lg text-menu-d-ttl3 mb-2">
              Laboratorios AR
            </h3>
            <p className="text-sm text-menu-d-desc3 font-medium max-w-[70%] z-10 relative">
              Visualiza en el mundo real instrumentos reales. Moldea tu
              experiencia de estudios experimentales.
            </p>
            <button className="mt-4 px-4 py-2 bg-menu-d-bg3 text-menu-d-ttl3 border border-menu-d-bordes2 text-sm font-bold rounded-full shadow-sm hover:shadow transition-shadow z-10 relative cursor-pointer">
              Explorar ahora
            </button>
            <FlaskConical className="absolute -right-4 -bottom-4 w-28 h-28 text-menu-d-iconos2 opacity-20 rotate-12" />
          </div>

          {/* AI CARD (Moleculas) */}
          <div className="border border-menu-d-bordes2 bg-menu-d-bg3 rounded-xl p-6 relative overflow-hidden group shadow-sm">
            <h3 className="font-bold text-lg text-menu-d-ttl3 mb-2">
              Simulador de Moléculas
            </h3>
            <p className="text-sm text-menu-d-desc3 font-medium max-w-[75%] z-10 relative">
              Construye átomos, visualiza enlaces químicos y diviértete con la
              química.
            </p>
            <Link
              href="/menu/estructuras-mol"
              className="block mt-4 text-sm font-bold text-menu-d-iconos2 z-10 relative hover:underline"
            >
              Explorar 3D {">"}
            </Link>
          </div>

          {/* ACTIVITIES BUTTON */}
          <div className="bg-menu-d-bg3 border border-menu-d-bordes2 rounded-xl p-6 flex flex-col justify-between shadow-sm cursor-pointer hover:border-menu-d-iconos2/30 transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-menu-d-ttl3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-menu-d-iconos2" /> Mis
                Actividades
              </h3>
              <ChevronRight className="w-5 h-5 text-menu-d-desc3" />
            </div>

            <div className="w-full h-24 mt-4 bg-menu-d-bg3/50 rounded-lg relative overflow-hidden backdrop-blur-sm flex items-center justify-center border border-dashed border-menu-d-bordes2">
              <span className="text-xs font-semibold text-menu-d-desc3 uppercase opacity-60">
                Historial vacío
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ BOTTOM STICKY ACTION BAR ------------------ */}
      <div className="mt-4 sticky bottom-[16px] xl:left-auto z-50 w-full max-w-5xl mx-auto bg-menu-d-bg4 text-menu-d-ttl4 py-2.5 md:py-3 px-3 md:px-6 flex items-center justify-between shadow-2xl rounded-xl border border-menu-d-borde4 bg-opacity-100">
        <div className="flex items-center gap-2 md:gap-4">
          <button className="cursor-pointer w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-menu-d-ttl4/20 flex items-center justify-center transition-colors">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 rotate-180 text-menu-d-iconos4" />
          </button>
          <div className="flex items-center gap-2 md:gap-3">
            <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-menu-d-iconos4" />
            <div>
              <h4 className="font-bold text-sm md:text-lg tracking-tight line-clamp-1">
                Continuar: Laboratorios
              </h4>
              <p className="text-[10px] md:text-sm text-menu-d-desc4 font-medium hidden sm:block">
                Reconociendo instrumentos principales
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex gap-1.5 opacity-50">
            <div className="w-1.5 h-1.5 rounded-full bg-menu-d-iconos4" />
            <div className="w-1.5 h-1.5 rounded-full bg-menu-d-iconos4/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-menu-d-iconos4/50" />
          </div>
          <button className="bg-menu-d-bg-boton4 hover:opacity-90 text-menu-d-ttl4 font-extrabold px-5 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl transition-colors shadow-lg active:scale-95 flex items-center gap-2 border-2 border-menu-d-borde4 text-xs md:text-base">
            Empezar
          </button>
          <button className="cursor-pointer hidden md:flex w-10 h-10 rounded-full hover:bg-menu-d-ttl4/20 items-center justify-center transition-colors">
            <ChevronRight className="w-6 h-6 text-menu-d-iconos4" />
          </button>
        </div>
      </div>
    </div>
  );
}
