import { useEffect } from "react";
import UnitPage from "@/components/UnitPage";
import type { UnitData } from "@/data/units";

import fotosEconomy_5 from "@/assets/Fotos hotel/economy/economy (5).webp";
import fotosEconomy_6 from "@/assets/Fotos hotel/economy/economy (6).webp";
import fotosEconomy_7 from "@/assets/Fotos hotel/economy/economy (7).webp";
import fotosEconomy_8 from "@/assets/Fotos hotel/economy/economy (8).webp";
import fotosEconomy_9 from "@/assets/Fotos hotel/economy/economy (9).webp";
import fotosEconomy_10 from "@/assets/Fotos hotel/economy/economy (10).webp";
import fotosEconomy_11 from "@/assets/Fotos hotel/economy/economy (11).webp";
import fotosEconomy_12 from "@/assets/Fotos hotel/economy/economy (12).webp";
import fotosEconomy_13 from "@/assets/Fotos hotel/economy/economy (13).webp";
import fotosEconomy_14 from "@/assets/Fotos hotel/economy/economy (14).webp";
import fotosEconomy_15 from "@/assets/Fotos hotel/economy/economy (15).webp";
import fotosEconomy_16 from "@/assets/Fotos hotel/economy/economy (16).webp";
import fotosEconomy_17 from "@/assets/Fotos hotel/economy/economy (17).webp";
import fotosEconomy_18 from "@/assets/Fotos hotel/economy/economy (18).webp";
import fotosEconomy_19 from "@/assets/Fotos hotel/economy/economy (19).webp";
import fotosEconomy_20 from "@/assets/Fotos hotel/economy/economy (20).webp";
import fotosEconomy_21 from "@/assets/Fotos hotel/economy/economy (21).webp";
import fotosEconomy_22 from "@/assets/Fotos hotel/economy/economy (22).webp";
import fotosEconomy_23 from "@/assets/Fotos hotel/economy/economy (23).webp";
import fotosEconomy_24 from "@/assets/Fotos hotel/economy/economy (24).webp";
import fotosEconomy_25 from "@/assets/Fotos hotel/economy/economy (25).webp";
import fotosEconomy_26 from "@/assets/Fotos hotel/economy/economy (26).webp";
import fotosEconomy_27 from "@/assets/Fotos hotel/economy/economy (27).webp";
import fotosEconomy_28 from "@/assets/Fotos hotel/economy/economy (28).webp";
import fotosEconomy_29 from "@/assets/Fotos hotel/economy/economy (29).webp";
import fotosEconomy_30 from "@/assets/Fotos hotel/economy/economy (30).webp";
import fotosEconomy_31 from "@/assets/Fotos hotel/economy/economy (31).webp";

const unitData: UnitData = {
  slug: "havana-economy",
  name: "Havana Economy",
  tagline: "O Hotel é especializado em atender demandas econômicas, proporcionando uma estrutura com mais de 150 apartamentos.",
  description: "O Hotel é especializado em atender demandas econômicas, proporcionando uma estrutura com mais de 150 apartamentos.",
  heroImage: fotosEconomy_31,
  gallery: [
    { src: fotosEconomy_5, alt: "Hotel" },
    { src: fotosEconomy_6, alt: "Hotel" },
    { src: fotosEconomy_7, alt: "Hotel" },
    { src: fotosEconomy_8, alt: "Hotel" },
    { src: fotosEconomy_9, alt: "Hotel" },
    { src: fotosEconomy_10, alt: "Hotel" },
    { src: fotosEconomy_11, alt: "Hotel" },
    { src: fotosEconomy_12, alt: "Hotel" },
    { src: fotosEconomy_13, alt: "Hotel" },
    { src: fotosEconomy_14, alt: "Hotel" },
    { src: fotosEconomy_15, alt: "Hotel" },
    { src: fotosEconomy_16, alt: "Hotel" },
    { src: fotosEconomy_17, alt: "Hotel" },
    { src: fotosEconomy_18, alt: "Hotel" },
    { src: fotosEconomy_19, alt: "Hotel" },
    { src: fotosEconomy_20, alt: "Hotel" },
    { src: fotosEconomy_21, alt: "Hotel" },
    { src: fotosEconomy_22, alt: "Hotel" },
    { src: fotosEconomy_23, alt: "Hotel" },
    { src: fotosEconomy_24, alt: "Hotel" },
    { src: fotosEconomy_25, alt: "Hotel" },
    { src: fotosEconomy_26, alt: "Hotel" },
    { src: fotosEconomy_27, alt: "Hotel" },
    { src: fotosEconomy_28, alt: "Hotel" },
    { src: fotosEconomy_29, alt: "Hotel" },
    { src: fotosEconomy_30, alt: "Hotel" },
    { src: fotosEconomy_31, alt: "Hotel" },
  ],
  amenities: ["Café da Manhã", "Acesso à Internet", "Estacionamento"],
  address: "R. Verissimo, 751 - São Benedito. Uberaba - MG",
  phone: "(34) 3319-9700",
  email: "reservas@redehavana.com.br",
  mapUrl: "https://www.google.com/maps/place/Havana+Economy/@-19.7609913,-47.9429447,17z/data=!3m1!4b1!4m9!3m8!1s0x94bad038c0781839:0x7eda735dace65877!5m2!4m1!1i2!8m2!3d-19.7609964!4d-47.9403698!16s%2Fg%2F11j0clmvm2?entry=tts&g_ep=EgoyMDI1MTAyMi4wIPu8ASoASAFQAw%3D%3D&skid=f08a7a06-25e2-416b-87b0-5b3e7e20c5dd",
};

const roomTypes = [
  { tipo: "Apartamento Luxo Individual", preco: "R$ 143,00", diferenciais: ["Cama de casal", "Piso frio", "Ar condicionado", "Tv a cabo", "Frigobar", "Banheiro privativo com ducha regulável"], imageIndex: 0 },
  { tipo: "Apartamento Luxo Duplo", preco: "R$ 200,00", diferenciais: ["Uma cama de casal ou duas camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 6 },
];

const HavanaEconomy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <UnitPage unit={unitData} rooms={roomTypes} />;
};

export default HavanaEconomy;
