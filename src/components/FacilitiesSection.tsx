import React from 'react';
import { Layers, CreditCard, Percent, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilidades" className="relative pt-12 sm:pt-16 pb-0 bg-gradient-to-r from-[#7D4F43] via-[#8C5D50] to-[#6E4237] text-[#FAF7F2] overflow-hidden">
      
      {/* Subtle organic background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2A27A]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2A0E12]/20 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12 sm:pb-16">
        
        {/* Top Header Row with Title & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl text-left">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#E8DCD1] block mb-2">
              Planejamento & Condições
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal leading-snug text-[#FAF7F2]">
              Cuidar de você também pode fazer <br className="hidden sm:inline" />
              parte do <span className="italic font-medium text-[#E8DCD1]">seu planejamento.</span>
            </h3>
          </div>

          <div className="shrink-0">
            <a
              href={getWhatsAppLink('facilidades')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FAF7F2] hover:bg-[#E8DCD1] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#7D4F43]" />
              <span>Consultar condições</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#7D4F43]" />
            </a>
          </div>
        </div>

        {/* 3 Facilities Cards Grid - Responsive, Spacious & Non-Squishing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          
          {/* 1. Combos */}
          <div className="bg-[#FAF7F2]/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#FAF7F2]/15 flex items-center gap-4 hover:bg-[#FAF7F2]/15 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2]/15 flex items-center justify-center text-[#E8DCD1] group-hover:bg-[#FAF7F2] group-hover:text-[#7D4F43] transition-colors shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm sm:text-base font-semibold text-[#FAF7F2] block leading-tight mb-1">
                Pacotes e combos
              </span>
              <p className="text-xs text-[#E8DCD1] leading-relaxed">
                Protocolos combinados e personalizados
              </p>
            </div>
          </div>

          {/* 2. Parcelamento 10x */}
          <div className="bg-[#FAF7F2]/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#FAF7F2]/15 flex items-center gap-4 hover:bg-[#FAF7F2]/15 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2]/15 flex items-center justify-center text-[#E8DCD1] group-hover:bg-[#FAF7F2] group-hover:text-[#7D4F43] transition-colors shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm sm:text-base font-semibold text-[#FAF7F2] block leading-tight mb-1">
                Parcelamento em até 10x
              </span>
              <p className="text-xs text-[#E8DCD1] leading-relaxed">
                Sem juros no cartão de crédito
              </p>
            </div>
          </div>

          {/* 3. Desconto PIX */}
          <div className="bg-[#FAF7F2]/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#FAF7F2]/15 flex items-center gap-4 hover:bg-[#FAF7F2]/15 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2]/15 flex items-center justify-center text-[#E8DCD1] group-hover:bg-[#FAF7F2] group-hover:text-[#7D4F43] transition-colors shrink-0">
              <Percent className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm sm:text-base font-semibold text-[#FAF7F2] block leading-tight mb-1">
                Até 8% de desconto
              </span>
              <p className="text-xs text-[#E8DCD1] leading-relaxed">
                Condição especial para pagamento no PIX
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Organic Wave Transition into Space Section (#FAF7F2) */}
      <AsymmetricWaveTransition
        topColor="#6E4237"
        bottomColor="#FAF7F2"
        variant="terracotta-to-light"
      />
    </section>
  );
};

