import React from 'react';
import { X, Clock, Sparkles, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { TREATMENTS, getWhatsAppLink } from '../data/clinicData';
import { Treatment } from '../types';

interface TreatmentDetailModalProps {
  treatmentId: string | null;
  onClose: () => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatmentId,
  onClose,
}) => {
  if (!treatmentId) return null;

  const treatment = TREATMENTS.find((t) => t.id === treatmentId);
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2A0E12]/65 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full p-6 sm:p-9 border border-[#E8DCD1] shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4EDE4] text-[#2A0E12] flex items-center justify-center hover:bg-[#6D242C] hover:text-[#FAF7F2] transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Image Banner */}
        <div className="relative aspect-[16/8] rounded-2xl overflow-hidden mb-6 border border-[#E8DCD1]">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E12]/70 via-transparent to-transparent" />
          
          <div className="absolute bottom-3 left-4 text-[#FAF7F2]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#C2A27A] text-[#2A0E12] text-[10px] font-bold uppercase tracking-wider">
              {treatment.tag}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#2A0E12] mb-1">
          {treatment.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#6D242C] font-semibold tracking-wide mb-4">
          {treatment.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#5A524D] leading-relaxed mb-6">
          {treatment.description}
        </p>

        {/* Practical info badges */}
        <div className="grid grid-cols-2 gap-3 mb-6 bg-[#F4EDE4] p-4 rounded-2xl border border-[#E8DCD1]">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#6D242C]" />
            <div>
              <span className="text-[10px] text-[#8F7D73] uppercase font-bold block">Duração Estimada</span>
              <span className="text-xs font-semibold text-[#2A0E12]">{treatment.sessionDuration}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#6D242C]" />
            <div>
              <span className="text-[10px] text-[#8F7D73] uppercase font-bold block">Recuperação</span>
              <span className="text-xs font-semibold text-[#2A0E12]">{treatment.recoveryTime}</span>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A0E12] mb-3">
            Principais Benefícios:
          </h4>
          <ul className="space-y-2 text-xs text-[#524741]">
            {treatment.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6D242C] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Indications List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A0E12] mb-2">
            Indicações Mais Comuns:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {treatment.indications.map((ind, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#FAF7F2] border border-[#E8DCD1] rounded-full text-[11px] text-[#6E635C]"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Action */}
        <div className="pt-4 border-t border-[#E8DCD1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#8F7D73] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#6D242C]" />
            <span>Avaliação individualizada presencial em SBC</span>
          </div>

          <a
            href={getWhatsAppLink(treatment.id, `Olá! Gostaria de agendar uma avaliação para o tratamento de ${treatment.title} na Beleza Atual.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#C2A27A]" />
            <span>Agendar Avaliação deste Tratamento</span>
          </a>
        </div>

      </div>
    </div>
  );
};
