import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_havana.webp";

const navLinks = [
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Havana Palace I", href: "/unidade/havana-palace-i" },
  { label: "Havana Palace II", href: "/unidade/havana-palace-ii" },
  { label: "Havana Economy", href: "/unidade/havana-economy" },
  { label: "Havana Express", href: "/unidade/havana-express" },
  { label: "Agenda Cultural", href: "/#novidades" },
  { label: "Informações Turísticas", href: "/#novidades" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Rede Havana" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/unidade") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-primary-foreground/80 hover:text-secondary text-sm font-body tracking-wide uppercase transition-colors duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/80 hover:text-secondary text-sm font-body tracking-wide uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-6">
          {navLinks.map((link) =>
            link.href.startsWith("/unidade") ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-primary-foreground/80 hover:text-secondary text-sm font-body tracking-wide uppercase transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-primary-foreground/80 hover:text-secondary text-sm font-body tracking-wide uppercase transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
