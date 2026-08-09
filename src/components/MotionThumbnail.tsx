import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Project } from "../types";
import { useState } from "react";

interface MotionThumbnailProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

export default function MotionThumbnail({
  project,
  isActive,
  onClick,
}: MotionThumbnailProps) {

  const [duration, setDuration] = useState("");

  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-[#111]
        border
        transition-all
        duration-300
        flex-shrink-0

       
${
  project.orientation === "portrait"
    ? `
      w-[82vw]
      max-w-[380px]
      aspect-[9/16]
      h-auto

      sm:w-[210px]
      sm:max-w-[210px]

      md:w-[240px]
      md:max-w-[240px]

      lg:w-[270px]
      lg:max-w-[270px]

      xl:w-[290px]
      xl:max-w-[290px]
    `
    : `
      w-[88vw]
      max-w-[460px]
      aspect-video
      h-auto

      sm:w-[70vw]
      md:w-[500px]
      lg:w-[520px]
    `
}

       ${
  isActive
    ? "border-white/30"
    : "border-white/10"
}
hover:border-brand-orange/50
hover:shadow-[0_0_25px_rgba(255,90,33,0.18)]
      `}
    >
      {/* Thumbnail */}
     <img
src={project.thumbnail}
className={`
absolute
inset-0
w-full
h-full
${project.orientation==="portrait"
?"object-contain bg-black"
:"object-cover"
}
`}
/>
<video
  src={project.video}
  preload="metadata"
  className="hidden"
  onLoadedMetadata={(e) => {
    const totalSeconds = Math.floor(e.currentTarget.duration);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    setDuration(
      `${minutes}:${seconds.toString().padStart(2, "0")}`
    );
  }}
/>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Play Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center">
          <Play
            size={18}
            className="fill-white text-white ml-[2px]"
          />
        </div>
      </div>

      {/* Duration */}
      <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/70 text-[10px] font-medium">
       {duration || project.duration}
      </div>

      {/* Active Indicator */}
        {isActive && (
        <motion.div
            layoutId="activeMotionBorder"
            className="
            absolute
            inset-0
            border
            border-white/40
            rounded-2xl
            pointer-events-none
            "
        />
        )}
    </motion.button>
  );
}