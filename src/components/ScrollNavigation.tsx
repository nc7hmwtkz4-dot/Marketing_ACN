import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ScrollNavigationProps {
  totalSections: number;
}

export function ScrollNavigation({ totalSections }: ScrollNavigationProps) {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll("section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, totalSections]);

  return (
    <>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSection === index
                ? "bg-primary scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Section ${index + 1}`}
          />
        ))}
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentSection === 0}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Section précédente"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentSection === totalSections - 1}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Section suivante"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}