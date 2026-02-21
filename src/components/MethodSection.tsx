import { FileText, TrendingUp, Settings, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const phases = [
  {
    icon: FileText,
    title: "FASE 1 — Diagnóstico Fiscal Completo (Semana 1)",
    description: "Auditoria de 360° na sua situação",
    details: [
      "Analiso os últimos 3 anos de declarações (SPED, ECD, ECF)",
      "Identifico erros, omissões e oportunidades perdidas",
      "Mapeio TODAS as deduções aplicáveis ao seu setor",
      "Calculo exatamente quanto você está pagando a mais",
    ],
    result: "Resultado: Eu sei exatamente quanto posso recuperar para você.",
  },
  {
    icon: TrendingUp,
    title: "FASE 2 — Planejamento Tributário Estratégico (Semana 2)",
    description: "Plano escrito de ação",
    details: [
      "Estratégias para reduzir IRPJ, CSLL, PIS/COFINS",
      "Análise do melhor regime (Simples vs Lucro Presumido vs Real)",
      "Cronograma de implementação",
      "Projeção de economia anual",
      "Riscos e como mitigar",
    ],
    result: "Resultado: Você sabe o que vou fazer e quanto vai economizar.",
  },
  {
    icon: Settings,
    title: "FASE 3 — Implementação (Semanas 3-4)",
    description: "Mão na massa",
    details: [
      "Entrego declarações retificadoras",
      "Implemento novas estruturas tributárias",
      "Negocio com a Receita Federal",
      "Protocolo PER/DCOMP para recuperação",
    ],
    result: "Resultado: A economia começa a acontecer.",
  },
  {
    icon: BarChart3,
    title: "FASE 4 — Monitoramento Contínuo (Mensal)",
    description: "Acompanhamento mensal",
    details: [
      "Revisão das suas obrigações fiscais",
      "Ajustes estratégicos",
      "Relatórios claros de economia",
      "Disponibilidade total para dúvidas",
    ],
    result: "Resultado: Você dorme tranquilo. Eu cuido de tudo.",
  },
];

const MethodSection = () => {
  return (
    <section id="servicos" className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Como Funciona o Método F. Ortega de Blindagem Tributária
          </h2>
          <div className="gold-line w-16 mx-auto mb-4" />
          <p className="font-body text-foreground/70 text-center max-w-2xl mx-auto mb-12">
            Eu não faço mágica. Eu faço engenharia tributária.
            <br />
            Sigo um processo de 4 fases que já recuperou mais de R$ 2 milhões para empresas de saúde.
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
                    <p className="font-body text-sm font-semibold text-gold italic">
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
