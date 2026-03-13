// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// type Tab = {
//   title: string;
//   value: string;
//   content?: string | React.ReactNode;
// };

// export const Tabs = ({
//   tabs: propTabs,
//   containerClassName,
//   activeTabClassName,
//   tabClassName,
//   contentClassName,
// }: {
//   tabs: Tab[];
//   containerClassName?: string;
//   activeTabClassName?: string;
//   tabClassName?: string;
//   contentClassName?: string;
// }) => {
//   const [active, setActive] = useState<Tab>(propTabs[0]);
//   const [tabs, setTabs] = useState<Tab[]>(propTabs);

//   const moveSelectedTabToTop = (idx: number) => {
//     const newTabs = [...propTabs];
//     const selectedTab = newTabs.splice(idx, 1);
//     newTabs.unshift(selectedTab[0]);
//     setTabs(newTabs);
//     setActive(newTabs[0]);
//   };

//   const [hovering, setHovering] = useState(false);

//   return (
//     <>
//       <div
//         className={cn(
//           "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
//           containerClassName
//         )}
//       >
//         {propTabs.map((tab, idx) => (
//           <button
//             key={tab.title}
//             onClick={() => {
//               moveSelectedTabToTop(idx);
//             }}
//             onMouseEnter={() => setHovering(true)}
//             onMouseLeave={() => setHovering(false)}
//             className={cn("relative px-5 py-3 rounded-full cursor-pointer", tabClassName)}
//             style={{
//               transformStyle: "preserve-3d",
//             }}
//           >
//             {active.value === tab.value && (
//               <motion.div
//                 layoutId="clickedbutton"
//                 transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
//                 className={cn(
//                   "absolute inset-0 bg-muted rounded-full",
//                   activeTabClassName
//                 )}
//               />
//             )}

//             <span className="relative block text-foreground">
//               {tab.title}
//             </span>
//           </button>
//         ))}
//       </div>
//       <FadeInDiv
//         tabs={tabs}
//         active={active}
//         key={active.value}
//         hovering={hovering}
//         className={cn("mt-13", contentClassName)}
//       />
//     </>
//   );
// };

// export const FadeInDiv = ({
//   className,
//   tabs,
//   hovering,
// }: {
//   className?: string;
//   key?: string;
//   tabs: Tab[];
//   active: Tab;
//   hovering?: boolean;
// }) => {
//   const isActive = (tab: Tab) => {
//     return tab.value === tabs[0].value;
//   };
//   return (
//     <div className="relative w-full h-full">
//       {tabs.map((tab, idx) => (
//         <motion.div
//           key={tab.value}
//           layoutId={tab.value}
//           style={{
//             scale: 1 - idx * 0.1,
//             top: hovering ? idx * -50 : 0,
//             zIndex: -idx,
//             opacity: idx < 3 ? 1 - idx * 0.1 : 0,
//           }}
//           animate={{
//             y: isActive(tab) ? [0, 40, 0] : 0,
//           }}
//           className={cn("w-full h-full absolute top-0 left-0", className)}
//         >
//           {tab.content}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // Demo component with tabs
// const DummyContent = () => {
//   return (
//     <Image
//       src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=2048&q=75"
//       alt="team working"
//       width={1000}
//       height={1000}
//       className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };

// export function TabsDemo() {
//   const tabs = [
//     {
//       title: "Product",
//       value: "product",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-primary-foreground bg-gradient-to-br from-primary to-primary/70">
//           <p>Product Tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Services",
//       value: "services",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-primary-foreground bg-gradient-to-br from-primary to-primary/70">
//           <p>Services tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Playground",
//       value: "playground",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-primary-foreground bg-gradient-to-br from-primary to-primary/70">
//           <p>Playground tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Content",
//       value: "content",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-primary-foreground bg-gradient-to-br from-primary to-primary/70">
//           <p>Content tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Random",
//       value: "random",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-primary-foreground bg-gradient-to-br from-primary to-primary/70">
//           <p>Random tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-15">
//       <Tabs tabs={tabs} />
//     </div>
//   );
// }
