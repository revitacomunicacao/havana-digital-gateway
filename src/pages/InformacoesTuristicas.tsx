import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import tourism1 from "@/assets/tourism/tourism-1.jpg";
import tourism2 from "@/assets/tourism/tourism-2.jpg";
import tourism3 from "@/assets/tourism/tourism-3.jpg";
import tourism4 from "@/assets/tourism/tourism-4.jpg";
import tourism5 from "@/assets/tourism/tourism-5.jpg";
import tourism6 from "@/assets/tourism/tourism-6.jpg";
import tourism7 from "@/assets/tourism/tourism-7.jpg";
import tourism8 from "@/assets/tourism/tourism-8.jpg";

interface TouristSpot {
  id: number;
  title: string;
  image: string;
  category: string;
  items: string[];
  externalLink?: string;
}

const spots: TouristSpot[] = [
  {
    id: 1,
    title: "Igrejas e Patrimônio Histórico",
    image: tourism1,
    category: "Patrimônio",
    externalLink: "https://www.google.com/search?q=Igrejas+Patrimonio+Historico+Uberaba",
    items: [
      "Igreja de São Sebastião – construção histórica no centro da cidade.",
      "Catedral Sagrado Coração de Jesus – imponente arquitetura religiosa.",
      "Igreja de Santa Rita – uma das mais antigas da região.",
      "Capela do Rosário – patrimônio cultural de grande valor histórico.",
    ],
  },
  {
    id: 2,
    title: "Museus e Memoriais",
    image: tourism2,
    category: "Cultura",
    items: [
      "Museu do Zebu (Parque Fernando Costa/ABCZ) – único no mundo dedicado à pecuária zebuína.",
      "Museu dos Dinossauros (Peirópolis) – fósseis reais e acervo científico renomado.",
      "Complexo Cultural e Científico de Peirópolis – inclui o Museu de Paleontologia, praças e trilhas.",
      "Museu de Arte Sacra – com rico acervo religioso.",
      "Museu do Índio (UFTM) – mostra cultura e história dos povos indígenas.",
    ],
  },
  {
    id: 3,
    title: "Parques e Áreas Verdes",
    image: tourism3,
    category: "Natureza",
    items: [
      "Parque Fernando Costa (ABCZ) – amplo espaço verde com lagos, trilhas e o famoso Museu do Zebu.",
      "Parque das Barrigudas – área de lazer com playground e pista de caminhada.",
      "Bosque do Jacarandá – reserva ecológica urbana com trilhas e fauna local.",
      "Praça Rui Barbosa – coração da cidade, com jardins e eventos culturais.",
    ],
  },
  {
    id: 4,
    title: "Sítio Paleontológico",
    image: tourism4,
    category: "Ciência",
    items: [
      "Peirópolis – distrito famoso mundialmente pelos fósseis de dinossauros.",
      "Trilha dos Dinossauros – percurso educativo com réplicas em tamanho real.",
      "Centro de Pesquisa Paleontológica – laboratórios e exposições abertas ao público.",
      "Serra da Galga – sítio de escavação ativo com descobertas frequentes.",
    ],
  },
  {
    id: 5,
    title: "Lazer e Entretenimento",
    image: tourism5,
    category: "Lazer",
    items: [
      "Thermas de Uberaba – parque aquático com águas termais naturais.",
      "Pesqueiros e chácaras de lazer – diversas opções para passeios em família.",
      "Kartódromo de Uberaba – diversão para amantes de velocidade.",
      "Shoppings e centros comerciais – opções variadas de compras e gastronomia.",
    ],
  },
  {
    id: 6,
    title: "Arte Sacra e Religião",
    image: tourism6,
    category: "Religião",
    items: [
      "Museu de Arte Sacra – acervo com peças dos séculos XVIII e XIX.",
      "Via Sacra de Peirópolis – roteiro religioso ao ar livre com esculturas.",
      "Santuário de Nossa Senhora da Abadia – local de devoção e peregrinação.",
      "Capela do Fundinho – construção colonial preservada.",
    ],
  },
  {
    id: 7,
    title: "Centro Histórico",
    image: tourism7,
    category: "História",
    items: [
      "Mercado Municipal – construção histórica com produtos regionais e gastronomia.",
      "Calçadão da Rua Artur Machado – área de comércio e arquitetura preservada.",
      "Antigo Fórum – edifício de valor arquitetônico no centro da cidade.",
      "Casarões Coloniais – construções do século XIX espalhadas pelo centro.",
    ],
  },
  {
    id: 8,
    title: "Paisagens e Mirantes",
    image: tourism8,
    category: "Paisagem",
    items: [
      "Mirante de Peirópolis – vista panorâmica do vale e da Serra da Galga.",
      "Estrada Parque – roteiro cênico com paisagens rurais e fazendas históricas.",
      "Pôr do sol na Serra – espetáculo natural imperdível nos arredores da cidade.",
      "Zona rural – cachoeiras, rios e matas preservadas para ecoturismo.",
    ],
  },
];

const InformacoesTuristicas = () => {
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            Informações Turísticas
          </h1>
          <p className="text-primary-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Descubra os pontos turísticos e atrações imperdíveis da cidade
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {spots.map((spot) => (
              <div
                key={spot.id}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => {
                  if (spot.externalLink) {
                    window.open(spot.externalLink, "_blank", "noopener,noreferrer");
                  } else {
                    setSelectedSpot(spot);
                  }
                }}
              >
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="font-display text-lg text-primary-foreground text-center px-4 mb-3">
                    {spot.title}
                  </h3>
                  <button className="inline-flex items-center gap-2 px-6 py-2 border border-primary-foreground/60 text-primary-foreground text-sm font-body uppercase tracking-wider hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 rounded">
                    Saiba Mais
                    {spot.externalLink && <ExternalLink size={14} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedSpot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
          onClick={() => setSelectedSpot(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedSpot(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-primary/60 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 pt-6">
              <h2 className="font-display text-2xl text-foreground mb-6 pr-10">
                {selectedSpot.title}
              </h2>

              <ul className="space-y-3">
                {selectedSpot.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground font-body text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default InformacoesTuristicas;
