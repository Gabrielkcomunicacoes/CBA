import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Car, Shield, Sparkles, ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PHOTOS, getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

interface SpaceSectionProps {
  onOpenDirections: () => void;
}

export const SpaceSection: React.FC<SpaceSectionProps> = ({ onOpenDirections }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activePhoto = CLINIC_PHOTOS[activePhotoIndex] || CLINIC_PHOTOS[0];

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev === 0 ? CLINIC_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev === CLINIC_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="espaco" className="relative pt-16 sm:pt-24 pb-0 bg-[#FAF7F2] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 sm:pb-24">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73] block mb-3">
              Estrutura & Localização em São Bernardo do Campo
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E12] leading-tight">
              Conheça nosso espaço pensado para o seu bem-estar <br className="hidden sm:inline" />
              <span className="italic font-medium text-[#6D242C]">do início ao fim da sua visita.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <p className="text-sm text-[#5A524D] leading-relaxed">
              Ambientes climatizados, atendimento privativo, café de boas-vindas e máxima biossegurança.
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

        {/* Gallery Showcase */}
        <div className="mb-14">
          
          {/* Main Featured Photo with Controls - Full Contain with Ambient Backdrop so no photo is cut */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8DCD1] bg-[#1A0B0E] group">
            <div className="relative h-[380px] sm:h-[480px] md:h-[560px] w-full flex items-center justify-center overflow-hidden">
              {/* Blurred Ambient Backdrop of the actual photo to fill wide screens elegantly */}
              <img
                src={activePhoto.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B0E] via-[#1A0B0E]/40 to-[#1A0B0E]/30 pointer-events-none" />

              {/* Main Crisp Photo (object-contain ensures 100% of the photo is visible without cropping) */}
              <img
                key={activePhoto.id}
                src={activePhoto.image}
                alt={activePhoto.title}
                className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain p-3 sm:p-6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Photo Navigation Buttons */}
              <button
                onClick={handlePrev}
                aria-label="Foto anterior"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF7F2]/90 hover:bg-[#6D242C] text-[#2A0E12] hover:text-[#FAF7F2] flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer z-30 hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Próxima foto"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF7F2]/90 hover:bg-[#6D242C] text-[#2A0E12] hover:text-[#FAF7F2] flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer z-30 hover:scale-105"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Zoom Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#1A0B0E]/70 hover:bg-[#6D242C] text-[#FAF7F2] backdrop-blur-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer z-30 border border-[#FAF7F2]/20 shadow-md"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ampliar foto</span>
              </button>

              {/* Info Overlay at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 pointer-events-none">
                <div className="inline-block bg-[#1A0B0E]/80 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-[#FAF7F2]/15 shadow-xl max-w-xl">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#D29B85] block mb-0.5">
                    Espaço Beleza Atual • Foto {activePhotoIndex + 1} de {CLINIC_PHOTOS.length}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#FAF7F2]">
                    {activePhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8CAC0] mt-0.5 leading-relaxed">
                    {activePhoto.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Thumbnails Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-4">
            {CLINIC_PHOTOS.map((photo, index) => {
              const isActive = index === activePhotoIndex;
              return (
                <button
                  key={photo.id}
                  onClick={() => setActivePhotoIndex(index)}
                  className={`group relative rounded-2xl overflow-hidden text-left p-1 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'ring-2 ring-[#6D242C] bg-[#FAF7F2] shadow-md -translate-y-1'
                      : 'opacity-70 hover:opacity-100 bg-[#F4EDE4] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-[#6D242C]/15 pointer-events-none" />
                    )}
                  </div>
                  <div className="p-1.5">
                    <span className="text-[11px] font-medium text-[#2A0E12] line-clamp-1 block">
                      {photo.title}
                    </span>
                  </div>
                </button>
              );
            })}
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

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A0B0E]/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#FAF7F2]/20 hover:bg-[#FAF7F2] text-[#FAF7F2] hover:text-[#2A0E12] flex items-center justify-center transition-colors cursor-pointer z-50"
            aria-label="Fechar ampliação"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-full rounded-2xl overflow-hidden border border-[#FAF7F2]/20 shadow-2xl flex items-center justify-center bg-black/40">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-center text-[#FAF7F2]">
              <h4 className="font-serif-luxury text-xl sm:text-2xl font-medium">
                {activePhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#D8CAC0] mt-1">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Organic Wave Transition into FAQ Section (#F4EDE4) */}
      <AsymmetricWaveTransition
        topColor="#FAF7F2"
        bottomColor="#F4EDE4"
        variant="light-to-sand"
      />
    </section>
  );
};

