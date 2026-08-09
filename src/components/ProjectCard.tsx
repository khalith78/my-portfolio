import React from "react";
import { motion } from "motion/react";
import { Project } from "../types";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  onClick: () => void;
  index: number;
  highlightedSkill: string | null;
}

export default function ProjectCard({ project, onClick, index, highlightedSkill }: ProjectCardProps) {
  // Check if this project uses the currently selected/highlighted skill
  const isSkillMatching = highlightedSkill ? project.skillsUsed.includes(highlightedSkill) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group cursor-pointer rounded-2xl overflow-hidden bg-brand-card/30 border transition-all duration-300 flex flex-col justify-between h-full ${
        isSkillMatching === true
          ? "border-brand-orange shadow-[0_0_25px_rgba(255,90,33,0.25)] scale-[1.02]"
          : isSkillMatching === false
          ? "border-white/5 opacity-40 grayscale"
          : "border-white/5 hover:border-brand-orange/30"
      }`}
      onClick={onClick}
      id={`project-card-${project.id}`}
    >
      {/*<div className="relative overflow-hidden aspect-[4/5] bg-[#1a1a1a]">
         Background gradient overlay */}

<div className="relative overflow-hidden aspect-[9/16] w-[85%] mx-auto bg-[#1a1a1a] rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />

        

       
       {/* Main Media */}

          {project.video ? (

         <video
  src={project.video}
  poster={project.thumbnail}
  muted
  loop
  autoPlay
  playsInline
  className="w-full h-full object-contain bg-black"
/>
          ) : (

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
            id={`project-image-${project.id}`}
          />

          )}

        {/* Top-right category label */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[9px] font-mono tracking-widest text-white uppercase bg-black/60 border border-white/10 backdrop-blur-md px-2.5 py-1 rounded-full">
            {project.categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-display text-lg font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors duration-200">
            {project.title}
          </h4>
          <p className="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

      

        {/* List of tools tags in card footer
        <div className="flex flex-wrap gap-1.5 mt-4 border-t border-white/5 pt-4">
          {project.skillsUsed.map((tool) => (
            <span
              key={tool}
              className={`text-[9px] font-mono px-2 py-0.5 rounded transition-all ${
                highlightedSkill === tool
                  ? "bg-brand-orange/20 border border-brand-orange text-brand-orange"
                  : "bg-white/5 border border-white/10 text-gray-400"
              }`}
            >
              {tool}
            </span>
          ))}
        </div>    */}

        
      </div>
    </motion.div>
  );
}
