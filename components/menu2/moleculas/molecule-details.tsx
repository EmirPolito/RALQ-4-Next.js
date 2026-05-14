"use client";

import React, { useMemo } from "react";
import { 
  Atom, Zap, Droplets, Wind, Thermometer, ShieldAlert,
  Dna, Beaker, Binary, Microscope, Activity
} from "lucide-react";

import { ItemData } from "../data";

export function MoleculeDetails({ activeItem }: { activeItem: ItemData }) {
  const detailEntries = Object.entries(activeItem.details).filter(([key]) => key !== "Notas");

  // Optimizamos los iconos para que no se recalculen durante el scroll
  const moleculeIcons = useMemo(() => [
    <Atom key="atom" className="w-3 h-3" />,
    <Zap key="zap" className="w-3 h-3" />,
    <Droplets key="drop" className="w-3 h-3" />,
    <Wind key="wind" className="w-3 h-3" />,
    <Thermometer key="thermo" className="w-3 h-3" />,
    <ShieldAlert key="shield" className="w-3 h-3" />,
    <Dna key="dna" className="w-3 h-3" />,
    <Beaker key="beaker" className="w-3 h-3" />,
    <Binary key="binary" className="w-3 h-3" />
  ], []);

  return (
    <div className="flex flex-col h-full min-h-0 font-sans w-full max-w-[380px] ml-auto">
      {/* Tarjeta con optimización de hardware extrema */}
      <div className="flex-1 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm overflow-hidden flex flex-col min-h-0 transform-gpu">
        
        <div className="flex items-center justify-between mb-7 flex-shrink-0">
          <h2 className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase">
            PROPIEDADES QUÍMICAS
          </h2>
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        </div>

        {/* Cabecera Centrada */}
        <div className="flex flex-col items-center text-center mb-10 flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center border border-cyan-100 mb-4 shadow-inner">
            <span className="text-4xl">{activeItem.emoji}</span>
          </div>
          <h3 className="text-xl font-semibold text-[#004a77] leading-tight">
            {activeItem.name}
          </h3>
          <p className="text-[12px] italic text-cyan-600 font-medium mt-1">
            {activeItem.scientificName || activeItem.group}
          </p>
        </div>

        {/* Contenedor de Scroll con Aceleración por Hardware */}
        <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar overscroll-contain will-change-transform scrolling-touch">
          <div className="space-y-7 pb-6" style={{ contentVisibility: 'auto' }}>
            
            <div className="space-y-0">
              {detailEntries.map(([key, value], i) => (
                <div key={activeItem.id + i} className="transform-gpu">
                  <div className="flex items-center gap-5 py-3.5 px-1">
                    <div className="w-8 h-8 rounded-full bg-[#0081a7] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                      {moleculeIcons[i % moleculeIcons.length]}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase leading-none mb-1.5">{key}</span>
                      <p className="text-[14px] font-semibold text-[#004a77] leading-tight truncate">{value}</p>
                    </div>
                  </div>
                  {i < detailEntries.length - 1 && (
                    <div className="border-t border-dashed border-slate-100 ml-14" />
                  )}
                </div>
              ))}
            </div>

            {/* SECCIÓN SEGURIDAD */}
            <div className="pt-3 transform-gpu">
              <h4 className="text-[9px] font-bold text-slate-300 tracking-[0.2em] uppercase mb-4 px-1">
                SEGURIDAD Y RIESGOS
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="bg-cyan-50 p-4 rounded-2xl border border-cyan-100 flex items-center gap-3">
                   <ShieldAlert className="w-4 h-4 text-[#0081a7]" />
                   <span className="text-[12px] font-semibold text-slate-600">NFPA 704: Nivel 0</span>
                </div>
                <div className="bg-cyan-50 p-4 rounded-2xl border border-cyan-100 flex items-center gap-3">
                   <Activity className="w-4 h-4 text-[#0081a7]" />
                   <span className="text-[12px] font-semibold text-slate-600">No reactivo al aire</span>
                </div>
              </div>
            </div>

            {/* SECCIÓN DATOS TÉCNICOS */}
            <div className="pt-3 transform-gpu">
              <h4 className="text-[9px] font-bold text-slate-300 tracking-[0.2em] uppercase mb-4 px-1">
                DATOS TÉCNICOS
              </h4>
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-medium text-slate-400">Pureza</span>
                  <span className="text-[12px] font-semibold text-[#004a77]">99.9% (ACS)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-medium text-slate-400">Stock</span>
                  <span className="text-[12px] font-semibold text-emerald-500">Disponible</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
