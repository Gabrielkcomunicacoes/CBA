import React, { useState, useEffect } from 'react';
import { getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

interface HeroSectionProps {
  onOpenSpaceModal?: () => void;
  onOpenAssessment?: () => void;
}

const HERO_SLIDES = [
  {
    src: '/assets/clinica_interior_1.webp',
    alt: 'Ambiente exclusivo da Clínica Beleza Atual',
  },
  {
    src: '/assets/tratamento_luvas_1.webp',
    alt: 'Tratamento estético facial com luvas e precisão clínica',
  },
  {
    src: '/assets/tratamento_luvas_2.webp',
    alt: 'Cuidado especializado em estética facial e corporal',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAssessment }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D0507]"
    >
      {/* Background Slides with smooth fade and light dimming effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
                isActive
                  ? 'opacity-100 scale-100 brightness-100 z-10'
                  : 'opacity-0 scale-[1.03] brightness-75 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      {/* Dark Shadow Scrim Overlay - 100% sharp images (no blur) with +25% dark depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/85 via-black/62 to-black/80 pointer-events-none" />

      {/* Central Editorial Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-sans tracking-[0.24em] uppercase text-[#E8DCD1] font-medium mb-3 sm:mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          Excelência em Estética
        </p>

        {/* Main Headline - slightly bolder (font-semibold) with crisp contrast */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-semibold text-[#DFBAA9] leading-[1.12] sm:leading-[1.15] tracking-[0.05em] uppercase mb-5 sm:mb-6 max-w-4xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)]">
          REALCE A SUA BELEZA<br className="hidden sm:inline" />
          {' '}NATURAL COM<br className="hidden sm:inline" />
          {' '}SEGURANÇA E<br className="hidden sm:inline" />
          {' '}SOFISTICAÇÃO
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#EDE2D8] font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
          Protocolos exclusivos de harmonização, rejuvenescimento e tratamentos corporais avançados.
        </p>

        {/* Two CTAs matching reference print */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-xl mx-auto">
          {/* Button 1: Solid warm blush/nude */}
          <a
            id="hero-primary-cta"
            href={getWhatsAppLink('hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 bg-[#CCA18F] hover:bg-[#B88E7C] text-[#2A0E12] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 text-center"
          >
            AGENDAR AVALIAÇÃO
          </a>

          {/* Button 2: Outlined translucent */}
          <button
            id="hero-secondary-cta"
            type="button"
            onClick={onOpenAssessment}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 bg-[#180E10]/70 hover:bg-[#CCA18F]/20 text-[#FAF7F2] border border-[#CCA18F]/70 hover:border-[#CCA18F] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer text-center"
          >
            DESCOBRIR MEU TRATAMENTO
          </button>
        </div>

        {/* Carousel Dots navigation */}
        <div className="flex items-center justify-center gap-2.5 mt-10 sm:mt-14">
          {HERO_SLIDES.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para foto ${index + 1}`}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-[#CCA18F] ring-2 ring-[#CCA18F]/40'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/75'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Organic Wave Transition to the Next Section - Hero sits behind the wave */}
      <div className="relative z-10 w-full leading-none -mb-px pointer-events-none">
        <AsymmetricWaveTransition
          bottomColor="#FAF7F2"
          variant="hero-to-body"
        />
      </div>
    </section>
  );
};
