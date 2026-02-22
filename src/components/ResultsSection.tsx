import { Users, DollarSign, TrendingUp, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    icon: Users,
    value: "+500",
    label: "Mulheres Libertas das Dívidas",
  },
  {
    icon: DollarSign,
    value: "R$ 15 MILHÕES+",
    label: "Dívidas Eliminadas",
  },
  {
    icon: TrendingUp,
    value: "18",
    label: "Meses Médios para Liberdade",
  },
  {
    icon: Award,
    value: "95%",
    label: "Taxa de Sucesso",
  },
];

const ResultsSection = () => {
  return (
    <section className="bg-green/10 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Resultados Reais de Mulheres Reais
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-background p-6 rounded-xl shadow-md text-center border border-gold/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full mb-4">
                  <stat.icon size={24} className="text-gold" />
                </div>
                <p className="font-heading text-2xl md:text-3xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-foreground/70">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up">
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-xl border border-gold/20">
            <p className="font-heading text-lg font-bold text-foreground mb-4">
              Estes números não são vanity metrics.
            </p>
            <p className="font-body text-foreground/80 mb-6 leading-relaxed">
              São 500+ mulheres que voltaram a dormir tranquilas.
              500+ famílias que voltaram a falar de dinheiro sem discutir.
              500+ mulheres que começaram a poupar e investir.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0 mt-2" />
                <p className="font-body text-sm text-foreground/70">Real (dívidas verdadeiras eliminadas)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0 mt-2" />
                <p className="font-body text-sm text-foreground/70">Comprovado (documentação bancária)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0 mt-2" />
                <p className="font-body text-sm text-foreground/70">Sustentável (sem recaídas)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0 mt-2" />
                <p className="font-body text-sm text-foreground/70">Transformador (vidas mudadas)</p>
              </div>
            </div>
            <p className="font-heading text-lg font-bold text-foreground">
              Não prometo que você fica rica. Prometo que você fica livre.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResultsSection;
