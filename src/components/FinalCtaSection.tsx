import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { getWhatsAppLink, CLINIC_INFO } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

interface FinalCtaSectionProps {
  onOpenAssessment: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenAssessment }) => {
  return (
    <section id="contato" className="relative pt-0 pb-20 sm:pb-28 bg-[#2A0E12] text-[#FAF7F2] overflow-hidden">
      
      {/* Wave Transition into Dark Wine */}
      <AsymmetricWaveTransition
        topColor="#F4EDE4"
        bottomColor="#2A0E12"
        variant="body-to-dark"
      />

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#6D242C]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C2A27A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C2A27A]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#C2A27A]">
                Comece pelo cuidado
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal leading-[1.15] text-[#FAF7F2] mb-6">
              O primeiro passo não precisa ser escolher um procedimento. <br />
              <span className="italic font-medium text-[#C2A27A]">Pode ser simplesmente conversar.</span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#D8CAC0] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Nossa equipe pode ajudar você a entender quais possibilidades fazem sentido para o que deseja cuidar, com avaliação individualizada e sem compromisso.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                id="final-cta-whatsapp"
                href={getWhatsAppLink('final-cta')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#FAF7F2] hover:bg-[#C2A27A] text-[#2A0E12] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl group transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#6D242C]" />
                <span>Agendar minha avaliação</span>
                <span className="text-sm font-serif italic text-[#6D242C] group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <button
                onClick={onOpenAssessment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent hover:bg-[#FAF7F2]/10 text-[#FAF7F2] border border-[#FAF7F2]/25 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C2A27A]" />
                <span>Descobrir tratamento ideal</span>
              </button>
            </div>

            {/* Reassurance pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#E8DCD1]/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C2A27A]" />
                Avaliação presencial em SBC
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C2A27A]" />
                Atendimento humanizado
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                Até 10x sem juros ou 8% PIX
              </span>
            </div>

          </div>

          {/* Right: Soft Circular Portrait Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-square rounded-full p-3 border border-[#C2A27A]/30">
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-[#3A1419]">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                  alt="Clínica Beleza Atual - Agendamento de Avaliação"
                  className="w-full h-full object-cover transform scale-105"
                  loading="lazy"
                />
              </div>

              {/* Floating CBA Logo & clinic badge */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-[#FAF7F2] text-[#2A0E12] p-3 sm:p-3.5 rounded-2xl shadow-2xl border border-[#E8DCD1] flex items-center gap-3.5 max-w-[270px]">
                <div className="w-12 h-12 rounded-xl bg-[#2A0E12] p-1.5 flex items-center justify-center shrink-0 border border-[#C2A27A]/40 shadow-sm">
                  <img
                    src="/assets/logo-transparente.webp"
                    alt="Logo CBA - Clínica Beleza Atual"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif-luxury text-sm font-semibold text-[#2A0E12] leading-none">
                    Clínica Beleza Atual
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#6D242C] mt-1">
                    CBA • São Bernardo do Campo
                  </span>
                  <p className="text-[10px] text-[#5A524D] italic mt-0.5 leading-tight">
                    "Um olhar cuidadoso para quem você é."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
