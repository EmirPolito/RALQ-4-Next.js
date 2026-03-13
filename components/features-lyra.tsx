// import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
// import Image from "next/image";

// export function FeaturesLyra() {
//   return (
//     <section className="py-20 lg:py-20 bg-background">
//       <div className="mx-auto max-w-7xl px-1">
//         {/* Header Section */}

//         {/* <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-10">
//                     <h2 className="text-5xl font-semibold">The Lyra ecosystem brings together our models</h2>
//                     <p className="max-w-sm sm:ml-auto">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
//                 </div> */}

//         <div className="text-center mb-5">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance max-w-4xl mx-auto">
//             The Lyra ecosystem
//           </h2>
//           <p className="mt-3 text-lg text-muted-foreground max-w-1xl mx-auto text-balance">
//             Empower your team with workflows that adapt to your needs, whether
//             you prefer git synchronization or an AI Agents interface.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="relative rounded-3xl overflow-hidden mb-10">
//           <div className="aspect-[16/9] md:aspect-[21/9] relative">
//             <div className="bg-gradient-to-t z-1 from-background absolute inset-0 to-transparent"></div>
//             <Image
//               src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75"
//               className="absolute inset-0 z-10 object-cover"
//               alt="Lyra ecosystem illustration"
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
//             />
//             <Image
//               src="https://tailark.com/_next/image?url=%2Fmail-back.png&w=3840&q=75"
//               className="hidden dark:block object-cover"
//               alt="Lyra ecosystem dark background"
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
//             />
//             <Image
//               src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75"
//               className="dark:hidden object-cover"
//               alt="Lyra ecosystem light background"
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
//             />
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           <div className="p-6 rounded-2xl  transition-colors">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 rounded-lg bg-primary/10">
//                 <Zap className="size-5 text-primary" />
//               </div>
//               <h3 className="text-base font-semibold text-foreground">
//                 Rapido
//               </h3>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Soporta un ecosistema completo ayudando a desarrolladores a
//               innovar.
//             </p>
//           </div>
//           <div className="p-6 rounded-2xl transition-colors">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 rounded-lg bg-primary/10">
//                 <Cpu className="size-5 text-primary" />
//               </div>
//               <h3 className="text-base font-semibold text-foreground">
//                 Potente
//               </h3>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Soporta un ecosistema completo ayudando a desarrolladores y
//               negocios.
//             </p>
//           </div>
//           <div className="p-6 rounded-2xl  transition-colors">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 rounded-lg bg-primary/10">
//                 <Lock className="size-5 text-primary" />
//               </div>
//               <h3 className="text-base font-semibold text-foreground">
//                 Seguridad
//               </h3>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Soporta ayudando a desarrolladores y negocios a innovar de forma
//               segura.
//             </p>
//           </div>
//           <div className="p-6 rounded-2xl transition-colors">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 rounded-lg bg-primary/10">
//                 <Sparkles className="size-5 text-primary" />
//               </div>
//               <h3 className="text-base font-semibold text-foreground">
//                 IA Integrada
//               </h3>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Soporta ayudando a desarrolladores y negocios a innovar con IA.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
