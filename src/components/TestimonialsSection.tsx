import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    stars: 5,
    quote: "Tinha R$ 150.000 em dívidas: cartão de crédito, empréstimo pessoal, e um financiamento de carro. Não conseguia dormir. Discutia com meu marido todas as semanas. A Fran criou um plano, negociou com os bancos, e em 18 meses... Estava livre. E economizando R$ 2.000 por mês. Hoje, tenho fundo de emergência e estou investindo. A Fran me deu minha vida de volta.",
    author: "Carla Mendes",
    role: "Enfermeira, São Paulo, 42 anos",
  },
  {
    stars: 5,
    quote: "Empresária falida. R$ 350.000 em dívidas. Depois da pandemia, meu negócio faliu. Fiquei com dívidas pessoais de R$ 350.000. Pensei em declarar falência. Então conheci o método da Fran. Em 24 meses, paguei R$ 250.000. Os outros R$ 100.000 foram negociados e eliminados. Hoje, tenho um novo negócio. E estou sem dívidas. A Fran me salvou da ruína.",
    author: "Ricardo Santos",
    role: "Empresária, Rio de Janeiro, 51 anos",
  },
  {
    stars: 5,
    quote: "Jovem endividada aos 25 anos. Cartão de crédito, compras online, 'compre agora pague depois'. Quando percebi, devia R$ 50.000. Ganhava R$ 3.500 por mês. A Fran não me julgou. Criou um plano. Em 14 meses, paguei tudo. Aprendi a gerir dinheiro. Hoje, tenho R$ 40.000 poupados. De endividada a poupadora. Obrigada, Fran.",
    author: "Sofia Oliveira",
    role: "Assistente Administrativa, Belo Horizonte, 27 anos",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Histórias de Quem Já Conseguiu
          </h2>
          <div className="gold-line w-16 mx-auto mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card p-6 rounded-xl shadow-md border border-border/50 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
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
