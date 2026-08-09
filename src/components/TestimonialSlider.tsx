import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play the slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto" id="testimonial-slider-container">
      {/* Visual Quote Icon Accent */}
      <div className="absolute -top-10 -left-6 opacity-5 text-white pointer-events-none">
        <Quote className="w-28 h-28 transform -scale-x-100" />
      </div>

      <div className="bg-brand-card/30 border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-sm">
        {/* Glow overlay */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center"
            id={`testimonial-slide-${current.id}`}
          >
            {/* Stars Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange drop-shadow-[0_0_8px_rgba(255,90,33,0.3)]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-sans text-lg sm:text-xl font-medium text-gray-200 leading-relaxed max-w-2xl mb-8">
              "{current.content}"
            </blockquote>

            {/* User details */}
            <div className="flex items-center gap-4 text-left">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover border border-brand-orange/30 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div>
                <h5 className="font-display font-bold text-sm text-white">{current.name}</h5>
                <p className="text-[11px] font-mono text-gray-500 mt-0.5">
                  {current.role} at <span className="text-brand-orange">{current.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sliders Navigation Arrows
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-orange/90 hover:border-brand-orange transition-all"
            aria-label="Previous testimonial"
            id="testimonial-prev-btn"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-orange/90 hover:border-brand-orange transition-all"
            aria-label="Next testimonial"
            id="testimonial-next-btn"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>   */}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-brand-orange" : "w-1.5 bg-white/20"
            }`}
            aria-label={`Go to testimonial slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
