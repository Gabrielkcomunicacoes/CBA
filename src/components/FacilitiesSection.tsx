import React from 'react';
import { Layers, CreditCard, Percent, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilidades" className="relative py-12 sm:py-16 bg-[#8C5D50] text-[#FAF7F2] overflow-hidden">
      
      {/* Subtle organic background patterns */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7D4F43] via-[#8C5D50] to-[#6E4237] opacity-95" />
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#C2A27A]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          
          {/* Left: Heading and concept */}
          <div className="lg:max-w-md text-center lg:text-left">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#E8DCD1] block mb-1">
              Planejamento & Condições
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-[32px] font-normal leading-snug text-[#FAF7F2]">
              Cuidar de você também pode fazer parte do <span className="italic font-medium text-[#E8DCD1]">seu planejamento.</span>
            </h3>
          </div>

          {/* Right: 3 Facilities Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full lg:w-auto flex-1">
            
            {/* 1. Combos */}
            <div className="bg-[#FAF7F2]/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#FAF7F2]/15 flex items-center gap-3.5 hover:bg-[#FAF7F2]/15 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2]/15 flex items-center justify-center text-[#E8DCD1] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-[#FAF7F2] block leading-tight">
                  Pacotes & Combos
                </span>
                <span className="text-[11px] text-[#E8DCD1]">
                  Protocolos combinados sob medida
                </span>
              </div>
            </div>

            {/* 2. Parcelamento 10x */}
            <div className="bg-[#FAF7F2]/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#FAF7F2]/15 flex items-center gap-3.5 hover:bg-[#FAF7F2]/15 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2]/15 flex items-center justify-center text-[#E8DCD1] shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-[#FAF7F2] block leading-tight">
                  Parcelamento
                </span>
                <span className="text-[11px] text-[#E8DCD1]">
                  Em até 10x sem juros no cartão
                </span>
              </div>
            </div>

            {/* 3. Desconto PIX */}
            <div className="bg-[#FAF7F2]/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#FAF7F2]/15 flex items-center gap-3.5 hover:bg-[#FAF7F2]/15 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2]/15 flex items-center justify-center text-[#E8DCD1] shrink-0">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-[#FAF7F2] block leading-tight">
                  Até 8% no PIX
                </span>
                <span className="text-[11px] text-[#E8DCD1]">
                  Condição especial para pagamento à vista
                </span>
              </div>
            </div>

          </div>

          {/* Quick WhatsApp Link */}
          <div className="shrink-0">
            <a
              href={getWhatsAppLink('facilidades')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF7F2] hover:bg-[#E8DCD1] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Consultar condições</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
