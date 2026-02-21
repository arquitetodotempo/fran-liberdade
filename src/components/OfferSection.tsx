import { Check, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const included = [
  "Receber análise preliminar da sua situação fiscal",
  "Descobrir se está pagando impostos a mais",
  "Entender quanto posso recuperar para você",
  "Sair com um plano de ação (mesmo que não me contrate)",
];

const notIncluded = [
  "Não é sessão de vendas",
  "Não vou tentar te vender nada",
  "Não vou pedir seus dados para spam",
  "Não vou fazer follow-up agressivo",
];

const OfferSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-sage/10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            O Que Está Incluído na Consulta Gratuita de 30 Minutos
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-xl border-2 border-gold/30 mb-8">
            <p className="font-heading text-lg font-bold text-foreground mb-6">
              Esta NÃO é uma "chamada de vendas disfarçada".
            </p>
            <p className="font-body text-foreground/80 mb-6 leading-relaxed">
              É uma sessão real de 30 minutos onde você vai:
            </p>
            
            <div className="grid gap-3 mb-8">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-gold/20 p-1 rounded-full shrink-0">
                    <Check size={14} className="text-gold" />
                  </div>
                  <span className="font-body text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-lg mb-6">
              <p className="font-heading text-sm font-bold text-foreground mb-4">
                O que NÃO é:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {notIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <X size={14} className="text-destructive shrink-0 mt-1" />
                    <span className="font-body text-sm text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-body text-foreground italic text-center">
              É exatamente o que diz ser:<br />
              <span className="font-semibold text-gold">
                Uma conversa para te dar clareza sobre suas finanças.
              </span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center">
            <button
              onClick={() => scrollTo("cta-final")}
              className="gradient-button text-primary font-body font-semibold text-sm px-10 py-5 rounded tracking-[0.15em] uppercase hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-accent/20 inline-flex items-center gap-3"
            >
              Quero Minha Consultoria Gratuita
              <Check size={18} />
            </button>
            <p className="font-body text-xs text-muted-foreground mt-4">
              → Vagas limitadas: 5 por semana
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OfferSection;
