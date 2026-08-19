export interface Treatment {
  id: string;
  category: 'facial' | 'corporal' | 'intimo';
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  indications: string[];
  sessionDuration: string;
  recoveryTime: string;
  image: string;
  tag: string;
  featured?: boolean;
  number?: string;
}

export interface Professional {
  id: string;
  name: string;
  title: string;
  registration: string;
  image: string;
  experience: string;
  specialties: string[];
  bio: string;
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
  quote: string;
  highlight: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ClinicPhoto {
  id: string;
  title: string;
  description: string;
  image: string;
}
