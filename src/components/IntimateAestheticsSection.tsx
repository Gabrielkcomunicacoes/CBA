import React from 'react';
import { Shield, Lock, Heart, MessageCircle, CheckCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

export const IntimateAestheticsSection: React.FC = () => {
  return (
    <section id="estetica-intima-secao" className="relative pt-4 pb-0 bg-[#2A0E12] text-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Box with Dark Espresso / Café tone and Subtle Border */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#3B1419] to-[#220B0E] p-8 sm:p-12 lg:p-16 border border-[#C2A27A]/25 shadow-2xl overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C2A27A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Image with Discreet, Ultra-Elegant Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#FAF7F2]/10">
                <img
                  src="/assets/sigilo-e-acolhimento.webp"
                  alt="Atendimento com sigilo e discrição - Estética Íntima Beleza Atual"
                  className="w-full h-full object-cover filter contrast-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#220B0E]/90 via-[#220B0E]/20 to-transparent" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#2A0E12]/90 backdrop-blur-md p-3 rounded-xl border border-[#FAF7F2]/15 text-center">
                  <div className="flex items-center justify-center gap-2 text-[#C2A27A] text-xs font-semibold uppercase tracking-wider">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Ambiente 100% Privativo</span>
                  </div>
                  <span className="text-[11px] text-[#D8CAC0] mt-0.5 block">
                    São Bernardo do Campo
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial & Reassuring Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-[#C2A27A]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#C2A27A]">
                  Sigilo & Acolhimento
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF7F2] leading-tight mb-6">
                Alguns cuidados pedem <br />
                <span className="italic font-medium text-[#C2A27A]">ainda mais privacidade.</span>
              </h2>

              {/* Text */}
              <p className="text-base sm:text-lg text-[#E8DCD1] leading-relaxed mb-6 font-normal">
                Tratamentos íntimos femininos e masculinos realizados com discrição, avaliação individualizada e acompanhamento profissional.
              </p>

              <p className="text-xs sm:text-sm text-[#C4B5A8] leading-relaxed mb-8">
                Entendemos que o cuidado com a região íntima envolve confiança e sensibilidade. Nosso atendimento é humanizado, ético e conduzido por profissionais com ampla experiência clínica.
              </p>

              {/* 4 Pillars of Intimate Care */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#FAF7F2]">
                  <CheckCircle className="w-4 h-4 text-[#C2A27A] shrink-0 mt-0.5" />
                  <span>Consultório reservado e exclusivo</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#FAF7F2]">
                  <CheckCircle className="w-4 h-4 text-[#C2A27A] shrink-0 mt-0.5" />
                  <span>Protocolos para mulheres e homens</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#FAF7F2]">
                  <CheckCircle className="w-4 h-4 text-[#C2A27A] shrink-0 mt-0.5" />
                  <span>Esclarecimento técnico de cada passo</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#FAF7F2]">
                  <CheckCircle className="w-4 h-4 text-[#C2A27A] shrink-0 mt-0.5" />
                  <span>Acompanhamento pós-procedimento</span>
                </div>
              </div>

              {/* CTA */}
              <div>
                <a
                  id="intimate-confidential-cta"
                  href={getWhatsAppLink('intimo')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF7F2] hover:bg-[#C2A27A] text-[#2A0E12] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl group transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#6D242C]" />
                  <span>Conversar de forma confidencial</span>
                  <span className="text-base text-[#6D242C] font-serif italic group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Large Organic Wave returning to Light Theme */}
      <div className="mt-16 sm:mt-24">
        <AsymmetricWaveTransition
          topColor="#2A0E12"
          bottomColor="#FAF7F2"
          variant="dark-to-light"
        />
      </div>
    </section>
  );
};
