import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import QuemSomos from "@/components/QuemSomos";
import Unidades from "@/components/Unidades";
import Diferenciais from "@/components/Diferenciais";
import Depoimentos from "@/components/Depoimentos";
import Novidades from "@/components/Novidades";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <QuemSomos />
      <Unidades />
      <Diferenciais />
      <Depoimentos />
      <Novidades />
      <Footer />
    </div>
  );
};

export default Index;
