import { useState, useEffect, useRef, type ComponentType } from "react";
import { ArrowDown} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectLightbox from "./components/ProjectLightbox";
import ServiceCard from "./components/ServiceCard";
import SkillBadge from "./components/SkillBadge";
import ExperienceTimeline from "./components/ExperienceTimeline";
{/*import TestimonialSlider from "./components/TestimonialSlider";*/}
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PosterCarousel from "./components/PosterCarousel";
import MotionShowcase from "./components/MotionShowcase";

const ContactFormWithScope = ContactForm as ComponentType<{ appliedScope: { projectType: string; budget: number; urgency: string } | null }>;

import { projectsData, servicesData, skillsData, experienceData, testimonialsData, motionProjectsData } from "./data";
import { Project } from "./types";
import EmailIcon from "./assets/icons/mail.svg";
import WhatsappIcon from "./assets/icons/message-circle.svg";
import LocationIcon from "./assets/icons/map-pin.svg";
import { h2 } from "motion/react-client";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string | null>(null);
  const [appliedScope, setAppliedScope] = useState<{ projectType: string; budget: number; urgency: string } | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

const resumeRef = useRef<HTMLDivElement>(null);
const [motionResetKey, setMotionResetKey] = useState(0);

useEffect(() => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      resumeRef.current &&
      !resumeRef.current.contains(event.target as Node)
    ) {
      setResumeOpen(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, []);
  
  // Monitor scrolling to highlight navbar anchors
 useEffect(() => {
  const sections = [
    "home",
    "projects",
    "services",
    "skills",
    "about",
    "experience",
    "testimonials",
    "contact",
  ];

  let wasInsideProjects = false;

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 120;

    let currentSection = "home";

    for (const section of sections) {
      const el = document.getElementById(section);

      if (!el) continue;

      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;

      if (
        scrollPosition >= top &&
        scrollPosition < bottom
      ) {
        currentSection = section;
        break;
      }
    }

    setActiveSection(currentSection);

    // Projects section currently visible
    const projects = document.getElementById("projects");

    if (projects) {
      const rect = projects.getBoundingClientRect();

      const isInsideProjects =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

      // Projects -> another section
      if (wasInsideProjects && !isInsideProjects) {
        setMotionResetKey((prev) => prev + 1);
      }

      wasInsideProjects = isInsideProjects;
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  // Helper scroll trigger
 
const handleScrollTo = (id: string) => {
  const el = document.getElementById(id);

  if (el) {
    const offsetTop =
      el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};


  const handleSelectSkillFilter = (skillName: string) => {
    if (selectedSkillFilter === skillName) {
      setSelectedSkillFilter(null); // Toggle off
    } else {
      setSelectedSkillFilter(skillName);
      // Auto-scroll to projects to show the filtered result
      handleScrollTo("projects");
    }
  };

  const filteredProjects = selectedSkillFilter
    ? projectsData.filter((project) => project.skillsUsed.includes(selectedSkillFilter))
    : projectsData;

  return (
   <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-brand-orange selection:text-black">
      {/* Absolute Ambient Background Lights (Figma Lighting effects) */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] radial-glow rounded-full pointer-events-none z-0" />
      <div className="absolute top-[35vh] left-[-10vw] w-[45vw] h-[45vw] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[120vh] right-[-10vw] w-[50vw] h-[50vw] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[40vh] left-[15vw] w-[45vw] h-[45vw] radial-glow rounded-full pointer-events-none z-0" />

      {/* Floating Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Container */}
      <main className="relative z-10 ">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center py-12 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto w-full py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-left" id="hero-left-text">
              {/* Hello tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-white/5 shadow-md"
                id="hero-hello-badge"
              >
                <span className="w-1.5 h-1.5  rounded-full bg-brand-orange animate-ping" />
                <span className="text-xs  font-mono font-medium text-brand-orange uppercase tracking-wider">Hello!</span>
              </motion.div>

              {/* Display Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white"
                id="hero-title"
              >
                I'm <span className="bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">Mohamed</span>
                <br />
                <span className="text-white">Khalith.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-400 font-sans font-medium tracking-wide max-w-lg leading-relaxed"
                id="hero-subtitle"
              >
                Graphic & Multimedia Designer based in India.
              </motion.p>

              {/* Buttons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
                id="hero-buttons-row"
              >
                <button
                  onClick={() => handleScrollTo("projects")}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-display font-bold px-7 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,90,33,0.3)] hover:shadow-[0_0_25px_rgba(255,90,33,0.45)] transition-all cursor-pointer group"
                  id="hero-view-work-btn"
                >
                  View Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>
 <div
  ref={resumeRef}
  className="relative"
>
  <button
    onClick={() => setResumeOpen((prev) => !prev)}
    className="
      inline-flex
      items-center
      justify-center
      border
      border-white/15
      hover:border-brand-orange/40
      bg-[#121212]/40
      hover:bg-[#121212]/80
      backdrop-blur-md
      text-white
      font-display
      font-bold
      px-7
      py-3.5
      rounded-full
      transition-all
      cursor-pointer
    "
    id="hero-resume-btn"
  >
    Resume
  </button>

  {resumeOpen && (
    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        top-full
        mt-3
        w-48
        rounded-2xl

        bg-white/[0.08]
        backdrop-blur-xl
        backdrop-saturate-150

        border
        border-white/15

        shadow-[0_20px_50px_rgba(0,0,0,0.45)]

        overflow-hidden
        z-50
        p-1.5

        animate-in
        fade-in
        zoom-in-95
        duration-150
      "
    >
      {/* View Resume */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setResumeOpen(false)}
        className="
          flex
          items-center
          w-full
          px-4
          py-3
          rounded-xl
          text-sm
          text-gray-200
          hover:text-white
          hover:bg-white/10
          transition-all
        "
      >
        View Resume
      </a>

      {/* Download Resume */}
      <a
        href="/resume.pdf"
        download="Resume.pdf"
        onClick={() => setResumeOpen(false)}
        className="
          flex
          items-center
          w-full
          px-4
          py-3
          rounded-xl
          text-sm
          text-gray-200
          hover:text-white
          hover:bg-brand-orange/15
          hover:text-brand-orange
          transition-all
        "
      >
        Download Resume
      </a>
    </div>
  )}
</div>
              </motion.div>
            </div>

            {/* Right Hero Column: Profile Photo placeholder matching Figma ambient gradient background */}
            <div className="lg:col-span-5 flex justify-center" id="hero-right-visual">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative w-full max-w-[380px] aspect-square rounded-3xl overflow-hidden bg-brand-card border border-white/5 shadow-2xl p-3"
                id="hero-photo-frame"
              >
                {/* Embedded Glowing background leak inside box */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/30 via-brand-orange/15 to-transparent z-0 opacity-40 blur-xl" />
                
                {/* Main Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black z-10">
                  <img
                    src="/src/assets/images/mohamed_profile_1783388393714.jpg"
                    alt="Mohamed Khalith"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    id="hero-avatar"
                  />
                  {/* Fine linear gloss overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-8 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5 relative bg-[#080808]/40">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Header section marker */}
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
               
                <span className="text-xs font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-3">
                  01 — Portfolio
                </span>
                
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
                  Posters
                </h2>
                 
                <p className="text-gray-400 text-sm max-w-md mt-2">
                 Creative poster designs for brands, events, and personal projects.
                </p>
              </div>
            </div>

 {/* Poster Carousel */}

<PosterCarousel
 projects={projectsData}
 onSelect={setSelectedProject}
 highlightedSkill={selectedSkillFilter}
/>

          {/* Motion Design Section */}
          <div className="mb-8">
             <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
                  Motion Design
                </h2>
                <p className="text-gray-400 text-sm max-w-md mt-2">
                 Animated reels, typography animations, logo reveals, and promotional videos.
                </p>
           
          </div>

          {/* Motion Videos Grid */}
          <div id="motion-showcase">
              <MotionShowcase
                key={motionResetKey}
                projects={motionProjectsData}
                onSelect={setSelectedProject}
              />
          </div>
              
            
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-10 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-3">
                02 — Offerings
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
                Creative Services
              </h2>
              <p className="text-gray-400 text-sm max-w-md mt-2">
                Merging striking visual principles with your targeted business goals to deliver premium results.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
              {servicesData.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-13 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5 bg-[#080808]/30">
          <div className="max-w-7xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-3">
                03 — Expertise
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
                Technical Toolkit
              </h2>
              <p className="text-gray-400 text-sm max-w-md mt-2">
                Professional-grade execution across core designing, editing, and animation software stacks. 
              </p>
            </div>

            {/* Skills Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="skills-grid">
              {skillsData.map((skill, idx) => (
                <SkillBadge
                  key={skill.id}
                  skill={skill}
                  index={idx}
                  isSelected={selectedSkillFilter === skill.name}
                  onSelect={() => handleSelectSkillFilter(skill.name)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-14 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-1">
                04 — Core Bio
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Blending aesthetics with business goals.
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                With years of experience in creative design, I've delivered 50+ successful projects for 20+ happy clients. My focus is on creating impactful designs that help brands stand out and connect with their audience.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                By fusing intuitive layout structures, rhythmic video timing, and clean vector graphics, I compose multimedia campaigns that capture audience retention and amplify conversions.
              </p>

              {/* Stats blocks */}
              <div className="grid grid-cols-3 gap-4 pt-4" id="about-stats-row">
                <div className="p-4 bg-brand-card/30 border border-white/5 rounded-2xl hover:border-brand-orange/20 transition-colors">
                  <p className="font-mono text-xl sm:text-2xl font-bold text-brand-orange">2+</p>
                  <p className="text-[10px] text-gray-500 font-mono uppercase mt-1">Years Exp.</p>
                </div>
                <div className="p-4 bg-brand-card/30 border border-white/5 rounded-2xl hover:border-brand-orange/20 transition-colors">
                  <p className="font-mono text-xl sm:text-2xl font-bold text-brand-orange">50+</p>
                  <p className="text-[10px] text-gray-500 font-mono uppercase mt-1">Projects</p>
                </div>
                <div className="p-4 bg-brand-card/30 border border-white/5 rounded-2xl hover:border-brand-orange/20 transition-colors">
                  <p className="font-mono text-xl sm:text-2xl font-bold text-brand-orange">3</p>
                  <p className="text-[10px] text-gray-500 font-mono uppercase mt-1">Services</p>
                </div>
              </div>
            </div>

            {/* Right Side: Circular profile with custom orange border accent */}
            <div className="lg:col-span-5 flex justify-center" id="about-photo-wrapper">
              <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                {/* Decorative orbiting dashed rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-brand-orange/20 animate-spin-slow pointer-events-none" />
                <div className="absolute inset-4 rounded-full border border-gradient-to-tr from-brand-orange to-brand-red p-[2px]">
                  <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                    <img
                      src="/src/assets/images/mohamed_profile_1783388393714.jpg"
                      alt="Mohamed Khalith portrait"
                      className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      id="about-avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="py-12 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5 bg-[#080808]/30">
          <div className="max-w-7xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-3">
                05 — Professional Path
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
                Work Experience
              </h2>
              <p className="text-gray-400 text-sm max-w-md mt-2">
                My career milestones, previous roles, and key strategic highlights.
              </p>
            </div>

            <ExperienceTimeline experiences={experienceData} />
          </div>
        </section>

        {/* ESTIMATOR SECTION (Interactive Value-Add Gap filler)
        <section id="estimator" className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-3">
                Interactive Calculator
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
                Project Cost Estimator
              </h2>
              <p className="text-gray-400 text-sm max-w-md mt-2">
                Estimate the overall budget and timeline scope for your custom requirements and apply details directly to my contact board!
              </p>
            </div>

            <InquiryEstimator onApplyScope={(scope) => setAppliedScope(scope)} />
          </div>
        </section>   */}

        {/* TESTIMONIALS SECTION (Nav-marker gap filler)
        <section id="testimonials" className="py-10 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5 bg-[#080808]/30">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center">
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-3">
                Kind Feedback
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
                Client Testimonials
              </h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto mt-2">
                Hear what my collaborative brand partners say about working together.
              </p>
            </div>

            <TestimonialSlider testimonials={testimonialsData} />
          </div>
        </section>*/}

        {/* LET'S TALK / CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Content */}
            <div className="lg:col-span-5 space-y-6 text-left" id="contact-left-text">
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/10 inline-block mb-1">
                06 — Collaboration
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Have an Idea?
                <br />
                <span className="bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">Let's Build it Together.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Whether you have a specific mobile concept ready for production or just want to outline a creative motion strategy, my tools and visual styles are ready to execute. Let's arrange a call!
              </p>

              {/* Direct coordinates cards */}
              <div className="space-y-4 pt-4" id="contact-coordinates-box">
                <div className="flex items-center gap-4 p-4 bg-[#121212]/50 border border-white/5 rounded-2xl hover:border-brand-orange/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <img src={EmailIcon} alt="Email" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono">EMAIL ME DIRECTLY</p>
                    <a href="mailto:rskhalith78@gmail.com" className="text-sm font-semibold text-white hover:text-brand-orange transition-colors">
                      rskhalith78@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#121212]/50 border border-white/5 rounded-2xl hover:border-brand-orange/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <img src={WhatsappIcon} alt="Whatsapp" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono">WHATSAPP CHAT</p>
                    <a href="https://wa.me/918838404738" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      +91 88384 04738
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#121212]/50 border border-white/5 rounded-2xl hover:border-brand-orange/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <img src={LocationIcon} alt="Location" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono">BASED IN</p>
                    <p className="text-sm font-semibold text-white">Tirunelveli, TN, India.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form panel */}
            <div className="lg:col-span-7" id="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      {/* Footer Segment */}
      <Footer />

      {/* Project detailed Lightbox Dialog */}
      <ProjectLightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

