import { Star } from "lucide-react";

const depoimentos = [
  {
    nome: "Carlos M.",
    plataforma: "Google",
    nota: 5,
    texto: "Excelente hotel! Atendimento impecável, quartos limpos e confortáveis. O café da manhã é muito bom. Recomendo fortemente para quem visita Uberaba.",
  },
  {
    nome: "Ana Paula S.",
    plataforma: "TripAdvisor",
    nota: 5,
    texto: "Ficamos no Palace I e a experiência foi maravilhosa. Localização perfeita, equipe muito atenciosa e o quarto superou as expectativas. Voltaremos com certeza!",
  },
  {
    nome: "Roberto F.",
    plataforma: "Booking",
    nota: 4,
    texto: "Ótimo custo-benefício no Havana Economy. Quarto limpo, café da manhã incluso e localização central. Ideal para viagens de negócios.",
  },
  {
    nome: "Mariana L.",
    plataforma: "Google",
    nota: 5,
    texto: "Já me hospedei em três unidades da rede e todas mantêm um padrão excelente. O Express é perfeito para estadias rápidas. Nota 10!",
  },
  {
    nome: "Fernando G.",
    plataforma: "TripAdvisor",
    nota: 5,
    texto: "Hotel muito bem cuidado, funcionários educados e prestativos. A localização é ótima, perto de tudo. Superou minhas expectativas.",
  },
  {
    nome: "Juliana R.",
    plataforma: "Booking",
    nota: 4,
    texto: "Ambiente agradável e acolhedor. O café da manhã é variado e de qualidade. Boa opção para famílias que visitam Uberaba.",
  },
];

const plataformaCores: Record<string, string> = {
  Google: "text-secondary",
  TripAdvisor: "text-secondary",
  Booking: "text-secondary",
};

const Depoimentos = () => {
  return (
    <section className="py-24 md:py-12 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            O que dizem nossos hóspedes
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary">
            Avaliações
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {depoimentos.map((dep, i) => (
            <div
              key={i}
              className="bg-background p-8 border border-border hover:border-secondary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: dep.nota }).map((_, si) => (
                  <Star key={si} size={16} className="fill-secondary text-secondary" />
                ))}
                {Array.from({ length: 5 - dep.nota }).map((_, si) => (
                  <Star key={si} size={16} className="text-border" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 italic">
                "{dep.texto}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-primary">
                  {dep.nome}
                </span>
                <span className={`font-body text-xs uppercase tracking-wider ${plataformaCores[dep.plataforma]}`}>
                  {dep.plataforma}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
