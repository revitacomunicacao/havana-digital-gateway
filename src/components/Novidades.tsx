import novaUnidadeHero from "@/assets/nova-unidade-hero.jpg";
import novaUnidade1 from "@/assets/nova-unidade-1.jpg";
import novaUnidade2 from "@/assets/nova-unidade-2.jpg";
import novaUnidade3 from "@/assets/nova-unidade-3.jpg";

const Novidades = () => {
  return (
    <section id="novidades" className="py-24 md:py-12 bg-navy-gradient">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Vem aí
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary-foreground">
            Novidades
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-secondary font-display text-lg uppercase tracking-widest font-semibold">
              Em breve nova unidade em Uberaba!
            </p>

            <div className="mt-6 space-y-4 text-primary-foreground/80 font-body text-base leading-relaxed">
              <p>
                A <strong className="text-primary-foreground">Havana Hotéis</strong> tem o orgulho de anunciar a restauração de um{" "}
                <strong className="text-primary-foreground">grande ícone da cidade</strong>, um hotel histórico que será transformado em uma experiência única, onde{" "}
                <em className="text-secondary">o passado e o futuro se encontram</em>.
              </p>
              <p>
                Combinando <strong className="text-primary-foreground">elegância, tradição e inovação</strong>, esse novo empreendimento trará todo o charme de sua história aliado ao{" "}
                <strong className="text-primary-foreground">conforto e sofisticação</strong> que só a nossa rede pode oferecer.
              </p>
              <p className="text-secondary font-semibold">
                Prepare-se para viver a história com todo o requinte do futuro!
              </p>
              <p className="text-primary-foreground/60 italic">
                Em breve, um novo capítulo da hotelaria em Uberaba.
              </p>
            </div>

            {/* Mini gallery */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[novaUnidade1, novaUnidade2, novaUnidade3].map((img, i) => (
                <div key={i} className="overflow-hidden aspect-square">
                  <img
                    src={img}
                    alt={`Nova unidade - prévia ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden shadow-2xl">
              <img
                src={novaUnidadeHero}
                alt="Nova unidade Havana Hotéis em Uberaba - fachada do hotel histórico"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Novidades;
