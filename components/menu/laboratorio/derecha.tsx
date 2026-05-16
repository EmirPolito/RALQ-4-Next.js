"use client";

import React, { useMemo } from "react";
import {
  Tag,
  Activity,
  LayoutGrid,
  Gauge,
  ShieldCheck,
  MapPin,
  Settings,
  Beaker,
  ShieldAlert,
  HardDrive,
  Zap,
  Info,
} from "lucide-react";

import { ItemData } from "../data";

export function InstrumentDetails({ activeItem }: { activeItem: ItemData }) {
  const detailEntries = Object.entries(activeItem.details).filter(
    ([key]) => key !== "Notas",
  );

  const iconList = useMemo(
    () => [
      <Tag key="tag" className="w-3 h-3" />,
      <Activity key="act" className="w-3 h-3" />,
      <LayoutGrid key="grid" className="w-3 h-3" />,
      <Gauge key="gauge" className="w-3 h-3" />,
      <ShieldCheck key="shield" className="w-3 h-3" />,
      <MapPin key="pin" className="w-3 h-3" />,
      <Zap key="zap" className="w-3 h-3" />,
      <HardDrive key="hd" className="w-3 h-3" />,
      <Settings key="set" className="w-3 h-3" />,
    ],
    [],
  );

  return (
    <div className="flex flex-col h-full min-h-0 font-sans w-full max-w-[380px] ml-auto">
      <div className="bg-menu2-derecha-bg flex-1 border border-menu2-izq-buscador-borde rounded-xl p-7 shadow-xl overflow-hidden flex flex-col min-h-0 transform-gpu">
        {/* Cabecera Horizontal - Icono a la izquierda, Texto a la derecha */}
        <div className="flex flex-row items-center gap-4 mb-8 mt-0 flex-shrink-0">
          <div className="w-15 h-15 rounded-xl bg-slate-50 flex items-center justify-center border border-menu2-izq-buscador-borde shadow-inner flex-shrink-0 overflow-hidden">
            <img
              src={activeItem.image}
              alt={activeItem.name}
              className="w-18 h-18 object-contain"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <h3 className="text-menu2-derecha-ttl text-lg font-bold leading-tight truncate">
              {activeItem.name}
            </h3>

            <p className="text-menu2-derecha-desc text-xs font-normal mt-0.5">
              {activeItem.scientificName || activeItem.group}
            </p>
          </div>
        </div>

        {/* Contenedor de Scroll */}
        <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar overscroll-contain will-change-transform scrolling-touch">
          <div className="space-y-7 pb-6" style={{ contentVisibility: "auto" }}>
            <div className="space-y-0">
              {/* Título movido aquí: justo arriba de los iconos circulares */}
              <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] mb-3 px-1">
                ESPECIFICACIONES TÉCNICAS
              </h2>

              {detailEntries.map(([key, value], i) => (
                <div key={activeItem.id + i} className="transform-gpu">
                  <div className="flex items-center gap-5 py-3.5 px-1">
                    <div className="w-8 h-8 rounded-full bg-menu2-derecha-bg-iconos text-menu2-derecha-iconos flex items-center justify-center flex-shrink-0 shadow-sm">
                      {iconList[i % iconList.length]}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-menu2-derecha-mini-ttl text-xs font-normal leading-none mb-1.5">
                        {key}
                      </span>
                      <p className="text-menu2-derecha-mini-txt text-sm font-semibold leading-tight">
                        {value}
                      </p>
                    </div>
                  </div>
                  {i < detailEntries.length - 1 && (
                    <div className="border-t border-dashed border-menu2-izq-buscador-borde ml-14" />
                  )}
                </div>
              ))}
            </div>

            {/* SECCIÓN SEGURIDAD */}
            <div className="pt-3 transform-gpu">
              <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] mb-3 px-1">
                SEGURIDAD Y CUMPLIMIENTO
              </h2>
              <div className="grid grid-cols-1 gap-2.5">
                <div className=" p-4 rounded-2xl flex items-center gap-3">
                  <ShieldAlert className="text-menu2-derecha-mini-txt w-4 h-4" />
                  <span className="text-menu2-derecha-mini-txt text-xs font-semibold">
                    Certificación ISO 9001
                  </span>
                </div>
                <div className="p-4 rounded-2xl flex items-center gap-3">
                  <Beaker className="text-menu2-derecha-mini-txt w-4 h-4" />
                  <span className="text-menu2-derecha-mini-txt text-xs font-semibold">
                    Protocolo GLP Activo
                  </span>
                </div>
              </div>
            </div>

            {/* SECCIÓN LABORATORIO */}
            <div className="pt-3 transform-gpu">
              <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] mb-3 px-1">
                DATOS DE LABORATORIO
              </h2>
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-center">
                  <span className="text-menu2-derecha-mini-txt text-xs font-semibold">
                    Proveedor
                  </span>
                  <span className="text-menu2-derecha-mini-ttl text-xs font-normal">
                    BioTech Corp
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-menu2-derecha-mini-txt text-xs font-semibold">
                    Garantía
                  </span>
                  <span className="text-menu2-derecha-mini-ttl text-xs font-normal">
                    24 Meses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
