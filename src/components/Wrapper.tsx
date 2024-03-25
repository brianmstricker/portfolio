"use client";

import { useEffect, useRef } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const hover = window.matchMedia("(hover: none)");
  if (!hover.matches) {
   ref.current?.classList.add("gradient");
  }
  const handleHoverChange = (e: MediaQueryListEvent) => {
   if (e.matches) {
    ref.current?.classList.remove("gradient");
    return;
   }
   ref.current?.classList.add("gradient");
  };
  hover.addEventListener("change", handleHoverChange);
  const getMousePosition = (e: MouseEvent) => {
   if (!ref.current) return;
   const x = e.clientX / window.innerWidth;
   const y = e.clientY / window.innerHeight;
   ref.current.style.setProperty("--x", x * 100 + "%");
   ref.current.style.setProperty("--y", y * 100 + "%");
  };
  window.addEventListener("mousemove", getMousePosition);
  return () => {
   hover.removeEventListener("change", handleHoverChange);
  };
 }, []);
 return (
  <div ref={ref} className="bg-stone-100/5 w-full h-full min-h-screen">
   {children}
  </div>
 );
};
export default Wrapper;
