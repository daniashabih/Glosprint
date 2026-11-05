import { PortfolioItem } from "@/types";

export const portfolioCategories = [
  "All Projects",
  "Business Cards",
  "Corporate Stationery",
  "Packaging",
  "Marketing Materials",
  "Stickers & Labels",
  "Signage",
  "Promotional Products",
] as const;

export const portfolioItems: PortfolioItem[] = [
  // 1. Business Cards
  {
    id: "elysian-gold-foil-business-cards",
    title: "Aura Capital Executive Triplex Business Cards",
    category: "Business Cards",
    categorySlug: "business-cards",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "Private Equity & Wealth Advisory (Demonstration Concept)",
    finishes: ["Champagne Gold Hot Foil", "Velvet Soft-Touch Lamination", "Painted Metallic Edges"],
    paperStock: "700 GSM Multi-Layer Triplex Board with Gold Color Core",
    specs: [
      { label: "Dimensions", value: "85 × 55 mm" },
      { label: "Paper Weight", value: "700 GSM Triplex" },
      { label: "Print Process", value: "Foil Stamping + Spot Pantone" },
      { label: "Edge Finishing", value: "Hand-Gilded Champagne Gold" },
    ],
    description:
      "A demonstration concept engineered for high-stakes corporate introductions. Three heavyweight card layers laminated together with a metallic gold core, finished with front-and-back champagne gold foil and hand-painted edges.",
    isDemonstration: true,
  },
  {
    id: "solis-embossed-business-cards",
    title: "Solis Architectural Studio Blind Embossed Cards",
    category: "Business Cards",
    categorySlug: "business-cards",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "Contemporary Design Studio (Demonstration Concept)",
    finishes: ["Deep Blind Emboss", "Letterpress Inkless Impression", "Raw Deckle Edge"],
    paperStock: "600 GSM 100% Pure Cotton Uncoated Board (Crane's Lettra)",
    specs: [
      { label: "Dimensions", value: "90 × 50 mm" },
      { label: "Paper Stock", value: "600 GSM Cotton Pulp" },
      { label: "Embossing", value: "Multi-Level Brass Die" },
    ],
    description:
      "Demonstrating subtle architectural restraint. A deep tactile blind emboss creates quiet shadows across soft cotton fiber stock, celebrating pure texture and minimalism without surface ink.",
    isDemonstration: true,
  },

  // 2. Corporate Stationery
  {
    id: "sovereign-partners-stationery",
    title: "Sovereign Legal Executive Corporate Suite",
    category: "Corporate Stationery",
    categorySlug: "corporate-stationery",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "International Law Practice (Demonstration Concept)",
    finishes: ["Micro-Embossed Crest", "Matte Gold Foil Stamping", "Conqueror Watermark"],
    paperStock: "120 GSM Watermarked Conqueror Wove & 400 GSM Matching Folder Board",
    specs: [
      { label: "Suite Components", value: "A4 Letterhead, DL Envelope, Folder, Cards" },
      { label: "Color Match", value: "Pantone 289 C Navy & Metallic Gold" },
      { label: "Folder Pocket", value: "Die-cut card slit & 5mm spine" },
    ],
    description:
      "A complete unified identity concept illustrating executive correspondence. Features laser-guaranteed watermarked letterheads, foil-stamped presentation folders, and security-tinted peel-and-seal envelopes.",
    isDemonstration: true,
  },

  // 3. Packaging
  {
    id: "elysian-haute-parfumerie",
    title: "Oud Royale Magnetic Rigid Presentation Box",
    category: "Packaging",
    categorySlug: "packaging",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "Haute Parfumerie (Demonstration Concept)",
    finishes: ["Champagne Gold Hot Foil", "Velvet Soft-Touch Film", "Concealed Neodymium Magnets"],
    paperStock: "1800 GSM Heavyweight Industrial Greyboard wrapped in Fedrigoni Specialty Paper",
    specs: [
      { label: "Box Construction", value: "Rigid Book-Style Case" },
      { label: "Closure", value: "Dual Neodymium Magnets" },
      { label: "Insert", value: "Laser-cut EVA foam with black velvet flock" },
      { label: "Dimensions", value: "220 × 160 × 65 mm" },
    ],
    description:
      "A luxury packaging demonstration displaying book-style rigid box crafting. The interior features a recessed, velvet-flocked shock-absorbent foam cradle designed for fragile perfume vessels.",
    isDemonstration: true,
  },
  {
    id: "luxe-boutique-shopping-bag",
    title: "Maison Blanc Debossed Luxury Shopping Bags",
    category: "Packaging",
    categorySlug: "packaging",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "Fashion Retail Atelier (Demonstration Concept)",
    finishes: ["Matte Lamination", "Hot Foil Stamped Emblem", "Woven Cotton Ribbon Handles"],
    paperStock: "230 GSM Bleached Art Paper with 400 GSM Base and Rim Reinforcements",
    specs: [
      { label: "Bag Size", value: "320 × 260 × 120 mm" },
      { label: "Handle Type", value: "25mm Knotted Grosgrain Ribbon" },
      { label: "Load Capacity", value: "Tested up to 7.5 kg" },
    ],
    description:
      "A demonstration of high-durability luxury retail shopping bags. Includes reinforced cardboard turn-top rims, heavyweight bottom plates, and hot gold foil stamped brand typography.",
    isDemonstration: true,
  },

  // 4. Marketing Materials
  {
    id: "belgravia-residences-lookbook",
    title: "Palm Jumeirah Ultra-Luxury Architecture Lookbook",
    category: "Marketing Materials",
    categorySlug: "marketing-materials",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "Prime Real Estate Developer (Demonstration Concept)",
    finishes: ["PUR Perfect Lay-Flat Binding", "Anti-Scratch Matte Cover", "3D Spot UV Accents"],
    paperStock: "350 GSM Cover with 170 GSM Silk Art Interior (96 Pages)",
    specs: [
      { label: "Binding", value: "PUR Square Spine Adhesive" },
      { label: "Page Count", value: "96 Pages + 4pp Cover" },
      { label: "Color Standard", value: "ISO 12647-2 Certified CMYK" },
    ],
    description:
      "A comprehensive real estate marketing monograph demonstration. Bound with PUR flexible adhesive allowing flat opening to display high-resolution architectural panoramic renders without gutter clipping.",
    isDemonstration: true,
  },

  // 5. Stickers & Labels
  {
    id: "botanica-gold-labels",
    title: "Botanica Organic Skincare Foil Labels & Seals",
    category: "Stickers & Labels",
    categorySlug: "stickers-labels",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "Organic Cosmetics Brand (Demonstration Concept)",
    finishes: ["Hot Gold Stamped Linework", "Matte Water-Resistant Overlaminate", "Contour Die-Cut"],
    paperStock: "Waterproof White Polypropylene BOPP with High-Tack Adhesive",
    specs: [
      { label: "Adhesive Type", value: "Permanent Water & Oil Resistant" },
      { label: "Form", value: "Supplied on Roll (40mm Core)" },
      { label: "Die-Cut", value: "Custom Curved Contours" },
    ],
    description:
      "Demonstration roll labels formulated for glass cosmetic bottles and jars exposed to humid bathrooms and oily serums. Precision hot foil borders paired with ultra-matte protective film.",
    isDemonstration: true,
  },

  // 6. Signage
  {
    id: "marina-sky-reception-sign",
    title: "Vertex Tower 3D Illuminated Reception Lobby Sign",
    category: "Signage",
    categorySlug: "signage",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "Commercial Tower Headquarters (Demonstration Concept)",
    finishes: ["Mirror Gold PVD Stainless Steel", "3000K Warm Halo LED Illumination", "Concealed Standoff Mounts"],
    paperStock: "Grade 316 Marine Stainless Steel with Cast Acrylic Light Diffuser",
    specs: [
      { label: "Installation Span", value: "3.8 Meters Wide" },
      { label: "Letter Depth", value: "50mm Fabricated 3D Returns" },
      { label: "Lighting", value: "Low-Voltage 12V Samsung Warm LEDs" },
    ],
    description:
      "A full-scale architectural signage demonstration illustrating fabricated stainless steel channel letters with seamless edge welding and rear halo lighting for executive corporate receptions.",
    isDemonstration: true,
  },

  // 7. Promotional Products
  {
    id: "zenith-executive-gift-set",
    title: "Zenith Executive Onboarding VIP Gift Set",
    category: "Promotional Products",
    categorySlug: "promotional-products",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
    ],
    clientType: "Technology Enterprise (Demonstration Concept)",
    finishes: ["Matte Black Powder Coat Laser Etch", "Blind Debossing on PU Leather", "Foil Stamped Box"],
    paperStock: "1400 GSM Rigid Black Box with Laser-Cut High-Density EVA Foam Tray",
    specs: [
      { label: "Kit Contents", value: "Vacuum Bottle, A5 Journal, Rollerball Pen, 10,000mAh Powerbank" },
      { label: "Branding Method", value: "Coordinated Fiber Laser Engraving & Debossing" },
      { label: "Packaging", value: "Custom Matte Black Magnetic Box" },
    ],
    description:
      "A demonstration concept of coordinated corporate merchandise. Combines precision laser-etched insulated drinkware with debossed notebooks and matching weighted writing instruments.",
    isDemonstration: true,
  },
];
