"use client";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "@/utils/cn";

const Carousel = ({
 images,
 projName,
}: {
 images: StaticImageData[];
 projName: string;
}) => {
 const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
 const scrollPrev = useCallback(() => {
  if (emblaApi) emblaApi.scrollPrev();
 }, [emblaApi]);
 const scrollNext = useCallback(() => {
  if (emblaApi) emblaApi.scrollNext();
 }, [emblaApi]);
 return (
  <div className="overflow-hidden relative">
   <div ref={emblaRef}>
    <div className="flex">
     {images.map((image, i) => (
      <div key={i} style={{ minWidth: 0, flex: "0 0 100%" }}>
       <Image
        src={image}
        alt={projName}
        width={2000}
        className="object-contain"
        sizes="(max-width: 768px) 35vw, (max-width: 1200px) 50vw, 60vw"
       />
      </div>
     ))}
    </div>
   </div>
   <button
    className={cn(
     "w-fit h-fit absolute left-3 top-1/2 bottom-1/2 -translate-y-1/2 bg-black p-1.5 rounded-full opacity-20 hover:opacity-100 transition-all duration-300 ease-in-out",
     projName === "Chirp - Twitter Clone" && "bg-white"
    )}
    onClick={scrollPrev}
   >
    <FaChevronLeft
     className={cn(
      "fill-white w-4 h-4 relative -left-[1px]",
      projName === "Chirp - Twitter Clone" && "fill-black"
     )}
    />
   </button>
   <button
    className={cn(
     "w-fit h-fit absolute right-3 top-1/2 bottom-1/2 -translate-y-1/2 bg-black p-1.5 rounded-full opacity-20 hover:opacity-100 transition-all duration-300 ease-in-out",
     projName === "Chirp - Twitter Clone" && "bg-white"
    )}
    onClick={scrollNext}
   >
    <FaChevronRight
     className={cn(
      "fill-white w-4 h-4 relative -right-[1px]",
      projName === "Chirp - Twitter Clone" && "fill-black"
     )}
    />
   </button>
  </div>
 );
};
export default Carousel;
