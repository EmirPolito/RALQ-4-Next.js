"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, BookOpen, BarChart2, ShieldCheck, Zap, Info, Settings, Activity, Calendar, Play, Clock, User as UserIcon, LayoutGrid, Box, Lightbulb } from "lucide-react";
import { ItemData } from "./data";

// ─── Props ────────────────────────────────────────────────────────────────────

interface BottomSectionsProps {
  data: ItemData[];
  activeItem: ItemData;
  compareLabel?: string;
  isInstrument?: boolean;
  viewMode?: string;
  onViewModeChange?: (mode: string) => void;
}

// ─── Gallery cards config (Molecules only) ────────────────────────────────────

const MOLECULE_CARDS = [
  { id: "specs",  label: "Especificaciones", emoji: "📋", bg: "bg-blue-50" },
  { id: "3d",     label: "Visualización 3D", emoji: "🔷", bg: "bg-slate-50" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function BottomSections({ 
  data, 
  activeItem,
  compareLabel = "INSTRUMENTOS",
  isInstrument = false,
  viewMode = "normal",
  onViewModeChange
}: BottomSectionsProps) {
  // Logic for Molecules
  const [activeGallery, setActiveGallery]   = useState("specs");
  const [compareA,      setCompareA]        = useState(data[0]?.id ?? "");
  const [compareB,      setCompareB]        = useState(data[1]?.id ?? "");

  const itemA = data.find(i => i.id === compareA) ?? data[0];
  const itemB = data.find(i => i.id === compareB) ?? data[1];

  if (isInstrument) {
    const modes = [
      { id: "normal",  label: "Vista Normal",  emoji: "📦", bg: "bg-blue-50" },
      { id: "details", label: "Detalles",      emoji: "🔍", bg: "bg-emerald-50" },
      { id: "anatomy", label: "Anatomía",      emoji: "🧬", bg: "bg-slate-50" },
    ];

    return (
      <div className="w-full h-full bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-lg flex flex-col gap-2 min-h-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
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
          {modes.map((mode) => (
            <motion.button
              key={mode.id}
              whileHover={{ y: -3 }}
              onClick={() => onViewModeChange?.(mode.id)}
              className={cn(
                "flex-1 flex flex-col rounded-xl overflow-hidden border transition-all cursor-pointer relative",
                viewMode === mode.id
                  ? "border-blue-300 shadow-md shadow-blue-50"
                  : "border-slate-100 hover:border-slate-200 shadow-sm"
              )}
            >
              <div className={cn("flex-1 flex items-center justify-center", mode.bg)}>
                <span className="text-4xl drop-shadow">{mode.emoji}</span>
                {viewMode === mode.id && (
                  <div className="absolute inset-0 bg-blue-400/5" />
                )}
              </div>
              <div className="py-1.5 bg-white flex items-center justify-center border-t border-slate-100">
                <span
                  className={cn(
                    "text-[10px] font-bold",
                    viewMode === mode.id ? "text-[#1a88c3]" : "text-slate-500"
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

  // Molecule Version (Original)
  return (
    <div className="grid grid-cols-12 gap-3 h-full">

      {/* ── GALERÍA EDUCATIVA ───────────────────────────────────────── */}
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
                  : "border-slate-100 hover:border-slate-200 shadow-sm"
              )}
            >
              <div className={cn("flex-1 flex items-center justify-center", card.bg)}>
                <span className="text-4xl drop-shadow">{card.emoji}</span>
                {activeGallery === card.id && (
                  <div className="absolute inset-0 bg-blue-400/5" />
                )}
              </div>
              <div className="py-1.5 bg-white flex items-center justify-center border-t border-slate-100">
                <span
                  className={cn(
                    "text-[10px] font-bold",
                    activeGallery === card.id ? "text-[#1a88c3]" : "text-slate-500"
                  )}
                >
                  {card.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── COMPARAR ────────────────────────────────────────────────── */}
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

        {/* VS Row */}
        <div className="flex items-center gap-2 flex-1">
          {/* Item A */}
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
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          {/* VS Badge */}
          <div className="w-7 h-7 rounded-full bg-[#1a88c3] text-white flex items-center justify-center text-[9px] font-black border-2 border-white shadow-lg flex-shrink-0">
            VS
          </div>

          {/* Item B */}
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
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* CTA Button */}
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



