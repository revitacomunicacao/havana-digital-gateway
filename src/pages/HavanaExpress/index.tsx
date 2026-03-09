import { useEffect } from "react";
import UnitPage from "@/components/UnitPage";
import type { UnitData } from "@/data/units";

import fotosExpress_1 from "@/assets/Fotos hotel/express/express (1).webp";
import fotosExpress_2 from "@/assets/Fotos hotel/express/express (2).webp";
import fotosExpress_3 from "@/assets/Fotos hotel/express/express (3).webp";
import fotosExpress_4 from "@/assets/Fotos hotel/express/express (4).webp";
import fotosExpress_5 from "@/assets/Fotos hotel/express/express (5).webp";
import fotosExpress_6 from "@/assets/Fotos hotel/express/express (6).webp";
import fotosExpress_7 from "@/assets/Fotos hotel/express/express (7).webp";
import fotosExpress_8 from "@/assets/Fotos hotel/express/express (8).webp";
import fotosExpress_9 from "@/assets/Fotos hotel/express/express (9).webp";
import fotosExpress_10 from "@/assets/Fotos hotel/express/express (10).webp";
import fotosExpress_11 from "@/assets/Fotos hotel/express/express (11).webp";
import fotosExpress_12 from "@/assets/Fotos hotel/express/express (12).webp";
import fotosExpress_13 from "@/assets/Fotos hotel/express/express (13).webp";
import fotosExpress_14 from "@/assets/Fotos hotel/express/express (14).webp";
import fotosExpress_15 from "@/assets/Fotos hotel/express/express (15).webp";
import fotosExpress_16 from "@/assets/Fotos hotel/express/express (16).webp";
import fotosExpress_17 from "@/assets/Fotos hotel/express/express (17).webp";

const unitData: UnitData = {
  slug: "havana-express",
  name: "Havana Express",
  tagline: "Situado próximo às margens da BR-050, o Hotel possui fácil acesso para quem vem de São Paulo e estado de Goiás, possuindo quartos amplos, confortáveis e um delicioso café da manhã.",
  description: "Situado próximo às margens da BR-050, o Hotel possui fácil acesso para quem vem de São Paulo e estado de Goiás, possuindo quartos amplos, confortáveis e um delicioso café da manhã.",
  heroImage: fotosExpress_5,
  gallery: [
    { src: fotosExpress_1, alt: "Hotel" },
    { src: fotosExpress_2, alt: "Hotel" },
    { src: fotosExpress_3, alt: "Hotel" },
    { src: fotosExpress_4, alt: "Hotel" },
    { src: fotosExpress_5, alt: "Hotel" },
    { src: fotosExpress_6, alt: "Hotel" },
    { src: fotosExpress_7, alt: "Hotel" },
    { src: fotosExpress_8, alt: "Hotel" },
    { src: fotosExpress_9, alt: "Hotel" },
    { src: fotosExpress_10, alt: "Hotel" },
    { src: fotosExpress_11, alt: "Hotel" },
    { src: fotosExpress_12, alt: "Hotel" },
    { src: fotosExpress_13, alt: "Hotel" },
    { src: fotosExpress_14, alt: "Hotel" },
    { src: fotosExpress_15, alt: "Hotel" },
    { src: fotosExpress_16, alt: "Hotel" },
    { src: fotosExpress_17, alt: "Hotel" },
  ],
  amenities: ["Café da Manhã", "Acesso à Internet", "Estacionamento"],
  address: "Av. das Toldas, 141 - Recreio dos Bandeirantes. Uberaba - MG",
  phone: "(92) 3000-0004",
  email: "reservas@redehavana.com.br",
  mapUrl: "https://www.google.com/maps/place/Havana+Express+Hotel/@-19.7808028,-47.9467955,17z/data=!3m1!4b1!4m9!3m8!1s0x94bad1a7e4da7c97:0x88b5a4ea824ea8f3!5m2!4m1!1i2!8m2!3d-19.7808079!4d-47.9442206!16s%2Fg%2F11vm9vwxl4?entry=tts&g_ep=EgoyMDI1MTAyMi4wIPu8ASoASAFQAw%3D%3D&skid=9e5eccec-4d4e-4524-ac6f-79c48f27d8f6",
};

const roomTypes = [
  { tipo: "Apartamento Luxo Individual", preco: "R$ 240,00", diferenciais: ["Cama de casal", "Piso frio", "Ar Condicionado", "Tv a cabo", "Adega(resfria)", "Banheiro privativo com ducha regulável"], imageIndex: 2 },
  { tipo: "Apartamento Luxo Duplo", preco: "R$ 270,00", diferenciais: ["Uma cama de casal ou duas camas de solteiro", "Piso frio", "Ar Condicionado", "Tv a cabo", "Adega(resfria)", "Banheiro privativo com ducha regulável"], imageIndex: 2 },
  { tipo: "Apartamento Luxo Triplo", preco: "R$ 330,00", diferenciais: ["3 camas de solteiro ou uma cama de casal e uma cama de solteiro", "Piso frio", "Ar Condicionado", "Tv a cabo", "Adega(resfria)", "Banheiro privativo com ducha regulável"], imageIndex: 2 },
  { tipo: "Apartamento Luxo Quadruplo Casal", preco: "R$ 368,00", diferenciais: ["1 camas de casal e duas camas de solteiro", "Piso frio", "Ar Condicionado", "Tv a cabo", "Adega(resfria)", "Banheiro privativo com ducha regulável"], imageIndex: 2 },
];

const HavanaExpress = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <UnitPage unit={unitData} rooms={roomTypes} />;
};

export default HavanaExpress;
