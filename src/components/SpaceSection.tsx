import React from 'react';
import { MapPin, Navigation, Clock, Car, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PHOTOS, getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

interface SpaceSectionProps {
  onOpenDirections: () => void;
}

export const SpaceSection: React.FC<SpaceSectionProps> = ({ onOpenDirections }) => {
  return (
    <section id="espaco" className="relative pt-16 sm:pt-24 pb-0 bg-[#FAF7F2] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 sm:pb-24">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-18">
          <div className="lg:col-span-8">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73] block mb-3">
              Estrutura & Localização em São Bernardo do Campo
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E12] leading-tight">
              Um ambiente preparado para você se sentir bem <br className="hidden sm:inline" />
              <span className="italic font-medium text-[#6D242C]">desde o primeiro momento.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <p className="text-sm text-[#5A524D] leading-relaxed">
              Espaço planejado com sofisticação, conforto térmico, sonorização relaxante e máxima biossegurança.
            </p>
            <button
              onClick={onOpenDirections}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4EDE4] hover:bg-[#6D242C] text-[#2A0E12] hover:text-[#FAF7F2] border border-[#E8DCD1] hover:border-[#6D242C] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Como chegar na clínica</span>
            </button>
          </div>
        </div>

        {/* Editorial Photo Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-14">
          
          {/* Main Large Photo (7 cols) */}
          <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden shadow-md border-2 border-[#FAF7F2]">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
              <img
                src={CLINIC_PHOTOS[0].image}
                alt={CLINIC_PHOTOS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E12]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2A27A] block mb-1">
                  Recepção & Lounge de Boas-Vindas
                </span>
                <h4 className="font-serif-luxury text-xl sm:text-2xl font-medium">
                  {CLINIC_PHOTOS[0].title}
                </h4>
                <p className="text-xs text-[#E8DCD1] mt-1 max-w-md hidden sm:block">
                  {CLINIC_PHOTOS[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column with 2 Stacked Photos (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Top smaller photo */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md border-2 border-[#FAF7F2]">
              <div className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
                <img
                  src={CLINIC_PHOTOS[1].image}
                  alt={CLINIC_PHOTOS[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E12]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-[#FAF7F2]">
                  <h5 className="font-serif-luxury text-base sm:text-lg font-medium">
                    {CLINIC_PHOTOS[1].title}
                  </h5>
                  <span className="text-[10px] text-[#E8DCD1]">
                    Tecnologia e higienização rigorosa
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom smaller photo */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md border-2 border-[#FAF7F2]">
              <div className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
                <img
                  src={CLINIC_PHOTOS[2].image}
                  alt={CLINIC_PHOTOS[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E12]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-[#FAF7F2]">
                  <h5 className="font-serif-luxury text-base sm:text-lg font-medium">
                    {CLINIC_PHOTOS[2].title}
                  </h5>
                  <span className="text-[10px] text-[#E8DCD1]">
                    Consultórios privativos e discretos
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Location & Map Card */}
        <div className="bg-[#F4EDE4] rounded-3xl p-6 sm:p-10 border border-[#E8DCD1] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Address & Amenities Info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#6D242C] mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Endereço da Clínica</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#2A0E12] mb-2">
                  Rua Jurubatuba, 1350
                </h3>
                <p className="text-sm sm:text-base text-[#5A524D]">
                  8º andar — sala 803 • Centro <br />
                  <strong>São Bernardo do Campo — SP</strong> • CEP 09725-000
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#524741]">
                  <Car className="w-4 h-4 text-[#6D242C]" />
                  <span>Estacionamento com vallet no local</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#524741]">
                  <Shield className="w-4 h-4 text-[#6D242C]" />
                  <span>Portaria e segurança 24 horas</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#524741]">
                  <Clock className="w-4 h-4 text-[#6D242C]" />
                  <span>Seg a Sex: 08h-20h | Sáb: 08h-14h</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#524741]">
                  <Sparkles className="w-4 h-4 text-[#6D242C]" />
                  <span>Próximo à Av. Brig. Faria Lima (SBC)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDirections}
                  className="px-6 py-3 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#C2A27A]" />
                  <span>Como Chegar (Rotas)</span>
                </button>

                <a
                  href={getWhatsAppLink('localizacao')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#FAF7F2] hover:bg-[#E8DCD1] text-[#2A0E12] border border-[#D8CAC0] rounded-full text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  Agendar visita
                </a>
              </div>
            </div>

            {/* Stylized Interactive Map Preview */}
            <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#FAF7F2] shadow-md group">
              {/* Map background illustration */}
              <div className="absolute inset-0 bg-[#E5E0D8] flex items-center justify-center p-4">
                {/* Visual stylized street grid lines */}
                <div className="w-full h-full relative opacity-40">
                  <div className="absolute top-1/3 left-0 right-0 h-4 bg-[#D1C9BE] rotate-3" />
                  <div className="absolute top-2/3 left-0 right-0 h-3 bg-[#D1C9BE] -rotate-2" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-[#D1C9BE] rotate-6" />
                  <div className="absolute top-0 bottom-0 left-2/3 w-3 bg-[#D1C9BE] -rotate-3" />
                </div>
              </div>

              {/* Pin marker */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-[#6D242C] text-[#FAF7F2] flex items-center justify-center shadow-2xl animate-bounce border-2 border-[#FAF7F2]">
                  <MapPin className="w-6 h-6 text-[#C2A27A]" />
                </div>
                <div className="mt-2 bg-[#FAF7F2]/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-[#2A0E12] shadow-lg border border-[#E8DCD1] text-center">
                  <span className="font-serif-luxury text-sm">Beleza Atual</span>
                  <span className="block text-[10px] text-[#8F7D73]">Rua Jurubatuba, 1350 - Sala 803</span>
                </div>
              </div>

              {/* Click to open Google Maps overlay */}
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-transparent flex items-end justify-end p-3 z-20"
                aria-label="Abrir mapa no Google Maps"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2]/90 backdrop-blur-xs text-[11px] font-semibold text-[#6D242C] rounded-lg shadow-sm border border-[#E8DCD1] hover:bg-[#FAF7F2]">
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Organic Wave Transition into FAQ Section (#F4EDE4) */}
      <AsymmetricWaveTransition
        topColor="#FAF7F2"
        bottomColor="#F4EDE4"
        variant="light-to-sand"
      />
    </section>
  );
};
