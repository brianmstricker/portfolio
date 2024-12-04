"use client";
import { useEffect, useRef, useState } from "react";
import { FiDownload, FiMinus, FiPlus, FiX } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

type Button = {
 text: string;
 icon: React.ReactNode;
 onClick: (...args: any) => void;
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const Resume = ({ setSection }: { setSection: (section: string) => void }) => {
 const [scale, setScale] = useState(1.2);
 const modalRef = useRef<HTMLDivElement>(null);

 const buttons: Button[] = [
  {
   text: "Close",
   icon: <FiX />,
   onClick: (setSection: (section: string) => void) => setSection("projects"),
  },
  {
   text: "Zoom In",
   icon: <FiPlus />,
   onClick: (setScale: React.Dispatch<React.SetStateAction<number>>) => setScale((prev) => prev + 0.1),
  },
  {
   text: "Zoom Out",
   icon: <FiMinus />,
   onClick: (setScale: React.Dispatch<React.SetStateAction<number>>) => setScale((prev) => prev - 0.1),
  },
  {
   text: "Download",
   icon: <FiDownload />,
   onClick: () => {
    const link = document.createElement("a");
    link.href = `./Brian-Stricker-Resume.pdf`;
    link.download = "Brian-Stricker-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   },
  },
 ];

 useEffect(() => {
  const modal = modalRef.current;
  if (!modal) return;
  const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
   'a[href], area[href], input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), ' +
    'textarea:not([disabled]), button:not([disabled]):not([tabindex="-1"]), iframe, object, embed, ' +
    '*[tabindex]:not([tabindex="-1"]), [contenteditable]'
  );
  const firstElement = focusableElements?.[0];
  const lastElement = focusableElements?.[focusableElements.length - 1];
  setTimeout(() => {
   if (firstElement) {
    firstElement.focus();
   } else {
    modal.tabIndex = -1;
    modal.focus();
   }
  }, 0);
  const trapFocus = (e: KeyboardEvent) => {
   if (e.key !== "Tab") return;
   const activeElement = document.activeElement;
   if (e.shiftKey) {
    if (activeElement === firstElement || !modal.contains(activeElement)) {
     e.preventDefault();
     lastElement?.focus();
    }
   } else {
    if (activeElement === lastElement || !modal.contains(activeElement)) {
     e.preventDefault();
     firstElement?.focus();
    }
   }
  };
  modal.focus();
  document.addEventListener("keydown", trapFocus);
  return () => {
   document.removeEventListener("keydown", trapFocus);
  };
 }, []);

 return (
  <div className="fixed inset-0 bg-black/70 w-full h-full z-[9999] flex items-center justify-center" onClick={() => setSection("projects")}>
   <div ref={modalRef} tabIndex={-1} onClick={(e) => e.stopPropagation()} className="w-full h-full overflow-auto max-w-[751px] relative">
    <div className="fixed top-0 right-0 z-10 flex flex-col">
     {buttons.map((button) => (
      <div key={button.text} className="relative flex flex-row-reverse items-center">
       <button
        className="text-white bg-black h-10 border-b border-b-white/20 border-l border-l-white/20 border-t border-r border-t-transparent border-r-transparent px-2 peer flex items-center justify-center outline-none focus-visible:border-white"
        onClick={() => {
         switch (button.text) {
          case "Close":
           button.onClick(setSection);
           break;
          case "Zoom In":
           button.onClick(setScale);
           break;
          case "Zoom Out":
           button.onClick(setScale);
           break;
          case "Download":
           button.onClick();
           break;
         }
        }}
       >
        {button.icon}
       </button>
       <span className="whitespace-nowrap ml-auto opacity-0 select-none pointer-events-none peer-hover:opacity-100 peer-focus-visible:opacity-100 transition-opacity duration-100 bg-black text-white py-2 px-2">
        {button.text}
       </span>
      </div>
     ))}
    </div>
    <Document file="/Brian-Stricker-Resume.pdf">
     <Page pageNumber={1} scale={scale} renderTextLayer={false} />
    </Document>
   </div>
  </div>
 );
};
export default Resume;
