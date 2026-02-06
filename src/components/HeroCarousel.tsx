import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero1webp from "@/assets/hero-1.webp"
import hero2 from "@/assets/hero-2.jpg";
import hero2webp from "@/assets/hero-2.webp"
import hero3 from "@/assets/hero-3.jpg";
import hero3webp from "@/assets/hero-3.webp"

const slides = [
  {
    image: hero1webp,
    title: "Bem-vindo à\nRede Havana",
    subtitle: "Hospitalidade que transforma cada momento em uma experiência memorável.",
  },
  {
    image: hero2webp,
    title: "Conforto &\nElegância",
    subtitle: "Quartos projetados para o máximo de sofisticação e descanso.",
  },
  {
    image: hero3webp,
    title: "Viva\nMomentos Únicos",
    subtitle: "Lazer, gastronomia e experiências exclusivas esperam por você.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-2xl">
            <h1
              key={current}
              className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight whitespace-pre-line animate-slide-in"
            >
              {slides[current].title}
            </h1>
            <p
              key={`sub-${current}`}
              className="mt-6 text-primary-foreground/80 text-lg md:text-xl font-body font-light max-w-lg animate-fade-in"
            >
              {slides[current].subtitle}
            </p>
            <a
              href="#unidades"
              className="mt-8 inline-block bg-secondary text-secondary-foreground px-8 py-3 font-body text-sm uppercase tracking-widest hover:bg-secondary/90 transition-colors duration-300"
            >
              Conheça nossas unidades
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-3">
        <button
          onClick={prev}
          className="w-12 h-12 border border-primary-foreground/40 flex items-center justify-center text-primary-foreground/70 hover:border-secondary hover:text-secondary transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 border border-primary-foreground/40 flex items-center justify-center text-primary-foreground/70 hover:border-secondary hover:text-secondary transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-secondary w-8" : "bg-primary-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
