import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Service } from "../types";
import {  Check, ChevronDown, ChevronUp, Clock, PackageOpen } from "lucide-react";

interface ServiceCardProps {
  key?: React.Key;
  service: Service;
  index: number;
}



export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-brand-card/30 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-brand-orange/30 card-border-glow transition-all duration-300 flex flex-col justify-between h-full ${
        isExpanded ? "border-brand-orange/30 bg-brand-card/50" : ""
      }`}
      id={`service-card-${service.id}`}
    >
      <div>
        {/* Top bar with icon */}
        <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
  <img 
    src={service.iconName} 
    alt={service.title}
    className="w-12 h-12 object-contain"
  />
</div>
          <span className="font-mono text-xs text-gray-500">0{index + 1}</span>
        </div>

        {/* Title */}
        <h4 className="font-display text-xl font-bold tracking-tight text-white mb-3 group-hover:text-brand-orange transition-colors">
          {service.title}
        </h4>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables lists */}
        <ul className="space-y-3 mb-6">
          {service.bulletPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
              <span className="w-4 h-4 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5" />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Expandable methodology & deliverables files details 
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/5 pt-4 mt-4 space-y-4"
              id={`service-expanded-${service.id}`}
            >
              <div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white mb-2">
                  <PackageOpen className="w-3.5 h-3.5 text-brand-orange" />
                  What You Receive:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.deliverables.map((del) => (
                    <span
                      key={del}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400 bg-black/40 border border-white/5 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                <span>
                  Avg. Delivery Time: <strong className="text-white">{service.averageTurnaround}</strong>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>  */}
      </div>

      {/* Accordion Expand Action 
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300 hover:text-white transition-colors border border-white/5 hover:border-white/10"
        id={`service-toggle-${service.id}`}
      >
        <span>{isExpanded ? "Show Less" : "Details & Output files"}</span>
        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>  */}
    </motion.div>
  );
}
