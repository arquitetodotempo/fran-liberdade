import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  "Você acorda de madrugada com o coração acelerado, pensando nas dívidas que não param de crescer.",
  "Seu salário cai na conta e você já sabe: não vai dar para tudo de novo.",
  "Você usa o cartão de crédito para tapar buracos, mas a bola de neve só aumenta.",
  "Já tentou fazer orçamentos, planilhas, apps... mas nada funciona por muito tempo.",
  "Você sente vergonha de falar sobre dinheiro com seu marido, família ou amigos.",
  "Os juros do banco te assustam (300%, 400% ao ano!) e você não vê saída.",
  "Parece que você trabalha apenas para pagar boletos e credores.",
  "Você se sente culpada por cada compra, mesmo as necessárias.",
];

const ProblemSection = () => {
  return (
    <section className="bg-card py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Isso Soa Familiar Para Você?
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
          <div className="bg-gradient-to-r from-green/10 via-green/20 to-green/10 p-6 rounded-lg border border-green/30">
            <p className="font-body text-foreground mb-3 leading-relaxed">
              Se você se identificou com pelo menos 2 pontos acima, eu quero que você saiba de uma coisa:
            </p>
            <p className="font-body text-foreground font-semibold mb-3">
              Você NÃO é fraca.
              <br />
              Você NÃO é irresponsável.
              <br />
              Você NÃO é a única.
            </p>
            <p className="font-body text-foreground italic leading-relaxed">
              Milhares de mulheres trabalhadoras, honestas e responsáveis estão na mesma situação que você.
              O problema não é você. É o método que te venderam até agora.
              E existe uma forma diferente de sair das dívidas. Uma forma mais leve. Mais humana. Mais feminina.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
