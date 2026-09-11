export interface Treatment {
  id: string;
  category: 'facial' | 'corporal' | 'intimo' | 'masculino' | string;
  number?: string;
  featured?: boolean;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  indications: string[];
  sessionDuration: string;
  recoveryTime: string;
  tag: string;
  image: string;
}

export interface Professional {
  id: string;
  name: string;
  badge: string;
  roleTitle: string;
  title: string;
  registration?: string;
  image: string;
  experience: string;
  instagram: string;
  instagramUrl: string;
  bio: string;
  rqes?: Array<{ label: string; value: string }>;
  education: string[];
  specialties: string[];
  credentials: string[];
}

export interface BeforeAfterCase {
  id: string;
  treatmentName: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  sessions: string;
  timeframe: string;
  disclaimer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  treatment: string;
  rating: number;
  highlight: string;
  quote: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClinicPhoto {
  id: string;
  title: string;
  description: string;
  image: string;
}
