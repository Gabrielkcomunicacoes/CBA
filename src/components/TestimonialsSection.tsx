import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS, getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="depoimentos" className="relative pt-12 sm:pt-16 pb-0 bg-[#FAF7F2] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 sm:pb-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73] block mb-3">
            Quem já passou pela Beleza Atual conta como foi
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E12] leading-tight mb-4">
            Mais do que um procedimento, <br />
            uma <span className="italic font-medium text-[#6D242C]">experiência de cuidado.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A524D]">
            Veja depoimentos reais de quem confiou sua saúde e beleza aos nossos especialistas.
          </p>
        </div>

        {/* Testimonials Grid for Desktop & Interactive Carousel for Mobile/Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#F4EDE4] rounded-3xl p-7 sm:p-8 border border-[#E8DCD1] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars & Highlight Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C2A27A]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#8F7D73] uppercase tracking-wider bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#E8DCD1]">
                    {item.treatment}
                  </span>
                </div>

                {/* Highlight Title */}
                <h4 className="font-serif-luxury text-lg sm:text-xl font-medium text-[#2A0E12] mb-3 leading-snug">
                  "{item.highlight}"
                </h4>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#5A524D] leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Patient Badge */}
              <div className="pt-4 border-t border-[#E8DCD1]/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E8DCD1] text-[#6D242C] font-serif-luxury font-bold text-sm flex items-center justify-center border border-[#FAF7F2]">
                    {item.initials}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#2A0E12] block">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-[#8F7D73]">
                      Paciente Verificada • São Bernardo do Campo
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-[#A6978C]">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary strip */}
        <div className="max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4 pb-2">
          <div className="flex items-center gap-2 text-xs text-[#524741]">
            <ShieldCheck className="w-4 h-4 text-[#6D242C]" />
            <span>Avaliações 100% autênticas no Google & WhatsApp</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#524741]">
            <Heart className="w-4 h-4 text-[#6D242C]" />
            <span>Atendimento humanizado e sem pressão</span>
          </div>
        </div>

      </div>

      {/* Organic Wave Transition into How It Works (#F4EDE4) */}
      <AsymmetricWaveTransition
        topColor="#FAF7F2"
        bottomColor="#F4EDE4"
        variant="light-to-sand"
      />
    </section>
  );
};
