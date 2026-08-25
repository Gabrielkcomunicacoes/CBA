import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppLink } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="relative py-14 sm:py-20 bg-[#F4EDE4] overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6D242C]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#8F7D73]">
              Transparência & Informação
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E12] leading-tight mb-4">
            Dúvidas <span className="italic font-medium text-[#6D242C]">frequentes.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A524D] max-w-xl mx-auto">
            Tudo o que você precisa saber para planejar sua primeira consulta de avaliação com tranquilidade.
          </p>
        </div>

        {/* Accordion Box */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E8DCD1] shadow-sm divide-y divide-[#E8DCD1]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.id} className="py-5 first:pt-0 last:pb-0 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-medium text-[#2A0E12] group-hover:text-[#6D242C] transition-colors leading-snug">
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full border border-[#D8CAC0] flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#6D242C] text-[#FAF7F2] border-[#6D242C]' : 'bg-[#F4EDE4] text-[#6D242C] group-hover:border-[#6D242C]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-6 sm:pr-12 text-sm sm:text-base text-[#5A524D] leading-relaxed animate-in fade-in-50 duration-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Helper CTA */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DCD1] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif-luxury text-lg font-medium text-[#2A0E12]">
              Tem alguma dúvida específica sobre o seu caso?
            </h4>
            <p className="text-xs text-[#7A6C62] mt-0.5">
              Nossa equipe técnica atende diretamente pelo WhatsApp para orientar você.
            </p>
          </div>

          <a
            href={getWhatsAppLink('duvida-faq')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6D242C] hover:bg-[#44161C] text-[#FAF7F2] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs shrink-0"
          >
            <span>Tirar dúvida no WhatsApp</span>
            <MessageCircle className="w-3.5 h-3.5 text-[#C2A27A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
