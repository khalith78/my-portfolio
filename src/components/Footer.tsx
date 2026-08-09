import React from "react";
import {  ArrowUpRight } from "lucide-react";
import EmailIcon from "../assets/icons/mail.svg";
import WhatsappIcon from "../assets/icons/message-circle.svg";
import LocationIcon from "../assets/icons/map-pin.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import PinterestIcon from "../assets/icons/pinterest.svg";
import logo from "../assets/icons/Logo.svg";


export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[#080808] pt-16 pb-8" id="footer-section">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* Bio */}
        <div className="md:col-span-5 space-y-5">
          <div className="flex items-center gap-2" id="footer-logo">
           <div className="w-8 h-8 ">
  <img
    src={logo}
    alt="Logo"
    className="max-w-full max-h-full object-contain"
  />
</div>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Khalith<span className="text-brand-orange">.</span>
            </span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
            Graphic designer based in India. Crafting visual identities that communicate clearly, connect emotionally, and drive real results. Specializing in high-end UI/UX overlays, corporate explainers, and kinetic brand visuals.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 pt-2" id="footer-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <img src={LinkedinIcon} alt="LinkedIn" className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center text-gray-400 transition-colors"
              aria-label="Instagram"
            >
              <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center text-gray-400 transition-colors"
              aria-label="Pinterest"
            >
             <img src={PinterestIcon} alt="Pinterest" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-semibold">Navigation</h5>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-xs text-gray-400 hover:text-brand-orange hover:translate-x-1 inline-block transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info column */}
        <div className="md:col-span-4 space-y-4">
          <h5 className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-semibold">Contact Information</h5>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex items-center gap-2">
              <img src={EmailIcon} alt="Email" className="w-3.5 h-3.5 shrink-0" />
              <a href="mailto:rskhalith78@gmail.com" className="hover:text-white transition-colors">
                rskhalith78@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={LocationIcon} alt="Location" className="w-3.5 h-3.5 shrink-0" />
              <span>Tirunelveli, TN, India.</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={WhatsappIcon} alt="Whatsapp" className="w-3.5 h-3.5 shrink-0" />
              <a
                href="https://wa.me/918838404738"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
              >
                +91 88384 04738
                <ArrowUpRight className="w-3 h-3 text-gray-600" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright attribution */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
        <p>© 2026 Mohamed Khalith. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed & built with <span className="text-brand-red animate-pulse">❤️</span> in India.
        </p>
      </div>
    </footer>
  );
}
