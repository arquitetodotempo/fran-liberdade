import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "A sessão é realmente gratuita?",
    answer: `Sim, 100% gratuita.

Não peço cartão de crédito.
Não há compromisso de contratação.
Não há "pegadinhas".

É gratuita porque:
1. Acredito que você deve conhecer meu trabalho antes de pagar
2. Algumas mulheres decidem me contratar depois (naturalmente)
3. Outras não precisam (e eu digo isso na cara)

Se procura acolhimento sem julgamento, está no lugar certo.`,
  },
  {
    question: "O que preciso preparar para a sessão?",
    answer: `Apenas:

• 30 minutos do seu tempo
• Lista das suas dívidas atuais (valores e credores)
• Uma descrição dos seus principais desafios

Não precisa de:
• Preparar documentos complexos
• Ter orçamento aprovado
• Esconder nada por vergonha

Vem como está. Sem julgamentos.`,
  },
  {
    question: "Quanto tempo demora para sair das dívidas?",
    answer: `Depende da sua situação, mas:

• Dívidas até R$ 50.000: 6-12 meses
• Dívidas até R$ 150.000: 12-18 meses
• Dívidas até R$ 300.000: 18-24 meses
• Dívidas acima de R$ 300.000: 24-36 meses

Estes são os tempos MÉDIOS das minhas clientes.

Alguns conseguem mais rápido. Outros demoram mais.
O importante é: você SEMPRE consegue.`,
  },
  {
    question: "Quanto custa seu programa?",
    answer: `Se após a sessão fizer sentido trabalhar juntas, tenho 3 opções:

1. Programa Online (R$ 497/mês)
   → Acesso ao método + comunidade

2. Acompanhamento Pessoal (R$ 1.200/mês)
   → Sessões mensais 1:1 + plano personalizado

3. Programa Premium (R$ 2.500/mês)
   → Acompanhamento total + negociação com bancos

Mas repito:
Só falarei disso NA SESSÃO, se fizer sentido para você.

Não estou aqui para vender. Estou aqui para ajudar.`,
  },
  {
    question: "O método funciona para qualquer tipo de dívida?",
    answer: `Sim. Já trabalhei com:

✓ Cartões de crédito
✓ Empréstimo pessoal
✓ Financiamento de veículo
✓ Financiamento imobiliário
✓ Empréstimos bancários
✓ Dívidas com familiares
✓ Dívidas fiscais

Se é uma dívida, consigo ajudar.`,
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
