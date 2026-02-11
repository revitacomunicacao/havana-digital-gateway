import logo from "@/assets/logo_havana.webp";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="Rede Havana" className="h-24 w-auto mb-4" />
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
              <a href="tel:+55000000000" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm font-body transition-colors">
                <Phone size={14} /> (00) 0000-0000
              </a>
              <a href="mailto:contato@redehavana.com.br" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm font-body transition-colors">
                <Mail size={14} /> contato@redehavana.com.br
              </a>
              <p className="flex items-start gap-2 text-primary-foreground/60 text-sm font-body">
                <MapPin size={14} className="mt-0.5 shrink-0" /> Manaus - AM, Brasil
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
