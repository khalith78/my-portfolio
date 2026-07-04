import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Button from "../common/Button.jsx";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-12 pt-10 md:px-10"
      aria-labelledby="home-heading"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-hero1.jpg')" }}
      />

      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/70 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
            Available for Freelance
          </span>
          <h1 id="home-heading" className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            I&apos;m <span className="text-gradient">Mohamed Khalith</span>
          </h1>
          <p className="mb-8 max-w-md text-lg text-gray-300">Graphic Designer based in India.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button to="/projects" icon={FiArrowDown}>
              View Work
            </Button>
            <Button href="#contact" variant="outline">
              Hire Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="mx-auto mt-10 aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-gray-200/90">
            <img
              src="/assets/images/placeholder.png"
              alt="Mohamed Khalith portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;