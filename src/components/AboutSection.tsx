import { Check, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const specialties = [
  "Clínicas Odontológicas",
  "Clínicas de Fisioterapia",
  "Centros Médicos",
  "Farmácias",
  "Laboratórios",
];

const differentials = [
  "Especialização exclusiva (não aceito outros setores)",
  "Conhecimento profundo da legislação de saúde",
  "Relacionamentos com a Receita Federal",
  "Histórico comprovado de recuperações",
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
                <img src="/Gemini_Generated_Image_3vwjq83vwjq83vwj.png" alt="F. Ortega" className="relative w-full max-w-lg rounded-xl shadow-2xl" />
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
                NÃO sou uma contadora "generalista" que atende todos os setores.
                <br />
                Sou especialista em empresas de saúde. <strong>PONTO.</strong>
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Por quê?
              </h3>
              <p className="font-body text-foreground/80 mb-6 leading-relaxed">
                Porque durante anos vi clínicas serem prejudicadas por contadores que 
                NÃO entendem o setor. Vi clínicas fecharem porque pagaram impostos a mais. 
                Vi diretores clínicos frustrados com contadores incompetentes.
              </p>
              <p className="font-body text-foreground font-semibold mb-6">
                E decidi que isso tinha de mudar.
              </p>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Minha Especialização:
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {specialties.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Building2 size={14} className="text-sage shrink-0" />
                    <span className="font-body text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                O Que Me Torna Diferente:
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
                NÃO prometo mágica.
                <br />
                Prometo competência técnica e resultados reais.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
