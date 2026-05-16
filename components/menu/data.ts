import { Microscope, FlaskConical, Thermometer, Compass, Calculator, Ruler, Activity, Beaker, Biohazard, Dna, Droplet, Droplets, Flame, Gauge, Layers, Magnet, MicroscopeIcon, Pipette, Scale, Stethoscope, Syringe, TestTube, TestTubes, Wind, Atom, Brain, Heart, Leaf, RotateCcw, Apple, Box, Zap } from "lucide-react";
import React from "react";

export interface ItemData {
  id: string;
  name: string;
  scientificName?: string;
  subtitle: string;
  category: string;
  group: string;
  icon: React.ReactNode;
  image: string;
  emoji: string;
  details: {
    [key: string]: string;
  };
  quiz?: {
    question: string;
    options: string[];
    answer: number;
  };
  controls?: {
    label: string;
    unit: string;
    min: number;
    max: number;
    defaultValue: number;
  }[];
  history?: {
    user: string;
    date: string;
    action: string;
  }[];
  learningContent?: {
    steps: string[];
    tips: string[];
    fact: string;
    principle: string;
  };
}

const instruments: ItemData[] = [
  {
    id: "autoclave",
    name: "Autoclave",
    group: "Esterilización",
    subtitle: "Esterilización por vapor",
    category: "Instrumentos",
    icon: React.createElement(Flame, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Autoclave.png",
    emoji: "",
    details: {
      "Presión": "15-30 psi",
      "Temperatura": "121-134 °C",
      "Tiempo Ciclo": "20-60 min",
      "Capacidad": "20 Litros",
      "Uso": "Esterilización de material",
      "Estado": "Disponible"
    },
    learningContent: {
      steps: ["Verificar nivel de agua", "Cargar material", "Cerrar y programar"],
      tips: ["No abrir hasta despresurizar", "Usar guantes térmicos"],
      fact: "El vapor es más efectivo que el calor seco.",
      principle: "Desnaturalización de proteínas por calor húmedo."
    }
  },
  {
    id: "calefactora",
    name: "Calefactora",
    group: "Calentamiento",
    subtitle: "Placa de agitación térmica",
    category: "Instrumentos",
    icon: React.createElement(Thermometer, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Calefactora.png",
    emoji: "",
    details: {
      "Temp Max": "350 °C",
      "Placa": "Cerámica",
      "Control": "Digital",
      "Uso": "Calentamiento de soluciones",
      "Voltaje": "110/220V",
      "Estado": "Operativo"
    },
    learningContent: {
      steps: ["Conectar a la red", "Colocar recipiente", "Ajustar temperatura"],
      tips: ["No tocar la placa caliente", "Limpiar derrames de inmediato"],
      fact: "Algunas incluyen agitación magnética.",
      principle: "Transferencia de calor por conducción."
    }
  },
  {
    id: "gradilla",
    name: "Gradilla",
    group: "Soporte",
    subtitle: "Soporte para tubos de ensayo",
    category: "Instrumentos",
    icon: React.createElement(Layers, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Gradilla.png",
    emoji: "",
    details: {
      "Capacidad": "24 tubos",
      "Material": "Polipropileno",
      "Tipo": "Apilable",
      "Resistencia": "Autoclavable",
      "Uso": "Soporte de tubos de ensayo",
      "Estado": "Nuevo"
    },
    learningContent: {
      steps: ["Colocar en superficie plana", "Insertar tubos", "Organizar por códigos"],
      tips: ["Evitar sobrecarga", "Lavar después de usar"],
      fact: "Existen de metal, madera y plástico.",
      principle: "Organización y seguridad en el manejo de muestras."
    }
  },
  {
    id: "incubadora",
    name: "Incubadora",
    group: "Cultivo",
    subtitle: "Crecimiento microbiológico",
    category: "Instrumentos",
    icon: React.createElement(Activity, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Incubadora.png",
    emoji: "",
    details: {
      "Rango Temp": "Ambiente a 70°C",
      "Precisión": "±0.5°C",
      "Capacidad": "50 Litros",
      "Uso": "Cultivo microbiológico",
      "Control": "PID Microprocesado",
      "Estado": "En uso"
    },
    learningContent: {
      steps: ["Precalentar equipo", "Introducir muestras", "Cerrar puerta hermética"],
      tips: ["No abrir innecesariamente", "Monitorear temperatura"],
      fact: "La mayoría se ajustan a 37°C (temp. corporal).",
      principle: "Ambiente controlado para crecimiento celular."
    }
  },
  {
    id: "matraz",
    name: "Matraz",
    group: "Volumetría",
    subtitle: "Mezcla de soluciones químicas",
    category: "Instrumentos",
    icon: React.createElement(Beaker, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Matraz.png",
    emoji: "",
    details: {
      "Volumen": "250 mL",
      "Tipo": "Erlenmeyer",
      "Material": "Borosilicato 3.3",
      "Uso": "Mezcla de soluciones",
      "Boca": "Angosta",
      "Estado": "Limpio"
    },
    learningContent: {
      steps: ["Lavar con agua destilada", "Verter líquido", "Agitar circularmente"],
      tips: ["No calentar bruscamente", "Usar tapón adecuado"],
      fact: "Su forma evita salpicaduras al agitar.",
      principle: "Contención y mezcla de reactivos químicos."
    }
  },
  {
    id: "microscopio",
    name: "Microscopio",
    group: "Óptico",
    subtitle: "Análisis de muestras celulares",
    category: "Instrumentos",
    icon: React.createElement(Microscope, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Microscopio.png",
    emoji: "",
    details: {
      "Tipo": "Binocular",
      "Aumento Max": "1000x",
      "Iluminación": "LED",
      "Uso": "Observación de muestras",
      "Objetivos": "4x, 10x, 40x, 100x",
      "Estado": "Calibrado"
    },
    learningContent: {
      steps: ["Enchufar y encender", "Colocar portaobjetos", "Enfocar con 4x"],
      tips: ["Limpiar lentes con papel seda", "Bajar platina al terminar"],
      fact: "Permite ver estructuras invisibles al ojo humano.",
      principle: "Magnificación mediante refracción de luz."
    }
  },
  {
    id: "mortero",
    name: "Mortero",
    group: "Molienda",
    subtitle: "Trituración de sólidos",
    category: "Instrumentos",
    icon: React.createElement(Box, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Mortero.png",
    emoji: "",
    details: {
      "Material": "Porcelana",
      "Diámetro": "100 mm",
      "Incluye": "Mazo (Pistilo)",
      "Uso": "Trituración de sólidos",
      "Acabado": "Interior rugoso",
      "Estado": "Disponible"
    },
    learningContent: {
      steps: ["Colocar sólido", "Presionar y rotar mazo", "Recolectar polvo"],
      tips: ["No golpear fuerte", "Limpiar bien las grietas"],
      fact: "Se usa desde la prehistoria para moler.",
      principle: "Reducción de tamaño por fuerza mecánica."
    }
  },
  {
    id: "placa",
    name: "Placa de Petri",
    group: "Cultivo",
    subtitle: "Cultivo de microorganismos",
    category: "Instrumentos",
    icon: React.createElement(Box, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Placa.png",
    emoji: "",
    details: {
      "Material": "Vidrio/Plástico",
      "Diámetro": "90 mm",
      "Uso": "Cultivo de microorganismos",
      "Esterilidad": "Si (Desechable)",
      "Tapa": "Incluida",
      "Estado": "Estéril"
    },
    learningContent: {
      steps: ["Preparar agar", "Verter en condiciones estériles", "Inocular muestra"],
      tips: ["Trabajar cerca del mechero", "Invertir para incubar"],
      fact: "Lleva el nombre del bacteriólogo Julius Petri.",
      principle: "Superficie de crecimiento para colonias aisladas."
    }
  }
];

const molecules: ItemData[] = [
  {
    id: "acido-lactico",
    name: "Acido Láctico",
    scientificName: "C3H6O3",
    subtitle: "C₃H₆O₃",
    group: "Orgánica",
    category: "Moléculas",
    icon: React.createElement(Droplet, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/AcidoLáctico.png",
    emoji: "",
    details: {
      "Fórmula": "C3H6O3",
      "Masa Molar": "90.08 g/mol",
      "Estado": "Líquido viscoso",
      "Origen": "Fermentación láctica",
      "Uso": "Conservante/Cosmético",
      "pH": "Ácido"
    }
  },
  {
    id: "agua",
    name: "Agua",
    scientificName: "H2O",
    subtitle: "H₂O",
    group: "Inorgánica",
    category: "Moléculas",
    icon: React.createElement(Droplets, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Agua.png",
    emoji: "",
    details: {
      "Fórmula": "H2O",
      "Masa Molar": "18.015 g/mol",
      "Densidad": "1.0 g/cm³",
      "Punto Fusión": "0 °C",
      "Punto Eb.": "100 °C",
      "Polaridad": "Muy polar"
    }
  },
  {
    id: "benceno",
    name: "Benceno",
    scientificName: "C6H6",
    subtitle: "C₆H₆",
    group: "Aromática",
    category: "Moléculas",
    icon: React.createElement(Atom, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Benceno.png",
    emoji: "",
    details: {
      "Fórmula": "C6H6",
      "Masa Molar": "78.11 g/mol",
      "Estructura": "Anillo hexagonal",
      "Estado": "Líquido incoloro",
      "Olor": "Dulce característico",
      "Toxicidad": "Alta / Cancerígeno"
    }
  },
  {
    id: "cafeina",
    name: "Cafeína",
    scientificName: "C8H10N4O2",
    subtitle: "C₈H₁₀N₄O₂",
    group: "Alcaloide",
    category: "Moléculas",
    icon: React.createElement(Zap, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Cafeina.png",
    emoji: "",
    details: {
      "Fórmula": "C8H10N4O2",
      "Masa Molar": "194.19 g/mol",
      "Efecto": "Estimulante SNC",
      "Origen": "Café, Té, Cacao",
      "Estado": "Sólido cristalino",
      "Solubilidad": "Moderada en agua"
    }
  },
  {
    id: "diox-carb",
    name: "Diox. Carbono",
    scientificName: "CO2",
    subtitle: "CO₂",
    group: "Inorgánica",
    category: "Moléculas",
    icon: React.createElement(Wind, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/DioxCarb.png",
    emoji: "",
    details: {
      "Fórmula": "CO2",
      "Masa Molar": "44.01 g/mol",
      "Estado": "Gas",
      "Geometría": "Lineal",
      "Uso": "Fotosíntesis / Extintores",
      "Solubilidad": "Baja en agua"
    }
  },
  {
    id: "etanol",
    name: "Etanol",
    scientificName: "C2H5OH",
    subtitle: "C₂H₅OH",
    group: "Alcohol",
    category: "Moléculas",
    icon: React.createElement(Flame, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Etanol.png",
    emoji: "",
    details: {
      "Fórmula": "C2H5OH",
      "Masa Molar": "46.07 g/mol",
      "Punto Eb.": "78.37 °C",
      "Uso": "Desinfectante / Bebidas",
      "Estado": "Líquido volátil",
      "Olor": "Alcohólico fuerte"
    }
  },
  {
    id: "fenol",
    name: "Fenol",
    scientificName: "C6H5OH",
    subtitle: "C₆H₅OH",
    group: "Aromática",
    category: "Moléculas",
    icon: React.createElement(Biohazard, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Fenol.png",
    emoji: "",
    details: {
      "Fórmula": "C6H5OH",
      "Masa Molar": "94.11 g/mol",
      "Estado": "Sólido cristalino",
      "Uso": "Producción de resinas",
      "Propiedad": "Antiséptico",
      "Toxicidad": "Corrosivo"
    }
  },
  {
    id: "glicerol",
    name: "Glicerol",
    scientificName: "C3H8O3",
    subtitle: "C₃H₈O₃",
    group: "Alcohol",
    category: "Moléculas",
    icon: React.createElement(Droplets, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Glicerol.png",
    emoji: "",
    details: {
      "Fórmula": "C3H8O3",
      "Masa Molar": "92.09 g/mol",
      "Nombre": "Glicerina",
      "Estado": "Líquido viscoso",
      "Uso": "Humectante",
      "Sabor": "Dulce"
    }
  },
  {
    id: "propano",
    name: "Propano",
    scientificName: "C3H8",
    subtitle: "C₃H₈",
    group: "Alcano",
    category: "Moléculas",
    icon: React.createElement(Flame, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Propano.png",
    emoji: "",
    details: {
      "Fórmula": "C3H8",
      "Masa Molar": "44.1 g/mol",
      "Estado": "Gas licuado",
      "Uso": "Combustible",
      "Punto Eb.": "-42 °C",
      "Origen": "Gas natural / Petróleo"
    }
  }
];

// Combine alternating one instrument and one molecule
const combined: ItemData[] = [];
const maxLength = Math.max(instruments.length, molecules.length);

for (let i = 0; i < maxLength; i++) {
  if (i < instruments.length) combined.push(instruments[i]);
  if (i < molecules.length) combined.push(molecules[i]);
}

export const instrumentsData = instruments;
export const moleculesData = molecules;
export const combinedData = combined; // This is used by the components
