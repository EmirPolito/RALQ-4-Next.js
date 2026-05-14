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

export const instrumentsData: ItemData[] = [
  {
    id: "microscopio",
    name: "Microscopio",
    group: "Óptico",
    category: "Instrumento muy utilizado",
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
    },
    quiz: {
      question: "¿Qué lente se debe usar primero para enfocar una muestra?",
      options: ["4x", "10x", "40x", "100x"],
      answer: 0
    },
    controls: [
      { label: "Enfoque (Z)", unit: "μm", min: 0, max: 100, defaultValue: 45 },
      { label: "Intensidad", unit: "%", min: 0, max: 100, defaultValue: 60 }
    ],
    history: [
      { user: "Dr. Aris", date: "Hoy, 10:30", action: "Análisis frotis" },
      { user: "Ing. Lopez", date: "Ayer", action: "Calibración óptica" }
    ],
    learningContent: {
      steps: [
        "Limpiar los lentes con papel seda antes de usar.",
        "Colocar la muestra y ajustar con el objetivo de 4x.",
        "Usar el tornillo micrométrico para el enfoque fino."
      ],
      tips: [
        "Nunca toques los lentes con los dedos.",
        "Apaga la luz después de terminar."
      ],
      fact: "El primer microscopio fue inventado por Zacharias Janssen en 1590.",
      principle: "Refracción de la luz a través de lentes convexos."
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
    },
    quiz: {
      question: "¿Por qué se deben colocar los tubos en pares opuestos?",
      options: ["Para ahorrar espacio", "Para balancear el rotor", "Para enfriar el motor"],
      answer: 1
    },
    controls: [
      { label: "Velocidad", unit: "RPM", min: 0, max: 15000, defaultValue: 3000 },
      { label: "Tiempo", unit: "min", min: 0, max: 60, defaultValue: 10 }
    ],
    history: [
      { user: "Lic. Ana", date: "Hace 2h", action: "Separación suero" },
      { user: "Lab Tech", date: "Ayer", action: "Limpieza rotor" }
    ],
    learningContent: {
      steps: [
        "Cargar los tubos en pares opuestos para balancear.",
        "Cerrar la tapa de seguridad herméticamente.",
        "Programar tiempo y RPM según el protocolo."
      ],
      tips: [
        "No abrir la tapa hasta que el rotor se detenga.",
        "Verificar que el equipo esté en una superficie nivelada."
      ],
      fact: "La fuerza centrífuga puede ser miles de veces más fuerte que la gravedad.",
      principle: "Sedimentación acelerada por fuerza rotacional."
    }
  },
  {
    id: "espectrometro",
    name: "Espectrómetro",
    group: "Análisis",
    category: "Instrumentos",
    icon: React.createElement(Activity, { className: "w-5 h-5" }),
    emoji: "🌈",
    details: {
      "Rango": "190 - 1100 nm",
      "Ancho de Banda": "2 nm",
      "Detector": "Fotodiodos de silicio",
      "Fuente": "Lámpara Deuterio/Tungsteno",
      "Precisión": "±0.5 nm",
      "Estado": "Mantenimiento"
    },
    quiz: {
      question: "¿Qué ley rige la absorción de luz en una solución?",
      options: ["Ley de Newton", "Ley de Beer-Lambert", "Ley de Boyle"],
      answer: 1
    },
    controls: [
      { label: "Longitud de Onda", unit: "nm", min: 190, max: 1100, defaultValue: 540 },
      { label: "Ganancia", unit: "x", min: 1, max: 10, defaultValue: 1 }
    ],
    history: [
      { user: "Ing. Perez", date: "Ayer", action: "Reemplazo de lámpara" },
      { user: "Dr. Kim", date: "Lun", action: "Curva patrón glucosa" }
    ],
    learningContent: {
      steps: [
        "Encender y dejar calentar la lámpara por 15 min.",
        "Realizar el blanco con el solvente puro.",
        "Insertar la celda con la muestra y leer absorbancia."
      ],
      tips: [
        "No tocar las caras transparentes de la cubeta.",
        "Verificar que no haya burbujas en la muestra."
      ],
      fact: "La espectroscopía permite saber de qué están hechas las estrellas lejanas.",
      principle: "Absorción de fotones según la ley de Beer-Lambert."
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
    },
    quiz: {
      question: "¿A qué tope se debe presionar para aspirar el líquido?",
      options: ["Primer tope", "Segundo tope", "Hasta el fondo"],
      answer: 0
    },
    controls: [
      { label: "Volumen", unit: "µL", min: 100, max: 1000, defaultValue: 500 },
      { label: "Velocidad Aspiración", unit: "v", min: 1, max: 5, defaultValue: 3 }
    ],
    history: [
      { user: "Est. Gomez", date: "10:00 AM", action: "Preparación de buffers" },
      { user: "QC Dept", date: "Semana pasada", action: "Verificación de volumen" }
    ],
    learningContent: {
      steps: [
        "Ajustar el volumen girando el selector.",
        "Colocar la punta presionando firmemente.",
        "Presionar al primer tope para aspirar y al segundo para expulsar."
      ],
      tips: [
        "Mantener siempre la pipeta en posición vertical.",
        "Soltar el pulsador suavemente al aspirar."
      ],
      fact: "Una gota de agua pesa aproximadamente 50 µL.",
      principle: "Desplazamiento de aire mediante un pistón interno."
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
    },
    quiz: {
      question: "¿En qué año se inventó la técnica de PCR?",
      options: ["1970", "1983", "1995", "2005"],
      answer: 1
    },
    controls: [
      { label: "Temp. Tapa", unit: "°C", min: 30, max: 110, defaultValue: 105 },
      { label: "Ciclos", unit: "qty", min: 1, max: 50, defaultValue: 35 }
    ],
    history: [
      { user: "Dr. Aris", date: "Lun", action: "Amplificación cDNA" },
      { user: "Bioinfo", date: "Ayer", action: "Actualización firmware" }
    ],
    learningContent: {
      steps: [
        "Cargar la placa de PCR asegurando el sellado.",
        "Configurar el protocolo de ciclos (Denat, Anneal, Ext).",
        "Iniciar el programa y monitorear la curva."
      ],
      tips: [
        "Usar guantes para evitar contaminación con nucleasas.",
        "Limpiar el bloque térmico con alcohol isopropílico."
      ],
      fact: "Kary Mullis ganó el Nobel por inventar la PCR en 1983.",
      principle: "Amplificación enzimática de ADN mediante ciclos térmicos."
    }
  },
  {
    id: "agitador",
    name: "Agitador Magnético",
    group: "Mezcla",
    category: "Instrumentos",
    icon: React.createElement(Magnet, { className: "w-5 h-5" }),
    emoji: "🌪️",
    details: {
      "Velocidad": "100 - 1500 RPM",
      "Placa": "Cerámica térmica",
      "Temp Max": "350 °C",
      "Capacidad": "5 Litros",
      "Estado": "Operativo",
      "Control": "Digital"
    },
    quiz: {
      question: "¿Cuál es la función de la barra de agitación (pulga)?",
      options: ["Calentar el líquido", "Mezclar mediante magnetismo", "Medir el pH"],
      answer: 1
    },
    controls: [
      { label: "RPM", unit: "rpm", min: 100, max: 1500, defaultValue: 400 },
      { label: "Calor", unit: "°C", min: 20, max: 350, defaultValue: 25 }
    ],
    history: [
      { user: "Tec. Ruiz", date: "Hoy", action: "Mezcla de sales" }
    ],
    learningContent: {
      steps: [
        "Colocar el vaso sobre la placa central.",
        "Introducir la barra magnética limpia.",
        "Ajustar velocidad gradualmente."
      ],
      tips: [
        "No usar recipientes de metal.",
        "Limpiar la placa después de enfriar."
      ],
      fact: "Las barras de agitación suelen estar recubiertas de teflón para ser inertes.",
      principle: "Acoplamiento magnético entre un motor interno y una barra externa."
    }
  },
  {
    id: "balanza",
    name: "Balanza Analítica",
    group: "Pesaje",
    category: "Instrumentos",
    icon: React.createElement(Scale, { className: "w-5 h-5" }),
    emoji: "⚖️",
    details: {
      "Precisión": "0.0001 g",
      "Capacidad Max": "220 g",
      "Estabilización": "3 segundos",
      "Calibración": "Interna automática",
      "Cámara": "Vidrio anti-estática",
      "Estado": "Calibrado"
    },
    quiz: {
      question: "¿Por qué tiene una cámara de vidrio?",
      options: ["Para que no se escape el polvo", "Para evitar corrientes de aire", "Por estética"],
      answer: 1
    },
    controls: [
      { label: "Tara", unit: "g", min: 0, max: 0, defaultValue: 0 }
    ],
    history: [
      { user: "Lic. Vega", date: "Hace 1h", action: "Pesaje de reactivos" }
    ],
    learningContent: {
      steps: [
        "Nivelar la balanza usando la burbuja.",
        "Cerrar las puertas y tarar a cero.",
        "Colocar la muestra con pinzas o espátula."
      ],
      tips: [
        "No pesar objetos calientes.",
        "Usar guantes para no transferir grasa cutánea."
      ],
      fact: "Estas balanzas pueden detectar el peso de una huella dactilar.",
      principle: "Compensación de fuerza electromagnética."
    }
  },
  {
    id: "bureta",
    name: "Bureta Digital",
    group: "Titulación",
    category: "Instrumentos",
    icon: React.createElement(Gauge, { className: "w-5 h-5" }),
    emoji: "📏",
    details: {
      "Volumen": "50 mL",
      "Precisión": "±0.03 mL",
      "Pantalla": "LCD Integrada",
      "Alimentación": "Batería recargable",
      "Material": "Vidrio Borosilicato",
      "Uso": "Análisis cuantitativo"
    },
    quiz: {
      question: "¿Qué proceso químico se realiza típicamente con una bureta?",
      options: ["Filtración", "Titulación o Valoración", "Evaporación"],
      answer: 1
    },
    controls: [
      { label: "Dispensado", unit: "mL", min: 0, max: 50, defaultValue: 0 }
    ],
    history: [
      { user: "Est. Torres", date: "Ayer", action: "Determinación de acidez" }
    ],
    learningContent: {
      steps: [
        "Purgar el aire del sistema antes de iniciar.",
        "Llenar con la solución titulante.",
        "Abrir la llave gota a gota hasta el viraje."
      ],
      tips: [
        "Leer siempre el menisco a la altura de los ojos.",
        "Lavar con agua destilada tras su uso."
      ],
      fact: "La bureta fue perfeccionada por Joseph Gay-Lussac en 1824.",
      principle: "Medición precisa de volumen por gravedad y control de flujo."
    }
  },
  {
    id: "autoclave",
    name: "Autoclave",
    group: "Esterilización",
    category: "Instrumentos",
    icon: React.createElement(Flame, { className: "w-5 h-5" }),
    emoji: "🌡️",
    details: {
      "Presión": "15-30 psi",
      "Temperatura": "121-134 °C",
      "Tiempo Ciclo": "20-60 min",
      "Capacidad": "20 Litros",
      "Seguridad": "Válvula de alivio",
      "Estado": "En ciclo"
    },
    quiz: {
      question: "¿Cuál es la temperatura estándar para esterilizar medios?",
      options: ["80 °C", "100 °C", "121 °C", "150 °C"],
      answer: 2
    },
    controls: [
      { label: "Temp", unit: "°C", min: 100, max: 134, defaultValue: 121 },
      { label: "Presión", unit: "bar", min: 1, max: 3, defaultValue: 1.1 }
    ],
    history: [
      { user: "Lab Central", date: "En curso", action: "Esterilización de material" }
    ],
    learningContent: {
      steps: [
        "Verificar el nivel de agua destilada.",
        "Cargar el material sin obstruir el vapor.",
        "Seleccionar el ciclo y asegurar la puerta."
      ],
      tips: [
        "No esterilizar líquidos en recipientes cerrados.",
        "Usar cinta testigo para verificar el proceso."
      ],
      fact: "El vapor a presión es mucho más efectivo que el aire caliente.",
      principle: "Desnaturalización de proteínas mediante calor húmedo a presión."
    }
  }
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
  },
  {
    id: "metano",
    name: "Metano",
    scientificName: "CH4",
    group: "Alcano",
    category: "Moléculas",
    icon: React.createElement(Flame, { className: "w-5 h-5" }),
    emoji: "🔥",
    details: {
      "Fórmula": "CH4",
      "Masa Molar": "16.04 g/mol",
      "Geometría": "Tetraédrica",
      "Uso": "Combustible fósil",
      "Estado": "Gas",
      "Punto Eb.": "-161.5 °C"
    }
  },
  {
    id: "cafeina",
    name: "Cafeína",
    scientificName: "1,3,7-trimetilxantina",
    group: "Alcaloide",
    category: "Moléculas",
    icon: React.createElement(Activity, { className: "w-5 h-5" }),
    emoji: "☕",
    details: {
      "Fórmula": "C8H10N4O2",
      "Efecto": "Estimulante SNC",
      "Masa Molar": "194.19 g/mol",
      "Solubilidad": "Moderada en agua",
      "Origen": "Granos de café/té",
      "Estado": "Sólido blanco"
    }
  },
  {
    id: "adrenalina",
    name: "Adrenalina",
    scientificName: "Epinefrina",
    group: "Catecolamina",
    category: "Moléculas",
    icon: React.createElement(Zap, { className: "w-5 h-5" }),
    emoji: "🏃",
    details: {
      "Fórmula": "C9H13NO3",
      "Función": "Lucha o huida",
      "Masa Molar": "183.20 g/mol",
      "Origen": "Glándulas suprarrenales",
      "Receptor": "Adrenérgicos",
      "Estado": "Hormona"
    }
  },
  {
    id: "dopamina",
    name: "Dopamina",
    scientificName: "4-(2-aminoetil)benceno-1,2-diol",
    group: "Neurotransmisor",
    category: "Moléculas",
    icon: React.createElement(Brain, { className: "w-5 h-5" }),
    emoji: "🧠",
    details: {
      "Fórmula": "C8H11NO2",
      "Función": "Recompensa y placer",
      "Masa Molar": "153.18 g/mol",
      "Déficit": "Asociado a Parkinson",
      "Exceso": "Asociado a Psicosis",
      "Estado": "Líquido/Sólido"
    }
  }
];

export const allMarineData = [...instrumentsData, ...moleculesData];
