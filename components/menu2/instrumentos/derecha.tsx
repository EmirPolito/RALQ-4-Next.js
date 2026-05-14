"use client";

import React, { useMemo } from "react";
import { 
  Tag, Activity, LayoutGrid, Gauge, ShieldCheck, MapPin, 
  Settings, Beaker, ShieldAlert, HardDrive, Zap, Info
} from "lucide-react";

import { ItemData } from "../data";

export function InstrumentDetails({ activeItem }: { activeItem: ItemData }) {
  const detailEntries = Object.entries(activeItem.details).filter(([key]) => key !== "Notas");

  const iconList = useMemo(() => [
    <Tag key="tag" className="w-3 h-3" />,
    <Activity key="act" className="w-3 h-3" />,
    <LayoutGrid key="grid" className="w-3 h-3" />,
    <Gauge key="gauge" className="w-3 h-3" />,
    <ShieldCheck key="shield" className="w-3 h-3" />,
    <MapPin key="pin" className="w-3 h-3" />,
    <Zap key="zap" className="w-3 h-3" />,
    <HardDrive key="hd" className="w-3 h-3" />,
    <Settings key="set" className="w-3 h-3" />
  ], []);

  return (
    <div className="flex flex-col h-full min-h-0 font-sans w-full max-w-[380px] ml-auto">
      <div className="flex-1 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm overflow-hidden flex flex-col min-h-0 transform-gpu">
        
        {/* Cabecera Centrada - Ahora sin el título de especificaciones arriba */}
        <div className="flex flex-col items-center text-center mb-10 mt-4 flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-4 shadow-inner">
            <span className="text-4xl">{activeItem.emoji}</span>
          </div>
          <h3 className="text-xl font-semibold text-[#004a77] leading-tight">
            {activeItem.name}
          </h3>
          <p className="text-[12px] italic text-slate-400 font-medium mt-1">
            {activeItem.scientificName || activeItem.group}
          </p>
        </div>

        {/* Contenedor de Scroll */}
        <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar overscroll-contain will-change-transform scrolling-touch">
          <div className="space-y-7 pb-6" style={{ contentVisibility: 'auto' }}>
            
            <div className="space-y-0">
              {/* Título movido aquí: justo arriba de los iconos circulares */}
              <h2 className="text-[9px] font-bold text-slate-300 tracking-[0.2em] uppercase mb-4 px-1">
                ESPECIFICACIONES TÉCNICAS
              </h2>

              {detailEntries.map(([key, value], i) => (
                <div key={activeItem.id + i} className="transform-gpu">
                  <div className="flex items-center gap-5 py-3.5 px-1">
                    <div className="w-8 h-8 rounded-full bg-[#1a88c3] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                      {iconList[i % iconList.length]}
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
                SEGURIDAD Y CUMPLIMIENTO
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                   <ShieldAlert className="w-4 h-4 text-[#0081a7]" />
                   <span className="text-[12px] font-semibold text-slate-600">Certificación ISO 9001</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                   <Beaker className="w-4 h-4 text-[#0081a7]" />
                   <span className="text-[12px] font-semibold text-slate-600">Protocolo GLP Activo</span>
                </div>
              </div>
            </div>

            {/* SECCIÓN LABORATORIO */}
            <div className="pt-3 transform-gpu">
              <h4 className="text-[9px] font-bold text-slate-300 tracking-[0.2em] uppercase mb-4 px-1">
                DATOS DE LABORATORIO
              </h4>
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-medium text-slate-400">Proveedor</span>
                  <span className="text-[12px] font-semibold text-[#004a77]">BioTech Corp</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-medium text-slate-400">Garantía</span>
                  <span className="text-[12px] font-semibold text-[#004a77]">24 Meses</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
