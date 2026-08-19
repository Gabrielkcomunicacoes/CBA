import React, { useState } from 'react';
import { X, MapPin, Navigation, Car, Copy, Check, ExternalLink, Clock } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Rua Jurubatuba 1350 Sao Bernardo do Campo')}`;
  const uberUrl = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(CLINIC_INFO.fullAddress)}`;

  return (
    <div className="fixed inset-0 z-50 bg-[#2A0E12]/65 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E8DCD1] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4EDE4] text-[#2A0E12] flex items-center justify-center hover:bg-[#6D242C] hover:text-[#FAF7F2] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2 text-[#6D242C]">
          <MapPin className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Como Chegar</span>
        </div>

        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#2A0E12] mb-1">
          Beleza Atual Clínica de Estética
        </h3>
        
        <p className="text-xs sm:text-sm text-[#5A524D] mb-6">
          Localizada no Centro de São Bernardo do Campo com total conveniência, segurança e manobrista.
        </p>

        {/* Address Box */}
        <div className="p-4 rounded-2xl bg-[#F4EDE4] border border-[#E8DCD1] mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8F7D73] block mb-1">
            Endereço Completo:
          </span>
          <p className="text-xs sm:text-sm font-semibold text-[#2A0E12] leading-snug mb-3">
            {CLINIC_INFO.fullAddress}
          </p>

          <button
            onClick={copyAddress}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#E8DCD1] text-[#6D242C] border border-[#D8CAC0] rounded-lg text-xs font-medium transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Endereço copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar endereço</span>
              </>
            )}
          </button>
        </div>

        {/* Navigation Apps Grid */}
        <div className="space-y-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2A0E12] block">
            Abrir direto no seu aplicativo favorito:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Google Maps */}
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#FAF7F2] hover:bg-[#6D242C] hover:text-[#FAF7F2] border border-[#E8DCD1] rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold text-[#2A0E12] transition-colors shadow-2xs group"
            >
              <Navigation className="w-4 h-4 text-[#6D242C] group-hover:text-[#FAF7F2]" />
              <span>Google Maps</span>
            </a>

            {/* Waze */}
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#FAF7F2] hover:bg-[#6D242C] hover:text-[#FAF7F2] border border-[#E8DCD1] rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold text-[#2A0E12] transition-colors shadow-2xs group"
            >
              <Car className="w-4 h-4 text-[#6D242C] group-hover:text-[#FAF7F2]" />
              <span>Waze</span>
            </a>

            {/* Uber */}
            <a
              href={uberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#FAF7F2] hover:bg-[#6D242C] hover:text-[#FAF7F2] border border-[#E8DCD1] rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold text-[#2A0E12] transition-colors shadow-2xs group"
            >
              <ExternalLink className="w-4 h-4 text-[#6D242C] group-hover:text-[#FAF7F2]" />
              <span>Pedir Uber</span>
            </a>
          </div>
        </div>

        {/* Operating Hours Info */}
        <div className="flex items-center gap-2 text-xs text-[#7A6C62] pt-2 border-t border-[#E8DCD1]">
          <Clock className="w-3.5 h-3.5 text-[#6D242C]" />
          <span>{CLINIC_INFO.hours}</span>
        </div>

      </div>
    </div>
  );
};
