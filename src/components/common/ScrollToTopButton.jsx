import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50"
        >
          <FiArrowUp size={22} />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;