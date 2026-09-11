import React, { useState } from 'react';
import { Sparkles, ArrowRight, Shield, Heart, User } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

interface CategoriesSectionProps {
  onSelectCategory?: (category: 'facial' | 'corporal' | 'intimo' | 'masculino') => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="relative pt-12 sm:pt-16 pb-0 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73] block mb-3">
            Escolha o seu foco de cuidado
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E12] leading-tight">
            Por onde você gostaria de <br />
            <span className="italic font-medium text-[#6D242C]">começar?</span>
          </h2>
        </div>

        {/* 4 Pillars Grid: Facial, Corporal, Estética Íntima, Estética Masculina */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* 1. FACIAL */}
          <div className="group relative bg-[#F4EDE4] rounded-3xl overflow-hidden border border-[#E8DCD1] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500">
            {/* Top image */}
            <div className="relative h-60 sm:h-64 overflow-hidden">
              <img
                src="/assets/harmonizacao-facial.webp"
                alt="Tratamentos Faciais e Harmonização - Beleza Atual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4EDE4] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2]/90 backdrop-blur-md text-[#6D242C] rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3 h-3" />
                  Facial
                </span>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#2A0E12] mb-2">
                  Facial
                </h3>
                <p className="text-xs sm:text-sm text-[#6A5E57] mb-4 leading-relaxed">
                  Mais firmeza, equilíbrio e cuidado com os sinais do tempo, preservando a sua naturalidade.
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-[#524741]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D242C]" />
                    <span>Fios de tração & sustentação</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D242C]" />
                    <span>Preenchimento & harmonização</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D242C]" />
                    <span>Suavização de linhas de expressão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D242C]" />
                    <span>Bioestimuladores de colágeno</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D242C]" />
                    <span>Peelings e revitalização</span>
                  </li>
                </ul>
              </div>

              {/* Action */}
              <a
                href={getWhatsAppLink('facial')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-[#6D242C] text-[#2A0E12] hover:text-[#FAF7F2] border border-[#D8CAC0] hover:border-[#6D242C] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
              >
                <span>Conhecer tratamentos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. ESTÉTICA ÍNTIMA (Contrasting Dark Wine Luxury Block) */}
          <div className="group relative bg-gradient-to-b from-[#3E1418] to-[#250C0F] text-[#FAF7F2] rounded-3xl overflow-hidden border border-[#5A1E24] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Top image */}
            <div className="relative h-60 sm:h-64 overflow-hidden">
              <img
                src="/assets/estetica-intima.webp"
                alt="Estética Íntima com Privacidade - Beleza Atual"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E1418] via-[#3E1418]/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2]/15 backdrop-blur-md text-[#E8DCD1] border border-[#FAF7F2]/20 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  <Shield className="w-3 h-3 text-[#C2A27A]" />
                  Privacidade Total
                </span>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#FAF7F2] mb-2">
                  Estética Íntima
                </h3>
                <p className="text-xs sm:text-sm text-[#D8CAC0] mb-4 leading-relaxed">
                  Cuidado íntimo feminino e masculino com máxima privacidade, discrição e acolhimento individualizado.
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-[#E8DCD1]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Preenchimento e volumização</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Clareamento íntimo seguro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Bioestímulo e melhora de turgor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Consultório 100% privativo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Sigilo absoluto e ética</span>
                  </li>
                </ul>
              </div>

              {/* Action */}
              <a
                href={getWhatsAppLink('intimo')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-[#C2A27A] text-[#2A0E12] hover:text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                <span>Conversar com discrição</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3. CORPORAL */}
          <div className="group relative bg-[#F4EDE4] rounded-3xl overflow-hidden border border-[#E8DCD1] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500">
            {/* Top image */}
            <div className="relative h-60 sm:h-64 overflow-hidden">
              <img
                src="/assets/estetica-corporal.webp"
                alt="Tratamentos de Estética Corporal - Beleza Atual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4EDE4] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2]/90 backdrop-blur-md text-[#B26450] rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  <Heart className="w-3 h-3" />
                  Corporal
                </span>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#2A0E12] mb-2">
                  Corporal
                </h3>
                <p className="text-xs sm:text-sm text-[#6A5E57] mb-4 leading-relaxed">
                  Protocolos pensados para diferentes necessidades do corpo, remodelagem e bem-estar.
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-[#524741]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B26450]" />
                    <span>Tratamento para flacidez</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B26450]" />
                    <span>Redução de gordura localizada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B26450]" />
                    <span>Drenagem pós & relaxamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B26450]" />
                    <span>Massagem e radiofrequência</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B26450]" />
                    <span>Contorno e tônus corporal</span>
                  </li>
                </ul>
              </div>

              {/* Action */}
              <a
                href={getWhatsAppLink('corporal')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-[#B26450] text-[#2A0E12] hover:text-[#FAF7F2] border border-[#D8CAC0] hover:border-[#B26450] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
              >
                <span>Conhecer tratamentos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4. ESTÉTICA MASCULINA (Contrasting Dark Charcoal/Bronze Luxury Block) */}
          <div className="group relative bg-gradient-to-b from-[#2D2321] to-[#1C1513] text-[#FAF7F2] rounded-3xl overflow-hidden border border-[#52413A] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Top image */}
            <div className="relative h-60 sm:h-64 overflow-hidden">
              <img
                src="/assets/estetica-masculina.webp"
                alt="Estética Masculina Personalizada - Beleza Atual"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321] via-[#2D2321]/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2]/15 backdrop-blur-md text-[#E8DCD1] border border-[#FAF7F2]/20 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  <User className="w-3 h-3 text-[#C2A27A]" />
                  Foco Masculino
                </span>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#FAF7F2] mb-2">
                  Estética Masculina
                </h3>
                <p className="text-xs sm:text-sm text-[#D8CAC0] mb-4 leading-relaxed">
                  Protocolos pensados sob medida para a anatomia e pele masculina, valorizando traços autênticos e discretos.
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-[#E8DCD1]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Definição de mandíbula & queixo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Suavização de linhas e bioestimuladores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Olheiras e rejuvenescimento facial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Protocolos íntimos masculinos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A27A]" />
                    <span>Atendimento com total privacidade</span>
                  </li>
                </ul>
              </div>

              {/* Action */}
              <a
                href={getWhatsAppLink('masculino')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#C2A27A] hover:bg-[#FAF7F2] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                <span>Conhecer protocolos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Large Organic Wave entering the Wine / Deep section */}
      <div className="mt-16 sm:mt-24">
        <AsymmetricWaveTransition
          topColor="#FAF7F2"
          bottomColor="#2A0E12"
          variant="body-to-dark"
        />
      </div>
    </section>
  );
};
