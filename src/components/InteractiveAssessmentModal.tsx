import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, MessageCircle, RefreshCw } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';

interface InteractiveAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveAssessmentModal: React.FC<InteractiveAssessmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [focusArea, setFocusArea] = useState<string>('');
  const [mainConcern, setMainConcern] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('');

  if (!isOpen) return null;

  const resetQuiz = () => {
    setStep(1);
    setFocusArea('');
    setMainConcern('');
    setPreferredTime('');
  };

  const getRecommendation = () => {
    if (focusArea === 'Facial' && mainConcern.includes('Flacidez')) {
      return {
        title: 'Fios de Tração & Bioestimulador de Colágeno',
        desc: 'Para sustentação tecidual profunda, efeito lifting sutil e melhora do colágeno sem cirurgia.',
        treatmentTag: 'fios',
      };
    }
    if (focusArea === 'Facial' && (mainConcern.includes('Volume') || mainConcern.includes('Harmonia'))) {
      return {
        title: 'Preenchimento Facial Estruturado & Botox',
        desc: 'Para restaurar contornos, maçãs do rosto, olheiras ou lábios com ácido hialurônico de alta pureza.',
        treatmentTag: 'preenchimento',
      };
    }
    if (focusArea === 'Estética Íntima') {
      return {
        title: 'Protocolo de Estética Íntima Personalizado',
        desc: 'Atendimento privativo e confidencial para volumização, clareamento dérmico ou turgor.',
        treatmentTag: 'intimo',
      };
    }
    if (focusArea === 'Corporal') {
      return {
        title: 'Protocolo Corporal Redutor & Firmador',
        desc: 'Associação tecnológica para flacidez, remodelagem corporal e gordura localizada.',
        treatmentTag: 'corporal',
      };
    }
    return {
      title: 'Avaliação Facial & Corporal Global',
      desc: 'Consulta presencial individualizada com Dr. Deli Brito e Luciana Freire para diagnóstico anatômico.',
      treatmentTag: 'avaliacao-geral',
    };
  };

  const recommendation = getRecommendation();

  const handleFinish = () => {
    const customMessage = `Olá! Realizei o teste de recomendação no site da Beleza Atual:\n- Foco: ${focusArea}\n- Objetivo: ${mainConcern}\n- Horário preferido: ${preferredTime}\n\nIndicação sugerida: *${recommendation.title}*. Gostaria de agendar minha avaliação!`;
    const url = getWhatsAppLink(undefined, customMessage);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2A0E12]/65 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full p-6 sm:p-9 border border-[#E8DCD1] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4EDE4] text-[#2A0E12] flex items-center justify-center hover:bg-[#6D242C] hover:text-[#FAF7F2] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between mb-3 pr-10">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/logo-transparente.webp"
              alt="Beleza Atual"
              className="h-8 w-auto object-contain"
            />
            <div className="h-4 w-px bg-[#E8DCD1]" />
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8F7D73]">
              <Sparkles className="w-3.5 h-3.5 text-[#6D242C]" />
              <span>Orientação Personalizada</span>
            </div>
          </div>
        </div>

        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#2A0E12] mb-1">
          Descubra o tratamento ideal
        </h3>
        <p className="text-xs sm:text-sm text-[#6A5E57] mb-6">
          Responda 3 perguntas rápidas para receber uma indicação inicial antes da sua consulta presencial.
        </p>

        {/* Step Progress */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                step >= i ? 'bg-[#6D242C]' : 'bg-[#E8DCD1]'
              }`}
            />
          ))}
        </div>

        {/* STEP 1: Focus Area */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-sm sm:text-base font-semibold text-[#2A0E12]">
              1. Qual área você gostaria de cuidar no momento?
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: 'Facial', label: 'Rosto (Flacidez, sustentação, rugas, contorno)', sub: 'Fios, preenchimento, botox, bioestimuladores' },
                { id: 'Corporal', label: 'Corpo (Flacidez, gordura localizada, drenagem)', sub: 'Remodelagem corporal e firmeza' },
                { id: 'Estética Íntima', label: 'Estética Íntima (Feminina ou Masculina)', sub: 'Atendimento privativo com sigilo e discrição' },
                { id: 'Global', label: 'Ainda não tenho certeza (Quero avaliação completa)', sub: 'Diagnóstico geral com os profissionais' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setFocusArea(opt.id);
                    setStep(2);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    focusArea === opt.id
                      ? 'border-[#6D242C] bg-[#F4EDE4] text-[#2A0E12]'
                      : 'border-[#E8DCD1] hover:border-[#6D242C] bg-[#FAF7F2] text-[#524741]'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#2A0E12]">{opt.label}</span>
                  <span className="text-[11px] text-[#8F7D73] mt-0.5">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Main Concern */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-sm sm:text-base font-semibold text-[#2A0E12]">
              2. Qual o seu principal objetivo com o procedimento?
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                'Tratar a flacidez e recuperar sustentação natural',
                'Repor volume perdido (maçãs do rosto, lábios, olheiras)',
                'Suavizar linhas de expressão sem perder a naturalidade',
                'Melhora da qualidade dérmica e rejuvenescimento discreto',
                'Cuidado e revitalização estética da região íntima',
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setMainConcern(opt);
                    setStep(3);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    mainConcern === opt
                      ? 'border-[#6D242C] bg-[#F4EDE4] text-[#2A0E12]'
                      : 'border-[#E8DCD1] hover:border-[#6D242C] bg-[#FAF7F2] text-[#524741]'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-medium text-[#2A0E12]">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Preferred Time */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-sm sm:text-base font-semibold text-[#2A0E12]">
              3. Qual o seu período de preferência em São Bernardo do Campo?
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'Manhã (08h às 12h)', label: 'Manhã', sub: '08h às 12h' },
                { id: 'Tarde (13h às 17h)', label: 'Tarde', sub: '13h às 17h' },
                { id: 'Final de Tarde / Noite (17h às 20h)', label: 'Noite', sub: '17h às 20h' },
                { id: 'Sábado (08h às 14h)', label: 'Sábado', sub: '08h às 14h' },
              ].map((time) => (
                <button
                  key={time.id}
                  onClick={() => {
                    setPreferredTime(time.id);
                    setStep(4);
                  }}
                  className="p-4 rounded-2xl border border-[#E8DCD1] hover:border-[#6D242C] bg-[#FAF7F2] text-left hover:bg-[#F4EDE4] transition-all cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#2A0E12] block">{time.label}</span>
                  <span className="text-[11px] text-[#8F7D73]">{time.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Results & WhatsApp Direct Action */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-5 rounded-2xl bg-[#F4EDE4] border border-[#E8DCD1]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6D242C] block mb-1">
                Sugestão Inicial Baseada nas Suas Respostas
              </span>
              <h4 className="font-serif-luxury text-2xl font-medium text-[#2A0E12] mb-2">
                {recommendation.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#5A524D] leading-relaxed">
                {recommendation.desc}
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#6A5E57] bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DCD1]">
              <div><strong>Foco Selecionado:</strong> {focusArea}</div>
              <div><strong>Objetivo:</strong> {mainConcern}</div>
              <div><strong>Previsão de Horário:</strong> {preferredTime}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleFinish}
                className="flex-1 py-4 px-6 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C2A27A]" />
                <span>Agendar com essa Indicação</span>
              </button>

              <button
                onClick={resetQuiz}
                className="py-3 px-4 bg-transparent text-[#8F7D73] hover:text-[#2A0E12] rounded-full text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refazer teste</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
