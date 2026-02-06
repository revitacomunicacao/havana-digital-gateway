import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Wifi, Coffee, Dumbbell, Car, Clock, ChevronLeft, ChevronRight, X } from "lucide-react";
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

interface UnitPageProps {
  unit: UnitData;
}

const UnitPage = ({ unit }: UnitPageProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + unit.gallery.length) % unit.gallery.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % unit.gallery.length : null));

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
                className="flex flex-col items-center gap-3 p-6 border border-border hover:border-secondary/40 transition-colors duration-300"
              >
                <span className="text-secondary">{getIcon(amenity)}</span>
                <span className="text-foreground font-body text-sm text-center">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted">
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

      {/* Contact */}
      <section className="py-20 bg-navy-gradient">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
              Contato
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary-foreground">
              Entre em contato
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href={`tel:${unit.phone}`}
              className="flex flex-col items-center gap-3 p-8 border border-primary-foreground/10 hover:border-secondary/40 transition-colors"
            >
              <Phone size={24} className="text-secondary" />
              <span className="text-primary-foreground font-body text-sm">{unit.phone}</span>
            </a>
            <a
              href={`mailto:${unit.email}`}
              className="flex flex-col items-center gap-3 p-8 border border-primary-foreground/10 hover:border-secondary/40 transition-colors"
            >
              <Mail size={24} className="text-secondary" />
              <span className="text-primary-foreground font-body text-sm">{unit.email}</span>
            </a>
            <a
              href={unit.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-8 border border-primary-foreground/10 hover:border-secondary/40 transition-colors"
            >
              <MapPin size={24} className="text-secondary" />
              <span className="text-primary-foreground font-body text-sm text-center">{unit.address}</span>
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
