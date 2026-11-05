import { IndustryItem, ProcessStep } from "@/types";

export const whyChooseGlosprint = [
  {
    icon: "ShieldCheck",
    title: "Artisan Precision & Quality",
    description:
      "Every project undergoes rigorous spectrophotometer color calibration and multi-stage manual inspection before dispatch.",
  },
  {
    icon: "Cpu",
    title: "German & Swiss Press Technology",
    description:
      "Powered by Heidelberg multi-color offset presses and Swiss precision digital flatbed cutters for micron-level registration.",
  },
  {
    icon: "Sparkles",
    title: "Mastery of Luxury Embellishments",
    description:
      "Unmatched expertise in Champagne Gold hot foil stamping, deep letterpress debossing, 3D spot UV, and hand-gilded edges.",
  },
  {
    icon: "Zap",
    title: "Express Dubai & UAE Delivery",
    description:
      "Same-day and 24-hour turnaround for emergency exhibition and corporate collateral with door-to-door courier service.",
  },
  {
    icon: "Leaf",
    title: "FSC Certified & Eco-Conscious",
    description:
      "Sustainable forestry papers, chemical-free vegetable soy inks, and recyclable boards aligning with UAE Net Zero visions.",
  },
  {
    icon: "Users",
    title: "Dedicated Print Consultants",
    description:
      "Work directly with senior print engineers who understand Dubai corporate standards, paper weights, and tactile design.",
  },
];

export const industriesWeServe: IndustryItem[] = [
  {
    id: "corporate-finance",
    title: "Corporate & Finance",
    description:
      "High-stakes investment decks, annual reports, foiled corporate identity suites, and executive leather folios for DIFC and regional banking giants.",
    iconName: "Briefcase",
    typicalProducts: ["Executive Business Cards", "Annual Financial Reports", "Presentation Folders", "Letterheads & Envelopes"],
  },
  {
    id: "real-estate",
    title: "Luxury Real Estate",
    description:
      "Hardbound coffee-table lookbooks, architectural brochures, VIP handover gift boxes, and site hoarding signage for iconic Dubai developments.",
    iconName: "Building2",
    typicalProducts: ["Hardcover Property Lookbooks", "Sales Centre Brochures", "Handover Gift Boxes", "Acrylic Site Models & Signs"],
  },
  {
    id: "luxury-retail",
    title: "Retail, Fashion & Beauty",
    description:
      "Bespoke perfume cartons, magnetic rigid gift boxes, foiled swing tags, and grosgrain ribbon shopping bags for Dubai Mall and boutique houses.",
    iconName: "ShoppingBag",
    typicalProducts: ["Rigid Perfume Boxes", "Ribbon Shopping Bags", "Garment Swing Tags", "Cosmetic Outer Cartons"],
  },
  {
    id: "hospitality-events",
    title: "Hospitality & Dining",
    description:
      "Handcrafted leatherette menu covers, waterproof outdoor dining cards, table reservations, and VIP event invitations for 5-star hotels.",
    iconName: "Utensils",
    typicalProducts: ["Luxury Leather Menus", "Keycard Holders", "Event Invitations", "Cocktail Coasters"],
  },
  {
    id: "exhibitions-summits",
    title: "Exhibitions & Summits",
    description:
      "Turnkey trade show presence for DWTC, ADNEC, and global summits: tension fabric walls, aluminum roll-ups, flyers, and badge lanyards.",
    iconName: "Calendar",
    typicalProducts: ["Tension Fabric Backdrops", "Roll-Up Displays", "Urgent Same-Day Flyers", "Exhibitor Catalogues"],
  },
  {
    id: "healthcare-wellness",
    title: "Healthcare & Clinics",
    description:
      "Medical center directories, sterile product packaging, prescription folders, and hygienic signage for premier Dubai medical institutions.",
    iconName: "HeartPulse",
    typicalProducts: ["Patient File Folders", "Prescription Pads", "Medical Clinic Signage", "Sanitary Carton Sleeves"],
  },
];

export const printingProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Artwork Audit",
    description: "Personalized review of your design files, bleed parameters, resolution, and color modes.",
    detail:
      "Submit your artwork or consult with our print specialists. We verify typography, vector paths, color profiles (CMYK / Pantone), and resolution (300+ DPI) to prevent prepress errors.",
  },
  {
    step: "02",
    title: "Substrate & Luxury Finish Curation",
    description: "Choose from world-class European paperboards, foil swatches, and tactile coatings.",
    detail:
      "Explore tactile swatches in our Al Quoz showroom or receive curations to your Dubai office. Compare cotton weights, soft-touch coatings, and foil shades from Champagne Gold to Mirror Silver.",
  },
  {
    step: "03",
    title: "Prepress Proofing & Mockup",
    description: "Inspect hardcopy digital color proofs or unprinted structural CAD mockups.",
    detail:
      "For packaging and custom boxes, we produce white CAD prototypes to test physical fit and feel. For color-critical publications, certified digital GMG proofs ensure exact color reproduction.",
  },
  {
    step: "04",
    title: "Precision Press Production",
    description: "German Heidelberg offset lithography or Swiss digital printing under strict quality controls.",
    detail:
      "Your order enters our climate-controlled press floor. Computerized density scanners ensure consistent ink density across hundreds of thousands of impressions.",
  },
  {
    step: "05",
    title: "Artisan Finishing & Express Delivery",
    description: "Foil stamping, die-cutting, hand-assembly, and white-glove delivery across Dubai & the UAE.",
    detail:
      "Our post-press craftsmen execute precision stamping, embossing, binding, and hand-assembly. Finished goods are protected in reinforced cartons and delivered straight to your door.",
  },
];

export const keyStats = [
  { value: "15+", label: "Print Specialties", sublabel: "Offset, Digital, Packaging & Signage" },
  { value: "24h", label: "Express Turnaround", sublabel: "Same-Day Emergency Service in Dubai" },
  { value: "100%", label: "Pantone Color Accuracy", sublabel: "ISO 12647-2 Certified Printing" },
  { value: "500K+", label: "Daily Production Capacity", sublabel: "Heidelberg Multi-Color Automation" },
];
