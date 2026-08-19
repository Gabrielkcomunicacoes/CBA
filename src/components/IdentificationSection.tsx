import React from 'react';
import { HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';

export const IdentificationSection: React.FC = () => {
  return (
    <section id="identificacao" className="relative py-20 sm:py-28 bg-[#FAF7F2] overflow-hidden">
      {/* Huge subtle transparent editorial watermark in the background */}
      <div className="absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.045] font-serif-luxury text-[140px] sm:text-[220px] lg:text-[300px] leading-none tracking-widest text-[#2A0E12] z-0">
        VOCÊ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Soft Organic Oval Photo */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[380px]">
              {/* Decorative accent curve backdrop */}
              <div className="absolute -inset-4 bg-[#F4EDE4] rounded-[60%_40%_55%_45%/45%_55%_45%_55%] -z-10 transform -rotate-6" />
              
              <div className="w-full aspect-[4/5] rounded-[60%_40%_55%_45%/45%_55%_45%_55%] overflow-hidden shadow-xl border-4 border-[#FAF7F2]">
                <img
                  src="https://images.unsplash.com/photo-1512290900672-1f4a9cebc174?auto=format&fit=crop&w=800&q=80"
                  alt="Cuidado com a pele e naturalidade - Beleza Atual"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Floating micro quote badge */}
              <div className="absolute -bottom-4 right-2 sm:-right-4 bg-[#FAF7F2] border border-[#E8DCD1] p-3.5 rounded-2xl shadow-lg max-w-[210px]">
                <div className="flex items-center gap-2 text-[#6D242C] mb-1">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="text-[11px] font-bold tracking-wider uppercase font-sans">Sem exageros</span>
                </div>
                <p className="text-[11px] text-[#6E635C] leading-snug font-sans">
                  Harmonia que respeita a sua essência e traços originais.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Editorial Message */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6D242C]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#8F7D73]">
                Filosofia Beleza Atual
              </span>
            </div>

            {/* Central Main Headline */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-normal text-[#2A0E12] leading-[1.18] mb-6">
              Você não precisa mudar quem é.{' '}
              <br className="hidden sm:inline" />
              Pode simplesmente <span className="italic font-medium text-[#6D242C]">cuidar</span> daquilo que incomoda você.
            </h2>

            {/* Explanatory Body */}
            <div className="space-y-4 text-[#5A524D] text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Cada pessoa é única e cada fase traz novas necessidades. Por isso, antes de indicar qualquer tratamento, realizamos uma avaliação cuidadosa para entender o que você deseja e quais possibilidades fazem sentido para o seu caso.
              </p>
              <p className="text-sm sm:text-base text-[#7A6E66]">
                Não acreditamos em fórmulas prontas ou promessas irreais. Nossa prioridade é oferecer segurança clínica, conforto e resultados que devolvam o seu brilho com total elegância.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 mb-8">
              <div className="p-3.5 rounded-xl bg-[#F4EDE4]/70 border border-[#E8DCD1]/60 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D242C] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3E3530] font-medium leading-snug">
                  Escuta atenta e sem pressa
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F4EDE4]/70 border border-[#E8DCD1]/60 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D242C] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3E3530] font-medium leading-snug">
                  Planejamento passo a passo
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F4EDE4]/70 border border-[#E8DCD1]/60 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D242C] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3E3530] font-medium leading-snug">
                  Acompanhamento contínuo
                </span>
              </div>
            </div>

            {/* Conversational Link */}
            <div>
              <a
                href={getWhatsAppLink('identificacao', 'Olá! Gostaria de conversar com a equipe da Beleza Atual sobre uma avaliação individualizada.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#6D242C] hover:text-[#44161C] group"
              >
                <span>Quero entender o que faz sentido para mim</span>
                <span className="text-base transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
