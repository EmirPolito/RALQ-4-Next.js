// "use client";

// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";
// import { OrbButton } from "@/components/ui/orb-button";
// import Image from "next/image";
// import Link from "next/link";

// interface CTAWithFloatingGalleryProps {
//   title?: string;
//   description?: string;
//   buttonLabel?: string;
//   className?: string;
// }

// const galleryImages = [
//   {
//     url: "/img/quimica/img1.jpg",
//     alt: "Laboratorio de Química",
//     delay: 0.1,
//   },
//   {
//     url: "/img/quimica/img2.jpg",
//     alt: "Experimentos Virtuales",
//     delay: 0.2,
//   },
//   {
//     url: "/img/quimica/img3.jpg",
//     alt: "Simulación de Moléculas",
//     delay: 0.3,
//   },
//   {
//     url: "/img/hero/hero.png",
//     alt: "RALQ Platform",
//     delay: 0.4,
//   },
// ];

// export default function Hero2({
//   title = "Laboratorios Virtuales de Nueva Generación",
//   description = "RALQ revoluciona la educación científica con simulaciones inmersivas y herramientas de alta precisión. Experimenta la química sin límites, desde cualquier lugar y en cualquier momento.",
//   buttonLabel = "Explorar Laboratorios",
//   className,
// }: CTAWithFloatingGalleryProps) {
//   const words = title.split(" ");
//   const leftImages = galleryImages.slice(0, 2);
//   const rightImages = galleryImages.slice(2);

//   return (
//     <section
//       className={cn(
//         "mx-auto mt-25 mb-10 sm:mt-20 sm:mb-20 grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 md:mt-24 md:mb-40 md:grid-cols-2 md:gap-15 md:px-10",
//         className,
//       )}
//     >
//       <motion.div
//         initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
//         whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
//         viewport={{ once: true, margin: "-50px" }}
//         transition={{
//           duration: 2.2,
//           ease: [0.16, 1, 0.3, 1],
//           delay: 0.2,
//         }}
//         style={{ willChange: "transform, opacity, filter" }}
//         className="max-w-xl flex flex-col justify-center text-left items-start pt-4 md:-ml-12"
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance text-[var(--titulos)] md:text-6xl">
//           {words.map((word, index) => (
//             <motion.span
//               key={`${word}-${index}`}
//               initial={{ opacity: 0, filter: "blur(4px)" }}
//               whileInView={{ opacity: 1, filter: "blur(0px)" }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 1,
//                 delay: 0.5 + index * 0.05,
//                 ease: "easeOut",
//               }}
//               className="mr-3 inline-block"
//             >
//               {word}
//             </motion.span>
//           ))}
//         </h2>

//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="mt-5 sm:mt-7 max-w-lg text-base sm:text-lg text-[var(--descripciones)] leading-relaxed"
//         >
//           {description}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.7 }}
//           className="mt-8 sm:mt-10"
//         >
//           <OrbButton size="lg" className="shadow-xl">
//             <Link href="/demo">
//               <span className="flex items-center gap-2">{buttonLabel}</span>
//             </Link>
//           </OrbButton>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, x: 30 }}
//         whileInView={{ opacity: 1, scale: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//         style={{ willChange: "transform, opacity" }}
//         className="relative overflow-hidden p-4 -mt-4"
//       >
//         {/* Gradient overlays for depth */}
//         <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-[var(--bg-fondo)] to-transparent opacity-60"></div>
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-[var(--bg-fondo)] to-transparent opacity-60"></div>

//         <div className="grid grid-cols-2 gap-4 items-center overflow-hidden">
//           <div className="flex flex-col gap-4">
//             {leftImages.map((image) => (
//               <motion.div
//                 key={image.alt}
//                 initial={{ opacity: 0, scale: 0.7, y: 30 }}
//                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   delay: image.delay,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="overflow-hidden rounded-2xl group"
//               >
//                 <Image
//                   src={image.url}
//                   alt={image.alt}
//                   width={400}
//                   height={240}
//                   className="h-40 sm:h-60 w-full object-cover scale-[1.02] transition-transform duration-700 group-hover:scale-110"
//                 />
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex flex-col gap-4 mt-20">
//             {rightImages.map((image) => (
//               <motion.div
//                 key={image.alt}
//                 initial={{ opacity: 0, scale: 0.7, y: 30 }}
//                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   delay: image.delay,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="overflow-hidden rounded-2xl group"
//               >
//                 <Image
//                   src={image.url}
//                   alt={image.alt}
//                   width={400}
//                   height={240}
//                   className="h-40 sm:h-60 w-full object-cover scale-[1.02] transition-transform duration-700 group-hover:scale-110"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
