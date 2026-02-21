import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md text-primary-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="F. Ortega - Assessoria Contábil & Fiscal"
            className="h-10 w-auto"
          />
          <div className="hidden md:flex flex-col">
            <span className="font-heading text-lg font-bold tracking-wide">F. Ortega</span>
            <span className="font-body text-[9px] uppercase tracking-[0.25em] text-gold opacity-90">
              Assessoria Contábil & Fiscal
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Serviços", id: "servicos" },
            { label: "Sobre", id: "sobre" },
            { label: "Resultados", id: "resultados" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-sm tracking-wider opacity-80 hover:opacity-100 hover:text-gold transition-all"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta-final")}
            className="gradient-button text-primary font-body text-xs font-semibold px-6 py-2.5 rounded tracking-[0.15em] uppercase hover:brightness-110 transition-all"
          >
            Agendar Consultoria
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4 flex flex-col gap-3">
          {[
            { label: "Serviços", id: "servicos" },
            { label: "Sobre", id: "sobre" },
            { label: "Resultados", id: "resultados" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-sm tracking-wider text-left opacity-80 hover:opacity-100 hover:text-gold transition-all"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta-final")}
            className="gradient-button text-primary font-body text-xs font-semibold px-6 py-2.5 rounded tracking-[0.15em] uppercase mt-2"
          >
            Agendar Consultoria
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
