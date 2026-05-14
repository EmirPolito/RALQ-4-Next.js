"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LayoutGrid, ChevronDown, Repeat } from "lucide-react";

export function BottomSections() {
  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      {/* Educational Gallery */}
      <div className="col-span-7 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-4 shadow-xl flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase px-1">BIBLIOTECA TÉCNICA</h2>
          <button className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-4 flex-1">
          <GalleryCard 
            title="Especificaciones" 
            emoji="📋" 
            color="bg-blue-50"
            active
          />
          <GalleryCard 
            title="Visualización 3D" 
            emoji="📐" 
            color="bg-slate-50"
          />
        </div>
      </div>

      {/* Item Comparison */}
      <div className="col-span-5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-4 shadow-xl flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase px-1">COMPARATIVA DE DATOS</h2>
          <button className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between gap-4 relative">
             <div className="flex-1 flex flex-col items-center gap-2 p-2.5 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl">🔬</div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-800">Microscopio</span>
                  <span className="text-[8px] text-slate-400">Óptico</span>
                </div>
                <button className="w-full mt-1.5 flex items-center justify-between px-2 py-1 bg-white border border-slate-100 rounded-lg text-[9px] text-slate-500 font-bold">
                  Cambiar <ChevronDown className="w-2 h-2" />
                </button>
             </div>

             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#1a88c3] text-white flex items-center justify-center text-[10px] font-black border-4 border-white shadow-lg z-10">
                VS
             </div>

             <div className="flex-1 flex flex-col items-center gap-2 p-2.5 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl">🧬</div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-800">ADN</span>
                  <span className="text-[8px] text-slate-400">Molécula</span>
                </div>
                <button className="w-full mt-1.5 flex items-center justify-between px-2 py-1 bg-white border border-slate-100 rounded-lg text-[9px] text-slate-500 font-bold">
                  Cambiar <ChevronDown className="w-2 h-2" />
                </button>
             </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 bg-[#1a88c3] text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-[#1577ab] transition-all"
          >
            Analizar Diferencias
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function GalleryCard({ title, emoji, color, active }: { title: string; emoji: string; color: string; active?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "flex-1 flex flex-col rounded-2xl overflow-hidden border transition-all cursor-pointer",
        active ? "border-blue-200 shadow-lg" : "border-slate-100 hover:border-slate-200 shadow-sm"
      )}
    >
      <div className={cn("flex-1 flex items-center justify-center relative", color)}>
         <span className="text-5xl drop-shadow-xl">{emoji}</span>
         {active && (
           <div className="absolute inset-0 bg-blue-400/5 backdrop-blur-[1px]" />
         )}
      </div>
      <div className="p-2.5 bg-white flex items-center justify-center">
        <span className="text-[10px] font-bold text-slate-600">{title}</span>
      </div>
    </motion.div>
  );
}
