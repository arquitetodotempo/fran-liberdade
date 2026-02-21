import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Pattern Sutil */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(43 69% 47%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 69% 47%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-block mb-6">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-white border border-white/30 px-4 py-1.5 rounded-full">
              Liberdade Financeira para Mulheres
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            De Volta ao Controle: Como Mulheres Como Você 
            <span className="block text-gold mt-3">Estão Saindo Das Dívidas em 12 Meses</span>
          </h1>

          <div className="gold-line w-24 mb-6" />

          <p className="font-body text-lg text-white/90 mb-4 leading-relaxed">
            Um método acolhedor e prático, criado por uma mulher que entende sua jornada.
          </p>
          <p className="font-body text-xl text-gold font-medium mb-8">
            +500 mulheres já transformaram suas vidas.
            <br />
            <span className="text-white/70 text-base">Sessão Estratégica Gratuita de 30 Minutos.</span>
          </p>

          <motion.button
            onClick={() => scrollTo("cta-final")}
            className="gradient-button text-white font-body font-semibold text-sm px-8 py-4 rounded tracking-[0.15em] uppercase hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-coral/20 flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero Minha Sessão Gratuita
            <ArrowRight size={18} />
          </motion.button>
          <p className="text-white/70 text-sm font-body">
            → Sem julgamento · 100% confidencial
          </p>

          <div className="mt-10 border-t border-white/20 pt-6">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-body text-sm italic text-white/90 mb-2">
              "Saí de R$ 150.000 em dívidas para poupar R$ 2.000/mês em 18 meses."
            </blockquote>
            <p className="font-body text-xs text-white/70">
              — Carla M., Enfermeira
            </p>
            <p className="font-body text-sm text-gold font-semibold mt-3 tracking-wide">
              +R$ 15 milhões em dívidas eliminadas
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-3xl" />
            <div className="absolute -inset-px rounded-2xl border border-white/20" />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <p className="font-heading text-5xl font-bold text-gold mb-2">500+</p>
              <p className="font-body text-white text-lg">Mulheres Libertas</p>
              <div className="gold-line w-16 mx-auto my-4" />
              <p className="font-heading text-4xl font-bold text-gold mb-2">18</p>
              <p className="font-body text-white text-sm">Meses Médios para Liberdade</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
