import { Shield, Coffee, MapPin, Star, Users, Clock } from "lucide-react";

const diferenciais = [
  {
    icon: <Shield size={32} />,
    title: "Padrão de qualidade",
    description: "Excelência garantida em todas as unidades da rede",
  },
  {
    icon: <Coffee size={32} />,
    title: "Café da manhã incluso",
    description: "Café da manhã completo e variado para começar bem o dia",
  },
  {
    icon: <MapPin size={32} />,
    title: "Localização privilegiada",
    description: "Todas as unidades em pontos estratégicos de Uberaba",
  },
  {
    icon: <Star size={32} />,
    title: "Atendimento personalizado",
    description: "Equipe treinada para oferecer a melhor experiência",
  },
  {
    icon: <Users size={32} />,
    title: "+20 anos de experiência",
    description: "Tradição e confiança na hotelaria de Uberaba",
  },
  {
    icon: <Clock size={32} />,
    title: "Recepção 24 horas",
    description: "Suporte completo a qualquer hora do dia ou da noite",
  },
];

const Diferenciais = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Por que escolher a Rede Havana
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary">
            Nossos Diferenciais
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 border border-border hover:border-secondary/40 transition-colors duration-300 group"
            >
              <div className="text-secondary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
