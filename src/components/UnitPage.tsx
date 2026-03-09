import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Wifi, Coffee, Dumbbell, Car, Clock, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { UnitData } from "@/data/units";

const amenityIcons: Record<string, React.ReactNode> = {
  "Wi-Fi": <Wifi size={20} />,
  "Café": <Coffee size={20} />,
  "Academia": <Dumbbell size={20} />,
  "Estacionamento": <Car size={20} />,
  "Recepção 24h": <Clock size={20} />,
  "Room Service": <Clock size={20} />,
};

const getIcon = (amenity: string) => {
  const key = Object.keys(amenityIcons).find((k) => amenity.includes(k));
  return key ? amenityIcons[key] : <Coffee size={20} />;
};

// Room types per unit
const roomTypes: Record<string, { tipo: string; preco: string; diferenciais: string[]; imageIndex: number }[]> = {
  "havana-palace-i": [
    { tipo: "Apartamento Luxo Individual", preco: "R$ 234,00", diferenciais: ["Cama de casal", "Piso frio", "Ar condicionado", "Tv a cabo", "Frigobar", "Banheiro privativo com ducha regulável"], imageIndex: 19 },
    { tipo: "Apartamento Luxo Duplo", preco: "R$ 262,00", diferenciais: ["Uma cama de casal ou duas camas de solteiro","Piso frio","Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 19 },
    { tipo: "Apartamento Luxo Triplo", preco: "R$ 324,00", diferenciais: ["3 camas de solteiro ou uma cama de casal e uma cama de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 18 },
    { tipo: "Apartamento Quadrúplo", preco: "R$ 362,00", diferenciais: ["1 camas de casal e duas camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 3 },
  ],
  "havana-palace-ii": [
    { tipo: "Apartamento Luxo Individual", preco: "R$ 249,00", diferenciais: ["Cama de casal", "Piso frio", "Ar condicionado", "Tv a cabo", "Frigobar", "Banheiro privativo com ducha regulável"], imageIndex: 16 },
    { tipo: "Apartamento Luxo Duplo", preco: "R$ 288,00", diferenciais: ["Uma cama de casal ou duas camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 16 },
    { tipo: "Apartamento Luxo Triplo", preco: "R$ 372,00", diferenciais: ["3 camas de solteiro ou uma cama de casal e uma cama de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 16 },
    { tipo: "Apartamento Luxo Quadruplo", preco: "R$ 409,00", diferenciais: ["1 camas de casal e duas camas de solteiro ou 4 camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 16 },
  ],
  "havana-economy": [
    { tipo: "Apartamento Luxo Individual", preco: "R$ 143,00", diferenciais: ["Cama de casal", "Piso frio", "Ar condicionado", "Tv a cabo", "Frigobar","Banheiro privativo com ducha regulável"], imageIndex: 0 },
    { tipo: "Apartamento Luxo Duplo", preco: "R$ 200,00", diferenciais: ["Uma cama de casal ou duas camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo","Banheiro privativo com ducha regulável"], imageIndex: 6 },
  ],
  "havana-express": [
    { tipo: "Apartamento Luxo Individual", preco: "R$ 240,00", diferenciais: ["Cama de casal", "Piso frio", "Ar Condicionado", "Tv a cabo", "Adega(resfria)","Banheiro privativo com ducha regulável"], imageIndex: 2 },
    { tipo: "Apartamento Luxo Duplo", preco: "R$ 270,00", diferenciais: ["Uma cama de casal ou duas camas de solteiro", "Piso frio", "Ar Condicionado", "Tv a cabo", "Adega(resfria)","Banheiro privativo com ducha regulável"], imageIndex: 2 },
    { tipo: "Apartamento Luxo Triplo", preco: "R$ 330,00", diferenciais: ["3 camas de solteiro ou uma cama de casal e uma cama de solteiro", "Piso frio", "Ar Condicionado", "Tv a cabo", "Adega(resfria)","Banheiro privativo com ducha regulável"], imageIndex: 2 },
    { tipo: "Apartamento Luxo Quadruplo Casal", preco: "R$ 368,00", diferenciais: ["1 camas de casal e duas camas de solteiro", "Piso frio", "Ar Condicionado", "Tv a cabo", "Adega(resfria)","Banheiro privativo com ducha regulável"], imageIndex: 2 },
  ],
};

export interface RoomType {
  tipo: string;
  preco: string;
  diferenciais: string[];
  imageIndex: number;
}

interface UnitPageProps {
  unit: UnitData;
  rooms?: RoomType[];
  afterGallery?: React.ReactNode;
  beforeAbout?: React.ReactNode;
}

const UnitPage = ({ unit, rooms: roomsProp, afterGallery }: UnitPageProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + unit.gallery.length) % unit.gallery.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % unit.gallery.length : null));

  const rooms = roomsProp || roomTypes[unit.slug] || [];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src={unit.heroImage} alt={unit.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-secondary text-sm font-body uppercase tracking-wider mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Voltar ao início
            </Link>
            <span className="block text-secondary font-body text-sm uppercase tracking-[0.3em] mb-2">
              Rede Havana
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">
              {unit.name}
            </h1>
            <p className="mt-3 text-primary-foreground/70 font-body text-lg font-light max-w-lg">
              {unit.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-muted">
        <div className="container max-w-3xl text-center">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Sobre a unidade
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
            {unit.name}
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-light">
            {unit.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
              Galeria
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
              Conheça os espaços
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {unit.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-primary-foreground font-body text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {afterGallery}

      {/* Room Types Table */}
      {rooms.length > 0 && (
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
                Acomodações
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
                Tipos de Quarto
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
            </div>
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              {rooms.map((room) => {
                const roomImage = unit.gallery[room.imageIndex % unit.gallery.length]?.src;
                return (
                  <div
                    key={room.tipo}
                    className="border border-border rounded-lg overflow-hidden bg-card flex flex-col md:flex-row"
                  >
                    {/* Image */}
                    <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                      <img
                        src={roomImage}
                        alt={room.tipo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col gap-3">
                      <h3 className="font-display text-lg font-semibold text-primary">
                        {room.tipo}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {room.diferenciais.map((d) => (
                          <span
                            key={d}
                            className="inline-block bg-muted text-muted-foreground font-body text-xs px-3 py-1 rounded-full border border-border"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-3 border-t border-border">
                        <span className="text-secondary font-display text-xl font-bold">
                          {room.preco}
                        </span>
                        <span className="text-muted-foreground font-body text-xs ml-2">
                          / diária
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Amenities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
              Comodidades
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
              O que oferecemos
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {unit.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex flex-col items-center gap-3 p-6 border border-border hover:border-secondary/40 transition-colors duration-300 bg-muted"
              >
                <span className="text-secondary">{getIcon(amenity)}</span>
                <span className="text-foreground font-body text-sm text-center">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Location */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
              Como chegar
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
              Localização
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border p-8 text-center">
              <MapPin size={40} className="text-secondary mx-auto mb-4" />
              <p className="font-display text-xl font-semibold text-primary mb-2">{unit.name}</p>
              <p className="text-muted-foreground font-body text-base mb-6">{unit.address}</p>
              <a
                href={unit.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-body text-sm uppercase tracking-wider transition-colors"
              >
                <ExternalLink size={16} /> Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Reserve */}
      <section className="py-20 bg-navy-gradient">
        <div className="container text-center">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Garanta sua estadia
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-primary-foreground">
            Reserve Agora
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          <p className="mt-6 text-primary-foreground/70 font-body text-lg font-light max-w-lg mx-auto">
            Entre em contato e garanta as melhores tarifas para sua próxima estadia no {unit.name}.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${unit.phone}`}
              className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 font-body text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors duration-300"
            >
              <Phone size={18} /> Ligar agora
            </a>
            <a
              href={`mailto:${unit.email}`}
              className="inline-flex items-center gap-3 border border-primary-foreground/20 text-primary-foreground px-8 py-4 font-body text-sm uppercase tracking-wider hover:border-secondary hover:text-secondary transition-colors duration-300"
            >
              <Mail size={18} /> Enviar e-mail
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
              Contato
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
              Entre em contato
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href={`tel:${unit.phone}`}
              className="flex flex-col items-center gap-3 p-8 border border-border hover:border-secondary/40 transition-colors"
            >
              <Phone size={24} className="text-secondary" />
              <span className="text-foreground font-body text-sm">{unit.phone}</span>
            </a>
            <a
              href={`mailto:${unit.email}`}
              className="flex flex-col items-center gap-3 p-8 border border-border hover:border-secondary/40 transition-colors"
            >
              <Mail size={24} className="text-secondary" />
              <span className="text-foreground font-body text-sm">{unit.email}</span>
            </a>
            <a
              href={unit.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-8 border border-border hover:border-secondary/40 transition-colors"
            >
              <MapPin size={24} className="text-secondary" />
              <span className="text-foreground font-body text-sm text-center">{unit.address}</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-primary/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-primary-foreground/70 hover:text-secondary transition-colors"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-primary-foreground/70 hover:text-secondary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={unit.gallery[lightboxIndex].src}
            alt={unit.gallery[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-primary-foreground/70 hover:text-secondary transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={40} />
          </button>
          <span className="absolute bottom-6 text-primary-foreground/60 font-body text-sm">
            {unit.gallery[lightboxIndex].alt} — {lightboxIndex + 1}/{unit.gallery.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default UnitPage;
