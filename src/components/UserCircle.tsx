"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import logo from "@/assets/Designer.png";

export const UserCircle = () => {
 const [hovered, setHovered] = useState<boolean | null>(null);
 const springConfig = { stiffness: 100, damping: 5 };
 const x = useMotionValue(0);
 const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
 const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
 const handleMouseMove = (event: any) => {
  const halfWidth = event.target.offsetWidth / 2;
  x.set(event.nativeEvent.offsetX - halfWidth);
 };
 return (
  <div
   className="relative group userCircle"
   onMouseEnter={() => setHovered(true)}
   onMouseLeave={() => setHovered(null)}
   onFocus={() => setHovered(true)}
   onBlur={() => setHovered(null)}
  >
   {hovered && (
    <AnimatePresence mode="wait">
     <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.4 }}
      animate={{
       opacity: 1,
       y: 0,
       scale: 1,
       transition: {
        type: "spring",
        stiffness: 260,
        damping: 10,
       },
      }}
      exit={{ opacity: 0, y: 20, scale: 0.4 }}
      style={{
       translateX: translateX,
       rotate: rotate,
       whiteSpace: "nowrap",
      }}
      className="absolute top-12 sm:-top-16 sm:-left-3/4 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
     >
      <div className="absolute inset-x-10 z-30 w-[20%] top-0 sm:bottom-0 sm:top-auto bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
      <div className="absolute left-2 sm:left-10 w-[40%] z-30 top-0 sm:bottom-0 sm:top-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
      <div className="font-bold text-white relative z-30 text-lg">Brian Stricker</div>
      <div className="text-white text-xs">Software Developer</div>
     </motion.div>
    </AnimatePresence>
   )}
   <div
    onMouseMove={handleMouseMove}
    tabIndex={0}
    className="rounded-full bg-black/50 p-3 ring ring-white/10 relative w-14 h-14 flex items-center justify-center group-hover:scale-105 group-hover:z-30 transition duration-500"
   >
    <Image src={logo} fill alt="logo" sizes="60px" />
   </div>
  </div>
 );
};
