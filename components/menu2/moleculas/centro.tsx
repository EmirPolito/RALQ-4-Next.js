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

export function MoleculeViewer({ activeItem }: { activeItem: ItemData }) {
  const [viewMode, setViewMode] = useState<"3D" | "AR" | "360">("3D");
  const [showHabitat, setShowHabitat] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 px-0">
      {/* Header Info */}
      <div className="flex justify-between items-end px-4">
        <div className="flex flex-col mt-2">
          <h1 className="text-2xl md:text-2xl font-bold text-slate-800">
            {activeItem.name}
          </h1>
          <span className="text-sm font-medium text-cyan-500">
            {activeItem.category} • {activeItem.group}
          </span>
        </div>

        <div className="flex items-center gap-6 bg-white/50 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase px-2">
              Modo de vista
            </span>
            <div className="flex bg-slate-100 rounded-xl p-1">
              {(["3D", "AR", "360"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={cn(
                    "px-4 py-1 text-xs font-bold rounded-lg transition-all",
                    viewMode === mode
                      ? "bg-cyan-600 text-white shadow-md"
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
                "relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",
                showHabitat ? "bg-cyan-600" : "bg-slate-300",
              )}
            >
              <div
                className={cn(
                  "absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-sm",
                  showHabitat ? "translate-x-5" : "translate-x-0",
                )}
              />
            </button>
            <span className="text-xs font-semibold text-slate-500">Átomos</span>
          </div>
        </div>
      </div>

      {/* Main Viewer - Reduced height */}
      <div className="relative h-[290px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
        {/* Mock 3D Background */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-1000",
            showHabitat
              ? "bg-gradient-to-tr from-slate-900 to-cyan-950"
              : "bg-slate-50",
          )}
        >
          {/* Particles / Decorative elements */}
          {showHabitat && mounted && (
            <div className="absolute inset-0 opacity-30">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [Math.random() * 400, Math.random() * 400],
                    x: [Math.random() * 400, Math.random() * 400],
                    opacity: [0.1, 0.4, 0.1],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Central Model Mockup */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            key={activeItem.id}
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: 0,
              y: [0, -10, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.6, ease: "easeOut" },
              opacity: { duration: 0.6 },
              rotate: { duration: 0.6, ease: "easeOut" },
            }}
            className="relative z-10"
          >
            <div className="text-[140px] filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              {activeItem.emoji}
            </div>
          </motion.div>
        </div>

        {/* Info Overlay */}
        <div className="absolute top-6 left-6 z-20">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/10 max-w-[220px]">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <Info className="w-2.5 h-2.5 text-white" />
              </div>
              <p className="text-[10px] text-white/80 leading-tight">
                Vista molecular: observa la estructura atómica y los enlaces
                químicos de la {activeItem.name.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20">
          <div className="flex gap-2">
            <ActionButton
              icon={<RotateCcw className="w-4 h-4" />}
              label="Reset"
              isCyan
            />
            <ActionButton
              icon={<Maximize className="w-4 h-4" />}
              label="Expandir"
              isCyan
            />
          </div>

          <div className="flex gap-2 text-white/50 bg-black/20 backdrop-blur-md p-1 rounded-xl border border-white/5">
            <button className="px-3 py-1 text-[10px] font-bold hover:text-white transition-colors">
              PNG
            </button>
            <button className="px-3 py-1 text-[10px] font-bold hover:text-white transition-colors">
              PDB
            </button>
            <button className="px-3 py-1 text-[10px] font-bold hover:text-white transition-colors">
              XYZ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({
  icon,
  label,
  secondary,
  isCyan,
}: {
  icon: React.ReactNode;
  label: string;
  secondary?: boolean;
  isCyan?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg",
        secondary
          ? "bg-slate-800/80 text-white backdrop-blur-md hover:bg-slate-900"
          : "bg-white/80 text-slate-700 backdrop-blur-md hover:bg-white border border-slate-100",
      )}
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  );
}
