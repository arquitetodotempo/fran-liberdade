import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  "Você recebe guias de DARF de R$ 30.000, R$ 50.000 ou mais e sente um aperto no peito, sem saber como reduzir.",
  "Seu contador 'generalista' não entende as particularidades do setor de saúde e trata sua clínica como um comércio qualquer.",
  "Você sabe que existem benefícios fiscais específicos (Simples Nacional, Lucro Presumido), mas ninguém os aplica.",
  "Já ouviu falar em 'deduções para clínicas' mas seu contador diz que 'não se aplica ao seu caso'.",
  "Você teme estar pagando impostos a mais enquanto seus concorrentes descobrem brechas legais e crescem mais rápido.",
  "Já trocou de contador 2-3 vezes e continua na mesma: paying too much, growing too little.",
];

const ProblemSection = () => {
  return (
    <section id="servicos" className="bg-card py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Você Se Identifica Com Isso?
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <div className="grid gap-4 mb-8">
          {problems.map((problem, i) => (
            <ScrollReveal key={i} direction="left" delay={i * 0.1}>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                <X size={20} className="text-destructive shrink-0 mt-0.5" />
                <p className="font-body text-foreground/80 leading-relaxed">{problem}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up">
          <div className="bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 p-6 rounded-lg border border-gold/30">
            <p className="font-body text-foreground mb-3 leading-relaxed">
              Se você se identificou com pelo menos 2 pontos acima, tenho uma boa notícia:
            </p>
            <p className="font-body text-foreground font-semibold mb-3">
              O problema NÃO é sua clínica.
              <br />
              O problema NÃO é você.
              <br />
              O problema é ter o contador ERRADO.
            </p>
            <p className="font-body text-foreground italic">
              Existe um caminho diferente. E eu vou te mostrar agora.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
