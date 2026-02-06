import { Link } from "react-router-dom";
import palace1 from "@/assets/Fotos hotel/palace 1/palace 1 (19).webp";
import palace2 from "@/assets/Fotos hotel/palace 2/palace 2 (13).webp";
import economy from "@/assets/Fotos hotel/economy/economy (8).webp";
import express from "@/assets/Fotos hotel/express/express (1).webp";

const units = [
  {
    name: "Havana Palace I",
    slug: "havana-palace-i",
    description: "Luxo e sofisticação no coração da cidade. A unidade flagship da rede, com quartos amplos e serviço impecável.",
    image: palace1,
  },
  {
    name: "Havana Palace II",
    slug: "havana-palace-ii",
    description: "Elegância contemporânea em localização privilegiada. Ideal para hóspedes que valorizam conforto e praticidade.",
    image: palace2,
  },
  {
    name: "Havana Economy",
    slug: "havana-economy",
    description: "Conforto essencial com excelente custo-benefício. Perfeito para estadias inteligentes sem abrir mão da qualidade.",
    image: economy,
  },
  {
    name: "Havana Express",
    slug: "havana-express",
    description: "Agilidade e modernidade para o viajante dinâmico. Check-in rápido e localização estratégica.",
    image: express,
  },
];

const Unidades = () => {
  return (
    <section id="unidades" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Nossas unidades
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary">
            Conheça a Rede
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {units.map((unit) => (
            <Link
              key={unit.name}
              to={`/unidade/${unit.slug}`}
              className="group relative overflow-hidden aspect-[4/3] block"
            >
              <img
                src={unit.image}
                alt={unit.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground">
                  {unit.name}
                </h3>
                <p className="mt-2 text-primary-foreground/70 font-body font-light text-sm max-w-md leading-relaxed">
                  {unit.description}
                </p>
                <span className="mt-4 text-secondary text-sm font-body uppercase tracking-widest group-hover:tracking-[0.3em] transition-all duration-300">
                  Saiba mais →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unidades;
