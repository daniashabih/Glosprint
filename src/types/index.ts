export interface ServiceOption {
  category: string;
  choices: string[];
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  category: 'Commercial & Offset' | 'Digital & Quick Print' | 'Packaging & Boxes' | 'Signage & Large Format' | 'Luxury & Wedding' | 'Promotional';
  benefits: string[];
  options: ServiceOption[];
  finishes: string[];
  specs: ServiceSpec[];
  turnaround: string;
  minOrder: string;
  seoTitle: string;
  seoDescription: string;
  faqs: FAQ[];
  relatedServiceSlugs: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Luxury Packaging' | 'Corporate Stationery' | 'Marketing Collateral' | 'Large Format & Signage' | 'Premium Invitations';
  image: string;
  clientType: string;
  finishes: string[];
  paperStock: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  industry: string;
  rating: number;
  isSample: boolean;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  typicalProducts: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}
