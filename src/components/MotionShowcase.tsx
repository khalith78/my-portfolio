import { useState,useEffect, useRef } from "react";
import { Project } from "../types";
import MotionThumbnail from "./MotionThumbnail";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface MotionShowcaseProps {
 projects: Project[];
 onSelect:(project:Project)=>void;
}


export default function MotionShowcase({
 projects,
 onSelect
}:MotionShowcaseProps){


const cinematic = projects.filter(
p=>p.orientation==="landscape"
);


const reels = projects.filter(
p=>p.orientation==="portrait"
);



return (

<section className="space-y-16">


{/* CINEMATIC */}

<div>

<h2 className="
text-2xl
font-bold
text-white
mb-5
">
Wide Motion Stories
</h2>


<MotionCarousel
items={cinematic}
onSelect={onSelect}
/>


</div>





{/* REELS */}

<div>

<h2 className="
text-2xl
font-bold
text-white
mb-5
">
Vertical Motion Stories
</h2>


<MotionCarousel
items={reels}
onSelect={onSelect}
/>


</div>



</section>

)

}



function MotionCarousel({
  items,
  onSelect,
}: {
  items: Project[];
  onSelect: (p: Project) => void;
}) {
  const [index, setIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const resetCarousel = () => {
    setIndex(0);

    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  };

  const next = () => {
    if (index >= items.length - 1) return;

    setIndex((prev) => prev + 1);

    if (containerRef.current) {
      const container = containerRef.current;

      container.scrollTo({
        left: container.scrollLeft + container.clientWidth * 0.9,
        behavior: "smooth",
      });
    }
  };

  const prev = () => {
    if (index <= 0) return;

    setIndex((prev) => prev - 1);

    if (containerRef.current) {
      const container = containerRef.current;

      container.scrollTo({
        left: Math.max(
          0,
          container.scrollLeft - container.clientWidth * 0.9
        ),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">

      {/* LEFT ARROW */}

      <button
        onClick={prev}
        className="
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          z-20
          hidden
          md:flex
          w-10
          h-10
          rounded-full
          bg-black/70
          border
          border-white/20
          items-center
          justify-center
          hover:bg-brand-orange
          transition-all
        "
      >
        <ChevronLeft size={20} />
      </button>

      {/* CAROUSEL */}

      <div
        ref={containerRef}
        className="
          flex
          gap-5
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          px-2
          pb-5
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((project, i) => (
          <div
            key={project.id}
            className="snap-start shrink-0"
          >
            <MotionThumbnail
              project={project}
              isActive={index === i}
              onClick={() => onSelect(project)}
            />
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}

      <button
        onClick={next}
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          z-20
          hidden
          md:flex
          w-10
          h-10
          rounded-full
          bg-black/70
          border
          border-white/20
          items-center
          justify-center
          hover:bg-brand-orange
          transition-all
        "
      >
        <ChevronRight size={20} />
      </button>

    </div>
  );
}