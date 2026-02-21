import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import franImage from "@/assets/fran-ortega.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image com Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat md:bg-right md:bg-top bg-center"
        style={{
          backgroundImage: `url(${franImage})`,
          backgroundPosition: 'top right',
        }}
      >
        {/* Overlay Escuro para Legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/80" />
      </div>

      {/* Grid Pattern Sutil */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(43 90% 38%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 90% 38%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-6">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold border border-gold/30 px-4 py-1.5 rounded-full">
              Assessoria Contábil & Fiscal
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            A Sua Clínica Está Perdendo Entre R$ 120.000 e R$ 300.000 Por Ano
            <span className="block text-gold mt-3">Em Impostos Que Você Poderia Recuperar Legalmente</span>
          </h1>

          <div className="gold-line w-24 mb-6" />

          <p className="font-body text-lg text-primary-foreground/70 mb-4 leading-relaxed">
            Descubra como 150+ clínicas médicas recuperaram milhões em tributos
            usando o Método F. Ortega de Blindagem Tributária para Saúde.
          </p>
          <p className="font-body text-xl text-gold font-medium mb-8">
            Consulta Gratuita de 30 Minutos.
          </p>

          <motion.button
            onClick={() => scrollTo("cta-final")}
            className="gradient-button text-primary font-body font-semibold text-sm px-8 py-4 rounded tracking-[0.15em] uppercase hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-accent/20 flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero Recuperar Meu Dinheiro
            <ArrowRight size={18} />
          </motion.button>
          <p className="text-primary-foreground/50 text-sm font-body">
            → Agendamento em 2 minutos · Sem compromisso
          </p>

          <div className="mt-10 border-t border-gold/20 pt-6">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="font-body text-sm italic text-primary-foreground/70 mb-2">
              "A Fran encontrou R$ 168.000 em deduções que o meu contador perdeu durante 3 anos."
            </blockquote>
            <p className="font-body text-xs text-primary-foreground/50">
              — Dr. Miguel Costa, Diretor Clínico SaúdeDental
            </p>
            <p className="font-body text-sm text-gold font-semibold mt-3 tracking-wide">
              +R$ 2 milhões recuperados para clientes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
