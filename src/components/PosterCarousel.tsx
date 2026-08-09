import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "../types";

interface Props {
  projects: Project[];
  onSelect: (project: Project) => void;
  highlightedSkill: string | null;
}

export default function PosterCarousel({
  projects,
  onSelect,
}: Props) {

  const [current, setCurrent] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);


  // Reset carousel when section comes again
  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if(entry.isIntersecting){
          setCurrent(0);
        }

      },
      {
        threshold:0.25
      }
    );


    if(carouselRef.current){
      observer.observe(carouselRef.current);
    }


    return () => observer.disconnect();

  }, []);



  const prev = () =>
    setCurrent(
      (current - 1 + projects.length) % projects.length
    );


  const next = () =>
    setCurrent(
      (current + 1) % projects.length
    );



  return (

<div
ref={carouselRef}
className="
relative
w-full
overflow-hidden
"
>


{/* Left Arrow */}

<button
onClick={prev}
className="
absolute
left-1
sm:left-4
top-[38%]
z-50

w-9
h-9
sm:w-11
sm:h-11

rounded-full

bg-black/80
border
border-white/20

hover:bg-brand-orange

transition-all
duration-300

flex
items-center
justify-center
"
>

<ChevronLeft size={22}/>

</button>



{/* Right Arrow */}

<button
onClick={next}
className="
absolute
right-1
sm:right-4
top-[38%]
z-50

w-9
h-9
sm:w-11
sm:h-11

rounded-full

bg-black/80
border
border-white/20

hover:bg-brand-orange

transition-all
duration-300

flex
items-center
justify-center
"
>

<ChevronRight size={22}/>

</button>





<div
className="
relative

h-[520px]
sm:h-[600px]
md:h-[680px]

flex
items-center
justify-center
"
>


{
projects.map((project,index)=>{


const offset =
(index-current+projects.length)
%projects.length;



let x=0;
let scale=1;
let opacity=1;
let z=20;
let blur = 0;




const isMobile = window.innerWidth < 640;


if(offset === 0){

x = 0;
scale = isMobile ? 0.9 : 1;
opacity = 1;
z = 60;
blur = 0;

}

else if(offset === 1){

x = isMobile ? 120 : 260;
scale = isMobile ? 0.78 : 0.90;
opacity = 0.65;
z = 40;
blur = 4;
}

else if(offset === 2){

x = isMobile ? 220 : 500;
scale = isMobile ? 0.65 : 0.80;
opacity = 0.35;
z = 20;
blur = 7;

}

else if(offset === projects.length-1){

x = isMobile ? -120 : -260;
scale = isMobile ? 0.78 : 0.90;
opacity = 0.65;
z = 40;
blur = 4;

}

else if(offset === projects.length-2){

x = isMobile ? -220 : -500;
scale = isMobile ? 0.65 : 0.80;
opacity = 0.35;
z = 20;
blur = 7;
}

else{

x=0;
scale=0.5;
opacity=0;
z=0;
blur = 0;
}



return (

<motion.div

key={project.id}

animate={{
x,
scale,
opacity,
filter:`blur(${blur}px)`
}}

transition={{

type:"spring",

stiffness:90,

damping:20

}}

style={{
zIndex:z
}}

className="
absolute

w-[280px]
xs:w-[320px]
sm:w-[380px]
md:w-[400px]

group

"

>


{/* COMPLETE CARD */}

<div

onClick={()=>onSelect(project)}

className="

cursor-pointer

transition-all
duration-300

hover:-translate-y-1

hover:shadow-[0_0_25px_rgba(255,90,33,.18)]

"

>


{/* IMAGE */}

<div

className="

aspect-[3/4]
sm:aspect-[4/5]

overflow-hidden

rounded-[8px]

bg-black

border
border-white/20

group-hover:border-brand-orange/50

transition-all
duration-300

"

>


<img

src={project.image}

alt={project.title}

className="

w-full
h-full

object-cover

transition-transform
duration-500

group-hover:scale-[1.03]

"

/>


</div>





{/* DESCRIPTION */}

<div

className="

mt-3

px-4
py-3


bg-[#111]

border
border-white/20


rounded-[5px]


group-hover:border-brand-orange/50


transition-all
duration-300

"

>


<h3

className="

text-white

text-sm

font-semibold


group-hover:text-brand-orange


transition-colors

"

>

{project.title}

</h3>




<p

className="

text-gray-400

text-xs

mt-1

line-clamp-2

"

>

{project.description}

</p>


</div>


</div>



</motion.div>


)


})

}


</div>


</div>

  );

}