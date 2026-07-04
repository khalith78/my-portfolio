import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionMarker from "../common/SectionMarker.jsx";
import TestimonialCard from "./TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      setVisibleCount(width >= 1280 ? 3 : width >= 768 ? 2 : 1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(testimonials.length - visibleCount, 0);
  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const visibleItems = testimonials.slice(index, index + visibleCount);

  return (
    <section id="testimonials" className="px-6 py-12 md:px-10 md:py-20" aria-labelledby="testimonials-heading">
      <SectionMarker number="03" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">Testimonials</p>
            <h2 id="testimonials-heading" className="font-heading text-3xl font-semibold text-white">
              What My <span className="text-accent">Client</span> Says
            </h2>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition hover:border-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FiArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent2 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FiArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="wait">
            {visibleItems.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
