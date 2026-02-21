import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="F. Ortega" className="h-8 w-auto" />
            </div>
            <p className="font-body text-sm opacity-60 mt-4 leading-relaxed">
              Consultoria contábil especializada para empresas de saúde no Brasil.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold mb-4 tracking-[0.2em] uppercase text-gold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 opacity-60">
                <Mail size={14} />
                <span className="font-body text-sm">fran.ortega@exemplo.com</span>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <Phone size={14} />
                <span className="font-body text-sm">+55 (11) 9XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <Linkedin size={14} />
                <span className="font-body text-sm">linkedin.com/in/franortega</span>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <MapPin size={14} />
                <span className="font-body text-sm">Brasil (atendimento remoto)</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold mb-4 tracking-[0.2em] uppercase text-gold">Horário</h4>
            <p className="font-body text-sm opacity-60">Segunda a Sexta</p>
            <p className="font-body text-sm opacity-60">9h00 - 18h00 (Horário de Brasília)</p>
            <p className="font-body text-xs opacity-40 mt-3">
              Tempo de resposta: até 24h úteis
            </p>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="text-center">
          <p className="font-body text-xs opacity-40">
            © {new Date().getFullYear()} F. Ortega - Assessoria Contábil & Fiscal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
