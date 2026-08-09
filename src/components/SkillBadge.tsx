import React from "react";
import { motion } from "motion/react";
import { Skill } from "../types";

interface SkillBadgeProps {
  key?: React.Key;
  skill: Skill;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

export default function SkillBadge({ skill, isSelected, onSelect, index }: SkillBadgeProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
   
      className={`group flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl border transition-all duration-300 text-left outline-none ${
        isSelected
          ? "border-brand-orange bg-brand-orange/10 shadow-[0_0_20px_rgba(255,90,33,0.15)] scale-[1.03]"
          : "border-white/5 bg-[#121212]/40 hover:border-white/15 hover:bg-[#121212]/60"
      }`}
      id={`skill-badge-${skill.id}`}
      title={`Click to filter projects made with ${skill.name}`}
    >
      {/* Visual Adobe-like icon mock */}
      <div
        className={`w-10 h-10 rounded-xl font-display font-bold text-base flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 ${skill.colorClass}`}
      >
        {skill.logo}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <span className="font-display font-bold text-sm text-white group-hover:text-brand-orange transition-colors">
            {skill.name}
          </span>
          <span className="font-mono text-[10px] text-gray-500">{skill.proficiency}%</span>
        </div>
        {/* Simplified progress bar */}
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className={`h-full ${
              isSelected ? "bg-brand-orange" : "bg-gray-600 group-hover:bg-brand-orange"
            } transition-colors`}
          />
        </div>
      </div>
    </motion.button>
  );
}
