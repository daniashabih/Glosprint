import { PrintingCapability } from "@/types";

export const printingCapabilities: PrintingCapability[] = [
  {
    id: "cap-digital-printing",
    slug: "digital-printing",
    name: "Digital Printing",
    category: "Printing Technology",
    tagline: "High-Definition Short Runs & Same-Day On-Demand Speed",
    explanation:
      "Modern digital electrophotographic presses transfer micron-fine dry toner and liquid electro-inks directly onto paper substrates without chemical plates. This enables instant make-ready, ultra-fast same-day turnaround, variable data personalization (individual names or QR codes), and cost efficiency on short to medium runs.",
    suitableProducts: [
      "Standard Business Cards",
      "A4 & A5 Flyers",
      "Short-Run Brochures",
      "Event Invitations & Agendas",
      "Personalized Direct Mailers",
    ],
    benefits: [
      "Zero plate setup costs for economical small batches",
      "Same-day and 24-hour turnaround available",
      "Individual variable data and QR code personalization",
      "Ultra-fine 2400 × 2400 DPI text and line sharpness",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Optimal Batch Size", value: "1 to 1,000 units" },
      { label: "Substrate Range", value: "80 GSM up to 400 GSM" },
      { label: "Turnaround Time", value: "Same-Day / 24 Hours" },
      { label: "Color Space", value: "CMYK + High-Gamut Extended Toner" },
    ],
    relatedProducts: [
      { name: "Standard Business Cards", slug: "standard-business-cards" },
      { name: "A5 Flyers", slug: "a5-flyers" },
      { name: "Booklets & Magazines", slug: "booklets" },
    ],
  },
  {
    id: "cap-offset-printing",
    slug: "offset-printing",
    name: "Offset Lithographic Printing",
    category: "Printing Technology",
    tagline: "Unmatched Color Fidelity & Wholesale Efficiency on High Volumes",
    explanation:
      "Offset lithography is the benchmark of industrial commercial printing. Using laser-imaged aluminium plates, ink is offset via a rubber blanket cylinder onto paper under immense mechanical pressure. Delivers flawless ink laydown, microscopic dot fidelity, and the lowest cost per unit on runs of 1,000 units and above.",
    suitableProducts: [
      "Product Catalogues & Annual Reports",
      "High-Volume Marketing Flyers",
      "Corporate Letterheads & Envelopes",
      "Folding Cartons & Packaging",
      "Presentation Folders",
    ],
    benefits: [
      "Lowest unit cost on medium to high-volume commercial runs",
      "Impeccable solid ink coverage without banding or streaks",
      "Exact spot Pantone (PMS) ink matching capability",
      "Compatible with textured and uncoated specialty stocks",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Optimal Batch Size", value: "1,000 to 100,000+ units" },
      { label: "Substrate Range", value: "60 GSM to 450 GSM board" },
      { label: "Color Controls", value: "Inline spectrophotometric densitometer" },
      { label: "Standards", value: "Calibrated to ISO 12647-2 color protocols" },
    ],
    relatedProducts: [
      { name: "Product Catalogues", slug: "catalogues" },
      { name: "Letterheads", slug: "letterheads" },
      { name: "Folding Cartons", slug: "folding-cartons" },
    ],
  },
  {
    id: "cap-large-format-printing",
    slug: "large-format-printing",
    name: "Large Format Printing",
    category: "Printing Technology",
    tagline: "Grand-Scale Visuals, Hoardings & Architectural Graphics",
    explanation:
      "Using roll-to-roll and flatbed industrial inkjet plotters up to 5 meters in continuous width, large format printing applies UV-cured or latex inks onto flexible vinyl, windproof mesh, polyester canvas, and rigid boards. Engineered for maximum optical impact from long viewing distances.",
    suitableProducts: [
      "Roll-Up & Pull-Up Banners",
      "Exhibition Fabric Backdrops",
      "Construction Site Hoardings",
      "Photographic Posters & Lightboxes",
      "Wall Murals & Vehicle Graphics",
    ],
    benefits: [
      "Seamless prints up to 5 meters wide without joints",
      "UV-cured inks formulated to resist the intense Dubai sun",
      "Prints directly onto rigid substrates like acrylic, foam, and wood",
      "Weatherproof, tear-resistant, and flame-retardant substrates",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Max Width", value: "Up to 5.0m seamless continuous roll" },
      { label: "Ink Chemistry", value: "Industrial UV-LED and Water-Based Latex" },
      { label: "Outdoor Durability", value: "2 to 5 years against UV degradation" },
      { label: "Resolution", value: "Up to 1440 DPI photographic density" },
    ],
    relatedProducts: [
      { name: "Roll-Up Banners", slug: "roll-up-banners" },
      { name: "Exhibition Backdrops", slug: "exhibition-backdrops" },
      { name: "Posters", slug: "posters" },
    ],
  },
  {
    id: "cap-screen-printing",
    slug: "screen-printing",
    name: "Screen Printing (Serigraphy)",
    category: "Printing Technology",
    tagline: "Vibrant Opaque Inks on Textiles, Plastics & Heavy Boards",
    explanation:
      "Silkscreen printing forces viscous inks through a stenciled mesh screen onto the material surface. It achieves ink film thicknesses up to 10 times greater than offset printing, creating completely opaque, weather-resistant prints that thrive on dark textiles, plastics, metals, and woods.",
    suitableProducts: [
      "Corporate Apparel & Polo Shirts",
      "Heavy Cotton Tote Bags",
      "Industrial Control Panels & Equipment Decals",
      "Specialty Promotional Merchandise",
      "Heavy Opaque White Inks on Black Board",
    ],
    benefits: [
      "Deep, rich ink opacity unmatched by digital methods",
      "Direct printing onto non-flat three-dimensional objects",
      "Extreme wash-fastness and mechanical abrasion resistance",
      "Cost-effective for bulk apparel and uniform production",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Ink Types", value: "Plastisol, Water-Based, UV Screen, Conductive" },
      { label: "Mesh Counts", value: "43T to 120T thread density" },
      { label: "Applicable Materials", value: "Cotton, Polyester, PVC, Metal, Wood" },
    ],
    relatedProducts: [
      { name: "Custom Corporate Apparel", slug: "custom-apparel" },
      { name: "Custom Printed Lanyards", slug: "lanyards" },
      { name: "Vinyl Stickers & Decals", slug: "vinyl-stickers" },
    ],
  },
  {
    id: "cap-hot-foil-stamping",
    slug: "hot-foil-stamping",
    name: "Hot Foil Stamping",
    category: "Luxury Embellishment",
    tagline: "Authentic Metallic Leaf Applied Under Heat & Hydraulic Force",
    explanation:
      "Hot foil stamping utilizes an engraved metal die (brass, copper, or magnesium) heated to 120°C–150°C. Under intense hydraulic pressure, a thin polyester carrier film releases a metallic or pigmented pigment layer, fusing it permanently into the card fibers with a subtle debossed bite.",
    suitableProducts: [
      "Luxury Foil Business Cards",
      "Rigid Gift Box Lids & Bases",
      "Bespoke Wedding & VIP Invitations",
      "Certificate Borders & Official Seals",
      "Presentation Folders",
    ],
    benefits: [
      "Genuine mirror-metallic luster that ink cannot replicate",
      "Subtle tactile impression into the paper stock",
      "Immense durability that never tarnishes or oxidizes",
      "Applicable across dark, black, and colored uncoated stocks",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Die Material", value: "CNC-Milled Brass / Acid-Etched Magnesium" },
      { label: "Temperature Range", value: "110°C to 160°C calibrated to substrate" },
      { label: "Supported Stocks", value: "250 GSM to 2000 GSM board" },
    ],
    relatedProducts: [
      { name: "Luxury Foil Business Cards", slug: "luxury-foil-business-cards" },
      { name: "Custom Rigid Boxes", slug: "custom-rigid-boxes" },
      { name: "Magnetic Gift Boxes", slug: "magnetic-gift-boxes" },
    ],
  },
  {
    id: "cap-gold-and-silver-foil",
    slug: "gold-and-silver-foil",
    name: "Gold & Silver Foil",
    category: "Luxury Embellishment",
    tagline: "Timeless Metallic Brilliance from Warm Yellow Gold to Pure Silver",
    explanation:
      "Our curated catalog of metallic foils includes Classic Warm 24K Gold, Modern Pale Champagne, Rich Antique Bronze, Rose Gold, Mirror Chrome, and Brushed Silver. We calibrate pressure and temperature specifically to match uncoated cotton or laminated paperboards.",
    suitableProducts: [
      "Corporate Stationery Suites",
      "Boutique Shopping Bags",
      "Cosmetics Product Boxes",
      "Annual Report Hardcover Titles",
      "Executive Certificates",
    ],
    benefits: [
      "Broad palette of gold hues: Champagne, Rich Gold, Rose Gold",
      "Clean edge definition for fine serifs and crest details",
      "High opacity that obscures dark underlying paper stocks",
      "High perceived brand value for luxury retail items",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Foil Types", value: "Metallic, Matte, Pearl, Holographic, Transparent" },
      { label: "Min Line Weight", value: "0.2mm for crisp metallic separation" },
    ],
    relatedProducts: [
      { name: "Luxury Foil Business Cards", slug: "luxury-foil-business-cards" },
      { name: "Luxury Packaging Suites", slug: "luxury-packaging" },
      { name: "Printed Luxury Shopping Bags", slug: "printed-shopping-bags" },
    ],
  },
  {
    id: "cap-embossing",
    slug: "embossing",
    name: "Embossing (Raised 3D Relief)",
    category: "Luxury Embellishment",
    tagline: "Sculpted Three-Dimensional Tactile Elevation Without Ink",
    explanation:
      "Embossing lifts letters, emblems, and crests above the surface of the paper. Pressed between a matched set of male and female brass dies, the fibers are permanently reshaped into multi-tiered, beveled, or curved dimensional planes.",
    suitableProducts: [
      "Embossed Business Cards",
      "Corporate Letterheads & Crests",
      "Luxury Rigid Presentation Boxes",
      "Book & Diary Hardcovers",
      "Product Packaging Cartons",
    ],
    benefits: [
      "Sophisticated sensory appeal inviting human touch",
      "Permanent structural relief that never fades",
      "Blind embossing creates quiet, dignified luxury",
      "Can be registered directly over foil or printed colors",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Die Configuration", value: "Machined Brass Male/Female Counter Dies" },
      { label: "Styles", value: "Single-Level, Multi-Level 3D Sculpted, Beveled" },
      { label: "Paper Suitability", value: "Long-fiber cotton and high-bulk stocks" },
    ],
    relatedProducts: [
      { name: "Embossed Business Cards", slug: "embossed-business-cards" },
      { name: "Custom Embossing Seals", slug: "embossing-seals" },
      { name: "Corporate Stationery Sets", slug: "corporate-stationery" },
    ],
  },
  {
    id: "cap-debossing",
    slug: "debossing",
    name: "Debossing (Letterpress Impression)",
    category: "Luxury Embellishment",
    tagline: "Subterranean Tactile Indentation for Architectural Depth",
    explanation:
      "The photographic inverse of embossing. Debossing depresses your logo or typography below the paper plane, creating an elegant sunken cavity reminiscent of classic vintage letterpress. Frequently paired with leatherette notebooks, heavy cotton cards, and rigid box lids.",
    suitableProducts: [
      "Executive Notebooks & Diaries",
      "Heavyweight Cotton Business Cards",
      "Leather Menu Covers & Folios",
      "Luxury Unboxing Boxes",
      "Certificate Folders",
    ],
    benefits: [
      "Leaves the reverse side of thick boards unaffected",
      "Exceptional tactile clarity on textured and leather surfaces",
      "Creates subtle shadow play under directional ambient light",
      "Timeless, architectural aesthetic favored by luxury fashion",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Substrate Depth", value: "Best on 400 GSM+ heavy board or PU leather" },
      { label: "Impression Depth", value: "0.2mm to 0.8mm controlled relief" },
    ],
    relatedProducts: [
      { name: "Custom Notebooks & Journals", slug: "custom-notebooks" },
      { name: "Executive Diaries", slug: "diaries" },
      { name: "Curated Corporate Gift Sets", slug: "corporate-gift-sets" },
    ],
  },
  {
    id: "cap-raised-3d-spot-uv",
    slug: "raised-3d-spot-uv",
    name: "Raised 3D Spot UV",
    category: "Luxury Embellishment",
    tagline: "Glossy High-Build Polymer That Contrasts With Matte Surfaces",
    explanation:
      "Using precision digital drop-on-demand inkjet printheads, a clear photopolymer varnish is applied selectively over specific visual elements and immediately cured via UV light. Layered up to 100 microns high to produce a tactile, liquid-embossed 3D dome.",
    suitableProducts: [
      "Premium Matte Business Cards",
      "Brochure & Catalogue Covers",
      "Cosmetic Product Cartons",
      "Presentation Folders",
      "VIP Event Invitations",
    ],
    benefits: [
      "Striking optical contrast between high-gloss varnish and matte stock",
      "Tactile 3D raised elevation that can be felt by fingertips",
      "Digitally aligned with zero die-cutting hardware charges",
      "Enables simulated textures such as water droplets or leather grains",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Polymer Height", value: "30 to 100 microns raised relief" },
      { label: "Gloss Level", value: "99+ GU (Ultra High Gloss Reflection)" },
      { label: "Base Lamination", value: "Applied over Soft-Touch or Matte Film" },
    ],
    relatedProducts: [
      { name: "Premium Matte Business Cards", slug: "premium-matte-business-cards" },
      { name: "Presentation Folders", slug: "presentation-folders" },
      { name: "Folding Cartons", slug: "folding-cartons" },
    ],
  },
  {
    id: "cap-matte-lamination",
    slug: "matte-lamination",
    name: "Matte Lamination",
    category: "Lamination & Protection",
    tagline: "Silky Non-Reflective Elegance & Fingerprint Shielding",
    explanation:
      "Matte lamination bonds a paper-thin polypropylene (BOPP) thermal film onto printed sheets under heated steel rollers. It creates a smooth, glare-free finish that enriches darker tones while safeguarding against oil smudges, moisture, and corner edge cracking.",
    suitableProducts: [
      "Corporate Business Cards",
      "Luxury Shopping Bags",
      "Presentation Folders",
      "Catalogue & Book Covers",
      "Packaging Cartons",
    ],
    benefits: [
      "Eliminates annoying light reflections and office glare",
      "Prevents corner cracking along scored fold lines",
      "Resistant to finger oils, water drops, and handling scuffs",
      "Ideal foundation for Spot UV and metallic foil overlays",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Film Material", value: "Biaxially Oriented Polypropylene (BOPP)" },
      { label: "Film Thickness", value: "24 to 28 microns thermal bonded" },
      { label: "Optical Finish", value: "Zero specular glare matte dispersion" },
    ],
    relatedProducts: [
      { name: "Premium Matte Business Cards", slug: "premium-matte-business-cards" },
      { name: "Bi-Fold Brochures", slug: "bi-fold-brochures" },
      { name: "Printed Luxury Shopping Bags", slug: "printed-shopping-bags" },
    ],
  },
  {
    id: "cap-gloss-lamination",
    slug: "gloss-lamination",
    name: "Gloss Lamination",
    category: "Lamination & Protection",
    tagline: "Mirror-Like Vibrancy That Intensifies Color Saturation",
    explanation:
      "Gloss lamination seals printed cardstock beneath an optically transparent high-sheen thermal film. It acts like photographic glass, intensifying saturated CMYK pigments, deepening black density, and providing maximum water and dirt wipe-clean protection.",
    suitableProducts: [
      "Restaurant & Cafe Food Menus",
      "Retail Packaging Cartons",
      "Product Postcards & A6 Leaflets",
      "Children's Books & Flashcards",
      "Display Posters & Point-of-Sale",
    ],
    benefits: [
      "Maximizes photographic saturation and color pop",
      "Wipe-clean surface impervious to liquid spills and grease",
      "Protects printed ink from scuffing and abrasive friction",
      "Adds structural stiffness and rigidity to paper sheets",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Specular Gloss", value: "95+ GU mirror reflection" },
      { label: "Water Resistance", value: "100% surface liquid barrier" },
      { label: "Film Gauge", value: "25 micron high-clarity polyester/BOPP" },
    ],
    relatedProducts: [
      { name: "Postcards", slug: "postcards" },
      { name: "A4 Flyers", slug: "a4-flyers" },
      { name: "Product Labels", slug: "product-labels" },
    ],
  },
  {
    id: "cap-soft-touch-lamination",
    slug: "soft-touch-lamination",
    name: "Soft-Touch (Velvet) Lamination",
    category: "Lamination & Protection",
    tagline: "Luxurious Peach-Skin Texture for Haute-Couture Sensation",
    explanation:
      "Soft-Touch is a specialized tactile thermal film formulated with microscopic velvet filaments. The moment human fingers contact the surface, it registers as plush suede, silk, or peach skin. Widely considered the gold standard for haute-couture cosmetics and VIP collateral.",
    suitableProducts: [
      "Soft-Touch Business Cards",
      "Luxury Rigid Presentation Boxes",
      "High Jewelry Packaging Sleeves",
      "Corporate Proposal Folders",
      "VIP Invitation Suites",
    ],
    benefits: [
      "Plush velvety suede tactile sensation",
      "Complete absence of light glare or reflection",
      "Enhanced scuff resistance compared to standard matte film",
      "Substantially elevates perceived product price point",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Film Chemistry", value: "Specialty Elastomeric Polyurethane Film" },
      { label: "Tactile Index", value: "Micro-velvet suede haptic touch" },
      { label: "Compatibility", value: "Ideal pairing with Raised Spot UV or Gold Foil" },
    ],
    relatedProducts: [
      { name: "Soft-Touch Business Cards", slug: "soft-touch-business-cards" },
      { name: "Custom Rigid Boxes", slug: "custom-rigid-boxes" },
      { name: "Luxury Packaging Suites", slug: "luxury-packaging" },
    ],
  },
  {
    id: "cap-die-cutting",
    slug: "die-cutting",
    name: "Precision Die-Cutting",
    category: "Structural Finishing",
    tagline: "Bespoke Contours, Windows, Pocket Slits & Custom Geometry",
    explanation:
      "Die-cutting uses laser-machined steel-rule cutting blades mounted into hardwood blocks, or computer-guided CNC digital cutting tables. It cuts intricate custom silhouettes, pocket slits, display windows, and perforations that turn ordinary flat sheets into dimensional packaging.",
    suitableProducts: [
      "Custom Shape Die-Cut Stickers",
      "Presentation Folders with Slits",
      "Door Hangers & Bottle Collars",
      "Folding Cartons & Sleeves",
      "Bespoke Invitation Envelopes",
    ],
    benefits: [
      "Unlimited freedom of contour shapes and interior windows",
      "Automated high-speed precision on runs from 100 to 500,000",
      "Integrated scoring lines that prevent paper crack on thick board",
      "Clean, burr-free razor edges",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Tooling Options", value: "Laser-Made Steel Rule Dies & CNC Knife Tables" },
      { label: "Cutting Tolerance", value: "±0.25mm optical registration" },
      { label: "Max Sheet Size", value: "Up to 720 × 1020 mm full format" },
    ],
    relatedProducts: [
      { name: "Die-Cut Stickers", slug: "die-cut-stickers", },
      { name: "Presentation Folders", slug: "presentation-folders" },
      { name: "Door Hangers", slug: "door-hangers" },
    ],
  },
  {
    id: "cap-custom-binding",
    slug: "custom-binding",
    name: "Custom Binding Solutions",
    category: "Structural Finishing",
    tagline: "PUR Perfect Binding, Saddle Stitching & Case-Bound Hardcovers",
    explanation:
      "From slim saddle-stitched pamphlets to heirloom thread-sewn hardcovers with PUR (polyurethane reactive) adhesive spines. Our bindery options guarantee effortless page turning, total spine integrity under heavy use, and pristine square-edge finishes.",
    suitableProducts: [
      "PUR Perfect Bound Catalogues",
      "Saddle-Stitched Event Booklets",
      "Hardcover Executive Diaries",
      "Wire-O Spiral Bound Calendars",
      "Corporate Proposal Reports",
    ],
    benefits: [
      "PUR glue delivers 300% greater pull-strength than standard EVA",
      "Books open flatter without spine snap or loose pages",
      "Saddle stitching offers economical solutions for 8 to 64 pages",
      "Case-bound hardcovers deliver library-grade archival longevity",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Binding Formats", value: "PUR Perfect, Saddle Stitch, Wire-O, Thread Sewn Case" },
      { label: "Spine Capacity", value: "2mm up to 50mm spine thickness" },
      { label: "Page Count", value: "8 pages up to 600+ page volumes" },
    ],
    relatedProducts: [
      { name: "Product Catalogues", slug: "catalogues" },
      { name: "Booklets & Magazines", slug: "booklets" },
      { name: "Custom Corporate Calendars", slug: "calendars" },
    ],
  },
  {
    id: "cap-edge-painting",
    slug: "edge-painting",
    name: "Edge Painting & Edge Gilding",
    category: "Luxury Embellishment",
    tagline: "Vibrant Color & Metallic Gilt Applied to Cardboard Edges",
    explanation:
      "When cards or books are trimmed and clamped into high-pressure vises, craftsmen hand-spray or foil-gild the raw exposed edges. Available in radiant metallic gold or silver, neon accent tones, or Pantone brand colors, creating an exquisite profile visible even when stacked.",
    suitableProducts: [
      "Heavyweight Multi-Layer Business Cards (600+ GSM)",
      "Executive Desk Diaries & Planners",
      "Luxury Wedding Invitation Cards",
      "VIP Membership Cards",
      "Bespoke Gift Certificates",
    ],
    benefits: [
      "Elevates 600–900 GSM extra-thick cards into sculptural objects",
      "Noticeable metallic or color flash even when resting in a card holder",
      "Handcrafted artisanal edge detailing",
      "Color matched to any corporate Pantone or metallic foil",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=1200&q=80",
    technicalSpecs: [
      { label: "Min Substrate Thickness", value: "450 GSM (optimal on 600–900 GSM duplex)" },
      { label: "Available Finishes", value: "Metallic Gold, Silver, Rose Gold, Pantone Color Inks" },
      { label: "Application Method", value: "Hand-applied pneumatic spray & foil gilding" },
    ],
    relatedProducts: [
      { name: "Luxury Foil Business Cards", slug: "luxury-foil-business-cards" },
      { name: "Embossed Business Cards", slug: "embossed-business-cards" },
      { name: "Executive Diaries", slug: "diaries" },
    ],
  },
];

export function getCapabilityBySlug(slug: string): PrintingCapability | undefined {
  return printingCapabilities.find((cap) => cap.slug === slug);
}
