"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({
 images,
 projName,
}: {
 images: StaticImageData[];
 projName: string;
}) => {
 const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
 // useEffect(() => {
 //  if (emblaApi) {
 //   console.log(emblaApi.slideNodes());
 //  }
 // }, [emblaApi]);
 return (
  <div ref={emblaRef} className="overflow-hidden">
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
 );
};
export default Carousel;
