import { Check, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const differentials = [
  "Baseado em princípios reais de finanças",
  "Testado em 500+ mulheres",
  "Adaptado à realidade brasileira",
  "Sem promessas vazias",
  "Com acolhimento e empatia",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Quem Está Do Outro Lado
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl border-2 border-gold/30 shadow-2xl" />
                <div className="bg-gradient-to-br from-green/20 to-gold/20 rounded-xl p-8 text-center">
                  <Heart size={64} className="text-gold mx-auto mb-4" />
                  <p className="font-heading text-lg font-bold text-foreground mb-2">
                    Fran Ortega
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Mulher, Mãe, Contadora
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <p className="font-heading text-lg font-semibold text-foreground mb-4">
                Olá, sou Fran Ortega.
              </p>
              <p className="font-body text-foreground mb-4 leading-relaxed">
                E vou ser brutalmente honesta com você:
              </p>
              <p className="font-body text-foreground mb-6 leading-relaxed">
                Eu NÃO sou uma "guru" de finanças.
                <br />
                Eu NÃO tenho um curso de R$ 5.000 para te vender.
                <br />
                Eu NÃO prometo que você vai ficar rica em 30 dias.
              </p>
              <p className="font-body text-foreground mb-6 leading-relaxed">
                Eu sou uma mulher, mãe, contadora com 36 anos.
              </p>

              <p className="font-body text-foreground/80 mb-6 leading-relaxed">
                Especializei-me em ajudar mulheres como você:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Profissionais trabalhadoras",
                  "Famílias endividadas",
                  "Jovens que se perderam no crédito",
                  "Empreendedoras com dificuldades financeiras",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={16} className="text-green shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Por Que Este Trabalho?
              </h3>
              <p className="font-body text-foreground/80 mb-6 leading-relaxed">
                Porque já vi demais mulheres:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Perder a casa por dívidas",
                  "Destruir casamentos por dinheiro",
                  "Viver em stress constante",
                  "Perder a esperança",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                    <span className="font-body text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-foreground font-semibold mb-6">
                E sei que há uma saída.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Meu Método:
              </h3>
              <div className="space-y-2 mb-6">
                {differentials.map((d, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={16} className="text-gold shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">{d}</span>
                  </div>
                ))}
              </div>

              <p className="font-heading text-base font-bold text-foreground">
                Não estou aqui para te vender sonhos.
                <br />
                Estou aqui para te dar liberdade.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
