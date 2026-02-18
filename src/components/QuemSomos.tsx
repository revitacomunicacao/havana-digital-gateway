const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 md:py-12 bg-muted">
      <div className="flex flex-col justify-center items-center md:flex-row gap-4">
        <div className="md:w-[70%] w-[90%] text-center">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Sobre nós
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-primary">
            Quem Somos
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-light">
            A Rede Havana de Hotelaria nasceu com o propósito de oferecer hospedagem de qualidade, 
            aliando conforto, localização privilegiada e atendimento personalizado. Com quatro 
            unidades estrategicamente posicionadas, atendemos desde o viajante executivo ao turista 
            que busca lazer e cultura.
          </p>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed font-light">
            Nossa missão é proporcionar experiências memoráveis, investindo constantemente em 
            infraestrutura, capacitação e inovação para superar as expectativas de cada hóspede.
          </p>
        </div>

        <div className="rounded-xl md:w-[20%] w-[80%] flex flex-col bg-[#feecd7]">
          {[
            { number: "4", label: "Unidades" },
            { number: "+20", label: "Anos de experiência" },
            { number: "+500", label: "Quartos disponíveis" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-4 pr-6">
              <span className="font-display text-5xl font-bold text-gold-gradient">
                {stat.number}
              </span>
              <p className="mt-2 text-muted-foreground font-body uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
