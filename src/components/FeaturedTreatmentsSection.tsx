import React from 'react';
import { MessageCircle, Check, Sparkles, ArrowRight, ShieldCheck, User } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';
import { Treatment } from '../types';

interface FeaturedTreatmentsSectionProps {
  onOpenTreatmentModal: (treatmentId: string) => void;
}

export const FeaturedTreatmentsSection: React.FC<FeaturedTreatmentsSectionProps> = ({
  onOpenTreatmentModal,
}) => {
  return (
    <section id="tratamentos" className="relative pt-8 pb-20 sm:pb-32 bg-[#2A0E12] text-[#FAF7F2] overflow-hidden">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#6D242C]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C2A27A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#FAF7F2]/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C2A27A]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#C2A27A]">
                Procedimentos de Alta Precisão
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-[#FAF7F2] leading-tight">
              Tratamentos pensados para <br className="hidden sm:inline" />
              <span className="italic font-medium text-[#C2A27A]">diferentes momentos.</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start md:items-end text-left md:text-right gap-4">
            <p className="text-sm text-[#D8CAC0] leading-relaxed">
              Cada indicação é feita após avaliação individualizada, considerando suas necessidades, estilo de vida e objetivos estéticos.
            </p>
            <a
              href={getWhatsAppLink('tratamentos-destaque')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#FAF7F2] hover:bg-[#C2A27A] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <span>Agendar Avaliação</span>
              <MessageCircle className="w-4 h-4 text-[#6D242C]" />
            </a>
          </div>
        </div>

        {/* Alternated Editorial Compositions */}
        <div className="space-y-16 sm:space-y-24">
          
          {/* 01: FIOS DE TRAÇÃO (Image Left, Content Right) */}
          <div className="relative group">
            {/* Big Editorial Number in Background */}
            <div className="absolute -top-10 -left-6 sm:-left-10 text-[100px] sm:text-[140px] font-serif-luxury text-[#FAF7F2]/5 select-none pointer-events-none font-bold leading-none">
              01
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10 bg-[#351217]/70 p-6 sm:p-10 rounded-3xl border border-[#FAF7F2]/10 backdrop-blur-xs hover:border-[#C2A27A]/30 transition-all duration-500">
              {/* Left: Image with organic rounded corners */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-[#FAF7F2]/15">
                  <img
                    src="/assets/1.webp"
                    alt="Fios de Tração e Rejuvenescimento Facial - Beleza Atual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#2A0E12]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#C2A27A] uppercase tracking-wider border border-[#FAF7F2]/10">
                    Lifting Sem Cortes
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-sans text-[#C2A27A] font-semibold tracking-widest uppercase mb-1">
                    Procedimento 01
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FAF7F2] mb-3">
                    Fios de Tração & Sustentação Facial
                  </h3>
                  <p className="text-sm sm:text-base text-[#D8CAC0] mb-6 leading-relaxed">
                    Uma possibilidade para quem busca tratar a flacidez, reposicionar tecidos e melhorar os contornos faciais sem a necessidade de intervenções cirúrgicas agressivas.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Efeito lifting imediato e progressivo</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Bioestímulo intenso de colágeno</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Preserva sua mímica natural</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Recuperação rápida e confortável</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={getWhatsAppLink('fios')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#C2A27A] hover:bg-[#FAF7F2] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300"
                  >
                    <span>Entender se é indicado para mim</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenTreatmentModal('fios-tracao')}
                    className="px-5 py-3 bg-transparent hover:bg-[#FAF7F2]/10 text-[#FAF7F2] border border-[#FAF7F2]/20 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Saber detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 02: PREENCHIMENTO FACIAL (Content Left, Image Right) */}
          <div className="relative group">
            {/* Big Editorial Number in Background */}
            <div className="absolute -top-10 -right-6 sm:-right-10 text-[100px] sm:text-[140px] font-serif-luxury text-[#FAF7F2]/5 select-none pointer-events-none font-bold leading-none text-right">
              02
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10 bg-[#351217]/70 p-6 sm:p-10 rounded-3xl border border-[#FAF7F2]/10 backdrop-blur-xs hover:border-[#C2A27A]/30 transition-all duration-500">
              
              {/* Left: Content */}
              <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <div className="text-xs font-sans text-[#C2A27A] font-semibold tracking-widest uppercase mb-1">
                    Procedimento 02
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FAF7F2] mb-3">
                    Preenchimento Facial Estruturado
                  </h3>
                  <p className="text-sm sm:text-base text-[#D8CAC0] mb-6 leading-relaxed">
                    Planejamento individualizado para diferentes objetivos estéticos. Devolve a sustentação, repõe volumes perdidos com o tempo e harmoniza os traços sem artificialidade.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Malar, olheiras e têmporas</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Lábios elegantes e hidratados</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Contorno de mandíbula e queixo</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Ácido Hialurônico de alta pureza</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={getWhatsAppLink('preenchimento')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#C2A27A] hover:bg-[#FAF7F2] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300"
                  >
                    <span>Entender se é indicado para mim</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenTreatmentModal('preenchimento-facial')}
                    className="px-5 py-3 bg-transparent hover:bg-[#FAF7F2]/10 text-[#FAF7F2] border border-[#FAF7F2]/20 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Saber detalhes
                  </button>
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:col-span-5 relative order-1 lg:order-2">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-[#FAF7F2]/15">
                  <img
                    src="/assets/2.webp"
                    alt="Preenchimento e Harmonização Facial - Beleza Atual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#2A0E12]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#C2A27A] uppercase tracking-wider border border-[#FAF7F2]/10">
                    Harmonização Elegante
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 03: ESTÉTICA ÍNTIMA (Large Editorial Banner with Overlaid Content) */}
          <div className="relative group">
            {/* Big Editorial Number in Background */}
            <div className="absolute -top-10 -left-6 sm:-left-10 text-[100px] sm:text-[140px] font-serif-luxury text-[#FAF7F2]/5 select-none pointer-events-none font-bold leading-none">
              03
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-[#FAF7F2]/15 shadow-2xl">
              {/* Background Atmospheric Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/3.webp"
                  alt="Estética Íntima com Privacidade - Beleza Atual"
                  className="w-full h-full object-cover object-center transform scale-105 filter brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A0E12] via-[#2A0E12]/90 to-[#2A0E12]/75" />
              </div>

              {/* Overlaid Editorial Content */}
              <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#FAF7F2]/15 text-[#C2A27A] text-[11px] font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Sigilo • Segurança • Conforto</span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FAF7F2] mb-4">
                    Estética Íntima Avançada (Feminina e Masculina)
                  </h3>

                  <p className="text-sm sm:text-base text-[#D8CAC0] mb-6 leading-relaxed max-w-2xl">
                    Tratamentos íntimos realizados com discrição, conforto e acompanhamento profissional qualificado. Procedimentos que restauram a vitalidade tecidual, a autoestima e a segurança pessoal.
                  </p>

                  <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#E8DCD1] mb-8">
                    <span>• Preenchimento e volumização íntima</span>
                    <span>• Clareamento e uniformização dérmica</span>
                    <span>• Bioestímulo e rejuvenescimento</span>
                    <span>• Atendimento em consultório privativo</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={getWhatsAppLink('intimo')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 bg-[#FAF7F2] hover:bg-[#C2A27A] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 text-[#6D242C]" />
                      <span>Falar de forma confidencial</span>
                    </a>

                    <button
                      onClick={() => onOpenTreatmentModal('estetica-intima')}
                      className="px-5 py-3.5 bg-transparent hover:bg-[#FAF7F2]/10 text-[#FAF7F2] border border-[#FAF7F2]/20 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 04: ESTÉTICA MASCULINA (Image Left, Content Right) */}
          <div className="relative group">
            {/* Big Editorial Number in Background */}
            <div className="absolute -top-10 -right-6 sm:-right-10 text-[100px] sm:text-[140px] font-serif-luxury text-[#FAF7F2]/5 select-none pointer-events-none font-bold leading-none text-right">
              04
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10 bg-[#351217]/70 p-6 sm:p-10 rounded-3xl border border-[#FAF7F2]/10 backdrop-blur-xs hover:border-[#C2A27A]/30 transition-all duration-500">
              {/* Left: Image with organic rounded corners */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-[#FAF7F2]/15">
                  <img
                    src="/assets/4.webp"
                    alt="Estética Masculina Personalizada - Beleza Atual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#2A0E12]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#C2A27A] uppercase tracking-wider border border-[#FAF7F2]/10 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#C2A27A]" />
                    Anatomia Masculina
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-sans text-[#C2A27A] font-semibold tracking-widest uppercase mb-1">
                    Procedimento 04
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FAF7F2] mb-3">
                    Estética Masculina Personalizada
                  </h3>
                  <p className="text-sm sm:text-base text-[#D8CAC0] mb-6 leading-relaxed">
                    Planejamento exclusivo respeitando a estrutura óssea e as características da pele masculina. Resultados que valorizam os contornos sem exageros ou descaracterização dos traços.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Definição de mandíbula e queixo</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Suavização de linhas sem congelar</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Bioestímulo e firmeza da pele</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Protocolos íntimos e sigilo total</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={getWhatsAppLink('masculino')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#C2A27A] hover:bg-[#FAF7F2] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300 shadow-md"
                  >
                    <span>Agendar avaliação masculina</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenTreatmentModal('estetica-masculina')}
                    className="px-5 py-3 bg-transparent hover:bg-[#FAF7F2]/10 text-[#FAF7F2] border border-[#FAF7F2]/20 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Saber detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 05: BIOESTIMULADORES DE COLÁGENO (Content Left, Image Right) */}
          <div className="relative group">
            {/* Big Editorial Number in Background */}
            <div className="absolute -top-10 -left-6 sm:-left-10 text-[100px] sm:text-[140px] font-serif-luxury text-[#FAF7F2]/5 select-none pointer-events-none font-bold leading-none">
              05
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10 bg-[#351217]/70 p-6 sm:p-10 rounded-3xl border border-[#FAF7F2]/10 backdrop-blur-xs hover:border-[#C2A27A]/30 transition-all duration-500">
              {/* Left: Content */}
              <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <div className="text-xs font-sans text-[#C2A27A] font-semibold tracking-widest uppercase mb-1">
                    Procedimento 05
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FAF7F2] mb-3">
                    Bioestimuladores de Colágeno
                  </h3>
                  <p className="text-sm sm:text-base text-[#D8CAC0] mb-6 leading-relaxed">
                    Estimulação biológica profunda que recupera a densidade, a elasticidade e o viço natural da pele com elegância, sem alterar seus volumes ou traços de forma artificial.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Pele visivelmente mais firme e luminosa</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Bioestímulo celular contínuo e gradual</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Preserva a autenticidade da sua expressão</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                      <span className="w-4 h-4 rounded-full bg-[#C2A27A]/20 flex items-center justify-center text-[#C2A27A] shrink-0">✓</span>
                      <span>Rosto, pescoço e colo revitalizados</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={getWhatsAppLink('bioestimulador')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#C2A27A] hover:bg-[#FAF7F2] text-[#2A0E12] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300 shadow-md"
                  >
                    <span>Entender se é indicado para mim</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenTreatmentModal('bioestimuladores')}
                    className="px-5 py-3 bg-transparent hover:bg-[#FAF7F2]/10 text-[#FAF7F2] border border-[#FAF7F2]/20 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Saber detalhes
                  </button>
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:col-span-5 relative order-1 lg:order-2">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-[#FAF7F2]/15">
                  <img
                    src="/assets/5.webp"
                    alt="Bioestimuladores de Colágeno e Rejuvenescimento - Beleza Atual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#2A0E12]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#C2A27A] uppercase tracking-wider border border-[#FAF7F2]/10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C2A27A]" />
                    Estímulo de Colágeno
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
