import { Fish, Waves, Shell, Snowflake, Ghost, Star, Bug, Zap, Drill, Microscope, FlaskConical, Thermometer, Compass, Calculator, Ruler, Activity, Beaker, Biohazard, Dna, Droplet, Droplets, Flame, Gauge, Layers, Magnet, MicroscopeIcon, Pipette, Scale, Stethoscope, Syringe, TestTube, TestTubes, Wind, Atom, Brain, Heart, Leaf, RotateCcw, Apple } from "lucide-react";
import React from "react";

export interface ItemData {
  id: string;
  name: string;
  scientificName?: string;
  category: string;
  group: string;
  icon: React.ReactNode;
  emoji: string;
  details: {
    [key: string]: string;
  };
}

export const instrumentsData: ItemData[] = [
  {
    id: "microscopio",
    name: "Microscopio",
    group: "Óptico",
    category: "Instrumentos",
    icon: React.createElement(Microscope, { className: "w-5 h-5" }),
    emoji: "🔬",
    details: {
      "Tipo": "Óptico binocular",
      "Aumento": "Hasta 1000x",
      "Aplicación": "Citología y Microbiología",
      "Mantenimiento": "Limpieza de lentes mensual",
      "Estado": "Operativo",
      "Ubicación": "Laboratorio A1",
      "Notas": "Se requiere calibración anual"
    }
  },
  {
    id: "centrifuga",
    name: "Centrífuga",
    group: "Separación",
    category: "Instrumentos",
    icon: React.createElement(RotateCcw, { className: "w-5 h-5" }),
    emoji: "🌀",
    details: {
      "Velocidad": "15,000 RPM",
      "Capacidad": "24 tubos",
      "Uso": "Separación de plasma",
      "Rango de Temp": "-10°C a 40°C",
      "Marca": "CentriTech",
      "Calibración": "Anual"
    }
  },
  {
    id: "espectrometro",
    name: "Espectrómetro",
    group: "Análisis",
    category: "Instrumentos",
    icon: React.createElement(Zap, { className: "w-5 h-5" }),
    emoji: "🌈",
    details: {
      "Rango": "190 - 1100 nm",
      "Tipo": "UV-Vis",
      "Precisión": "+/- 0.5 nm",
      "Software": "SpectralPro 4.0",
      "Fuente": "Lámpara de Deuterio",
      "Estado": "En uso"
    }
  },
  {
    id: "pipeta",
    name: "Pipeta Automática",
    group: "Volumetría",
    category: "Instrumentos",
    icon: React.createElement(Pipette, { className: "w-5 h-5" }),
    emoji: "🧪",
    details: {
      "Rango": "100 - 1000 µL",
      "Tipo": "Monocanal",
      "Precisión": "99.8%",
      "Puntas": "Tipo universal",
      "Material": "Autoclavable",
      "Última Calibración": "05/2026"
    }
  },
  {
    id: "termociclador",
    name: "Termociclador",
    group: "Genética",
    category: "Instrumentos",
    icon: React.createElement(Activity, { className: "w-5 h-5" }),
    emoji: "🧬",
    details: {
      "Uso": "PCR en tiempo real",
      "Capacidad": "96 pozos",
      "Rampa de Temp": "4.0°C/s",
      "Canales": "6 canales de detección",
      "Conectividad": "Ethernet/USB",
      "Estado": "Disponible"
    }
  }
  // ... more instruments can be added here
];

export const moleculesData: ItemData[] = [
  {
    id: "agua",
    name: "Agua",
    scientificName: "H2O",
    group: "Inorgánica",
    category: "Moléculas",
    icon: React.createElement(Droplets, { className: "w-5 h-5" }),
    emoji: "💧",
    details: {
      "Fórmula": "H2O",
      "Masa Molar": "18.015 g/mol",
      "Punto de Fusión": "0 °C",
      "Punto de Ebullición": "100 °C",
      "Densidad": "997 kg/m³",
      "Polaridad": "Polar"
    }
  },
  {
    id: "glucosa",
    name: "Glucosa",
    scientificName: "C6H12O6",
    group: "Carbohidrato",
    category: "Moléculas",
    icon: React.createElement(Apple, { className: "w-5 h-5" }),
    emoji: "🍎",
    details: {
      "Fórmula": "C6H12O6",
      "Masa Molar": "180.16 g/mol",
      "Tipo": "Monosacárido",
      "Uso": "Fuente de energía",
      "Solubilidad": "Alta en agua",
      "Estado": "Sólido cristalino"
    }
  },
  {
    id: "adn",
    name: "ADN",
    scientificName: "Ácido Desoxirribonucleico",
    group: "Ácido Nucleico",
    category: "Moléculas",
    icon: React.createElement(Dna, { className: "w-5 h-5" }),
    emoji: "🧬",
    details: {
      "Estructura": "Doble hélice",
      "Bases": "A, T, C, G",
      "Azúcar": "Desoxirribosa",
      "Función": "Almacenamiento genético",
      "Carga": "Negativa",
      "Ubicación": "Núcleo celular"
    }
  },
  {
    id: "atp",
    name: "ATP",
    scientificName: "Adenosín Trifosfato",
    group: "Nucleótido",
    category: "Moléculas",
    icon: React.createElement(Zap, { className: "w-5 h-5" }),
    emoji: "⚡",
    details: {
      "Fórmula": "C10H16N5O13P3",
      "Función": "Moneda energética",
      "Origen": "Mitocondria",
      "Hidrólisis": "Exergónica",
      "Masa Molar": "507.18 g/mol",
      "Estado": "Inestable en agua"
    }
  },
  {
    id: "oxitocina",
    name: "Oxitocina",
    scientificName: "Hormona del amor",
    group: "Péptido",
    category: "Moléculas",
    icon: React.createElement(Heart, { className: "w-5 h-5" }),
    emoji: "❤️",
    details: {
      "Fórmula": "C43H66N12O12S2",
      "Tipo": "Neurohormona",
      "Función": "Vínculo social",
      "Origen": "Hipotálamo",
      "Peso": "1007.19 Da",
      "Estado": "Péptido"
    }
  }
];

export const allMarineData = [...instrumentsData, ...moleculesData];
