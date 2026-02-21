import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    stars: 5,
    quote: "Por 5 anos, meu contador disse que não podia deduzir certas despesas da clínica. A Fran analisou e encontrou R$ 168.000 em deduções perdidas. Recebi restituição da Receita Federal em 6 semanas. Melhor investimento que fiz para minha clínica.",
    author: "Dr. Miguel Costa",
    role: "Diretor Clínico, SaúdeDental São Paulo",
  },
  {
    stars: 5,
    quote: "Tinha uma guia de IRPJ de R$ 180.000 para pagar. A Fran reestruturou a contabilidade, aplicou benefícios fiscais específicos para o setor de saúde, e reduziu para R$ 75.000. Economizei R$ 105.000 em um único ano. Continuo com ela há 3 anos.",
    author: "Dra. Ana Rodrigues",
    role: "Diretora, FisioterapiaPlus Rio de Janeiro",
  },
  {
    stars: 5,
    quote: "O que mais me impressionou foi a honestidade. A Fran disse-me claramente: 'Não posso ajudar com isto, é ilegal'. Isso me deu confiança total nela. Hoje, cuido da minha clínica. Ela cuida das finanças. Todos ganham.",
    author: "Dr. João Ferreira",
    role: "Proprietário, Clínica Médica Central Brasília",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Quem Já Trabalhou Comigo, Recomenda
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card p-6 rounded-xl shadow-md border border-border/50 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
