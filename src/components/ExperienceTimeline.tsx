import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Experience } from "../types";
import { Briefcase, Calendar, Award, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [activeTab, setActiveTab] = useState<string>(experiences[0]?.id || "");
  const [showAchievements, setShowAchievements] = useState<boolean>(true);

  return (
    <div className="w-full" id="experience-timeline">
      <div className="space-y-6">
        {experiences.map((exp) => {
          const isActive = activeTab === exp.id;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-brand-card/30 border rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                isActive ? "border-brand-orange/40 bg-brand-card/50" : "border-white/5 hover:border-white/10"
              }`}
              id={`experience-block-${exp.id}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                {/* Company Logo / Text */}
                <div className="flex items-start gap-4">
           <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-[0_0_15px_rgba(255,90,33,0.2)]">
  <img
    src="https://www.centizen.com/shared/images/Google-validation-for-Centizen.png"
    alt="Centizen Logo"
    className="w-full h-full object-contain"
  />
</div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                      {exp.role}
                    </h4>
                    <p className="font-display font-medium text-brand-orange mt-0.5">{exp.company}</p>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full self-start font-mono">
                  <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="mt-6 border-t border-white/5 pt-6">
                <h5 className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mb-3">KEY RESPONSIBILITIES</h5>
                <ul className="space-y-3">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill mapping */}
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Expandable achievements / metrics 
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mt-5 border-t border-white/5 pt-5">
                  <button
                    onClick={() => setShowAchievements(!showAchievements)}
                    className="flex items-center gap-2 text-xs font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors"
                    id="experience-achievements-toggle"
                  >
                    <Award className="w-4 h-4" />
                    <span>{showAchievements ? "Hide Milestones" : "Show Key Milestones & Metrics"}</span>
                    {showAchievements ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <AnimatePresence>
                    {showAchievements && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                        id="experience-achievements-expanded"
                      >
                        
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}  */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
