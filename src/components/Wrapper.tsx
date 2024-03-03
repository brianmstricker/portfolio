"use client";

import { useEffect, useRef } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const getMousePosition = (e: MouseEvent) => {
   if (!ref.current) return;
   const x = e.clientX / window.innerWidth;
   const y = e.clientY / window.innerHeight;
   ref.current.style.setProperty("--x", x * 100 + "%");
   ref.current.style.setProperty("--y", y * 100 + "%");
  };
  window.addEventListener("mousemove", getMousePosition);
  return () => {
   window.removeEventListener("mousemove", getMousePosition);
  };
 }, []);
 return (
  <div ref={ref} className="bg-black/70 w-full h-full gradient">
   {children}
  </div>
 );
};
export default Wrapper;
