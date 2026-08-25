import { Treatment, Professional, BeforeAfterCase, Testimonial, FaqItem, ClinicPhoto } from '../types';

export const CLINIC_INFO = {
  name: 'Beleza Atual',
  fullName: 'Clínica de Estética Beleza Atual',
  tagline: 'Estética que acompanha cada fase da sua vida',
  city: 'São Bernardo do Campo',
  state: 'SP',
  address: 'Rua Jurubatuba, 1350 - 8º andar, sala 803',
  neighborhood: 'Centro',
  zipCode: '09725-000',
  fullAddress: 'Rua Jurubatuba, 1350 - 8º andar, sala 803 - Centro, São Bernardo do Campo - SP',
  phone: '(11) 98765-4321',
  phoneClean: '5511987654321', // WhatsApp international format
  email: 'contato@belezaatualestetica.com.br',
  hours: 'Segunda a Sexta: 08h às 20h | Sábado: 08h às 14h',
  instagram: '@belezaatual.estetica',
  logo: '/assets/logo.jpg',
  logoTransparent: '/assets/logo-transparente.webp',
  googleMapsUrl: 'https://maps.google.com/?q=Rua+Jurubatuba,+1350+-+Centro,+Sao+Bernardo+do+Campo+-+SP',
};

// Utility function to generate specialized WhatsApp click-to-chat links with custom pre-filled message
export const getWhatsAppLink = (originContext?: string, customMessage?: string): string => {
  const base = `https://wa.me/${CLINIC_INFO.phoneClean}`;
  let text = 'Olá! Gostaria de agendar uma avaliação na Beleza Atual.';
  
  if (customMessage) {
    text = customMessage;
  } else if (originContext) {
    switch (originContext) {
      case 'hero':
        text = 'Olá! Vi a página da Beleza Atual e gostaria de agendar uma avaliação individualizada.';
        break;
      case 'facial':
        text = 'Olá! Gostaria de entender melhor as opções de tratamentos faciais (fios, botox, preenchimento) e agendar uma avaliação.';
        break;
      case 'corporal':
        text = 'Olá! Tenho interesse em tratamentos corporais (flacidez, gordura localizada, drenagem) e gostaria de agendar uma avaliação.';
        break;
      case 'intimo':
        text = 'Olá! Gostaria de conversar com total discrição sobre os tratamentos de estética íntima.';
        break;
      case 'fios':
        text = 'Olá! Gostaria de saber mais sobre o procedimento de Fios de Tração e agendar uma avaliação com os profissionais.';
        break;
      case 'preenchimento':
        text = 'Olá! Gostaria de informações sobre Preenchimento Facial e agendar uma consulta avaliativa.';
        break;
      case 'deli-brito':
        text = 'Olá! Gostaria de agendar uma avaliação com o Dr. Deli Brito.';
        break;
      case 'luciana-freire':
        text = 'Olá! Gostaria de agendar uma avaliação com a especialista Luciana Freire.';
        break;
      case 'facilidades':
        text = 'Olá! Gostaria de saber mais sobre as condições de parcelamento em 10x e desconto no PIX para tratamentos.';
        break;
      case 'localizacao':
        text = 'Olá! Gostaria de agendar um horário na clínica de São Bernardo do Campo (Rua Jurubatuba).';
        break;
      case 'assessment':
        text = 'Olá! Realizei o teste de necessidades estéticas no site e gostaria de agendar minha avaliação personalizada.';
        break;
      default:
        text = `Olá! Vi a página da Beleza Atual (${originContext}) e gostaria de mais informações.`;
    }
  }

  return `${base}?text=${encodeURIComponent(text)}`;
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'fios-tracao',
    category: 'facial',
    number: '01',
    featured: true,
    title: 'Fios de Tração & PDO',
    subtitle: 'Sustentação natural e estímulo profundo de colágeno',
    description: 'Uma possibilidade refinada para quem busca tratar a flacidez tecidual, reposicionar volumes e melhorar os contornos faciais sem cortes.',
    benefits: [
      'Efeito lifting imediato e progressivo',
      'Bioestímulo contínuo de colágeno por até 18 meses',
      'Preservação total da sua expressão e naturalidade',
      'Procedimento minimamente invasivo com rápida recuperação'
    ],
    indications: ['Flacidez de bochechas e mandíbula', 'Sulco nasogeniano (bigode chinês)', 'Linhas de marionete', 'Contorno facial indefinido'],
    sessionDuration: '45 a 60 minutos',
    recoveryTime: 'Retorno às atividades em 24h a 48h',
    tag: 'Destaque Facial',
    image: 'https://images.unsplash.com/photo-1512290900672-1f4a9cebc174?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'preenchimento-facial',
    category: 'facial',
    number: '02',
    featured: true,
    title: 'Preenchimento Facial Estruturado',
    subtitle: 'Harmonização sutil com ácido hialurônico de alta pureza',
    description: 'Planejamento individualizado para diferentes objetivos estéticos, restaurando pontos de luz, sustentação óssea e harmonia dos traços.',
    benefits: [
      'Restauração de volume nas maçãs do rosto e têmporas',
      'Contorno mandibular e queixo mais definidos',
      'Hidratação e volumização labial discreta e elegante',
      'Resultados imediatamente visíveis e de longa durabilidade'
    ],
    indications: ['Perda de volume facial', 'Lábios desidratados ou finos', 'Olheiras profundas', 'Perfil facial desarmônico'],
    sessionDuration: '40 a 60 minutos',
    recoveryTime: 'Imediato, com mínimos cuidados pós',
    tag: 'Harmonização Suave',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'estetica-intima',
    category: 'intimo',
    number: '03',
    featured: true,
    title: 'Estética Íntima Avançada',
    subtitle: 'Cuidado íntimo com privacidade, informação e acolhimento',
    description: 'Tratamentos íntimos femininos e masculinos realizados com absoluto sigilo, conforto, tecnologia e acompanhamento médico e estético.',
    benefits: [
      'Restauração da hidratação, turgor e volume tecidual',
      'Uniformização do tom da pele e clareamento seguro',
      'Melhora da autoestima, bem-estar e qualidade de vida',
      'Ambiente privativo e acolhedor com profissionais experientes'
    ],
    indications: ['Flacidez ou atrofia íntima', 'Hiperpigmentação regional', 'Assimetrias estéticas', 'Desconforto com alterações do tempo'],
    sessionDuration: '30 a 50 minutos',
    recoveryTime: 'Rápido, com orientações personalizadas',
    tag: 'Privacidade & Cuidado',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'bioestimuladores',
    category: 'facial',
    title: 'Bioestimuladores de Colágeno',
    subtitle: 'Firmeza e densidade dérmica de dentro para fora',
    description: 'Radiesse e Sculptra aplicados estrategicamente para devolver a espessura dérmica, prevenir o envelhecimento e tratar a perda de sustentação.',
    benefits: [
      'Pele visivelmente mais firme e luminosa',
      'Aumento da produção endógena de colágeno',
      'Efeito gradual e extremamente natural',
      'Tratamento preventivo e corretivo'
    ],
    indications: ['Flacidez facial e de pescoço', 'Perda de tônus', 'Pele afinada'],
    sessionDuration: '45 minutos',
    recoveryTime: 'Imediato',
    tag: 'Colágeno',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'toxina-botulinica',
    category: 'facial',
    title: 'Toxina Botulínica Preventiva e Corretiva',
    subtitle: 'Suavização de linhas sem congelar a sua expressão',
    description: 'Aplicação milimétrica para relaxamento da musculatura hipercinética da testa, glabela e pés de galinha, garantindo um olhar descansado e fresco.',
    benefits: [
      'Suavização de rugas dinâmicas',
      'Prevenção de vincos estáticos profundos',
      'Expressão serena e radiante',
      'Duração de 4 a 6 meses'
    ],
    indications: ['Linhas de expressão na testa', 'Rugas ao redor dos olhos', 'Linhas de franzimento (glabela)'],
    sessionDuration: '30 minutos',
    recoveryTime: 'Imediato',
    tag: 'Suavidade',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'corporal-flacidez-gordura',
    category: 'corporal',
    title: 'Protocolo Corporal Redutor & Firmador',
    subtitle: 'Combinação inteligente de tecnologias para remodelagem',
    description: 'Associação de radiofrequência multipolar, massagens modeladoras e intradermoterapia para combater gordura localizada e flacidez corporal.',
    benefits: [
      'Remodelagem das curvas corporais',
      'Redução da retenção de líquidos e celulite',
      'Aumento da circulação e firmeza da pele',
      'Planos de sessões ajustados à sua rotina'
    ],
    indications: ['Abdômen, flancos, coxas e glúteos', 'Retenção hídrica pós-estresse', 'Flacidez pós-emagrecimento'],
    sessionDuration: '50 a 70 minutos',
    recoveryTime: 'Imediato',
    tag: 'Corpo & Contorno',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80',
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'deli-brito',
    name: 'Dr. Deli Brito',
    badge: 'RT | RESPONSÁVEL TÉCNICO',
    roleTitle: 'FARMACÊUTICO ESTETA',
    title: 'Farmacêutico Esteta • Responsável Técnico',
    registration: 'CRF/SP 52.349',
    image: '/assets/deli.webp',
    experience: '20 anos de atuação',
    instagram: '@dr.delibrito',
    instagramUrl: 'https://instagram.com/dr.delibrito',
    bio: 'Com 20 anos de atuação na estética avançada, possui estudos aprofundados sobre o maior órgão do corpo humano: a pele. Seu trabalho é pautado na ciência, segurança e ética. Além de sua excelência clínica, exerce atividade docente em pós-graduações, capacitando diversos profissionais da saúde por todo o Brasil.',
    rqes: [
      { label: 'Estética', value: '7629-54' },
      { label: 'Tricologia', value: '11810-92' }
    ],
    education: [
      'Mestre em Nanotecnologia | Professor Docente',
      'Graduando em Odontologia'
    ],
    specialties: [
      'Farmacêutico Esteta (CRF/SP 52.349)',
      'Especialista em Estética Avançada (RQE 7629-54)',
      'Especialista em Tricologia (RQE 11810-92)',
      'Mestre em Nanotecnologia & Professor Docente'
    ],
    credentials: [
      'Farmacêutico Esteta - CRF/SP 52.349',
      'Especialidade RQE Estética: 7629-54',
      'Especialidade RQE Tricologia: 11810-92',
      'Mestre em Nanotecnologia | Professor Docente',
      'Graduando em Odontologia',
      '20 anos de atuação e capacitação de profissionais por todo o Brasil'
    ]
  },
  {
    id: 'luciana-freire',
    name: 'Luciana Freire',
    badge: 'ESPECIALISTA EM ESTÉTICA',
    roleTitle: 'FARMACÊUTICA ESTETA & COSMETÓLOGA',
    title: 'Especialista em Estética Avançada e Cosmetologia',
    registration: 'CRF-SP 45.891',
    image: 'https://images.unsplash.com/photo-1594824813593-3920703f8a48?auto=format&fit=crop&w=800&q=80',
    experience: '+10 anos de experiência clínica',
    instagram: '@belezaatual.estetica',
    instagramUrl: 'https://instagram.com/belezaatual.estetica',
    bio: 'Com mais de uma década de dedicação ao cuidado da pele e do corpo, Luciana Freire é reconhecida pelo acolhimento caloroso e pelo rigor técnico. Ela lidera protocolos personalizados que combinam ciência e bem-estar para devolver a confiança de cada pessoa.',
    education: [
      'Graduação em Farmácia com Habilitação em Estética',
      'Pós-graduação em Cosmetologia Clínica e Dermatocosmética'
    ],
    specialties: [
      'Especialista em Estética Avançada e Saúde Integrativa',
      'Pós-graduada em Cosmetologia Clínica e Peelings Químicos',
      'Referência em Protocolos de Estética Íntima e Regenerativa',
      'Consultora em Terapia Anti-Aging e Rejuvenescimento Facial'
    ],
    credentials: [
      'Graduação em Farmácia com Habilitação em Estética',
      'Pós-graduação em Cosmetologia e Dermatocosmética Aplicada',
      'Capacitação em Tratamentos Íntimos Femininos e Masculinos',
      'Pesquisadora de novos ativos e protocolos de bioestímulo tecidual'
    ]
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-fios',
    treatmentName: 'Fios de Tração Facial (Lifting Sem Cortes)',
    category: 'Facial',
    description: 'Reposicionamento de tecido malar e definição da linha da mandíbula em paciente de 48 anos. Resultado natural com melhora evidente da sustentação.',
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    sessions: '1 sessão clínica',
    timeframe: 'Avaliação após 45 dias',
    disclaimer: 'Imagens meramente ilustrativas para fins informativos. Resultados podem variar de acordo com características biológicas individuais.',
  },
  {
    id: 'case-preenchimento',
    treatmentName: 'Reestruturação Malar e Bigode Chinês',
    category: 'Facial',
    description: 'Suavização do sulco nasogeniano através da reestruturação de pontos de ancoragem no terço médio da face, sem efeito artificial.',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    sessions: '1 sessão + 1 revisão',
    timeframe: 'Foto comparativa 30 dias',
    disclaimer: 'O sucesso do procedimento depende de avaliação clínica prévia e resposta biológica individual de cada paciente.',
  },
  {
    id: 'case-bioestimulador',
    treatmentName: 'Bioestimulador de Colágeno (Tônus e Firmeza)',
    category: 'Facial & Pescoço',
    description: 'Melhora notável na textura, densidade dérmica e atenuação da flacidez no contorno inferior e pescoço após estímulo de colágeno.',
    beforeImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    sessions: 'Protocolo de 2 sessões',
    timeframe: 'Evolução aos 90 dias',
    disclaimer: 'Os resultados são progressivos e variam conforme o estilo de vida, idade e capacidade regenerativa celular.',
  },
  {
    id: 'case-corporal',
    treatmentName: 'Protocolo Corporal de Firmeza & Contorno',
    category: 'Corporal',
    description: 'Redução de medidas localizadas e melhora expressiva da textura da pele e tônus na região abdominal e flancos.',
    beforeImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    sessions: '6 sessões combinadas',
    timeframe: 'Acompanhamento de 60 dias',
    disclaimer: 'Resultados associados a hábitos saudáveis e orientação individual da equipe.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ana M. S.',
    initials: 'A.M.S.',
    treatment: 'Fios de Tração',
    rating: 5,
    highlight: 'Atendimento impecável desde o primeiro contato',
    quote: 'Eu tinha muito medo de ficar com o rosto artificial ou com aquela aparência "puxada". O Dr. Deli e a Luciana me ouviram por quase uma hora antes de fazer qualquer coisa. O resultado ficou tão sutil e elegante que minhas amigas apenas comentaram que eu pareço 10 anos mais descansada!',
    date: 'Há 2 semanas'
  },
  {
    id: 'test-2',
    name: 'Regina P.',
    initials: 'R.P.',
    treatment: 'Preenchimento Facial & Bioestimulador',
    rating: 5,
    highlight: 'O resultado ficou natural e o pós foi super tranquilo',
    quote: 'A clínica é um refúgio em São Bernardo. O ambiente é acolhedor, calmo e cheiroso. Fiz o preenchimento com muito receio, mas a mão do profissional é leve e a explicação de cada etapa me trouxe total segurança. Me sinto cuidada de verdade.',
    date: 'Há 1 mês'
  },
  {
    id: 'test-3',
    name: 'Carlos L.',
    initials: 'C.L.',
    treatment: 'Estética Íntima & Harmonização',
    rating: 5,
    highlight: 'Discrição absoluta e profissionalismo ímpar',
    quote: 'Por ser homem, confesso que tive vergonha de procurar a clínica no início. Fui surpreendido por um atendimento ético, extremamente respeitoso e com privacidade total. Resolveram uma queixa que me incomodava há anos sem nenhum constrangimento.',
    date: 'Há 3 semanas'
  },
  {
    id: 'test-4',
    name: 'Mariana F. V.',
    initials: 'M.F.V.',
    treatment: 'Botox Preventivo e Protocolo Glow',
    rating: 5,
    highlight: 'Não troco por nenhuma outra clínica',
    quote: 'O que mais me encanta na Beleza Atual é que eles nunca tentam te empurrar procedimentos desnecessários. Eles realmente avaliam o que faz sentido para você. O respeito à nossa individualidade é real!',
    date: 'Há 1 mês'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso fazer avaliação antes de realizar qualquer procedimento?',
    answer: 'Sim, absolutamente. Na Beleza Atual, acreditamos que a segurança e o resultado natural nascem de uma avaliação detalhada. Durante essa conversa presencial, analisamos sua anatomia facial ou corporal, histórico de saúde, expectativas e rotina para indicar apenas o que realmente faz sentido para você, sem excessos.'
  },
  {
    id: 'faq-2',
    question: 'Qual tratamento é mais indicado para o meu caso?',
    answer: 'Cada organismo e momento de vida exigem uma abordagem sob medida. Por exemplo: se a queixa principal for a perda de contorno e sustentação, os Fios de Tração ou Bioestimuladores podem ser a melhor escolha. Se o objetivo for repor volumes perdidos ou linhas pontuais, o Preenchimento pode ser o ideal. Na sua avaliação, explicamos todas as possibilidades com clareza.'
  },
  {
    id: 'faq-3',
    question: 'A clínica atende homens?',
    answer: 'Sim! Temos um público masculino expressivo que busca desde tratamentos faciais sutis (como toxina botulínica preventiva, bioestimuladores e fios) até procedimentos corporais e estética íntima masculina. Todos os atendimentos contam com máxima discrição e protocolos adaptados à anatomia masculina.'
  },
  {
    id: 'faq-4',
    question: 'Existem tratamentos de estética íntima masculinos e femininos?',
    answer: 'Sim. Oferecemos protocolos íntimos voltados tanto para o público feminino quanto masculino. São tratamentos que visam melhora do tônus, clareamento dérmico, volumização ou harmonização da região íntima, sempre realizados em consultório privativo com tecnologia de ponta e sigilo absoluto.'
  },
  {
    id: 'faq-5',
    question: 'Posso parcelar meu tratamento ou existem facilidades de pagamento?',
    answer: 'Com certeza. Entendemos que cuidar de você deve caber no seu planejamento financeiro. Disponibilizamos parcelamento em até 10x sem juros no cartão de crédito, combos personalizados com condições especiais e até 8% de desconto para pagamentos à vista via PIX.'
  },
  {
    id: 'faq-6',
    question: 'Onde fica a clínica e como é o acesso?',
    answer: 'Estamos estrategicamente localizados no Centro de São Bernardo do Campo, na Rua Jurubatuba, 1350 - 8º andar, sala 803. O edifício conta com estacionamento com manobrista no local, segurança 24h, acessibilidade total e fácil acesso às principais vias do ABC e Rodovia Anchieta.'
  },
  {
    id: 'faq-7',
    question: 'Como faço para agendar minha avaliação?',
    answer: 'É muito simples e rápido: basta clicar em qualquer botão de agendamento aqui no site para falar diretamente com nossa equipe no WhatsApp. Responderemos suas primeiras dúvidas e reservaremos um horário exclusivo e reservado na sua agenda.'
  }
];

export const CLINIC_PHOTOS: ClinicPhoto[] = [
  {
    id: 'photo-recepcao',
    title: 'Recepção Acolhedora',
    description: 'Design contemporâneo com iluminação suave e café de boas-vindas',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'photo-consultorio',
    title: 'Sala de Procedimentos Estéticos',
    description: 'Equipamentos de padrão hospitalar com máximo conforto e higienização',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'photo-privativo',
    title: 'Consultório Privativo',
    description: 'Ambiente reservado e tranquilo para avaliações e estética íntima',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'photo-detalhes',
    title: 'Cuidado em Cada Detalhe',
    description: 'Aromatização exclusiva, som ambiente relaxante e privacidade total',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  }
];
