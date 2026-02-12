import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Heart, Star, Users } from "lucide-react";

const valores = [
  {
    icon: <Shield size={32} />,
    title: "Excelência",
    description: "Buscamos constantemente superar as expectativas dos nossos hóspedes em todos os detalhes.",
  },
  {
    icon: <Heart size={32} />,
    title: "Hospitalidade",
    description: "Receber bem está no nosso DNA. Cada hóspede é único e merece uma experiência personalizada.",
  },
  {
    icon: <Star size={32} />,
    title: "Qualidade",
    description: "Investimos continuamente em infraestrutura, capacitação e inovação para manter o padrão Havana.",
  },
  {
    icon: <Users size={32} />,
    title: "Compromisso",
    description: "Com a cidade de Uberaba, com nossos colaboradores e com o desenvolvimento do turismo regional.",
  },
];

const QuemSomosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-navy-gradient flex items-center justify-center pt-24">
        <div className="container text-center">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Conheça nossa história
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold text-primary-foreground">
            Quem Somos
          </h1>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>
      </section>

      {/* História */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
              Nossa trajetória
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
              A História da Rede Havana
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          </div>

          <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed font-light">
            <p>
              A <strong className="text-primary font-medium">Rede Havana de Hotelaria</strong> nasceu em Uberaba com o 
              propósito de oferecer hospedagem de qualidade, aliando conforto, localização privilegiada e atendimento 
              personalizado. Há mais de 20 anos no mercado, construímos uma sólida reputação baseada na excelência 
              e no compromisso com nossos hóspedes.
            </p>
            <p>
              Ao longo de nossa trajetória, expandimos nossa atuação de uma única unidade para quatro hotéis 
              estrategicamente posicionados em Uberaba, atendendo desde o viajante executivo ao turista que busca 
              lazer e cultura na região do Triângulo Mineiro.
            </p>
            <p>
              Hoje, com as unidades <strong className="text-primary font-medium">Havana Palace I</strong>,{" "}
              <strong className="text-primary font-medium">Havana Palace II</strong>,{" "}
              <strong className="text-primary font-medium">Havana Economy</strong> e{" "}
              <strong className="text-primary font-medium">Havana Express</strong>, oferecemos mais de 500 quartos 
              e uma equipe dedicada a proporcionar experiências memoráveis para cada hóspede.
            </p>
            <p>
              E nossa história não para por aqui: estamos em pleno processo de restauração de um{" "}
              <strong className="text-primary font-medium">hotel histórico em Uberaba</strong>, que se tornará 
              a mais nova joia da Rede Havana, unindo tradição e modernidade em um projeto único.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
                O que nos move
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-primary">
                Nossa Missão
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-secondary md:mx-0 mx-auto" />
              <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed font-light">
                Proporcionar experiências memoráveis de hospedagem, investindo constantemente em infraestrutura, 
                capacitação e inovação para superar as expectativas de cada hóspede, contribuindo para o 
                desenvolvimento do turismo em Uberaba e região.
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
                Onde queremos chegar
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-primary">
                Nossa Visão
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-secondary md:mx-0 mx-auto" />
              <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed font-light">
                Ser reconhecida como a principal rede de hotelaria do Triângulo Mineiro, referência em qualidade, 
                inovação e compromisso com a satisfação de nossos hóspedes e com a comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
              O que nos guia
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
              Nossos Valores
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {valores.map((valor) => (
              <div
                key={valor.title}
                className="text-center p-8 border border-border hover:border-secondary/40 transition-colors duration-300 group bg-background"
              >
                <div className="text-secondary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {valor.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {valor.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-24 md:py-32 bg-navy-gradient">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "4", label: "Unidades" },
              { number: "+20", label: "Anos de experiência" },
              { number: "+500", label: "Quartos disponíveis" },
              { number: "+1M", label: "Hóspedes atendidos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-display text-5xl font-bold text-gold-gradient">
                  {stat.number}
                </span>
                <p className="mt-2 text-primary-foreground/70 font-body uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomosPage;
