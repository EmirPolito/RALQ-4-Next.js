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
    <div className="flex flex-col gap-3.5 px-0">
      {/* Header Info */}
      <div className="flex justify-between items-end px-3.5">
        <div className="flex flex-col mt-3">
          <h1 className="text-2xl md:text-xl font-bold text-slate-800">
            {activeItem.name}
          </h1>

          <span className="text-sm md:text-sm font-normal text-slate-500">
            {activeItem.category}
          </span>
        </div>

        <div className="flex items-center gap-5 bg-white/50 backdrop-blur-sm p-1.5 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-1">
            <span className="text-xs md:text-xs font-medium text-slate-400 px-2 uppercase">
              Ver en
            </span>
            <div className="flex bg-slate-100 rounded-xl p-1">
              {(["3D", "AR"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewType(mode)}
                  className={cn(
                    "cursor-pointer px-4 py-1 text-[10px] font-black rounded-lg transition-all uppercase",
                    viewType === mode
                      ? "bg-[#1a88c3] text-white shadow-md"
                      : "text-slate-500 hover:text-slate-700",
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
                showHabitat ? "bg-[#1a88c3]" : "bg-slate-300",
              )}
            >
              <div
                className={cn(
                  "absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-sm",
                  showHabitat ? "translate-x-5" : "translate-x-0",
                )}
              />
            </button>
            <span className="text-xs md:text-xs font-medium text-slate-400 uppercase">
              Filtros
            </span>
          </div>
        </div>
      </div>

      {/* Visualizador de modelo 3D  */}
      <div className="relative h-[295px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-950">
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
            <div
              className={cn(
                "text-[150px] filter transition-all duration-700",
                externalViewMode === "anatomy"
                  ? "drop-shadow-[0_0_30px_rgba(99,102,241,0.5)] contrast-125"
                  : "drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
              )}
            >
              {activeItem.emoji}
            </div>

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
          <div className="bg-white/5 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-white/10 max-w-[200px]">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                <Info className="w-2.5 h-2.5 text-white" />
              </div>
              <div>
                <p className="text-xs md:text-xs font-semibold text-slate-400">
                  Estado
                </p>
                <p className="text-[10px] text-white/90 leading-tight font-medium">
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
