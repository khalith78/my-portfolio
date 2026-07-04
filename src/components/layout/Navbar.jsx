import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button.jsx";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", to: "/projects" },
  { label: "Testimonials", id: "testimonials" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar while scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Highlight active section
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("");
      return;
    }

    const sections = ["home", "about", "services", "testimonials", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const go = () => {
      const section = document.getElementById(id);

      if (section) {
       const navbar = document.querySelector("header");
       const offset = navbar?.offsetHeight + 10 || 90;

       const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

        window.scrollTo({
        top: y,
        behavior: "smooth",
    });
    
        setActive(id);
      }

      setIsOpen(false);
    };

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(go, 250);
    } else {
      go();
    }
  };

  return (
    <header
      className={`fixed top-3 left-0 w-full z-50 px-4 transition-all duration-300 
        `}
    >
      <nav className="mt-3 max-w-6xl mx-auto bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 flex items-center justify-between">

        <NavLink
          to="/"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3"
        >
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-8 h-8 rounded-full"
          />

          <span className="font-semibold text-white">
            Khalith.
          </span>
        </NavLink>

        {/* Desktop */}

        <ul className="hidden lg:flex items-center  gap-8">

          {navLinks.map((link) => (

            <li key={link.label}>

              {link.to ? (

                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-medium"
                      : "text-white hover:text-accent transition"
                  }
                >
                  {link.label}
                </NavLink>

              ) : (

                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`transition ${
                    active === link.id
                      ? "text-accent font-medium"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.label}
                </button>

              )}

            </li>

          ))}

        </ul>

        <div className="hidden lg:block">
          <Button
            variant="white"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? (
            <FiX size={25} />
          ) : (
            <FiMenu size={25} />
          )}
        </button>

      </nav>

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden mt-3 max-w-6xl mx-auto bg-card border border-border rounded-2xl p-6 flex flex-col gap-5"
          >

            {navLinks.map((link) =>
              link.to ? (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left ${
                    active === link.id
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.label}
                </button>
              )
            )}

            <Button
              variant="white"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>

          </motion.div>

        )}

      </AnimatePresence>
    </header>
  );
}

export default Navbar;