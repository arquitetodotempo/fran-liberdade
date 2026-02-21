import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  "Contabilidade 100% especializada em saúde",
  "Planejamento tributário para reduzir IRPJ, CSLL, PIS/COFINS",
  "Recuperação de impostos pagos a mais (PER/DCOMP)",
  "Análise do melhor regime para sua clínica",
  "Gestão de fluxo de caixa específica para saúde",
  "Suporte completo para você focar no que importa: seus pacientes",
];

const SolutionSection = () => {
  return (
    <section id="servicos" className="bg-sage/10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Apresento a Consultoria Contábil Especializada em Saúde
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="bg-background p-8 rounded-xl shadow-lg mb-8">
            <p className="font-heading text-lg font-semibold text-foreground mb-4">
              Olá, sou Fran Ortega.
            </p>
            <p className="font-body text-foreground/80 mb-4 leading-relaxed">
              E vou ser direta com você:
            </p>
            <p className="font-body text-foreground/80 mb-6 leading-relaxed">
              A maioria dos contadores são "generalistas". Eles tratam uma clínica 
              odontológica como tratam uma loja de roupas.
            </p>
            <p className="font-heading text-xl font-bold text-destructive mb-6">
              Isso custa CARO. Muito caro.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              O setor de saúde no Brasil tem regras específicas que 90% dos contadores 
              NÃO dominam: regimes tributários especiais, deduções exclusivas, obrigações 
              acessórias próprias e benefícios que ficam na mesa todos os dias.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-xl border border-gold/20">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              O Que Ofereço:
            </h3>
            <div className="grid gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-gold shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gold/20">
              <p className="font-heading text-lg font-bold text-foreground">
                Tudo com um objetivo:
              </p>
              <p className="font-body text-xl text-gold font-semibold mt-2">
                Mais lucro no seu bolso. Menos impostos desnecessários.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
