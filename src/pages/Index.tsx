import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import QuemSomos from "@/components/QuemSomos";
import Unidades from "@/components/Unidades";
import Novidades from "@/components/Novidades";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <QuemSomos />
      <Unidades />
      <Novidades />
      <Footer />
    </div>
  );
};

export default Index;
