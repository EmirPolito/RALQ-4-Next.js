// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "motion/react";

// // --- Data for the image accordion ---
// const accordionItems = [
//   {
//     id: 1,
//     title: "Voice Assistant",
//     imageUrl: "/img/quimica/img1.jpg",
//   },
//   {
//     id: 2,
//     title: "AI Image Generation",
//     imageUrl: "/img/quimica/img2.jpg",
//   },
//   {
//     id: 3,
//     title: "AI Chatbot + Local RAG",
//     imageUrl: "/img/quimica/img3.jpg",
//   },
//   {
//     id: 4,
//     title: "AI Agent",
//     imageUrl: "/img/quimica/img4.jpg",
//   },
//   {
//     id: 5,
//     title: "Visual Understanding",
//     imageUrl: "/img/quimica/img5.jpg",
//   },
// ];

// interface AccordionItemData {
//   id: number;
//   title: string;
//   imageUrl: string;
// }

// interface AccordionItemProps {
//   item: AccordionItemData;
//   isActive: boolean;
//   onMouseEnter: () => void;
// }

// // --- Accordion Item Component ---
// const AccordionItem = ({
//   item,
//   isActive,
//   onMouseEnter,
// }: AccordionItemProps) => {
//   return (
//     <motion.div
//       layout
//       className="relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
//       animate={{
//         width: isActive ? 400 : 80,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//       }}
//       onMouseEnter={onMouseEnter}
//     >
//       {/* Background Image */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         animate={{
//           scale: isActive ? 1.05 : 1,
//         }}
//         transition={{ duration: 0.7 }}
//       >
//         <Image
//           src={item.imageUrl}
//           alt={item.title}
//           fill
//           unoptimized
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//       </motion.div>

//       {/* Dark overlay */}
//       <motion.div
//         className="absolute inset-0 bg-black/40 z-10"
//         animate={{
//           opacity: isActive ? 0.5 : 0.8,
//         }}
//       />

//       {/* Caption Text */}
//       <AnimatePresence mode="wait">
//         <motion.span
//           key={isActive ? "active" : "inactive"}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className={`
//             absolute text-white font-semibold whitespace-nowrap z-20
//             ${
//               isActive
//                 ? "bottom-8 left-8 text-2xl"
//                 : "bottom-12 left-1/2 -translate-x-1/2 rotate-[270deg] origin-center text-sm uppercase tracking-widest opacity-70"
//             }
//           `}
//         >
//           {item.title}
//         </motion.span>
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// // --- Main App Component ---
// export function LandingAccordionItem() {
//   const [activeIndex, setActiveIndex] = useState(4);

//   const handleItemHover = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="bg-background font-sans">
//       <section className="container mx-auto px-4 py-12 md:py-24">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left Side: Text Content */}
//           <div className="ps-10 w-full md:w-1/2 text-center md:text-left">
//             <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tighter">
//               Accelerate Gen-AI Tasks on Any Device
//             </h1>
//             <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
//               Build high-performance AI apps on-device without the hassle of
//               model compression or edge deployment.
//             </p>
//             <div className="mt-8">
//               <a
//                 href="#contact"
//                 className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>

//           {/* Right Side: Image Accordion */}
//           <div className="w-full md:w-1/2">
//             {/* Changed flex-col to flex-row to keep the layout consistent */}
//             <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
//               {accordionItems.map((item, index) => (
//                 <AccordionItem
//                   key={item.id}
//                   item={item}
//                   isActive={index === activeIndex}
//                   onMouseEnter={() => handleItemHover(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
