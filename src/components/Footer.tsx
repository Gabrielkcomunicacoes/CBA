import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C0709] text-[#FAF7F2] pt-16 pb-28 lg:pb-16 border-t border-[#FAF7F2]/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#FAF7F2]/10">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-1 rounded-xl bg-[#FAF7F2]/10 backdrop-blur-xs border border-[#C2A27A]/30 flex items-center justify-center">
                <img
                  src="/assets/logo-transparente.webp"
                  alt="Beleza Atual"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-medium tracking-wide text-[#FAF7F2]">
                  Beleza Atual
                </span>
                <span className="text-[10px] font-sans tracking-[0.22em] text-[#C2A27A] uppercase">
                  Clínica de Estética
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C4B5A8] leading-relaxed mb-6 max-w-sm">
              Estética facial, corporal e íntima de alta precisão. Cuidado individualizado, segurança clínica e naturalidade em São Bernardo do Campo.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppLink('footer')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FAF7F2]/10 hover:bg-[#C2A27A] hover:text-[#2A0E12] flex items-center justify-center text-[#FAF7F2] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/clinicabelezaatual"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FAF7F2]/10 hover:bg-[#C2A27A] hover:text-[#2A0E12] flex items-center justify-center text-[#FAF7F2] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="w-8 h-8 rounded-full bg-[#FAF7F2]/10 hover:bg-[#C2A27A] hover:text-[#2A0E12] flex items-center justify-center text-[#FAF7F2] transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Tratamentos (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C2A27A] mb-4">
              Tratamentos
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CAC0]">
              <li><a href="#tratamentos" className="hover:text-[#FAF7F2] transition-colors">Fios de Tração & PDO</a></li>
              <li><a href="#tratamentos" className="hover:text-[#FAF7F2] transition-colors">Preenchimento Facial Estruturado</a></li>
              <li><a href="#tratamentos" className="hover:text-[#FAF7F2] transition-colors">Estética Íntima (Feminina e Masculina)</a></li>
              <li><a href="#tratamentos" className="hover:text-[#FAF7F2] transition-colors">Bioestimuladores de Colágeno</a></li>
              <li><a href="#tratamentos" className="hover:text-[#FAF7F2] transition-colors">Suavização de Linhas de Expressão</a></li>
              <li><a href="#tratamentos" className="hover:text-[#FAF7F2] transition-colors">Protocolos Corporais & Flacidez</a></li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C2A27A] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CAC0]">
              <li><a href="#hero" className="hover:text-[#FAF7F2] transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-[#FAF7F2] transition-colors">A Clínica & Especialistas</a></li>
              <li><a href="#resultados" className="hover:text-[#FAF7F2] transition-colors">Antes e Depois</a></li>
              <li><a href="#como-funciona" className="hover:text-[#FAF7F2] transition-colors">Como Funciona</a></li>
              <li><a href="#espaco" className="hover:text-[#FAF7F2] transition-colors">Nosso Espaço</a></li>
              <li><a href="#duvidas" className="hover:text-[#FAF7F2] transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 4: Informações de Atendimento (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C2A27A] mb-4">
              São Bernardo do Campo
            </h4>
            
            <div className="space-y-3 text-xs text-[#D8CAC0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C2A27A] shrink-0 mt-0.5" />
                <span>
                  Rua Jurubatuba, 1350 - 8º andar, sala 803 <br />
                  Centro, SBC - SP (Estacionamento no local)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C2A27A] shrink-0" />
                <span>Seg a Sex: 08h às 20h | Sáb: 08h às 14h</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C2A27A] shrink-0" />
                <span>{CLINIC_INFO.phone} (WhatsApp exclusivo)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal, Responsabilidade Técnica & Ethical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#A6978C]">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Beleza Atual Clínica de Estética Ltda. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-[#8F7D73]">
              Responsável Técnico: Dr. Deli Brito (CRF/SP 52.349) • Fundadora: Luciana Freire. Estabelecimento em conformidade com as normas da Anvisa e Vigilância Sanitária Municipal.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] text-xs transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
