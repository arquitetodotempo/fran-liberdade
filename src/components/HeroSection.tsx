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
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 to-green/30 rounded-2xl blur-3xl" />
            
            {/* Image container with border */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl">
              <img
                src="/hero-woman.png"
                alt="Mulher conquistando liberdade financeira"
                className="w-full max-w-md h-auto rounded-xl"
              />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-4 -left-4 bg-gold/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg">
                <p className="font-heading text-3xl font-bold text-white mb-1">500+</p>
                <p className="font-body text-white text-sm">Mulheres Libertas</p>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-green/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg">
                <p className="font-heading text-3xl font-bold text-white mb-1">18</p>
                <p className="font-body text-white text-sm">Meses para Liberdade</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
