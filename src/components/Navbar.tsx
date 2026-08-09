import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/icons/Logo.svg";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "About", href: "#about", id: "about" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex min-w-0 items-center gap-2 group"
            id="nav-logo-link"
          >
          <div className="w-8 h-8 ">
  <img
    src={logo}
    alt="Logo"
    className="max-w-full max-h-full object-contain"
  />
</div>
            <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors">
              Khalith<span className="text-brand-orange">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 bg-[#121212]/50 border border-white/5 px-6 py-2.5 rounded-full backdrop-blur-sm" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  activeSection === link.id ? "text-brand-orange font-semibold" : "text-gray-400"
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center gap-2 bg-white text-black font-display font-semibold px-6 py-2.5 rounded-full hover:bg-brand-orange hover:text-white hover:shadow-[0_0_20px_rgba(255,90,33,0.3)] transition-all text-sm group"
              id="desktop-contact-btn"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
<button
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  className="fixed top-4 right-4 md:hidden z-[9999] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white"
  id="mobile-menu-trigger"
  aria-label="Toggle mobile menu"
>
  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
</button>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] w-full bg-black/95 border-b border-white/10 backdrop-blur-lg z-40 md:hidden py-4 px-4 sm:px-6"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-lg font-medium py-2 transition-colors border-b border-white/5 ${
                    activeSection === link.id ? "text-brand-orange" : "text-gray-400"
                  }`}
                  id={`mobile-nav-link-${link.id}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-brand-orange text-white font-display font-semibold py-3 rounded-xl hover:bg-brand-orange/90 transition-colors"
                id="mobile-contact-btn"
              >
                Contact Me
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
