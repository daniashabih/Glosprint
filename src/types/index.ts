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

// -------------------------------------------------------------
// PRODUCT CATALOG TYPES
// -------------------------------------------------------------

export type CategoryId =
  | 'business-corporate'
  | 'marketing-promotional'
  | 'stickers-labels'
  | 'signage-display'
  | 'packaging-custom-boxes'
  | 'corporate-gifts'
  | 'stamps-official';

export interface ProductCategory {
  id: CategoryId;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  featuredImage: string;
  itemCountDescription: string;
  popularProductNames: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: CategoryId;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  availableSizes: string[];
  paperMaterials: string[];
  gsmOptions?: string[];
  printingColors: string[];
  finishingOptions: string[];
  minOrderQuantity: string;
  availableQuantities: number[];
  productionTime: string;
  popularUses: string[];
  highlights: string[];
  relatedProductSlugs: string[];
  isPopular?: boolean;
  isFeatured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

// -------------------------------------------------------------
// PRINTING CAPABILITIES & FINISHES
// -------------------------------------------------------------

export interface PrintingCapability {
  id: string;
  slug: string;
  name: string;
  category: 'Printing Technology' | 'Luxury Embellishment' | 'Lamination & Protection' | 'Structural Finishing';
  tagline: string;
  explanation: string;
  suitableProducts: string[];
  benefits: string[];
  featuredImage: string;
  technicalSpecs?: { label: string; value: string }[];
  relatedProducts: { name: string; slug: string }[];
}

export interface PrintFinish {
  id: string;
  slug: string;
  name: string;
  textureDescription: string;
  visualEffect: string;
  bestFor: string;
  recommendedStock: string;
  image: string;
  accentColor: string;
}

// -------------------------------------------------------------
// PORTFOLIO & REAL PROJECTS
// -------------------------------------------------------------

export type PortfolioCategory =
  | 'Business Cards'
  | 'Corporate Stationery'
  | 'Packaging'
  | 'Marketing Materials'
  | 'Stickers & Labels'
  | 'Signage'
  | 'Promotional Products';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categorySlug: string;
  image: string;
  gallery: string[];
  clientType: string;
  finishes: string[];
  paperStock: string;
  specs: { label: string; value: string }[];
  description: string;
  isDemonstration: boolean;
}

// -------------------------------------------------------------
// BLOG & KNOWLEDGE BASE
// -------------------------------------------------------------

export interface BlogSection {
  heading: string;
  content: string;
  bullets?: string[];
  subsections?: { title: string; text: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription?: string;
  category: string;
  image: string;
  publishDate: string;
  date?: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  introduction?: string;
  sections?: BlogSection[];
  keyTakeaways?: string[];
  relatedProductSlugs?: string[];
  relatedArticleSlugs?: string[];
  content?: string[];
}

// -------------------------------------------------------------
// TESTIMONIALS & WORKFLOW
// -------------------------------------------------------------

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
  number?: number;
  title: string;
  description: string;
  detail: string;
  iconName?: string;
}
