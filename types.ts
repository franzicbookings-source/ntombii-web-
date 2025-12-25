
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'additional';
  startingPrice?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  setupPrice: string;
  monthlyPrice: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  logo?: string;
  link?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    results: string[];
    stack: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  link?: string;
}
