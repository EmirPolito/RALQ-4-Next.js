"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Users, 
  Wind, 
  Move, 
  Apple, 
  Heart, 
  Maximize2, 
  Anchor, 
  ShieldCheck,
  ChevronRight,
  LayoutGrid
} from "lucide-react";

import { ItemData } from "../data";

export function InstrumentDetails({ activeItem }: { activeItem: ItemData }) {
  const detailEntries = Object.entries(activeItem.details);

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Details Card */}
      <div className="flex-1 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-5 shadow-xl overflow-hidden flex flex-col">
        <h2 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-6 px-1">DETALLES TÉCNICOS</h2>
        
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-inner overflow-hidden">
             <span className="text-3xl">{activeItem.emoji}</span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 leading-tight">{activeItem.name}</h3>
            <span className="text-[10px] italic text-slate-400">{activeItem.scientificName || activeItem.group}</span>
          </div>
        </div>

        {/* Stats List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
          {detailEntries.map(([key, value], i) => (
            <motion.div 
              key={activeItem.id + i}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col gap-1 group"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#1a88c3] group-hover:text-white transition-colors">
                  <LayoutGrid className="w-2.5 h-2.5" />
                </div>
                <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{key}</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-700 pl-7 leading-snug">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lab Notes Section */}
      <div className="bg-[#1a88c3]/5 border border-blue-100 rounded-3xl p-4 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#1a88c3] flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">NOTAS DE LABORATORIO</span>
        </div>
        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
