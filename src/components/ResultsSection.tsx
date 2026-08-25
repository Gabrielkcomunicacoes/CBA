import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MessageCircle, ChevronLeft, ChevronRight, AlertCircle, Eye } from 'lucide-react';
import { BEFORE_AFTER_CASES, getWhatsAppLink } from '../data/clinicData';
import { AsymmetricWaveTransition } from './OrganicWaves';

export const ResultsSection: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="resultados" className="relative pt-12 sm:pt-16 pb-0 bg-[#F4EDE4] overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#FAF7F2] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 sm:pb-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6D242C]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73]">
              Resultados Reais & Casos Clínicos
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E12] leading-tight mb-4">
            Resultados que <span className="italic font-medium text-[#6D242C]">inspiram.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A524D] leading-relaxed">
            Cada corpo, cada rosto e cada história são únicos. Por isso, os resultados começam com decisões individualizadas e variam de pessoa para pessoa.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-[#6D242C] text-[#FAF7F2] shadow-md'
                  : 'bg-[#FAF7F2] text-[#524741] hover:bg-[#E8DCD1] border border-[#E8DCD1]'
              }`}
            >
              {item.treatmentName.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Before / After Split Slider */}
        <div className="max-w-4xl mx-auto bg-[#FAF7F2] rounded-3xl sm:rounded-[36px] p-4 sm:p-8 border border-[#E8DCD1] shadow-xl">
          
          {/* Main Visual Slider Container */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-[#E8DCD1]"
          >
            {/* After Image (Full background) */}
            <img
              src={activeCase.afterImage}
              alt={`${activeCase.treatmentName} - Depois`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-[#6D242C]/85 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-[#FAF7F2] uppercase tracking-wider shadow-sm z-10">
              Depois
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeCase.beforeImage}
                alt={`${activeCase.treatmentName} - Antes`}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current?.clientWidth
                    ? `${containerRef.current.clientWidth}px`
                    : '100%',
                }}
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-[#2A0E12]/85 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-[#E8DCD1] uppercase tracking-wider shadow-sm z-10">
                Antes
              </div>
            </div>

            {/* Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FAF7F2] shadow-2xl z-20"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FAF7F2] text-[#6D242C] shadow-xl border-2 border-[#6D242C] flex items-center justify-center">
                <div className="flex items-center gap-0.5">
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>

            {/* Micro Helper Tag on the bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#2A0E12]/75 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] text-[#FAF7F2] font-medium pointer-events-none z-10 flex items-center gap-1.5 shadow-sm">
              <Eye className="w-3.5 h-3.5 text-[#C2A27A]" />
              <span>Arraste para comparar Antes e Depois</span>
            </div>
          </div>

          {/* Case Information Details */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-[#E8DCD1] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-[#6D242C] uppercase tracking-wider">
                  {activeCase.category}
                </span>
                <span className="text-xs text-[#8F7D73]">•</span>
                <span className="text-xs text-[#7A6C62]">
                  {activeCase.sessions} ({activeCase.timeframe})
                </span>
              </div>
              
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#2A0E12] mb-2">
                {activeCase.treatmentName}
              </h3>
              
              <p className="text-xs sm:text-sm text-[#5A524D] max-w-xl leading-relaxed">
                {activeCase.description}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={getWhatsAppLink('resultados', `Olá! Vi o resultado de ${activeCase.treatmentName} no site e gostaria de saber se é indicado para o meu caso.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Quero uma avaliação</span>
                <MessageCircle className="w-4 h-4 text-[#C2A27A]" />
              </a>
            </div>
          </div>

          {/* Ethical Disclaimer */}
          <div className="mt-6 pt-4 border-t border-[#E8DCD1]/60 flex items-start gap-2 text-[11px] text-[#8F7D73]">
            <AlertCircle className="w-3.5 h-3.5 text-[#8F7D73] shrink-0 mt-0.5" />
            <p>
              <strong>Aviso Ético:</strong> {activeCase.disclaimer} As imagens representam casos específicos de pacientes da clínica e servem apenas como referência visual de planejamento estético.
            </p>
          </div>

        </div>

      </div>

      {/* Organic Wave Transition into Testimonials (#FAF7F2) */}
      <AsymmetricWaveTransition
        topColor="#F4EDE4"
        bottomColor="#FAF7F2"
        variant="sand-to-light"
      />
    </section>
  );
};
