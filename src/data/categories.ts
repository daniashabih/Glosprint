import { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    id: "business-corporate",
    slug: "business-corporate-printing",
    name: "Business & Corporate Printing",
    tagline: "Executive Stationery & Brand Identity Collateral",
    description:
      "Engineered for modern enterprises, legal practices, and luxury hospitality. From tactile cotton-pulp business cards to foil-stamped presentation folders, every piece reflects uncompromised corporate prestige.",
    iconName: "Briefcase",
    featuredImage:
      "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=1200&q=80",
    itemCountDescription: "10 Essential Corporate Formats",
    popularProductNames: [
      "Luxury Foil Business Cards",
      "Soft-Touch Business Cards",
      "Presentation Folders",
      "Corporate Stationery",
    ],
  },
  {
    id: "marketing-promotional",
    slug: "marketing-promotional-printing",
    name: "Marketing & Promotional Printing",
    tagline: "High-Impact Commercial Collateral & Publications",
    description:
      "Drive engagement and brand recall across commercial campaigns, retail activations, and global exhibitions with precision flyers, brochures, lookbooks, and multi-page catalogues.",
    iconName: "Megaphone",
    featuredImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    itemCountDescription: "13 Marketing Formats & Fold Types",
    popularProductNames: [
      "Tri-Fold Brochures",
      "A4 & A5 Premium Flyers",
      "Product Catalogues",
      "Gate-Fold Brochures",
    ],
  },
  {
    id: "stickers-labels",
    slug: "stickers-labels",
    name: "Stickers & Labels",
    tagline: "Custom Die-Cut, Waterproof & Product Packaging Labels",
    description:
      "High-adhesion, weather-resistant labels crafted for cosmetics, gourmet food, beverage bottles, luxury retail boxes, and promotional giveaways with custom die-lines and premium foils.",
    iconName: "Tag",
    featuredImage:
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80",
    itemCountDescription: "9 Custom Cut & Substrate Styles",
    popularProductNames: [
      "Die-Cut Stickers",
      "Waterproof Vinyl Stickers",
      "Holographic Stickers",
      "Product & Bottle Labels",
    ],
  },
  {
    id: "signage-display",
    slug: "signage-display-printing",
    name: "Signage & Display Printing",
    tagline: "Architectural, Exhibition & Large Format Solutions",
    description:
      "Make an unmistakable statement at world-class trade expos, retail storefronts, and corporate headquarters with vibrant, UV-cured outdoor banners, fabric backdrops, and precision displays.",
    iconName: "Monitor",
    featuredImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    itemCountDescription: "8 Large-Scale Indoor & Outdoor Formats",
    popularProductNames: [
      "Roll-Up & Pull-Up Banners",
      "Exhibition Backdrops",
      "Large Format Posters",
      "Outdoor Signage",
    ],
  },
  {
    id: "packaging-custom-boxes",
    slug: "packaging-custom-boxes",
    name: "Packaging & Custom Boxes",
    tagline: "Bespoke Rigid Boxes, Folding Cartons & Luxury Packaging",
    description:
      "Transform the unboxing experience into an enduring brand ritual. Engineered structural packaging featuring magnetic closures, custom foam inserts, soft-touch laminates, and hot-stamped embellishments.",
    iconName: "Package",
    featuredImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    itemCountDescription: "8 Structural Packaging Formats",
    popularProductNames: [
      "Custom Rigid Boxes",
      "Magnetic Gift Boxes",
      "Folding Cartons",
      "Printed Shopping Bags",
    ],
  },
  {
    id: "corporate-gifts",
    slug: "corporate-gifts-specialty",
    name: "Corporate Gifts & Specialty Products",
    tagline: "Executive Merchandising & Curated Client Gifts",
    description:
      "Elevate business relationships and team pride with bespoke branded gifts, leather-bound notebooks, laser-engraved drinkware, executive sets, and premium apparel.",
    iconName: "Gift",
    featuredImage:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    itemCountDescription: "12 Bespoke Gift & Merchandising Options",
    popularProductNames: [
      "Custom Water Bottles & Mugs",
      "Executive Notebooks & Pens",
      "Corporate Gift Sets",
      "Branded Lanyards & Badges",
    ],
  },
  {
    id: "stamps-official",
    slug: "stamps-official-products",
    name: "Stamps & Official Products",
    tagline: "Corporate Seals, Notary & Self-Inking Stamps",
    description:
      "Precision-machined official company stamps, heavy-duty self-inking stamps, date stamps, and handcrafted embossing seals for legal documents, commercial agreements, and certifications.",
    iconName: "Stamp",
    featuredImage:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80",
    itemCountDescription: "6 Certified Marking & Sealing Products",
    popularProductNames: [
      "Self-Inking Stamps",
      "Company Official Stamps",
      "Custom Embossing Seals",
      "Heavy-Duty Date Stamps",
    ],
  },
];

export function getCategoryById(id: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.slug === slug);
}
