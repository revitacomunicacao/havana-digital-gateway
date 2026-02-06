import { Calendar } from "lucide-react";

const news = [
  {
    date: "30 Jan 2025",
    title: "Carnaval 2025 – Pacotes Especiais",
    excerpt: "Aproveite o carnaval com pacotes exclusivos nas unidades da Rede Havana. Diversão e conforto garantidos para toda a família.",
  },
  {
    date: "15 Jan 2025",
    title: "Agenda Cultural – Fevereiro",
    excerpt: "Confira a programação cultural do mês com shows, exposições e eventos especiais nos hotéis da rede.",
  },
  {
    date: "08 Jan 2025",
    title: "Réveillon na Rede Havana",
    excerpt: "Veja como foi a celebração de Ano Novo nas nossas unidades. Uma noite inesquecível de festa e confraternização.",
  },
];

const Novidades = () => {
  return (
    <section id="novidades" className="py-24 md:py-32 bg-navy-gradient">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Fique por dentro
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary-foreground">
            Novidades
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.title}
              className="group border border-primary-foreground/10 p-8 hover:border-secondary/40 transition-colors duration-500"
            >
              <div className="flex items-center gap-2 text-secondary text-sm font-body">
                <Calendar size={14} />
                {item.date}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-primary-foreground group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-3 text-primary-foreground/60 font-body font-light text-sm leading-relaxed">
                {item.excerpt}
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-secondary text-sm font-body uppercase tracking-widest hover:tracking-[0.3em] transition-all duration-300"
              >
                Ler mais →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Novidades;
