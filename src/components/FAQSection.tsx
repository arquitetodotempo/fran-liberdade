import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "A consulta é realmente gratuita?",
    answer: `Sim, 100% gratuita.

Não peço cartão de crédito.
Não há compromisso de contratação.
Não há "pegadinhas".

É gratuita porque:
1. Acredito que você deve conhecer meu trabalho antes de pagar
2. Algumas empresas decidem me contratar depois (naturalmente)
3. Outras não precisam (e eu digo isso na cara)

Se procura honestidade, está no lugar certo.`,
  },
  {
    question: "O que preciso preparar para a consulta?",
    answer: `Apenas:

• 30 minutos do seu tempo
• Últimas 3 declarações de IRPJ/CSLL (se tiver)
• Uma descrição dos seus principais desafios fiscais

Não precisa de:
• Preparar apresentações
• Reunir a equipe toda
• Ter orçamento aprovado

Vem como está. A conversa adapta-se à sua situação.`,
  },
  {
    question: "E se eu já tiver contador?",
    answer: `Perfeito. Não quero "roubar" seu contador.

O que ofereço é:
• Segunda opinião especializada
• Identificação de oportunidades que ele pode ter perdido
• Colaboração (se ele estiver aberto)

Muitos clientes mantêm o contador atual e me contratam apenas para consultoria especializada.

O importante é seu dinheiro não ficar na mesa.`,
  },
  {
    question: "Trabalha com que tipo de empresas de saúde?",
    answer: `Especializo-me em:

✓ Clínicas Odontológicas
✓ Clínicas de Fisioterapia
✓ Centros Médicos
✓ Farmácias
✓ Laboratórios de Análises
✓ Hospitais e Casas de Saúde

Se seu negócio está no setor da saúde, posso ajudar.`,
  },
  {
    question: "Quais são seus honorários?",
    answer: `Se após a consulta fizer sentido trabalhar juntos, tenho 3 opções:

1. Consultoria Pontual (R$ 2.000)
   → Análise fiscal + plano de otimização

2. Recuperação de Impostos (15% do recuperado)
   → Só paga se recuperar dinheiro

3. Contabilidade Mensal (a partir de R$ 1.500/mês)
   → Gestão completa da sua contabilidade

Mas repito:
Só falarei disso NA CONSULTA, se fizer sentido para você.

Não estou aqui para vender. Estou aqui para ajudar.`,
  },
  {
    question: "Como funciona o agendamento?",
    answer: `É simples:

1. Clica no botão abaixo
2. Escolhe o dia e hora na minha agenda
3. Preenche um formulário rápido (2 minutos)
4. Recebe confirmação por e-mail com o link da chamada

No dia, é só clicar no link e entrar.

Sem complicações.`,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Perguntas Frequentes
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card rounded-lg border border-border/50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-card/80 transition-all"
                >
                  <span className="font-body text-sm font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gold shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <div className="gold-line w-full mb-4" />
                    <p className="font-body text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
