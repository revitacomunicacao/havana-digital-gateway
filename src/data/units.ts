import palace1 from "@/assets/unit-palace1.jpg";
import palace2 from "@/assets/unit-palace2.jpg";
import economy from "@/assets/unit-economy.jpg";
import express from "@/assets/unit-express.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import galleryRestaurant from "@/assets/gallery-restaurant.jpg";
import galleryConference from "@/assets/gallery-conference.jpg";
import galleryGym from "@/assets/gallery-gym.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";
import galleryBar from "@/assets/gallery-bar.jpg";

export interface UnitData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: { src: string; alt: string }[];
  amenities: string[];
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

export const units: UnitData[] = [
  {
    slug: "havana-palace-i",
    name: "Havana Palace I",
    tagline: "Luxo e sofisticação no coração da cidade",
    description:
      "A unidade flagship da Rede Havana oferece uma experiência incomparável de hospedagem. Com quartos amplos e elegantemente decorados, restaurante de alta gastronomia, spa completo e centro de convenções, o Havana Palace I é a escolha ideal para viajantes exigentes que buscam o melhor em conforto e serviço personalizado.",
    heroImage: palace1,
    gallery: [
      { src: hero1, alt: "Lobby" },
      { src: hero2, alt: "Suíte Premium" },
      { src: galleryRestaurant, alt: "Restaurante" },
      { src: galleryConference, alt: "Centro de Convenções" },
      { src: gallerySpa, alt: "Spa" },
      { src: galleryBar, alt: "Bar Lounge" },
    ],
    amenities: [
      "Wi-Fi de alta velocidade",
      "Restaurante gourmet",
      "Spa & Wellness",
      "Centro de Convenções",
      "Room Service 24h",
      "Estacionamento privativo",
      "Academia completa",
      "Bar Lounge",
    ],
    address: "Rua Principal, 100 – Centro, Manaus - AM",
    phone: "(92) 3000-0001",
    email: "palace1@redehavana.com.br",
    mapUrl: "https://maps.google.com",
  },
  {
    slug: "havana-palace-ii",
    name: "Havana Palace II",
    tagline: "Elegância contemporânea em localização privilegiada",
    description:
      "O Havana Palace II combina design contemporâneo com o padrão de excelência da Rede Havana. Localizado em uma região estratégica da cidade, oferece quartos modernos, restaurante com culinária regional e internacional, salas de reunião equipadas e uma piscina com vista panorâmica.",
    heroImage: palace2,
    gallery: [
      { src: hero3, alt: "Piscina" },
      { src: hero2, alt: "Quarto Superior" },
      { src: galleryRestaurant, alt: "Restaurante" },
      { src: galleryConference, alt: "Salas de Reunião" },
      { src: galleryGym, alt: "Academia" },
      { src: galleryReception, alt: "Recepção" },
    ],
    amenities: [
      "Wi-Fi de alta velocidade",
      "Restaurante internacional",
      "Piscina panorâmica",
      "Salas de reunião",
      "Room Service 24h",
      "Estacionamento",
      "Academia",
      "Lavanderia express",
    ],
    address: "Av. Turismo, 500 – Ponta Negra, Manaus - AM",
    phone: "(92) 3000-0002",
    email: "palace2@redehavana.com.br",
    mapUrl: "https://maps.google.com",
  },
  {
    slug: "havana-economy",
    name: "Havana Economy",
    tagline: "Conforto essencial com excelente custo-benefício",
    description:
      "O Havana Economy é ideal para quem busca uma estadia confortável e prática sem abrir mão da qualidade. Quartos funcionais e bem equipados, café da manhã incluso, localização central e todo o padrão de atendimento que só a Rede Havana oferece.",
    heroImage: economy,
    gallery: [
      { src: galleryReception, alt: "Recepção" },
      { src: hero2, alt: "Quarto Standard" },
      { src: galleryRestaurant, alt: "Café da manhã" },
      { src: galleryGym, alt: "Academia" },
    ],
    amenities: [
      "Wi-Fi gratuito",
      "Café da manhã incluso",
      "Ar-condicionado",
      "TV a cabo",
      "Estacionamento",
      "Recepção 24h",
    ],
    address: "Rua Comércio, 250 – Centro, Manaus - AM",
    phone: "(92) 3000-0003",
    email: "economy@redehavana.com.br",
    mapUrl: "https://maps.google.com",
  },
  {
    slug: "havana-express",
    name: "Havana Express",
    tagline: "Agilidade e modernidade para o viajante dinâmico",
    description:
      "Projetado para o viajante moderno, o Havana Express oferece check-in rápido, quartos inteligentes com tecnologia de ponta e localização estratégica próxima ao aeroporto e centros comerciais. A solução perfeita para quem precisa de praticidade com qualidade.",
    heroImage: express,
    gallery: [
      { src: galleryReception, alt: "Recepção Express" },
      { src: hero2, alt: "Quarto Smart" },
      { src: galleryBar, alt: "Área de convivência" },
      { src: galleryGym, alt: "Fitness" },
    ],
    amenities: [
      "Wi-Fi de alta velocidade",
      "Check-in express",
      "Quartos inteligentes",
      "Café da manhã",
      "Transfer aeroporto",
      "Recepção 24h",
    ],
    address: "Av. Aeroporto, 800 – Crespo, Manaus - AM",
    phone: "(92) 3000-0004",
    email: "express@redehavana.com.br",
    mapUrl: "https://maps.google.com",
  },
];

export const getUnitBySlug = (slug: string) => units.find((u) => u.slug === slug);
