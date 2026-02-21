import { Shield, Mail, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTASection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta-final" className="gradient-hero py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
            Pronto Para Recuperar Seu Dinheiro?
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="bg-primary/90 backdrop-blur p-8 md:p-12 rounded-2xl border border-gold/30 shadow-2xl mb-8">
            <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed">
              Você chegou até aqui por uma razão:
            </p>
            <p className="font-heading text-lg font-bold text-gold mb-6">
              Sabe que está pagando impostos a mais.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/30">
                <h3 className="font-heading text-base font-bold text-primary-foreground mb-3">
                  Opção 1: Continuar como está.
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-primary-foreground/70">
                      Pagar mais R$ 120.000, R$ 180.000 ou R$ 300.000 em impostos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-primary-foreground/70">
                      Ver a concorrência crescer enquanto fica para trás
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-primary-foreground/70">
                      Continuar frustrado com seu contador
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gold/10 p-6 rounded-lg border border-gold/30">
                <h3 className="font-heading text-base font-bold text-primary-foreground mb-3">
                  Opção 2: Agendar consulta gratuita.
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-primary-foreground/70">
                      Descobrir exatamente quanto pode recuperar
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-primary-foreground/70">
                      Ter um plano claro de ação
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-primary-foreground/70">
                      Recuperar dinheiro que é seu por direito
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="font-heading text-base font-bold text-primary-foreground text-center mb-8">
              A escolha é sua. Eu estou aqui se precisar.
            </p>

            <div className="text-center mb-8">
              <button
                onClick={() => window.location.href = "#agendar"}
                className="gradient-button text-primary font-body font-semibold text-sm px-10 py-5 rounded tracking-[0.15em] uppercase hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-accent/20 inline-flex items-center gap-3"
              >
                Quero Minha Consultoria Gratuita
              </button>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center justify-center gap-2">
                  <Shield size={16} className="text-gold" />
                  <span className="font-body text-xs text-primary-foreground/60">
                    Vagas limitadas: 5 por semana
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail size={16} className="text-gold" />
                  <span className="font-body text-xs text-primary-foreground/60">
                    Sem compromisso de contratação
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock size={16} className="text-gold" />
                  <span className="font-body text-xs text-primary-foreground/60">
                    100% gratuito
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
