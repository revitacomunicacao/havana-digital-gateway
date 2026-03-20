import { useEffect } from "react";
import UnitPage from "@/components/UnitPage";
import HbookBookingEngine from "@/components/HbookBookingEngine";
import type { UnitData } from "@/data/units";

import fotosPalace1_1 from "@/assets/Fotos hotel/palace 1/palace 1 (1).webp";
import fotosPalace1_2 from "@/assets/Fotos hotel/palace 1/palace 1 (2).webp";
import fotosPalace1_3 from "@/assets/Fotos hotel/palace 1/palace 1 (3).webp";
import fotosPalace1_4 from "@/assets/Fotos hotel/palace 1/palace 1 (4).webp";
import fotosPalace1_5 from "@/assets/Fotos hotel/palace 1/palace 1 (5).webp";
import fotosPalace1_6 from "@/assets/Fotos hotel/palace 1/palace 1 (6).webp";
import fotosPalace1_7 from "@/assets/Fotos hotel/palace 1/palace 1 (7).webp";
import fotosPalace1_8 from "@/assets/Fotos hotel/palace 1/palace 1 (8).webp";
import fotosPalace1_9 from "@/assets/Fotos hotel/palace 1/palace 1 (9).webp";
import fotosPalace1_10 from "@/assets/Fotos hotel/palace 1/palace 1 (10).webp";
import fotosPalace1_11 from "@/assets/Fotos hotel/palace 1/palace 1 (11).webp";
import fotosPalace1_12 from "@/assets/Fotos hotel/palace 1/palace 1 (12).webp";
import fotosPalace1_13 from "@/assets/Fotos hotel/palace 1/palace 1 (13).webp";
import fotosPalace1_14 from "@/assets/Fotos hotel/palace 1/palace 1 (14).webp";
import fotosPalace1_15 from "@/assets/Fotos hotel/palace 1/palace 1 (15).webp";
import fotosPalace1_16 from "@/assets/Fotos hotel/palace 1/palace 1 (16).webp";
import fotosPalace1_17 from "@/assets/Fotos hotel/palace 1/palace 1 (17).webp";
import fotosPalace1_18 from "@/assets/Fotos hotel/palace 1/palace 1 (18).webp";
import fotosPalace1_19 from "@/assets/Fotos hotel/palace 1/palace 1 (19).webp";
import fotosPalace1_20 from "@/assets/Fotos hotel/palace 1/palace 1 (20).webp";
import fotosPalace1_21 from "@/assets/Fotos hotel/palace 1/palace 1 (21).webp";
import fotosPalace1_22 from "@/assets/Fotos hotel/palace 1/palace 1 (22).webp";
import fotosPalace1_23 from "@/assets/Fotos hotel/palace 1/palace 1 (23).webp";
import fotosPalace1_24 from "@/assets/Fotos hotel/palace 1/palace 1 (24).webp";
import fotosPalace1_25 from "@/assets/Fotos hotel/palace 1/palace 1 (25).webp";
import fotosPalace1_26 from "@/assets/Fotos hotel/palace 1/palace 1 (26).webp";
import fotosPalace1_27 from "@/assets/Fotos hotel/palace 1/palace 1 (27).webp";

const unitData: UnitData = {
  slug: "havana-palace-i",
  name: "Havana Palace I",
  tagline: "A Unidade Havana I é a primeira unidade da rede e se destaca por sua estrutura completa e funcional. Conta com 84 apartamentos amplos e confortáveis, um delicioso café da manhã e duas salas de convenções, preparados para atender com excelência as mais diversas demandas corporativas e de eventos.",
  description: "A Unidade Havana I é a primeira unidade da rede e se destaca por sua estrutura completa e funcional. Conta com 84 apartamentos amplos e confortáveis, um delicioso café da manhã e duas salas de convenções, preparados para atender com excelência as mais diversas demandas corporativas e de eventos.",
  heroImage: fotosPalace1_27,
  gallery: [
    { src: fotosPalace1_1, alt: "Hotel" },
    { src: fotosPalace1_2, alt: "Hotel" },
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
    { src: fotosPalace1_19, alt: "Hotel" },
    { src: fotosPalace1_20, alt: "Hotel" },
    { src: fotosPalace1_21, alt: "Hotel" },
    { src: fotosPalace1_22, alt: "Hotel" },
    { src: fotosPalace1_23, alt: "Hotel" },
    { src: fotosPalace1_24, alt: "Hotel" },
    { src: fotosPalace1_25, alt: "Hotel" },
    { src: fotosPalace1_26, alt: "Hotel" },
    { src: fotosPalace1_27, alt: "Hotel" },
  ],
  amenities: ["Café da Manhã", "Acesso à Internet", "Academia", "Sala de reunião", "Estacionamento"],
  address: "Rua Juiz de Fota,12, Av. Barão do Rio Branco, 985 - São Benedito. Uberaba - MG",
  phone: "(34) 3331-9600",
  email: "reservas@redehavana.com.br",
  mapUrl: "https://www.google.com.br/maps/place/Havana+Palace+Hotel+I/@-19.7634131,-47.9483148,17z/data=!4m18!1m9!3m8!1s0x94bad1893dbd1233:0xf36d6ebfdc121ea8!2sHavana+Palace+Hotel+I!5m2!4m1!1i2!8m2!3d-19.7634187!4d-47.9461264!3m7!1s0x94bad1893dbd1233:0xf36d6ebfdc121ea8!5m2!4m1!1i2!8m2!3d-19.7634187!4d-47.9461264",
};

const roomTypes = [
  { tipo: "Apartamento Luxo Individual", preco: "R$ 234,00", diferenciais: ["Cama de casal", "Piso frio", "Ar condicionado", "Tv a cabo", "Frigobar", "Banheiro privativo com ducha regulável"], imageIndex: 19 },
  { tipo: "Apartamento Luxo Duplo", preco: "R$ 262,00", diferenciais: ["Uma cama de casal ou duas camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 19 },
  { tipo: "Apartamento Luxo Triplo", preco: "R$ 324,00", diferenciais: ["3 camas de solteiro ou uma cama de casal e uma cama de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 18 },
  { tipo: "Apartamento Quadrúplo", preco: "R$ 362,00", diferenciais: ["1 camas de casal e duas camas de solteiro", "Piso frio", "Ar condicionado", "Frigobar", "Tv a cabo", "Banheiro privativo com ducha regulável"], imageIndex: 3 },
];

const HavanaPalaceI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <UnitPage
      unit={unitData}
      rooms={roomTypes}
      beforeAbout={
        <HbookBookingEngine
          scriptSrc="https://s3-sa-east-1.amazonaws.com/hbook-universal-js/js/696645dcd22abe32731566c6.js"
          title="Motor de Reservas Havana Palace I"
        />
      }
    />
  );
};

export default HavanaPalaceI;
