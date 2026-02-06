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

import fotosPalace1_1 from "@/assets/Fotos hotel/palace 1/palace 1 (1).webp"
import fotosPalace1_2 from "@/assets/Fotos hotel/palace 1/palace 1 (2).webp"
import fotosPalace1_3 from "@/assets/Fotos hotel/palace 1/palace 1 (3).webp"
import fotosPalace1_4 from "@/assets/Fotos hotel/palace 1/palace 1 (4).webp"
import fotosPalace1_5 from "@/assets/Fotos hotel/palace 1/palace 1 (5).webp"
import fotosPalace1_6 from "@/assets/Fotos hotel/palace 1/palace 1 (6).webp"
import fotosPalace1_7 from "@/assets/Fotos hotel/palace 1/palace 1 (7).webp"
import fotosPalace1_8 from "@/assets/Fotos hotel/palace 1/palace 1 (8).webp"
import fotosPalace1_9 from "@/assets/Fotos hotel/palace 1/palace 1 (9).webp"
import fotosPalace1_10 from "@/assets/Fotos hotel/palace 1/palace 1 (10).webp"
import fotosPalace1_11 from "@/assets/Fotos hotel/palace 1/palace 1 (11).webp"
import fotosPalace1_12 from "@/assets/Fotos hotel/palace 1/palace 1 (12).webp"
import fotosPalace1_13 from "@/assets/Fotos hotel/palace 1/palace 1 (13).webp"
import fotosPalace1_14 from "@/assets/Fotos hotel/palace 1/palace 1 (14).webp"
import fotosPalace1_15 from "@/assets/Fotos hotel/palace 1/palace 1 (15).webp"
import fotosPalace1_16 from "@/assets/Fotos hotel/palace 1/palace 1 (16).webp"
import fotosPalace1_17 from "@/assets/Fotos hotel/palace 1/palace 1 (17).webp"
import fotosPalace1_18 from "@/assets/Fotos hotel/palace 1/palace 1 (18).webp"
import fotosPalace1_19 from "@/assets/Fotos hotel/palace 1/palace 1 (19).webp"

import fotosPalace2_1 from "@/assets/Fotos hotel/palace 2/palace 2 (1).webp"
import fotosPalace2_2 from "@/assets/Fotos hotel/palace 2/palace 2 (2).webp"
import fotosPalace2_3 from "@/assets/Fotos hotel/palace 2/palace 2 (3).webp"
import fotosPalace2_4 from "@/assets/Fotos hotel/palace 2/palace 2 (4).webp"
import fotosPalace2_5 from "@/assets/Fotos hotel/palace 2/palace 2 (5).webp"
import fotosPalace2_6 from "@/assets/Fotos hotel/palace 2/palace 2 (6).webp"
import fotosPalace2_7 from "@/assets/Fotos hotel/palace 2/palace 2 (7).webp"
import fotosPalace2_8 from "@/assets/Fotos hotel/palace 2/palace 2 (8).webp"
import fotosPalace2_9 from "@/assets/Fotos hotel/palace 2/palace 2 (9).webp"
import fotosPalace2_10 from "@/assets/Fotos hotel/palace 2/palace 2 (10).webp"
import fotosPalace2_11 from "@/assets/Fotos hotel/palace 2/palace 2 (11).webp"
import fotosPalace2_12 from "@/assets/Fotos hotel/palace 2/palace 2 (12).webp"
import fotosPalace2_13 from "@/assets/Fotos hotel/palace 2/palace 2 (13).webp"

import fotosEconomy_1 from "@/assets/Fotos hotel/economy/economy (1).webp"
import fotosEconomy_2 from "@/assets/Fotos hotel/economy/economy (2).webp"
import fotosEconomy_3 from "@/assets/Fotos hotel/economy/economy (3).webp"
import fotosEconomy_4 from "@/assets/Fotos hotel/economy/economy (4).webp"
import fotosEconomy_5 from "@/assets/Fotos hotel/economy/economy (5).webp"
import fotosEconomy_6 from "@/assets/Fotos hotel/economy/economy (6).webp"
import fotosEconomy_7 from "@/assets/Fotos hotel/economy/economy (7).webp"
import fotosEconomy_8 from "@/assets/Fotos hotel/economy/economy (8).webp"

import fotosExpress_1 from "@/assets/Fotos hotel/express/express (1).webp"
import fotosExpress_2 from "@/assets/Fotos hotel/express/express (2).webp"
import fotosExpress_3 from "@/assets/Fotos hotel/express/express (3).webp"
import fotosExpress_4 from "@/assets/Fotos hotel/express/express (4).webp"
import fotosExpress_5 from "@/assets/Fotos hotel/express/express (5).webp"
import fotosExpress_6 from "@/assets/Fotos hotel/express/express (6).webp"
import fotosExpress_7 from "@/assets/Fotos hotel/express/express (7).webp"



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
    heroImage: fotosPalace1_19,
    gallery: [
      { src: fotosPalace1_19, alt: "Hotel" },
      { src: fotosPalace1_3, alt: "Hotel" },
      { src: fotosPalace1_4, alt: "Hotel" },
      { src: fotosPalace1_5, alt: "Hotel" },
      { src: fotosPalace1_6, alt: "Hotel" },
      { src: fotosPalace1_7, alt: "Hotel" },
      { src: fotosPalace1_8, alt: "Hotel" },
      { src: fotosPalace1_9, alt: "Hotel" },
      { src: fotosPalace1_10, alt: "Hotel" },
      { src: fotosPalace1_11, alt: "Hotel" },
      { src: fotosPalace1_12, alt: "Hotel" },
      { src: fotosPalace1_13, alt: "Hotel" },
      { src: fotosPalace1_14, alt: "Hotel" },
      { src: fotosPalace1_15, alt: "Hotel" },
      { src: fotosPalace1_16, alt: "Hotel" },
      { src: fotosPalace1_17, alt: "Hotel" },
      { src: fotosPalace1_18, alt: "Hotel" },
      { src: fotosPalace1_1, alt: "Hotel" },
      { src: fotosPalace1_2, alt: "Hotel" },
      
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
    heroImage: fotosPalace2_13,
    gallery: [
      { src: fotosPalace2_1, alt: "Hotel" },
      { src: fotosPalace2_2, alt: "Hotel" },
      { src: fotosPalace2_3, alt: "Hotel" },
      { src: fotosPalace2_4, alt: "Hotel" },
      { src: fotosPalace2_5, alt: "Hotel" },
      { src: fotosPalace2_6, alt: "Hotel" },
      { src: fotosPalace2_7, alt: "Hotel" },
      { src: fotosPalace2_8, alt: "Hotel" },
      { src: fotosPalace2_9, alt: "Hotel" },
      { src: fotosPalace2_10, alt: "Hotel" },
      { src: fotosPalace2_11, alt: "Hotel" },
      { src: fotosPalace2_12, alt: "Hotel" },
      { src: fotosPalace2_13, alt: "Hotel" },
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
    heroImage: fotosEconomy_8,
    gallery: [
      { src: fotosEconomy_8, alt: "Hotel" },
      { src: fotosEconomy_1, alt: "Hotel" },
      { src: fotosEconomy_2, alt: "Hotel" },
      { src: fotosEconomy_3, alt: "Hotel" },
      { src: fotosEconomy_4, alt: "Hotel" },
      { src: fotosEconomy_5, alt: "Hotel" },
      { src: fotosEconomy_6, alt: "Hotel" },
      { src: fotosEconomy_7, alt: "Hotel" },
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
    heroImage: fotosExpress_1,
    gallery: [
      { src: fotosExpress_1, alt: "Hotel" },
      { src: fotosExpress_2, alt: "Hotel" },
      { src: fotosExpress_3, alt: "Hotel" },
      { src: fotosExpress_4, alt: "Hotel" },
      { src: fotosExpress_5, alt: "Hotel" },
      { src: fotosExpress_6, alt: "Hotel" },
      { src: fotosExpress_7, alt: "Hotel" },
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
