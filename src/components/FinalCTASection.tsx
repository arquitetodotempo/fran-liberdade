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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Pronta Para Ser Livre?
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="bg-primary/90 backdrop-blur p-8 md:p-12 rounded-2xl border border-gold/30 shadow-2xl mb-8">
            <p className="font-body text-white/80 mb-6 leading-relaxed">
              Você chegou até aqui por uma razão:
            </p>
            <p className="font-heading text-lg font-bold text-gold mb-6">
              Quer sair das dívidas.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/30">
                <h3 className="font-heading text-base font-bold text-white mb-3">
                  Opção 1: Continuar como está.
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-white/70">
                      Acordar preocupada todas as manhãs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-white/70">
                      Discutir com a família por dinheiro
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-white/70">
                      Ver o saldo bancário diminuir
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-white/70">
                      Perder a esperança
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gold/10 p-6 rounded-lg border border-gold/30">
                <h3 className="font-heading text-base font-bold text-white mb-3">
                  Opção 2: Agendar sessão gratuita.
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-white/70">
                      Ter um plano claro mês a mês
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-white/70">
                      Começar a ver progresso real
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-white/70">
                      Voltar a dormir tranquila
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-white/70">
                      Ser livre em 12-18 meses
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="font-heading text-base font-bold text-white text-center mb-8">
              A escolha é sua. Eu estou aqui se precisar.
            </p>

            <div className="text-center mb-8">
              <button
                onClick={() => scrollTo("agendar")}
                className="gradient-button text-white font-body font-semibold text-sm px-10 py-5 rounded tracking-[0.15em] uppercase hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-coral/20 inline-flex items-center gap-3"
              >
                Quero Me Libertar Das Dívidas
              </button>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center justify-center gap-2">
                  <Shield size={16} className="text-gold" />
                  <span className="font-body text-xs text-white/60">
                    Vagas limitadas: 5 por semana
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail size={16} className="text-gold" />
                  <span className="font-body text-xs text-white/60">
                    Sem julgamento
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock size={16} className="text-gold" />
                  <span className="font-body text-xs text-white/60">
                    100% confidencial
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
