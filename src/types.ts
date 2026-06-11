export interface Project {
  id: string;
  title: string;
  category: 'All' | 'MERN' | 'Frontend' | 'React';
  description: string;
  problem: string;
  solution: string;
  metrics: string[];
  technologies: string[];
  liveLink: string;
  githubLink: string;
  accentColor: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  businessBenefit: string;
  features: string[];
  starterPrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  text: string;
  rating: number;
  projectCompleted: string;
}

export interface PricingPackage {
  name: string;
  tier: 'basic' | 'standard' | 'premium';
  price: string;
  description: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}
