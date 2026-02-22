import { FileText, TrendingUp, Shield, Star, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const phases = [
  {
    icon: FileText,
    title: "FASE 1 — Diagnóstico Total (Semana 1)",
    description: "Mapeamento completo (sem julgamento)",
    details: [
      "Listo TODAS as suas dívidas (bancos, cartões, outros)",
      "Calculo juros reais (CET - Custo Efetivo Total)",
      "Analiso seu orçamento atual",
      "Identifico 'vazamentos' de dinheiro",
      "Entendo sua relação emocional com dinheiro",
    ],
    result: "Resultado: Você sabe exatamente onde está. Sem surpresas. Sem vergonha.",
  },
  {
    icon: TrendingUp,
    title: "FASE 2 — Estratégia Personalizada (Semana 2)",
    description: "Plano feito sob medida para VOCÊ",
    details: [
      "Escolho o melhor método (bola de neve ou avalanche)",
      "Negocio prazos e taxas com credores",
      "Crio um orçamento que você CONSEGUE cumprir",
      "Defino metas mensais realistas",
      "Ensino técnicas de negociação com bancos",
    ],
    result: "Resultado: Você tem um caminho claro, mês a mês.",
  },
  {
    icon: Shield,
    title: "FASE 3 — Ataque às Dívidas (Meses 1-12)",
    description: "Implementação do plano",
    details: [
      "Você começa a pagar dívidas pela ordem CERTA",
      "Aplica técnicas de negociação que ensino",
      "Ajusta orçamento conforme necessário",
      "Comemora cada vitória (por pequena que seja)",
      "Tem meu suporte em cada passo",
    ],
    result: "Resultado: Você VÊ o saldo total diminuir mês a mês.",
  },
  {
    icon: Star,
    title: "FASE 4 — Liberdade Total (Meses 12-18)",
    description: "A última dívida é paga",
    details: [
      "Celebramos sua liberdade",
      "Criamos fundo de emergência (3-6 meses)",
      "Você começa a investir para o futuro",
      "Torna-se exemplo para outras mulheres",
    ],
    result: "Resultado: Você acorda sem stress financeiro. Pela primeira vez em anos.",
  },
  {
    icon: Heart,
    title: "FASE 5 — Legado (Opcional)",
    description: "Você ajuda outras mulheres",
    details: [
      "Compartilha sua história",
      "Mentora outras mulheres",
      "Torna-se embaixadora do método",
    ],
    result: "Resultado: Seu sofrimento transforma-se em esperança para outras mulheres.",
  },
];

const MethodSection = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Como Funciona o Método Liberdade Financeira
          </h2>
          <div className="gold-line w-16 mx-auto mb-4" />
          <p className="font-body text-foreground/70 text-center max-w-2xl mx-auto mb-12">
            Não é teoria de livro de finanças. Não é "pense positivo". Não é "corte o cafezinho".
            <br />
            É um método prático de 5 fases que já libertou +500 mulheres.
          </p>
        </ScrollReveal>

        <div className="grid gap-8">
          {phases.map((phase, i) => (
            <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
              <div className="bg-card p-6 rounded-xl shadow-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg shrink-0">
                    <phase.icon size={24} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                      {phase.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {phase.description}
                    </p>
                    <ul className="grid gap-2 mb-4">
                      {phase.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                          <span className="font-body text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-body text-sm font-semibold text-green italic">
                      {phase.result}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
