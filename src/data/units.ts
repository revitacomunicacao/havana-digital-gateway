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
    address: "Rua Juiz de Fota,12, Av. Barão do Rio Branco, 985 - São Benedito. Uberaba - MG",
    phone: "(92) 3000-0001",
    email: "reservas@redehavana.com.br",
    mapUrl: "https://www.google.com.br/maps/place/Havana+Palace+Hotel+I/@-19.7634131,-47.9483148,17z/data=!4m18!1m9!3m8!1s0x94bad1893dbd1233:0xf36d6ebfdc121ea8!2sHavana+Palace+Hotel+I!5m2!4m1!1i2!8m2!3d-19.7634187!4d-47.9461264!3m7!1s0x94bad1893dbd1233:0xf36d6ebfdc121ea8!5m2!4m1!1i2!8m2!3d-19.7634187!4d-47.9461264",
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
    address: "Av. Barão do Rio Branco, 338 - São Benedito. Uberaba - MG",
    phone: "(92) 3000-0002",
    email: "reservas@redehavana.com.br",
    mapUrl: "https://www.google.com/maps/place/Havana+Palace+II/@-19.7583395,-47.9457796,17z/data=!3m1!4b1!4m9!3m8!1s0x94bad047dd7d901f:0x9a01126bcc9003ec!5m2!4m1!1i2!8m2!3d-19.7583446!4d-47.9432047!16s%2Fg%2F11b6hlbsj_?entry=tts&g_ep=EgoyMDI1MTAyMi4wIPu8ASoASAFQAw%3D%3D&skid=f1ced3d8-af00-4a6f-95cd-f335c9f5458d",
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
    address: "R. Verissimo, 751 - São Benedito. Uberaba - MG",
    phone: "(92) 3000-0003",
    email: "reservas@redehavana.com.br",
    mapUrl: "https://www.google.com/maps/place/Havana+Economy/@-19.7609913,-47.9429447,17z/data=!3m1!4b1!4m9!3m8!1s0x94bad038c0781839:0x7eda735dace65877!5m2!4m1!1i2!8m2!3d-19.7609964!4d-47.9403698!16s%2Fg%2F11j0clmvm2?entry=tts&g_ep=EgoyMDI1MTAyMi4wIPu8ASoASAFQAw%3D%3D&skid=f08a7a06-25e2-416b-87b0-5b3e7e20c5dd",
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
    address: "Av. das Toldas, 141 - Recreio dos Bandeirantes. Uberaba - MG",
    phone: "(92) 3000-0004",
    email: "reservas@redehavana.com.br",
    mapUrl: "https://www.google.com/maps/place/Havana+Express+Hotel/@-19.7808028,-47.9467955,17z/data=!3m1!4b1!4m9!3m8!1s0x94bad1a7e4da7c97:0x88b5a4ea824ea8f3!5m2!4m1!1i2!8m2!3d-19.7808079!4d-47.9442206!16s%2Fg%2F11vm9vwxl4?entry=tts&g_ep=EgoyMDI1MTAyMi4wIPu8ASoASAFQAw%3D%3D&skid=9e5eccec-4d4e-4524-ac6f-79c48f27d8f6",
  },
];

export const getUnitBySlug = (slug: string) => units.find((u) => u.slug === slug);
