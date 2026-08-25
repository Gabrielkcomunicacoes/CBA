import React from 'react';
import { MessageSquare, Stethoscope, ClipboardList, Sparkles, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Converse',
      subtitle: 'Primeiro contato acolhedor',
      description: 'Você conversa com nossa equipe no WhatsApp, tira suas primeiras dúvidas e agenda o melhor horário para sua visita.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Avaliação',
      subtitle: 'Diagnóstico individualizado',
      description: 'Realizamos sua avaliação presencial, examinamos sua anatomia, ouvimos sua história e compreendemos seus desejos.',
      icon: Stethoscope,
    },
    {
      number: '03',
      title: 'Planejamento',
      subtitle: 'Indicação sob medida',
      description: 'Montamos sua indicação individualizada com clareza sobre expectativas, valores, técnicas e recuperação.',
      icon: ClipboardList,
    },
    {
      number: '04',
      title: 'Acompanhamento',
      subtitle: 'Cuidado contínuo',
      description: 'Você realiza o procedimento com segurança e recebe suporte, orientações e revisão para acompanhar sua evolução.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="como-funciona" className="relative pt-12 sm:pt-16 pb-0 bg-[#F4EDE4] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 sm:pb-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73] block mb-3">
            Jornada de Cuidado
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E12] leading-tight mb-4">
            Um processo simples, <br />
            pensado <span className="italic font-medium text-[#6D242C]">para você.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A524D]">
            Sem passos burocráticos ou procedimentos desnecessários. Veja como é simples iniciar seu cuidado.
          </p>
        </div>

        {/* 4 Connected Steps Grid with Connecting Line */}
        <div className="relative">
          
          {/* Subtle horizontal undulating line on desktop */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-12 left-16 right-16 h-0.5 border-t-2 border-dashed border-[#6D242C]/20 -z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#E8DCD1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
                >
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4EDE4] text-[#6D242C] flex items-center justify-center border border-[#E8DCD1] group-hover:bg-[#6D242C] group-hover:text-[#FAF7F2] transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <span className="font-serif-luxury text-2xl font-bold text-[#8F7D73]/60 group-hover:text-[#6D242C] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif-luxury text-xl font-medium text-[#2A0E12] mb-1">
                      {step.title}
                    </h3>
                    <div className="text-[11px] text-[#6D242C] font-semibold tracking-wider uppercase mb-3">
                      {step.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#5A524D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step index mini marker */}
                  <div className="mt-6 pt-4 border-t border-[#E8DCD1]/60 flex items-center justify-between text-[10px] text-[#8F7D73] font-medium uppercase tracking-wider">
                    <span>Etapa {idx + 1} de 4</span>
                    <ArrowRight className="w-3 h-3 text-[#6D242C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppLink('como-funciona')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <span>Iniciar no WhatsApp</span>
            <span className="text-xs font-serif italic text-[#C2A27A]">→</span>
          </a>
        </div>

      </div>

      {/* Organic Wave Transition into Facilities (#7D4F43) */}
      <AsymmetricWaveTransition
        topColor="#F4EDE4"
        bottomColor="#7D4F43"
        variant="sand-to-terracotta"
      />
    </section>
  );
};
