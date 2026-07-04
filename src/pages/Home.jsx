import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Services from "../components/home/Services.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Contact from "../components/home/Contact.jsx";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.section;

    if (!sectionId) return;

    const target = document.getElementById(sectionId);

    if (!target) return;

    const timer = window.requestAnimationFrame(() => {
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height || 84;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(timer);
  }, [location.state?.section]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;
