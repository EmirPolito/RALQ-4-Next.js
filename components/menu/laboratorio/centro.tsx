"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize,
  RotateCcw,
  Box,
  Eye,
  Camera,
  Download,
  SwitchCamera,
  Info,
  ChevronDown,
  ChevronRight,
  BookOpen,
  BarChart2,
} from "lucide-react";

import { ItemData } from "../data";

export function InstrumentViewer({
  activeItem,
  viewMode: externalViewMode = "normal",
}: {
  activeItem: ItemData;
  viewMode?: string;
}) {
  const [viewType, setViewType] = useState<"3D" | "AR" | "360">("3D");
  const [showHabitat, setShowHabitat] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col h-full gap-3.5 px-0">
      {/* Header Info */}
      <div className="flex justify-between items-end px-3.5">
        <div className="flex flex-col mt-3">
          <h1 className="text-2xl md:text-xl font-bold text-menu2-centro-txt">
            {activeItem.name}
          </h1>

          <span className="text-sm md:text-sm font-normal text-menu2-centro-desc">
            {activeItem.category}
          </span>
        </div>

        <div className="bg-menu2-centro-bgderecha flex items-center gap-6 p-1.5 rounded-xl shadow-sm border border-menu2-izq-buscador-borde">
          <div className="flex items-center">
            <div className="flex bg-menu2-centro-bgbg rounded-xl p-0.5">
              {(["3D", "AR"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewType(mode)}
                  className={cn(
                    "cursor-pointer px-3.5 py-1.5 text-xs font-medium rounded-lg",
                    viewType === mode
                      ? "bg-menu2-centro-bg-boton text-menu2-centro-3D shadow-md"
                      : "text-menu2-centro-AR",
                  )}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pr-2">
            <button
              onClick={() => setShowHabitat(!showHabitat)}
              className={cn(
                "cursor-pointer relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",
                showHabitat ? "bg-menu2-centro-bg-boton" : "bg-menu2-centro-AR",
              )}
            >
              <div
                className={cn(
                  "absolute top-0.5 left-0.5 w-4 h-4 bg-menu2-centro-bolita-bg rounded-full transition-transform duration-300 shadow-sm",
                  showHabitat ? "translate-x-5" : "translate-x-0",
                )}
              />
            </button>
            <span className="text-xs md:text-xs font-medium text-menu2-centro-AR uppercase">
              Fondo
            </span>
          </div>
        </div>
      </div>

      {/* Visualizador de modelo 3D  */}
      <div className="relative h-[295px] rounded-xl overflow-hidden shadow-xl border border-menu2-izq-buscador-borde group bg-slate-950">
        {/* Dynamic Background based on mode */}
        <AnimatePresence mode="wait">
          <motion.div
            key={externalViewMode + showHabitat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "absolute inset-0 transition-colors duration-700",
              externalViewMode === "anatomy"
                ? "bg-indigo-950/40"
                : externalViewMode === "details"
                  ? "bg-slate-900"
                  : showHabitat
                    ? "bg-gradient-to-tr from-slate-900 to-slate-800"
                    : "bg-slate-50",
            )}
          >
            {/* Anatomy Grid Effect */}
            {externalViewMode === "anatomy" && (
              <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Central Model */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            key={activeItem.id + externalViewMode}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: externalViewMode === "anatomy" ? 1.4 : 1,
              opacity: 1,
              rotateY: externalViewMode === "anatomy" ? [0, 360] : 0,
              y: [0, -10, 0],
            }}
            transition={{
              rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.8, ease: "backOut" },
            }}
            className="relative z-10"
          >
            <img
              src={activeItem.image}
              alt={activeItem.name}
              className={cn(
                "w-48 h-48 object-contain filter transition-all duration-700",
                externalViewMode === "anatomy"
                  ? "drop-shadow-[0_0_30px_rgba(99,102,241,0.5)] contrast-125 invert brightness-200"
                  : "drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
              )}
            />

            {/* Details Markers */}
            {externalViewMode === "details" && (
              <div className="absolute inset-0">
                {[
                  { top: "10%", left: "-20%", label: "Óptica" },
                  { top: "60%", right: "-30%", label: "Ajuste" },
                  { bottom: "-10%", left: "40%", label: "Base" },
                ].map((marker, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="absolute flex items-center gap-2"
                    style={{
                      top: marker.top,
                      left: marker.left,
                      right: marker.right,
                      bottom: marker.bottom,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-blue-500/50 shadow-lg animate-pulse" />
                    <span className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-black text-white uppercase border border-white/20 whitespace-nowrap">
                      {marker.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Labels info UI */}
        <div className="absolute top-6 left-6 z-20">
          <div className="bg-menu2-centro-mini-bg/5 backdrop-blur-xl p-3 rounded-xl shadow-xl border border-menu2-centro-mini-borde/10 max-w-[200px]">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-menu2-centro-mini-bg-icono flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                <Info className="w-2.5 h-2.5 text-menu2-centro-mini-icono" />
              </div>
              <div>
                <p className="text-xs md:text-xs font-semibold text-menu2-centro-mini-ttl">
                  Estado
                </p>
                <p className="text-[10.5px] text-menu2-centro-mini-txt/75 leading-tight font-normal">
                  {externalViewMode === "anatomy"
                    ? "Modo radiografía activado"
                    : externalViewMode === "details"
                      ? "Analizando componentes"
                      : "Visualización estándar activa"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="absolute bottom-60 -right-2 p-6 flex justify-end items-center z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center cursor-pointer text-white"
          >
            <Maximize className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// ─── BOTTOM SECTIONS COMPONENT (Moved from separate file) ──────────────────────

export interface BottomSectionsProps {
  data: ItemData[];
  activeItem: ItemData;
  compareLabel?: string;
  isInstrument?: boolean;
  viewMode?: string;
  onViewModeChange?: (mode: string) => void;
}

const MOLECULE_CARDS = [
  { id: "specs", label: "Especificaciones", emoji: "📋", bg: "bg-blue-50" },
  { id: "3d", label: "Visualización 3D", emoji: "🔷", bg: "bg-slate-50" },
];

export function BottomSections({
  data,
  activeItem,
  compareLabel = "INSTRUMENTOS",
  isInstrument = false,
  viewMode = "normal",
  onViewModeChange,
}: BottomSectionsProps) {
  const [activeGallery, setActiveGallery] = useState("specs");
  const [compareA, setCompareA] = useState(data[0]?.id ?? "");
  const [compareB, setCompareB] = useState(data[1]?.id ?? "");

  const itemA = data.find((i) => i.id === compareA) ?? data[0];
  const itemB = data.find((i) => i.id === compareB) ?? data[1];

  if (isInstrument) {
    const modes = [
      { id: "normal", label: "Vista Normal", emoji: "📦", bg: "bg-blue-50" },
      { id: "details", label: "Detalles", emoji: "🔍", bg: "bg-emerald-50" },
      { id: "anatomy", label: "Anatomía", emoji: "🧬", bg: "bg-slate-50" },
    ];

    return (
      <div className="bg-menu2-abajo-bg w-full h-full backdrop-blur-md border border-menu2-izq-buscador-borde rounded-xl p-3 shadow-xl flex flex-col gap-2 min-h-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-menu2-abajo-txt" />
            <h2 className="text-menu2-abajo-txt text-xs font-medium uppercase">
              Opciones de Visualización
            </h2>
          </div>
        </div>

        <div className="flex gap-3 flex-1 min-h-0">
          {modes.map((mode) => (
            <motion.button
              key={mode.id}
              onClick={() => onViewModeChange?.(mode.id)}
              className={cn(
                "flex-1 flex flex-col rounded-xl overflow-hidden border transition-all cursor-pointer relative ",
                viewMode === mode.id
                  ? "border-white/30 shadow-lg"
                  : "border-menu2-abajo-borde shadow-sm",
              )}
            >
              <div
                className={cn(
                  "flex-1 flex items-center justify-center p-4",
                  "bg-menu2-abajo-bg-bgtarjeta",
                )}
              >
                <img
                  src={activeItem.image}
                  alt={mode.label}
                  className={cn(
                    "w-12 h-12 object-contain transition-all duration-500",
                    mode.id === "anatomy" ? "invert brightness-200 contrast-125" : "",
                    mode.id === "details" ? "scale-110 brightness-110" : "",
                    viewMode !== mode.id ? "opacity-40 grayscale" : "opacity-100",
                  )}
                />
                {viewMode === mode.id && (
                  <div className="bg-white/5 absolute inset-0 pointer-events-none" />
                )}
              </div>
              <div
                className={cn(
                  "py-1.5 flex items-center justify-center border-t",
                  viewMode === mode.id
                    ? "bg-white border-white"
                    : "bg-menu2-abajo-borde border-menu2-abajo-borde",
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    viewMode === mode.id
                      ? "text-black"
                      : "text-menu2-abajo-txt-tarjeta",
                  )}
                >
                  {mode.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-3 h-full">
      <div className="col-span-7 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-lg flex flex-col gap-2 min-h-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-[#1a88c3]" />
            <h2 className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">
              Galería Educativa
            </h2>
          </div>
          <button className="p-1 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="flex gap-3 flex-1 min-h-0">
          {MOLECULE_CARDS.map((card) => (
            <motion.button
              key={card.id}
              whileHover={{ y: -3 }}
              onClick={() => setActiveGallery(card.id)}
              className={cn(
                "flex-1 flex flex-col rounded-xl overflow-hidden border transition-all cursor-pointer relative",
                activeGallery === card.id
                  ? "border-blue-300 shadow-md shadow-blue-50"
                  : "border-slate-100 hover:border-slate-200 shadow-sm",
              )}
            >
              <div
                className={cn(
                  "flex-1 flex items-center justify-center",
                  card.bg,
                )}
              >
                <span className="text-4xl drop-shadow">{card.emoji}</span>
                {activeGallery === card.id && (
                  <div className="absolute inset-0 bg-blue-400/5" />
                )}
              </div>
              <div className="py-1.5 bg-white flex items-center justify-center border-t border-slate-100">
                <span
                  className={cn(
                    "text-[10px] font-bold",
                    activeGallery === card.id
                      ? "text-[#1a88c3]"
                      : "text-slate-500",
                  )}
                >
                  {card.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="col-span-5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-lg flex flex-col gap-2 min-h-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BarChart2 className="w-3 h-3 text-[#1a88c3]" />
            <h2 className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">
              Comparar {compareLabel}
            </h2>
          </div>
          <button className="p-1 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="flex items-center gap-2 flex-1">
          <div className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-xl border border-slate-100 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">
              {itemA?.emoji}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-slate-800 text-center leading-tight">
                {itemA?.name}
              </span>
              <span className="text-[8px] text-slate-400">{itemA?.group}</span>
            </div>
            <select
              value={compareA}
              onChange={(e) => setCompareA(e.target.value)}
              className="w-full text-[9px] border border-slate-200 rounded-lg px-1.5 py-0.5 bg-white text-slate-600 font-semibold cursor-pointer"
            >
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-7 h-7 rounded-full bg-[#1a88c3] text-white flex items-center justify-center text-[9px] font-black border-2 border-white shadow-lg flex-shrink-0">
            VS
          </div>

          <div className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-xl border border-slate-100 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">
              {itemB?.emoji}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-slate-800 text-center leading-tight">
                {itemB?.name}
              </span>
              <span className="text-[8px] text-slate-400">{itemB?.group}</span>
            </div>
            <select
              value={compareB}
              onChange={(e) => setCompareB(e.target.value)}
              className="w-full text-[9px] border border-slate-200 rounded-lg px-1.5 py-0.5 bg-white text-slate-600 font-semibold cursor-pointer"
            >
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-1.5 bg-[#1a88c3] text-white rounded-xl text-[10px] font-bold shadow-lg shadow-blue-100 hover:bg-[#1577ab] transition-all flex items-center justify-center gap-1"
        >
          Abrir comparación <ChevronRight className="w-3 h-3" />
        </motion.button>
      </div>
    </div>
  );
}
