import { motion } from "framer-motion";
import SectionMarker from "../common/SectionMarker.jsx";

const stats = [
  { label: "Years Exp.", value: "2+" },
  { label: "Projects", value: "50+" },
  { label: "Services", value: "6" },
];

function About() {
  return (
    <section id="about" className="px-6 py-14 md:px-10 md:py-20" aria-labelledby="about-heading">
      <SectionMarker number="01" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">About Me</p>
          <h2 id="about-heading" className="mb-4 font-heading text-3xl font-semibold text-white md:text-4xl">
            Blending aesthetics with business goals.
          </h2>
          <p className="mb-8 max-w-lg text-secondary">
            I&apos;m an experienced graphic designer with over two years of experience in the field. I specialize in creating visual identities that go beyond aesthetics.
          </p>
          <div className="flex flex-wrap gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[100px] rounded-xl border border-border bg-card px-6 py-4 text-center"
              >
                <p className="font-heading text-xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border-2 border-dashed border-accent" />
            <div className="absolute inset-3 overflow-hidden rounded-full bg-gray-200">
              <img
                src="/assets/images/placeholder.png"
                alt="Mohamed Khalith profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;