import React from 'react';
import { MessageCircle, ArrowDown, UserCheck, Award, Sparkles, Play, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

interface HeroSectionProps {
  onOpenSpaceModal?: () => void;
  onOpenAssessment?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSpaceModal, onOpenAssessment }) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 lg:pt-40 pb-0 bg-gradient-to-b from-[#FAF7F2] via-[#F4EDE4]/60 to-[#EFE7DC]/90 overflow-hidden">
      {/* Subtle organic background glow & accent lines */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#E8DCD1]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#C2A27A]/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-px w-8 bg-[#6D242C]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#6D242C]">
                Estética que acompanha
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#2A0E12] leading-[1.08] tracking-tight mb-6">
              cada fase <br className="hidden sm:inline" />
              <span className="italic font-medium text-[#6D242C]">da sua vida.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#5A524D] font-normal leading-relaxed max-w-xl mb-8">
              Tratamentos faciais, corporais e íntimos com avaliação individualizada, acompanhamento profissional e um olhar cuidadoso para aquilo que faz sentido para você.
            </p>

            {/* 3 Indicators / Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 mb-8 border-y border-[#E2D6C9]/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8DCD1] flex items-center justify-center text-[#6D242C] shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#2A0E12] tracking-wide">
                    Atendimento
                  </span>
                  <span className="text-[11px] text-[#7A6C62]">
                    Individualizado
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8DCD1] flex items-center justify-center text-[#6D242C] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#2A0E12] tracking-wide">
                    Profissionais
                  </span>
                  <span className="text-[11px] text-[#7A6C62]">
                    Qualificados (+10 anos)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8DCD1] flex items-center justify-center text-[#6D242C] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#2A0E12] tracking-wide">
                    Facial • Corporal
                  </span>
                  <span className="text-[11px] text-[#7A6C62]">
                    • Estética Íntima
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-primary-cta"
                href={getWhatsAppLink('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl group transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#C2A27A] transition-transform group-hover:scale-110" />
                <span>Agendar minha avaliação</span>
                <span className="text-xs font-serif italic text-[#C2A27A]">→</span>
              </a>

              <a
                id="hero-secondary-cta"
                href="#tratamentos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-[#E8DCD1]/50 text-[#4A3B32] border border-[#8F7D73]/30 hover:border-[#6D242C] rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300"
              >
                <span>Conhecer tratamentos</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#6D242C]" />
              </a>
            </div>

            {/* Quick Assessment link */}
            {onOpenAssessment && (
              <div className="mt-4 flex items-center gap-2 text-xs text-[#7A6C62]">
                <ShieldCheck className="w-4 h-4 text-[#6D242C]" />
                <span>Dúvida sobre o que fazer?</span>
                <button
                  onClick={onOpenAssessment}
                  className="font-medium text-[#6D242C] underline decoration-[#6D242C]/40 hover:decoration-[#6D242C] cursor-pointer"
                >
                  Faça o teste de recomendação (1 min)
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Architectural Frame Layer Behind */}
            <div className="absolute -top-4 -right-4 w-full h-full max-w-[460px] bg-gradient-to-tr from-[#D8CAC0] to-[#EBE2D7] rounded-[40px] -z-10 opacity-60 border border-[#FAF7F2]" />

            {/* Main Portrait with Clean Luxury Framing */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-[#FAF7F2] bg-[#EFE7DC]">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
                alt="Mulher madura e elegante com pele luminosa e natural - Beleza Atual"
                className="w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-105"
                loading="eager"
              />

              {/* Subtle gradient overlay at bottom of photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E12]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Clinic Space Highlight Badge */}
            <div
              onClick={onOpenSpaceModal}
              className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:left-4 max-w-[270px] sm:max-w-[300px] glass-nav p-3 rounded-2xl border border-[#FAF7F2] shadow-xl flex items-center gap-3 cursor-pointer group hover:bg-[#FAF7F2] transition-all duration-300 transform hover:-translate-y-1 z-20"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E8DCD1]">
                <img
                  src="/assets/recepcao-cba.webp"
                  alt="Clínica Beleza Atual São Bernardo do Campo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2A0E12]/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#FAF7F2]/90 flex items-center justify-center text-[#6D242C]">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-serif-luxury font-medium text-[#2A0E12] leading-snug group-hover:text-[#6D242C] transition-colors">
                  Ambiente moderno, acolhedor e seguro
                </span>
                <span className="text-[10px] text-[#8F7D73] flex items-center gap-1 mt-0.5">
                  <span>São Bernardo do Campo</span>
                  <span className="text-[#6D242C] font-bold">›</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Large Organic Wave Transition to the Next Section (Off-White) */}
      <div className="mt-14 sm:mt-20">
        <AsymmetricWaveTransition
          topColor="#EFE7DC"
          bottomColor="#FAF7F2"
          variant="hero-to-body"
        />
      </div>
    </section>
  );
};
