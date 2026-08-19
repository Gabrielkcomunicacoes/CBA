import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../data/clinicData';

interface MobileStickyCtaProps {
  onOpenAssessment: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOpenAssessment }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-[#FAF7F2]/95 backdrop-blur-xl border-t border-[#E8DCD1] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:hidden animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Quick Quiz mini trigger */}
        <button
          onClick={onOpenAssessment}
          className="p-3 bg-[#F4EDE4] text-[#6D242C] rounded-full border border-[#6D242C]/20 shrink-0 flex items-center justify-center"
          aria-label="Descobrir tratamento ideal"
        >
          <Sparkles className="w-4 h-4" />
        </button>

        {/* Main WhatsApp Sticky CTA */}
        <a
          id="mobile-sticky-whatsapp"
          href={getWhatsAppLink('mobile-sticky')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 px-4 bg-[#6D242C] active:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>Agendar pelo WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
