import { useState } from "react";
import { X, Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import event1 from "@/assets/events/event-1.jpg";
import event2 from "@/assets/events/event-2.jpg";
import event3 from "@/assets/events/event-3.jpg";
import event4 from "@/assets/events/event-4.jpg";
import event5 from "@/assets/events/event-5.jpg";
import event6 from "@/assets/events/event-6.jpg";

interface CulturalEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  externalLink?: string;
}

const events: CulturalEvent[] = [
  {
    id: 1,
    title: "Festival de Música Regional",
    date: "15 de Março de 2026",
    time: "Abertura dos portões: 18h00",
    location: "Arena Cultural - Manaus / AM",
    description: "Uma noite inesquecível com os maiores nomes da música regional amazônica. Shows ao vivo, praça de alimentação e muito entretenimento para toda a família.",
    image: event1,
    category: "Música",
    externalLink: "https://www.google.com/search?q=Festival+de+Musica+Regional",
  },
  {
    id: 2,
    title: "Exposição de Arte Contemporânea",
    date: "20 a 30 de Março de 2026",
    time: "Visitação: 10h às 20h",
    location: "Galeria Municipal - Manaus / AM",
    description: "Mostra coletiva reunindo artistas locais e nacionais com obras que dialogam entre tradição e modernidade. Entrada gratuita.",
    image: event2,
    category: "Exposição",
  },
  {
    id: 3,
    title: "Festival Gastronômico",
    date: "05 de Abril de 2026",
    time: "A partir das 11h00",
    location: "Praça da Saudade - Manaus / AM",
    description: "O melhor da culinária amazônica em um só lugar. Chefs renomados preparam pratos típicos e contemporâneos. Música ao vivo e atividades culturais.",
    image: event3,
    category: "Gastronomia",
  },
  {
    id: 4,
    title: "Peça Teatral: Raízes da Amazônia",
    date: "12 de Abril de 2026",
    time: "Abertura: 20h00",
    location: "Teatro Amazonas - Manaus / AM",
    description: "Espetáculo premiado que narra a história e as lendas da região amazônica através de dança, música e teatro. Uma experiência cultural imperdível.",
    image: event4,
    category: "Teatro",
  },
  {
    id: 5,
    title: "Festival de Dança Folclórica",
    date: "25 de Abril de 2026",
    time: "A partir das 16h00",
    location: "Centro Cultural - Manaus / AM",
    description: "Apresentações de grupos folclóricos de todo o estado do Amazonas. Boi-bumbá, ciranda, quadrilha e muito mais. Entrada gratuita.",
    image: event5,
    category: "Dança",
  },
  {
    id: 6,
    title: "Feira de Artesanato Regional",
    date: "01 a 10 de Maio de 2026",
    time: "09h às 18h",
    location: "Parque dos Bilhares - Manaus / AM",
    description: "Artesãos de diversas comunidades expõem e vendem suas obras. Peças em madeira, cerâmica, fibras naturais e bijuterias com identidade amazônica.",
    image: event6,
    category: "Artesanato",
  },
];

const AgendaCultural = () => {
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            Agenda Cultural
          </h1>
          <p className="text-primary-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Confira os próximos eventos e atrações culturais da cidade
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-card"
                onClick={() => {
                  if (event.externalLink) {
                    window.open(event.externalLink, "_blank", "noopener,noreferrer");
                  } else {
                    setSelectedEvent(event);
                  }
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-body uppercase tracking-wider rounded-full mb-3">
                    {event.category}
                  </span>
                  <h3 className="font-display text-xl text-primary-foreground mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-foreground/70 text-sm font-body mb-4">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-2 border border-primary-foreground/40 text-primary-foreground text-sm font-body uppercase tracking-wider hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 rounded">
                    Saiba Mais
                    {event.externalLink && <ExternalLink size={14} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/60 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors"
              >
                <X size={20} />
              </button>
              <span className="absolute bottom-4 left-6 inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body uppercase tracking-wider rounded-full">
                {selectedEvent.category}
              </span>
            </div>

            <div className="p-8">
              <h2 className="font-display text-2xl text-foreground mb-6">
                {selectedEvent.title}
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                  <Calendar size={16} className="text-secondary shrink-0" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                  <MapPin size={16} className="text-secondary shrink-0" />
                  <span>{selectedEvent.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                  <Clock size={16} className="text-secondary shrink-0" />
                  <span>{selectedEvent.time}</span>
                </div>
              </div>

              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AgendaCultural;
