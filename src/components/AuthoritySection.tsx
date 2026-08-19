import React, { useState } from 'react';
import { Award, ShieldCheck, Check, Sparkles, Plus, GraduationCap } from 'lucide-react';
import { PROFESSIONALS, getWhatsAppLink } from '../data/clinicData';
import { Professional } from '../types';

export const AuthoritySection: React.FC = () => {
  const [selectedProf, setSelectedProf] = useState<Professional | null>(null);

  return (
    <section id="sobre" className="relative py-16 sm:py-24 bg-[#FAF7F2] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6D242C]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73]">
              Corpo Clínico & Responsabilidade Técnica
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-[#2A0E12] leading-tight mb-5">
            Experiência também <br className="hidden sm:inline" />
            <span className="italic font-medium text-[#6D242C]">faz parte do tratamento.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A524D] leading-relaxed">
            Na Beleza Atual, cada indicação começa com uma avaliação cuidadosa e uma conversa sobre o que você realmente busca. Segurança, anatomia aprofundada e olhar estético apurado.
          </p>
        </div>

        {/* Large Integrated Portraits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 mb-16 sm:mb-20">
          
          {PROFESSIONALS.map((prof) => (
            <div
              key={prof.id}
              className="bg-[#F4EDE4] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 border border-[#E8DCD1] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start group"
            >
              {/* Portrait image */}
              <div className="relative w-44 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-[#FAF7F2]">
                <img
                  src={prof.image}
                  alt={`${prof.name} - ${prof.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-[#2A0E12]/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-medium text-[#E8DCD1] border border-[#FAF7F2]/10">
                  {prof.registration}
                </div>
              </div>

              {/* Professional details */}
              <div className="flex-1 flex flex-col justify-between text-center sm:text-left">
                <div>
                  <div className="inline-block text-[11px] font-bold text-[#6D242C] uppercase tracking-wider mb-1">
                    {prof.experience}
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#2A0E12] mb-1">
                    {prof.name}
                  </h3>
                  <p className="text-xs text-[#8F7D73] font-medium mb-4">
                    {prof.title}
                  </p>

                  {/* Specialties List */}
                  <ul className="space-y-2 mb-6 text-xs text-[#524741] text-left">
                    {prof.specialties.slice(0, 3).map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6D242C] shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProf(prof)}
                    className="text-xs font-semibold text-[#6D242C] hover:text-[#44161C] flex items-center gap-1.5 group/btn cursor-pointer py-1"
                  >
                    <span>Ver trajetória e credenciais</span>
                    <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppLink(prof.id === 'deli-brito' ? 'deli-brito' : 'luciana-freire')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:ml-auto px-4 py-2 bg-[#FAF7F2] hover:bg-[#6D242C] text-[#2A0E12] hover:text-[#FAF7F2] border border-[#D8CAC0] hover:border-[#6D242C] rounded-full text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-2xs"
                  >
                    Agendar com {prof.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Numbers & Authority Ribbon */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#E8DCD1] shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DCD1]">
            
            <div className="flex flex-col items-center text-center p-2">
              <span className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#6D242C] leading-none mb-2">
                +10 anos
              </span>
              <span className="text-xs text-[#524741] font-medium tracking-wide">
                De excelência clínica e estudos contínuos
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <span className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#6D242C] leading-none mb-2">
                +5.000
              </span>
              <span className="text-xs text-[#524741] font-medium tracking-wide">
                Atendimentos realizados no ABC Paulista
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <span className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#6D242C] leading-none mb-2">
                100%
              </span>
              <span className="text-xs text-[#524741] font-medium tracking-wide">
                Protocolos com produtos de alta pureza e Anvisa
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <span className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#6D242C] leading-none mb-2">
                99.4%
              </span>
              <span className="text-xs text-[#524741] font-medium tracking-wide">
                Índice de satisfação e recomendação
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Trajectory / Credentials Modal */}
      {selectedProf && (
        <div className="fixed inset-0 z-50 bg-[#2A0E12]/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E8DCD1] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProf(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4EDE4] text-[#2A0E12] flex items-center justify-center hover:bg-[#6D242C] hover:text-[#FAF7F2] transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedProf.image}
                alt={selectedProf.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#6D242C]"
              />
              <div>
                <h4 className="font-serif-luxury text-2xl font-medium text-[#2A0E12]">
                  {selectedProf.name}
                </h4>
                <p className="text-xs text-[#6D242C] font-semibold">
                  {selectedProf.title} • {selectedProf.registration}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5A524D] leading-relaxed mb-6">
              {selectedProf.bio}
            </p>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2A0E12] block mb-3">
                Formação e Qualificações:
              </span>
              <ul className="space-y-2 text-xs text-[#524741]">
                {selectedProf.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-[#6D242C] shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <a
                href={getWhatsAppLink(selectedProf.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-sm"
              >
                Agendar com {selectedProf.name.split(' ')[0]}
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
