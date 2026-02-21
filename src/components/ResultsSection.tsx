import { Users, DollarSign, TrendingUp, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    icon: Users,
    value: "+150",
    label: "Clínicas Atendidas",
  },
  {
    icon: DollarSign,
    value: "R$ 2 MILHÕES+",
    label: "Recuperados para Clientes",
  },
  {
    icon: TrendingUp,
    value: "R$ 120.000",
    label: "Economia Média por Clínica",
  },
  {
    icon: Award,
    value: "98%",
    label: "Taxa de Satisfação",
  },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="bg-sage/10 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Resultados Que Falam Por Si
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
              São o resultado de anos de especialização exclusiva em saúde.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0 mt-2" />
                <p className="font-body text-sm text-foreground/70">Legal (dentro da lei)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0 mt-2" />
                <p className="font-body text-sm text-foreground/70">Documentado (papelada em ordem)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0 mt-2" />
                <p className="font-body text-sm text-foreground/70">Comprovado (Receita Federal aceitou)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0 mt-2" />
                <p className="font-body text-sm text-foreground/70">Transformado em lucro para o seu negócio</p>
              </div>
            </div>
            <p className="font-heading text-lg font-bold text-destructive mt-6">
              Não faço promessas vazias. Faço declarações retificadoras que resultam em cheque de restituição.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResultsSection;
