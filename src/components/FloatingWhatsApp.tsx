import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink, CLINIC_INFO } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Show gentle preview after 4 seconds of reading or after scrolling 300px
    const timer = setTimeout(() => {
      setShowPreview(true);
    }, 4000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Interactive Speech Bubble Preview */}
      {showPreview && (
        <div className="pointer-events-auto bg-[#FAF7F2] p-4 rounded-2xl shadow-2xl border border-[#E8DCD1] max-w-[280px] animate-in fade-in slide-in-from-bottom-3 duration-300 relative">
          <button
            onClick={() => setShowPreview(false)}
            className="absolute top-2.5 right-2.5 text-[#8F7D73] hover:text-[#2A0E12] p-1 rounded-full text-xs"
            aria-label="Fechar mensagem"
          >
            ✕
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#6D242C]/40 bg-[#FAF7F2] shrink-0 shadow-xs">
              <img
                src="/assets/logo.jpg"
                alt="Beleza Atual"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#FAF7F2]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#2A0E12] block leading-tight">
                Equipe Beleza Atual
              </span>
              <span className="text-[10px] text-emerald-600 font-medium">
                Online agora em SBC
              </span>
            </div>
          </div>

          <p className="text-xs text-[#5A524D] leading-relaxed mb-3">
            Olá! Deseja tirar dúvidas sobre qual procedimento faz sentido para você?
          </p>

          <a
            href={getWhatsAppLink('floating-bubble')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-xl text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#C2A27A]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating WhatsApp Bubble */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppLink('floating-main')}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#FAF7F2]"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Subtle pulsating ring */}
        <span className="absolute inset-0 rounded-full bg-[#6D242C] animate-ping opacity-25 pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-[#25D366] group-hover:scale-110 transition-transform" />

        {/* Online Status Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#FAF7F2] rounded-full" />
      </a>
    </div>
  );
};
