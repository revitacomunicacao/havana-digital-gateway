import { useEffect } from "react";
import UnitPage from "@/components/UnitPage";
import HbookBookingEngine from "@/components/HbookBookingEngine";
import type { UnitData } from "@/data/units";

import fotosPalace2_1 from "@/assets/Fotos hotel/palace 2/palace 2 (1).webp";
import fotosPalace2_2 from "@/assets/Fotos hotel/palace 2/palace 2 (2).webp";
import fotosPalace2_3 from "@/assets/Fotos hotel/palace 2/palace 2 (3).webp";
import fotosPalace2_4 from "@/assets/Fotos hotel/palace 2/palace 2 (4).webp";
import fotosPalace2_5 from "@/assets/Fotos hotel/palace 2/palace 2 (5).webp";
import fotosPalace2_6 from "@/assets/Fotos hotel/palace 2/palace 2 (6).webp";
import fotosPalace2_7 from "@/assets/Fotos hotel/palace 2/palace 2 (7).webp";
import fotosPalace2_8 from "@/assets/Fotos hotel/palace 2/palace 2 (8).webp";
import fotosPalace2_9 from "@/assets/Fotos hotel/palace 2/palace 2 (9).webp";
import fotosPalace2_10 from "@/assets/Fotos hotel/palace 2/palace 2 (10).webp";
import fotosPalace2_12 from "@/assets/Fotos hotel/palace 2/palace 2 (12).webp";
import fotosPalace2_14 from "@/assets/Fotos hotel/palace 2/palace 2 (14).webp";
import fotosPalace2_15 from "@/assets/Fotos hotel/palace 2/palace 2 (15).webp";
import fotosPalace2_16 from "@/assets/Fotos hotel/palace 2/palace 2 (16).webp";
import fotosPalace2_17 from "@/assets/Fotos hotel/palace 2/palace 2 (17).webp";
import fotosPalace2_18 from "@/assets/Fotos hotel/palace 2/palace 2 (18).webp";
import fotosPalace2_19 from "@/assets/Fotos hotel/palace 2/palace 2 (19).webp";
import fotosPalace2_20 from "@/assets/Fotos hotel/palace 2/palace 2 (20).webp";

const unitData: UnitData = {
  slug: "havana-palace-ii",
  name: "Havana Palace II",
  tagline: "Oferecendo o melhor café da manhã da cidade, o Hotel Havana II se destaca como uma das unidades mais completas da rede. Nosso restaurante dispõe de um cardápio à la carte variado, com qualidade e cuidado em cada detalhe. Com sua estrutura ampla, serviços eficientes e atendimento preparado para grandes fluxos, é a escolha ideal para receber caravanas, grupos e excursões, proporcionando conforto, praticidade e uma experiência acima do padrão.",
  description: "Oferecendo o melhor café da manhã da cidade, o Hotel Havana II se destaca como uma das unidades mais completas da rede. Nosso restaurante dispõe de um cardápio à la carte variado, com qualidade e cuidado em cada detalhe. Com sua estrutura ampla, serviços eficientes e atendimento preparado para grandes fluxos, é a escolha ideal para receber caravanas, grupos e excursões, proporcionando conforto, praticidade e uma experiência acima do padrão.",
  heroImage: fotosPalace2_12,
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
    { src: fotosPalace2_12, alt: "Hotel" },
    { src: fotosPalace2_14, alt: "Hotel" },
    { src: fotosPalace2_15, alt: "Hotel" },
    { src: fotosPalace2_16, alt: "Hotel" },
    { src: fotosPalace2_17, alt: "Hotel" },
    { src: fotosPalace2_18, alt: "Hotel" },
    { src: fotosPalace2_19, alt: "Hotel" },
    { src: fotosPalace2_20, alt: "Hotel" },
  ],
  amenities: ["Café da Manhã", "Acesso à Internet", "Sauna", "Academia", "Estacionamento", "Sala de jogos"],
  address: "Av. Barão do Rio Branco, 338 - São Benedito. Uberaba - MG",
  phone: "(92) 3000-0002",
  email: "reservas@redehavana.com.br",
  mapUrl: "https://www.google.com/maps/place/Havana+Palace+II/@-19.7583395,-47.9457796,17z/data=!3m1!4b1!4m9!3m8!1s0x94bad047dd7d901f:0x9a01126bcc9003ec!5m2!4m1!1i2!8m2!3d-19.7583446!4d-47.9432047!16s%2Fg%2F11b6hlbsj_?entry=tts&g_ep=EgoyMDI1MTAyMi4wIPu8ASoASAFQAw%3D%3D&skid=f1ced3d8-af00-4a6f-95cd-f335c9f5458d",
};

const roomTypes = [
  { tipo: "Apartamento Luxo Individual", preco: "R$ 249,00", diferenciais: ["Cama de casal", "Piso frio", "Ar condicionado", "Tv a cabo", "Frigobar", "Banheiro privativo com ducha regulável"], imageIndex: 16 },
  { tipo: "Apartamento Luxo Duplo", preco: "R$ 288,00", diferenciais: ["Uma cama de casal ou duas camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 16 },
  { tipo: "Apartamento Luxo Triplo", preco: "R$ 372,00", diferenciais: ["3 camas de solteiro ou uma cama de casal e uma cama de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 16 },
  { tipo: "Apartamento Luxo Quadruplo", preco: "R$ 409,00", diferenciais: ["1 camas de casal e duas camas de solteiro ou 4 camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 16 },
];

const HavanaPalaceII = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <UnitPage
      unit={unitData}
      rooms={roomTypes}
      beforeAbout={
        <HbookBookingEngine
          scriptSrc="https://s3-sa-east-1.amazonaws.com/hbook-universal-js/js/69664be7d22abe327315a40e.js"
          title="Motor de Reservas Havana Palace II"
        />
      }
    />
  );
};

export default HavanaPalaceII;
