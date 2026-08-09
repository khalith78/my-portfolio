import { useState } from "react";
import { X, Calendar, User, Briefcase, Clock, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";

interface ProjectLightboxProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const galleryImages = project.gallery || [project.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        className="
  fixed inset-0 z-50
  flex items-start lg:items-center justify-center
  p-2 sm:p-4
  bg-black/90 backdrop-blur-md
  overflow-y-auto
"

        id="project-lightbox-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
          
          className="
  relative
  w-full
  max-w-5xl
  bg-[#121212]
  border border-white/10
  rounded-xl sm:rounded-2xl
  overflow-hidden
  shadow-2xl
  my-2 sm:my-8
"


          id="project-lightbox-card"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-gray-400 hover:text-white hover:bg-black/80 hover:border-brand-orange/40 transition-all shadow-lg"
            id="lightbox-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left side: Visual Gallery / Media player mockup */}
            <div className="lg:col-span-7 bg-black flex flex-col justify-center relative min-h-[300px] sm:min-h-[400px]">
              <div
  className={`
    relative
    w-full
    overflow-hidden
    bg-black
    flex
    items-center
    justify-center

    ${
      project.orientation === "portrait"
        ? "aspect-[9/16] max-h-[75vh]"
        : "aspect-video max-h-[500px]"
    }

    lg:aspect-[4/3]
    lg:max-h-[500px]
  `}
>
               {project.category === "motion" && project.video ? (

                    <video
                      src={project.video}
                      controls
                      autoPlay
                      loop
                      className="
                        w-full
                        h-full
                        object-contain
                        bg-black
                      "
                    />

                  ) : (

                    <img
                      src={galleryImages[currentImageIndex]}
                      alt={`${project.title} - View ${currentImageIndex + 1}`}
                      className="
                        object-cover
                        w-full
                        h-full
                        select-none
                      "
                      referrerPolicy="no-referrer"
                      id="lightbox-gallery-image"
                    />

                  )}

                {/* Simulated playback bar or grid details for motion projects */}
                {project.category === "video" && (
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 border border-white/5 backdrop-blur-md p-3 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-gray-400">DEMO MOTION PREVIEW</span>
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-brand-orange animate-pulse" />
                    </div>
                    <span className="font-mono text-[10px] text-brand-orange">0:18 / 0:30</span>
                  </div>
                )}
              </div>

              {/* Navigation Arrows if there is a gallery */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange/90 transition-all hover:scale-105"
                    aria-label="Previous image"
                    id="lightbox-prev-btn"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange/90 transition-all hover:scale-105"
                    aria-label="Next image"
                    id="lightbox-next-btn"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Indicator Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentImageIndex ? "w-6 bg-brand-orange" : "w-1.5 bg-white/30"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right side: Case Study Metadata & Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between max-h-[600px] lg:max-h-[500px] overflow-y-auto">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-2.5 py-1 rounded-full border border-brand-orange/20 inline-block mb-3">
                  {project.categoryLabel}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Case Study Context Specs */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 mb-6" id="lightbox-specs-grid">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-mono">CLIENT</p>
                      <p className="text-xs font-semibold text-white">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-mono">ROLE</p>
                      <p className="text-xs font-semibold text-white">{project.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-mono">YEAR</p>
                      <p className="text-xs font-semibold text-white">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-mono">DURATION</p>
                      <p className="text-xs font-semibold text-white">{project.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution Tabs/Pills */}
                <div className="space-y-4 border-t border-white/5 pt-4">
                  <div>
                    <h4 className="text-xs font-mono tracking-wider text-brand-orange uppercase mb-1">THE CHALLENGE</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-wider text-emerald-400 uppercase mb-1">THE SOLUTION</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Key Deliverables Checklist */}
                <div className="border-t border-white/5 pt-4 mt-4">
                  <h4 className="text-xs font-mono tracking-wider text-white uppercase mb-2">KEY DELIVERABLES</h4>
                  <ul className="space-y-1.5">
                    {project.keyDeliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools Tags */}
              <div className="border-t border-white/5 pt-4 mt-6 flex flex-wrap gap-1.5">
                {project.skillsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
