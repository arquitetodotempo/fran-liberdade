import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  "Análise completa da sua situação (sem julgamento)",
  "Plano personalizado de eliminação de dívidas",
  "Negociação direta com bancos e credores",
  "Reestruturação do seu orçamento familiar",
  "Educação financeira prática (nada de teoria chata)",
  "Acompanhamento até você estar 100% livre",
  "Suporte emocional (porque dinheiro é emocional)",
];

const SolutionSection = () => {
  return (
    <section className="bg-green/10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Apresento o Método Liberdade Financeira F. Ortega
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="bg-background p-8 rounded-xl shadow-lg mb-8">
            <p className="font-heading text-lg font-semibold text-foreground mb-4">
              Olá, sou Fran Ortega.
            </p>
            <p className="font-body text-foreground/80 mb-4 leading-relaxed">
              E quero que você saiba:
            </p>
            <p className="font-body text-foreground/80 mb-6 leading-relaxed">
              Eu NÃO sou uma "guru" de finanças.
              Eu NÃO tenho um curso de R$ 5.000 para te vender.
              Eu NÃO prometo que você vai ficar rica em 30 dias.
            </p>
            <p className="font-body text-foreground/80 mb-6 leading-relaxed">
              Eu sou uma mulher, mãe, contadora com 36 anos, especializada em ajudar mulheres como você.
              Mulheres trabalhadoras, honestas, responsáveis. Que só precisam do método CERTO.
            </p>
            <div className="bg-gold/10 p-6 rounded-lg border border-gold/20 mb-6">
              <p className="font-heading text-base font-bold text-foreground mb-3">
                O Método Liberdade Financeira já ajudou:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-gold shrink-0 mt-1" />
                  <span className="font-body text-foreground">+500 mulheres a saírem das dívidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-gold shrink-0 mt-1" />
                  <span className="font-body text-foreground">+R$ 15 milhões em dívidas eliminadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-gold shrink-0 mt-1" />
                  <span className="font-body text-foreground">12-18 meses: tempo médio para liberdade total</span>
                </li>
              </ul>
            </div>
            <p className="font-heading text-base font-bold text-foreground">
              Eu não prometo mágica. Prometo um caminho claro. Passo a passo. Comprovado.
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
                  <Check size={20} className="text-green shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gold/20">
              <p className="font-heading text-lg font-bold text-foreground mb-2">
                Tudo com um objetivo:
              </p>
              <p className="font-body text-xl text-green font-semibold">
                Você voltar a dormir tranquila. E ver seu saldo bancário crescer pela primeira vez em anos.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
