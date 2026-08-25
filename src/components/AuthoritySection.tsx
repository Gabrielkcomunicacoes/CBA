import React, { useState } from 'react';
import { Award, ShieldCheck, Sparkles, Plus, GraduationCap, UserCheck, Instagram, ArrowRight } from 'lucide-react';
import { PROFESSIONALS, getWhatsAppLink } from '../data/clinicData';
import { Professional } from '../types';
import { AsymmetricWaveTransition } from './OrganicWaves';

export const AuthoritySection: React.FC = () => {
  const [selectedProf, setSelectedProf] = useState<Professional | null>(null);

  return (
    <section id="sobre" className="relative pt-16 sm:pt-24 pb-0 bg-[#FAF7F2] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 sm:pb-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6D242C]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73]">
              Corpo Clínico & Responsabilidade Técnica
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-[#2A0E12] leading-tight mb-4">
            Experiência também <br className="hidden sm:inline" />
            <span className="italic font-medium text-[#6D242C]">faz parte do tratamento.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A524D] leading-relaxed">
            Na Beleza Atual, cada indicação começa com uma avaliação cuidadosa e uma conversa sobre o que você realmente busca. Segurança, ciência da pele e olhar estético apurado.
          </p>
        </div>

        {/* Highlighted Master Card for Dr. Deli Brito (RT) */}
        {PROFESSIONALS.filter(p => p.id === 'deli-brito').map((prof) => (
          <div
            key={prof.id}
            className="mb-14 bg-[#1A0B0E] text-[#FAF7F2] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 border border-[#C2A27A]/30 shadow-2xl relative overflow-hidden group"
          >
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6D242C]/40 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C2A27A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Photo Column (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl sm:rounded-[28px] overflow-hidden shadow-2xl border-2 border-[#C2A27A]/40 group-hover:border-[#C2A27A] transition-all duration-500">
                  <img
                    src={prof.image}
                    alt={`${prof.name} - ${prof.title}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Discreet registration tag */}
                  <div className="absolute top-3 left-3 bg-[#1A0B0E]/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#E8DCD1] border border-[#C2A27A]/30">
                    {prof.registration}
                  </div>
                </div>
              </div>

              {/* Info Column (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Eyebrow */}
                  <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#D29B85] block mb-2">
                    {prof.badge || 'RT | RESPONSÁVEL TÉCNICO'}
                  </span>

                  {/* Name */}
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FAF7F2] mb-4 leading-tight">
                    {prof.name}
                  </h3>

                  {/* Bio with bold highlight */}
                  <p className="text-sm sm:text-base text-[#D8CAC0] leading-relaxed mb-6">
                    Com <strong className="text-[#FAF7F2] font-semibold">20 anos de atuação</strong> na estética avançada, possui estudos aprofundados sobre o maior órgão do corpo humano: a pele. Seu trabalho é pautado na ciência, segurança e ética. Além de sua excelência clínica, exerce atividade docente em pós-graduações, capacitando diversos profissionais da saúde por todo o Brasil.
                  </p>

                  {/* Instagram Link */}
                  {prof.instagram && (
                    <div className="mb-8">
                      <a
                        href={prof.instagramUrl || `https://instagram.com/${prof.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D29B85] hover:text-[#FAF7F2] transition-colors group/insta"
                      >
                        <Instagram className="w-4 h-4 text-[#D29B85] group-hover/insta:scale-110 transition-transform" />
                        <span>Acompanhe no Instagram: <strong>{prof.instagram}</strong></span>
                      </a>
                    </div>
                  )}

                  {/* 3 Credential Badges */}
                  <div className="space-y-4 pt-2 border-t border-[#FAF7F2]/10">
                    
                    {/* Badge 1: Farmacêutico Esteta */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#D29B85]/20 text-[#D29B85] flex items-center justify-center shrink-0 mt-0.5 border border-[#D29B85]/30">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FAF7F2]">
                          FARMACÊUTICO ESTETA
                        </h4>
                        <p className="text-xs text-[#C4B5A8] mt-0.5">
                          {prof.registration}
                        </p>
                      </div>
                    </div>

                    {/* Badge 2: Especialidades (RQEs) */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#D29B85]/20 text-[#D29B85] flex items-center justify-center shrink-0 mt-0.5 border border-[#D29B85]/30">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FAF7F2]">
                          ESPECIALIDADES (RQEs)
                        </h4>
                        <p className="text-xs text-[#C4B5A8] mt-0.5">
                          Estética: 7629-54 &nbsp;•&nbsp; Tricologia: 11810-92
                        </p>
                      </div>
                    </div>

                    {/* Badge 3: Formação Acadêmica */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#D29B85]/20 text-[#D29B85] flex items-center justify-center shrink-0 mt-0.5 border border-[#D29B85]/30">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FAF7F2]">
                          FORMAÇÃO ACADÊMICA
                        </h4>
                        <p className="text-xs text-[#C4B5A8] mt-0.5">
                          Mestre em Nanotecnologia | Professor Docente <br />
                          Graduando em Odontologia
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-[#FAF7F2]/10">
                  <a
                    href={getWhatsAppLink('deli-brito')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#FAF7F2] hover:bg-[#D29B85] text-[#1A0B0E] rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Agendar com Dr. Deli Brito</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedProf(prof)}
                    className="text-xs text-[#D8CAC0] hover:text-[#FAF7F2] font-medium transition-colors flex items-center gap-1.5 cursor-pointer py-2"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Ver detalhes completos</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        ))}

        {/* Secondary Professional Card: Luciana Freire */}
        {PROFESSIONALS.filter(p => p.id === 'luciana-freire').map((prof) => (
          <div
            key={prof.id}
            className="mb-16 bg-[#F4EDE4] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 border border-[#E8DCD1] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start group"
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
                <p className="text-xs text-[#8F7D73] font-medium mb-3">
                  {prof.title} • {prof.registration}
                </p>

                <p className="text-xs sm:text-sm text-[#5A524D] leading-relaxed mb-4">
                  {prof.bio}
                </p>

                {/* Specialties List */}
                <ul className="space-y-1.5 mb-6 text-xs text-[#524741] text-left">
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
                  <span>Ver trajetória completa</span>
                  <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform" />
                </button>

                <a
                  href={getWhatsAppLink('luciana-freire')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:ml-auto px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#6D242C] text-[#2A0E12] hover:text-[#FAF7F2] border border-[#D8CAC0] hover:border-[#6D242C] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs"
                >
                  Agendar com Luciana
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Numbers & Authority Ribbon */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#E8DCD1] shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DCD1]">
            
            <div className="flex flex-col items-center text-center p-2">
              <span className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#6D242C] leading-none mb-2">
                20 anos
              </span>
              <span className="text-xs text-[#524741] font-medium tracking-wide">
                De atuação na estética avançada e docência
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
                Protocolos baseados em ciência, segurança e Anvisa
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
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4EDE4] text-[#2A0E12] flex items-center justify-center hover:bg-[#6D242C] hover:text-[#FAF7F2] transition-colors cursor-pointer"
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
                Qualificações & Registros:
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

      {/* Organic Wave Transition into Results (#F4EDE4) */}
      <AsymmetricWaveTransition
        topColor="#FAF7F2"
        bottomColor="#F4EDE4"
        variant="light-to-sand"
      />
    </section>
  );
};

