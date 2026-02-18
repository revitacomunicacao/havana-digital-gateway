import logo from "@/assets/logo_havana.webp";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="Rede Havana" className="h-[150px] w-auto mb-4" />
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Hospitalidade com excelência há mais de 20 anos.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">Unidades</h4>
            <ul className="space-y-2">
              {["Havana Palace I", "Havana Palace II", "Havana Economy", "Havana Express"].map((u) => (
                <li key={u}>
                  <a href="#unidades" className="text-primary-foreground/60 hover:text-secondary text-sm font-body transition-colors">
                    {u}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              {["Quem Somos", "Agenda Cultural", "Informações Turísticas", "Novidades"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm font-body transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="https://wa.me/5534988414517?text=Ol%C3%A1%20Havana%20Hot%C3%A9is!%0A%0AVisitei%20o%20seu%20site%20e%20tenho%20interesse%20de%20efetuar%20uma%20reserva%2C%20consegue%20me%20auxiliar%20%3F" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm font-body transition-colors">
                <Phone size={14} /> (34) 98841-4517
              </a>
              <a href="mailto:reservas@redehavana.com.br" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm font-body transition-colors">
                <Mail size={14} /> reservas@redehavana.com.br
              </a>
              <p className="flex items-start gap-2 text-primary-foreground/60 text-sm font-body">
                <MapPin size={14} className="mt-0.5 shrink-0" /> Uberaba - MG, Brasil
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm font-body">
            © {new Date().getFullYear()} Rede Havana de Hotelaria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
