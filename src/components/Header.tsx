import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { getWhatsAppLink, CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenAssessment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'A Clínica', href: '#sobre' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-sm border-b border-[#E8DFD5]/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D242C]"
          aria-label="Beleza Atual Clínica de Estética - Início"
        >
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/logo-transparente.webp"
              alt="Beleza Atual Logo"
              className="h-10 sm:h-11 w-auto max-h-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl font-normal tracking-wide text-[#2A0E12] leading-none">
              Beleza Atual
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#8F7D73] uppercase mt-1 font-medium">
              Clínica de Estética
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium tracking-wider text-[#4A4440]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 uppercase tracking-widest text-xs text-[#524945] hover:text-[#6D242C] transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#6D242C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Quiz / Assessment button */}
          <button
            id="header-quiz-btn"
            onClick={onOpenAssessment}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#6D242C] bg-[#F4EDE4] hover:bg-[#E8DCD1] rounded-full transition-colors duration-300 border border-[#6D242C]/15"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Descobrir meu tratamento</span>
          </button>

          {/* Primary CTA */}
          <a
            id="header-whatsapp-cta"
            href={getWhatsAppLink('header')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            <span>Agendar Avaliação</span>
            <MessageCircle className="w-4 h-4 text-[#C2A27A]" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={getWhatsAppLink('header-mobile-quick')}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#6D242C] bg-[#F4EDE4] rounded-full sm:hidden"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2A0E12] rounded-lg hover:bg-[#E8DCD1]/50 transition-colors focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-[#E8DFD5] p-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif-luxury tracking-wide text-[#2A0E12] py-2 border-b border-[#E8DCD1]/50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#8F7D73] font-sans">→</span>
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F4EDE4] text-[#6D242C] rounded-full text-xs font-semibold uppercase tracking-wider border border-[#6D242C]/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Descobrir Tratamento Ideal (1 min)</span>
              </button>

              <a
                href={getWhatsAppLink('header-mobile-drawer')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#6D242C] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-widest shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#C2A27A]" />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[#8F7D73] pt-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>São Bernardo do Campo - SP</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
