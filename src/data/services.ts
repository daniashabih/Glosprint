import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "business-card-printing",
    slug: "business-card-printing",
    name: "Business Card Printing",
    shortDescription:
      "Make an indelible first impression with bespoke luxury business cards crafted on heavyweight cotton, velvet soft-touch, gold foil stamped, and edge-gilded stocks.",
    fullDescription:
      "In the competitive corporate and luxury landscape of Dubai, an exceptional business card is your unspoken executive handshake. At GLOSPRINT, we engineer premium business cards that command authority. From ultra-heavyweight 600gsm cotton triplex boards to mirror-finish champagne gold foiling, debossed letterpress, and color-core edge painting, our artisan print finishes set your personal and corporate brand apart across boardrooms and galas throughout the UAE.",
    heroImage:
      "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Commercial & Offset",
    benefits: [
      "Substantial tactile weight with boards up to 700gsm duplex & triplex",
      "Precision German foil stamping in Champagne Gold, Rose Gold, Silver, and Holographic",
      "Tactile Velvet Soft-Touch, Anti-Scratch Matte, and High-Gloss Spot UV",
      "Dimensional letterpress debossing and 3D blind embossing",
      "Luxury metallic and colored edge gilding matching your exact brand Pantone",
      "Fast turnaround in Dubai with complimentary digital proofs",
    ],
    options: [
      {
        category: "Paper Stock",
        choices: [
          "350gsm Silk Artboard",
          "450gsm Premium Velvet Board",
          "600gsm Ultra-Thick Cotton",
          "700gsm Multi-Layer Color-Core Triplex",
          "Textured Italian Linen & Laid",
          "Translucent Frosted Poly",
        ],
      },
      {
        category: "Luxury Finishes",
        choices: [
          "Champagne Gold Hot Foil Stamping",
          "Raised 3D Spot UV Polymer",
          "Blind Deep Debossing",
          "Beveled Edge Gold Gilding",
          "Precision Laser Die-Cutting",
          "Soft-Touch Velvet Lamination",
        ],
      },
      {
        category: "Standard Sizes",
        choices: [
          "Standard UAE / UK (85mm x 55mm)",
          "US Executive (90mm x 50mm / 3.5\" x 2\")",
          "Square Prestige (65mm x 65mm)",
          "Custom Architectural Dimensions",
        ],
      },
    ],
    finishes: [
      "Champagne Gold Foil",
      "Silver Chrome Foil",
      "Velvet Soft-Touch",
      "Raised Spot UV",
      "Blind Deboss",
      "Edge Painted / Gilded",
    ],
    specs: [
      { label: "Standard Weight", value: "350gsm – 700gsm" },
      { label: "Print Technology", value: "Offset Litho & High-Definition Digital" },
      { label: "Turnaround Time", value: "24 – 48 Hours in Dubai" },
      { label: "Minimum Order", value: "100 Cards" },
      { label: "Color Accuracy", value: "100% Pantone Match (PMS) Guaranteed" },
    ],
    turnaround: "24 to 48 hours",
    minOrder: "100 pieces",
    seoTitle: "Business Card Printing Dubai | Luxury Foil & Embossed Cards | GLOSPRINT",
    seoDescription:
      "Premier luxury business card printing in Dubai. Ultra-thick 600gsm stocks, Champagne Gold hot foil stamping, velvet soft-touch, spot UV, and edge gilding. Order now.",
    faqs: [
      {
        question: "What is the recommended paper thickness for luxury business cards in Dubai?",
        answer:
          "For executive and luxury brands in Dubai, we recommend our 450gsm Velvet Soft-Touch or 600gsm Duplex Cotton boards. They offer a rigid, heavyweight presence that immediately conveys prestige.",
      },
      {
        question: "Can I combine foil stamping and raised spot UV on the same card?",
        answer:
          "Yes, multi-finish layering is one of GLOSPRINT's specialties. We can apply champagne gold foil on your logo while highlighting typography or textural patterns with high-gloss raised 3D spot UV.",
      },
      {
        question: "What is the turnaround time for business card printing in Dubai?",
        answer:
          "Standard digital business cards are ready in 24 hours. Specialty artisan finishes (hot foil stamping, edge gilding, triplex bonding) typically require 2 to 3 working days.",
      },
    ],
    relatedServiceSlugs: ["corporate-stationery", "wedding-card-printing", "digital-printing"],
  },
  {
    id: "brochure-printing",
    slug: "brochure-printing",
    name: "Brochure Printing",
    shortDescription:
      "Elegantly bind and display your brand narrative with bespoke multi-page brochures, luxury real estate lookbooks, and tri-fold corporate collateral.",
    fullDescription:
      "When presenting high-value real estate projects, corporate developments, or luxury collections across Dubai and the UAE, a generic brochure will not suffice. GLOSPRINT crafts tactile, breathtaking brochures that captivate investors and clients. We offer flawless saddle-stitching, PUR perfect binding, Swiss binding, and hardbound presentation formats with rich color fidelity and premium tactile finishes.",
    heroImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Commercial & Offset",
    benefits: [
      "Ultra-vibrant Heidelberg offset litho color reproduction for vivid imagery",
      "Durable lay-flat PUR binding and hardbound case binding options",
      "Selection of FSC-certified European art papers from 135gsm to 350gsm",
      "Custom die-cut pocket folds for inserts, proposals, and contracts",
      "Spot UV and gold foiling on covers for memorable shelf and coffee table presence",
      "Accurate color calibration conforming to ISO 12647-2 standards",
    ],
    options: [
      {
        category: "Binding Style",
        choices: [
          "Saddle Stitched (Wire Stapled)",
          "PUR Perfect Bound (Seamless Square Spine)",
          "Hardcover Case Bound (Luxury Coffee Table Style)",
          "Wire-O Concealed Spiral",
          "Tri-Fold & Gate-Fold Folded Formats",
        ],
      },
      {
        category: "Paper Choices",
        choices: [
          "170gsm Silk Text (Interior) + 350gsm Silk Cover",
          "150gsm Gloss Art (Interior) + 300gsm Gloss Cover",
          "Fedrigoni Uncoated Textured Fine Paper",
          "Eco Recycled Kraft Stock",
        ],
      },
      {
        category: "Cover Enhancements",
        choices: [
          "Matte Velvet Lamination",
          "Champagne Gold or Silver Foil Logo",
          "Selective High-Gloss Spot UV",
          "Embossed Title",
        ],
      },
    ],
    finishes: [
      "Velvet Matte Lamination",
      "Foil Stamped Cover",
      "Spot UV Contrast",
      "Die-Cut Interior Pockets",
      "Embossed Cover Accents",
    ],
    specs: [
      { label: "Cover Stock", value: "250gsm – 350gsm Artboard or Hardcase" },
      { label: "Inner Pages", value: "115gsm – 200gsm Silk / Matte / Uncoated" },
      { label: "Standard Sizes", value: "A4, A5, 210x210mm Square, Custom" },
      { label: "Turnaround", value: "3 – 5 Working Days" },
      { label: "Minimum Order", value: "50 Copies" },
    ],
    turnaround: "3 to 5 business days",
    minOrder: "50 copies",
    seoTitle: "Brochure Printing Dubai | Corporate & Real Estate Brochures | GLOSPRINT",
    seoDescription:
      "High-end brochure printing in Dubai. Saddle-stitched, PUR perfect bound, and luxury real estate lookbooks with gold foil and spot UV covers. Fast UAE delivery.",
    faqs: [
      {
        question: "What binding is best for corporate profile brochures?",
        answer:
          "For profiles with 28 to 120 pages, PUR perfect binding provides a clean, square spine that feels like a published book. For shorter brochures (8 to 24 pages), precision saddle-stitching is lightweight and cost-effective.",
      },
      {
        question: "Can we print metallic inks or special Pantone shades in our brochures?",
        answer:
          "Yes, our offset Heidelberg presses support 5-color and 6-color configurations, enabling true Pantone metallics, neon spot colors, and specialized protective varnishes.",
      },
    ],
    relatedServiceSlugs: ["catalogue-printing", "flyer-printing", "offset-printing"],
  },
  {
    id: "flyer-printing",
    slug: "flyer-printing",
    name: "Flyer Printing",
    shortDescription:
      "Crisp, vibrant, high-volume flyers and leaflets engineered for maximum promotional impact across Dubai retail, events, and exhibitions.",
    fullDescription:
      "Promote your product launch, culinary festival, retail promotion, or corporate exhibition with GLOSPRINT's rapid flyer printing. Utilizing calibrated digital presses for express same-day orders and heavy offset presses for large commercial distribution runs, we guarantee razor-sharp typography, vivid imagery, and clean folding at highly competitive Dubai rates.",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Commercial & Offset",
    benefits: [
      "Ultra-fast same-day and 24-hour turnaround options in Dubai",
      "High-speed volume pricing for bulk distribution campaigns",
      "Wide range of paper weights from 135gsm to 350gsm premium cards",
      "Precision computerized scoring and folding (Half fold, Tri-fold, Z-fold, Accordion)",
      "Protective gloss or matte AQ machine coating against scuffing",
    ],
    options: [
      {
        category: "Paper Weight",
        choices: ["135gsm Gloss Art", "170gsm Silk Art", "250gsm Semi-Rigid Card", "350gsm Heavyweight Card"],
      },
      {
        category: "Standard Formats",
        choices: ["A4 (210 x 297mm)", "A5 (148 x 210mm)", "A6 (105 x 148mm)", "DL (99 x 210mm)", "Custom Folded Leaflet"],
      },
      {
        category: "Folding Configurations",
        choices: ["Flat Sheet (Single or Double Sided)", "Half-Fold (4 Panels)", "Tri-Fold / Letter Fold (6 Panels)", "Z-Fold (6 Panels)"],
      },
    ],
    finishes: ["Gloss Aqueous Varnish", "Matte Lamination", "Double-Sided UV", "Creased & Folded"],
    specs: [
      { label: "Paper Weight", value: "135gsm – 350gsm" },
      { label: "Print Process", value: "High-Volume Offset & Digital Press" },
      { label: "Turnaround", value: "Same-Day to 48 Hours" },
      { label: "Minimum Order", value: "100 Units" },
      { label: "Bulk Capacity", value: "Up to 500,000+ Units per Run" },
    ],
    turnaround: "24 to 48 hours (Express same-day available)",
    minOrder: "100 pieces",
    seoTitle: "Flyer Printing Dubai | Leaflets & Marketing Prints | GLOSPRINT",
    seoDescription:
      "Fast, high-impact flyer and leaflet printing in Dubai. A4, A5, A6, DL sizes, tri-fold and z-fold flyers on premium gloss and matte stocks. Same-day service available.",
    faqs: [
      {
        question: "Can I print same-day emergency flyers for an exhibition in Dubai World Trade Centre?",
        answer:
          "Yes! We offer express same-day digital printing and delivery across Dubai World Trade Centre (DWTC), DIFC, Downtown, and Business Bay for urgent exhibition requirements.",
      },
      {
        question: "What is the most popular size and paper for marketing flyers?",
        answer:
          "A5 (148x210mm) on 170gsm Silk or Gloss paper is the gold standard for marketing campaigns in the UAE, providing ideal tactile weight without excess bulk.",
      },
    ],
    relatedServiceSlugs: ["brochure-printing", "digital-printing", "banner-printing"],
  },
  {
    id: "catalogue-printing",
    slug: "catalogue-printing",
    name: "Catalogue Printing",
    shortDescription:
      "Comprehensive product catalogues, furniture lookbooks, and luxury retail directories bound with durable PUR precision and high color fidelity.",
    fullDescription:
      "For manufacturing, wholesale, fashion, interior design, and jewellery brands across the GCC, a comprehensive product catalogue is an indispensable sales engine. GLOSPRINT prints multi-page catalogues featuring thousands of SKUs with photographic color consistency, durable scuff-resistant covers, and PUR binding designed to withstand years of active browsing.",
    heroImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Commercial & Offset",
    benefits: [
      "Unmatched page-to-page color consistency across large page volumes",
      "High-strength PUR adhesive binding that never cracks or loses leaves",
      "Die-cut index tabs and thumb notches for effortless customer navigation",
      "Cost-effective web and sheetfed offset print runs for enterprise scale",
      "Luxury hardcover slipcase options for high-ticket product presentation",
    ],
    options: [
      {
        category: "Binding",
        choices: ["PUR Perfect Bound", "Thread Sewn & Case Bound", "Wire-O Metal Comb (For Flat Lay Desk Use)"],
      },
      {
        category: "Interior Stocks",
        choices: ["90gsm Silk Lightweight", "115gsm Gloss High-Volume", "150gsm Premium Silk Artpaper"],
      },
      {
        category: "Cover Stocks",
        choices: ["350gsm Silk with Anti-Scratch Matte", "Hardcase Book Cloth Wrapped", "Foil Stamped Leatherette"],
      },
    ],
    finishes: ["Anti-Scratch Matte", "Soft-Touch Cover", "Index Tabs", "Spot Gloss UV", "Hot Foil Stamping"],
    specs: [
      { label: "Page Count", value: "32 to 500+ Pages" },
      { label: "Size Options", value: "A4, A5, Custom Landscape & Portrait" },
      { label: "Color Standard", value: "ISO 12647-2 Certified" },
      { label: "Turnaround", value: "5 – 7 Business Days" },
      { label: "Minimum Order", value: "100 Copies" },
    ],
    turnaround: "5 to 7 business days",
    minOrder: "100 copies",
    seoTitle: "Catalogue Printing Dubai | Product Catalogues & Lookbooks | GLOSPRINT",
    seoDescription:
      "Professional catalogue and product lookbook printing in Dubai. High-page count PUR binding, index tabs, and exceptional color fidelity for luxury retail & wholesale.",
    faqs: [
      {
        question: "How do you ensure accurate color representation for product photographs?",
        answer:
          "We calibrate our offset presses with advanced spectrophotometers and generate certified hardcopy GMG proofs before initiating full press runs, ensuring your product colors match reality.",
      },
    ],
    relatedServiceSlugs: ["brochure-printing", "offset-printing", "corporate-stationery"],
  },
  {
    id: "corporate-stationery",
    slug: "corporate-stationery",
    name: "Corporate Stationery",
    shortDescription:
      "Unified luxury corporate suites including watermarked letterheads, foiled presentation folders, branded envelopes, and executive notepads.",
    fullDescription:
      "Project absolute prestige and corporate integrity in every piece of outgoing correspondence. GLOSPRINT designs and produces complete corporate identity suites tailored to government entities, financial institutions, legal practices, and luxury corporations in Dubai. We utilize authentic watermarked paper, hot foil embossed headers, and tailored presentation folders that safeguard your brand image.",
    heroImage:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Commercial & Offset",
    benefits: [
      "Harmonious brand consistency across all print touchpoints",
      "Laser-printer and inkjet compatible luxury letterhead stocks (100gsm – 120gsm)",
      "Self-seal peel-and-stick bespoke envelopes with security tinting or metallic foil linings",
      "Interlocking or glued presentation folders with business card slits",
      "Embossed executive leatherette desk pads and branded notebooks",
    ],
    options: [
      {
        category: "Included Elements",
        choices: [
          "Official Letterheads & Continuation Sheets",
          "Presentation Folders (Single / Double Pocket)",
          "Branded Envelopes (DL, C5, C4)",
          "Executive Writing Pads & Desk Notepads",
          "Certificate & Award Folders",
        ],
      },
      {
        category: "Paper Varieties",
        choices: [
          "120gsm Conqueror High-White Wove",
          "100gsm FSC Executive Bond",
          "Italian Fedrigoni Textured Linen",
          "350gsm Silk Artboard for Folders",
        ],
      },
    ],
    finishes: ["Gold / Silver Foil Stamping", "Embossed Corporate Crests", "Custom Die-Cut Pockets", "Pantone Spot Colors"],
    specs: [
      { label: "Paper Range", value: "100gsm Bond to 400gsm Presentation Board" },
      { label: "Compatibility", value: "Guaranteed Office Laser / Inkjet Safe" },
      { label: "Turnaround", value: "3 – 4 Working Days" },
      { label: "Minimum Order", value: "250 Sets" },
    ],
    turnaround: "3 to 4 business days",
    minOrder: "250 sets",
    seoTitle: "Corporate Stationery Printing Dubai | Folders, Letterheads & Envelopes | GLOSPRINT",
    seoDescription:
      "Premium corporate stationery printing in Dubai. Complete executive suites: luxury letterheads, foiled presentation folders, custom envelopes, and desk pads.",
    faqs: [
      {
        question: "Can our office laser printer print on your letterheads without smudging?",
        answer:
          "Absolutely. We use heat-resistant offset litho inks and high-grade 100gsm/120gsm bond papers specifically formulated for desktop laser and inkjet printers without melting or blistering.",
      },
    ],
    relatedServiceSlugs: ["business-card-printing", "offset-printing", "promotional-products"],
  },
  {
    id: "offset-printing",
    slug: "offset-printing",
    name: "Offset Printing",
    shortDescription:
      "Industrial-grade Heidelberg offset lithography delivering pristine color consistency, cost-efficiency at high volumes, and specialized PMS inks.",
    fullDescription:
      "When precision, high volume, and exacting color standards are non-negotiable, GLOSPRINT's offset lithographic printing presses deliver perfection. Utilizing multi-unit German Heidelberg presses with computer-to-plate (CTP) automation, our offset infrastructure handles hundred-thousand-unit packaging, publishing, and commercial collateral orders with razor-sharp fidelity and unmatched per-unit cost efficiency.",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Commercial & Offset",
    benefits: [
      "Superior economy of scale: drastically lower unit costs as quantities increase",
      "True Pantone Matching System (PMS) spot colors and metallic inks",
      "Unsurpassed dot reproduction and micro-typography sharpness",
      "Capacity for broad substrate thickness from 70gsm newsprint to 600gsm solid board",
      "Inline aqueous coating and UV sealers for immediate dry handling and longevity",
    ],
    options: [
      {
        category: "Printing Colors",
        choices: ["CMYK 4-Color Process", "5-Color (CMYK + 1 Pantone Spot)", "6-Color (CMYK + 2 Spot Metallics)", "Specialty Opaque White"],
      },
      {
        category: "Substrates",
        choices: ["Coated Gloss & Silk Art", "Uncoated Woodfree", "Kraft Paper", "Duplex Greyback & Whiteback Board"],
      },
    ],
    finishes: ["Inline Aqueous Sealer", "Spot UV", "Machine Varnishing", "Die-Cutting", "Embossing"],
    specs: [
      { label: "Press Type", value: "Heidelberg Speedmaster Multi-Color" },
      { label: "Max Sheet Size", value: "720mm x 1020mm (B1 Format)" },
      { label: "Daily Output", value: "Over 250,000 Sheets" },
      { label: "Turnaround", value: "3 – 5 Working Days" },
      { label: "Minimum Order", value: "1,000 Units" },
    ],
    turnaround: "3 to 5 business days",
    minOrder: "1,000 units",
    seoTitle: "Offset Printing Press Dubai | High-Volume Commercial Printing | GLOSPRINT",
    seoDescription:
      "Dubai's trusted commercial offset printing press. Heidelberg multi-color presses for high-volume brochures, packaging, books, and marketing collateral. Get a fast quote.",
    faqs: [
      {
        question: "When should I choose offset printing over digital printing?",
        answer:
          "Offset is ideal when your print run exceeds 500 to 1,000 units, when exact Pantone spot color reproduction is mandatory, or when you require specialized substrates and large-format press sheets.",
      },
    ],
    relatedServiceSlugs: ["digital-printing", "packaging-printing", "brochure-printing"],
  },
  {
    id: "digital-printing",
    slug: "digital-printing",
    name: "Digital Printing",
    shortDescription:
      "Rapid on-demand digital press solutions with variable data capability, stunning photographic resolution, and same-day delivery in Dubai.",
    fullDescription:
      "Need high-end promotional material ready by tomorrow morning? GLOSPRINT operates the latest generation digital production presses featuring ultra-fine toner technology and digital embellishment engines. Perfect for short runs, personalized client invitations, urgent corporate presentations, and fast-moving retail point-of-sale collateral.",
    heroImage:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Digital & Quick Print",
    benefits: [
      "Zero plate setup costs: cost-effective even for 10 or 50 pieces",
      "Express same-day and 24-hour delivery throughout Dubai and Sharjah",
      "Variable Data Printing (VDP) for individualized names, QR codes, and seat numbers",
      "Digital embellishment: single-pass digital gold foil and dimensional gloss varnish",
      "Crisp 2400 x 2400 DPI photographic resolution",
    ],
    options: [
      {
        category: "Products Available",
        choices: ["Event Menus & Table Cards", "Pitch Decks & Reports", "Urgent Flyers & Invitations", "Custom Short-Run Stickers"],
      },
      {
        category: "Specialty Digital Inks",
        choices: ["Digital Metallic Gold Toner", "Digital Metallic Silver Toner", "Clear Gloss Varnish Layer", "Invisible UV Security Ink"],
      },
    ],
    finishes: ["Soft-Touch Lamination", "Digital Gold Foil", "Perforation", "Score & Fold", "Corner Rounding"],
    specs: [
      { label: "Resolution", value: "Up to 2400 x 2400 DPI" },
      { label: "Turnaround", value: "Same-Day to 24 Hours" },
      { label: "Max Sheet Size", value: "330mm x 1200mm (Banner Format)" },
      { label: "Minimum Order", value: "No Minimum (1 Piece+)" },
    ],
    turnaround: "Same-day to 24 hours",
    minOrder: "1 piece",
    seoTitle: "Digital Printing Dubai | Same-Day Quick Commercial Printing | GLOSPRINT",
    seoDescription:
      "Fast, high-definition digital printing in Dubai. Express same-day turnaround for urgent corporate presentations, event stationery, menus, and flyers with no minimums.",
    faqs: [
      {
        question: "Can I get digital printing delivered today in Dubai?",
        answer:
          "Yes. For orders confirmed before 11:00 AM with print-ready artwork, our express digital production unit can print and deliver across Dubai the same afternoon.",
      },
    ],
    relatedServiceSlugs: ["offset-printing", "business-card-printing", "flyer-printing"],
  },
  {
    id: "large-format-printing",
    slug: "large-format-printing",
    name: "Large Format Printing",
    shortDescription:
      "High-impact grand format printing on canvas, acrylic, foam board, wallpaper, and vinyl with UV-cured and latex weather-resistant inks.",
    fullDescription:
      "Transform corporate boardrooms, retail showrooms, luxury villas, and gallery exhibitions with GLOSPRINT's large format printing capabilities. We utilize advanced Swiss and Japanese wide-format flatbed and roll-to-roll printers capable of printing directly onto rigid substrates (acrylic, dibond aluminum, wood, forex) and flexible roll media with weatherproof durability.",
    heroImage:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Signage & Large Format",
    benefits: [
      "Direct-to-substrate UV printing on acrylic, wood, aluminum composite, and foam board",
      "Fade-resistant UV cured inks engineered for Dubai's intense desert sunlight",
      "Eco-friendly odorless water-based Latex inks suitable for healthcare and hotels",
      "Seamless roll-to-roll widths up to 5 meters without visible seams",
      "Complete on-site measurement and installation team across the UAE",
    ],
    options: [
      {
        category: "Rigid Substrates",
        choices: ["Acrylic / Plexiglass (3mm – 20mm)", "Forex PVC Board (3mm – 10mm)", "Dibond Brushed Aluminum", "Foam Core Exhibition Board"],
      },
      {
        category: "Flexible Substrates",
        choices: ["Artist Cotton Canvas", "Textured Custom Wallpaper", "Backlit Film for Lightboxes", "Perforated One-Way Vision Window Film"],
      },
    ],
    finishes: ["CNC Router Contour Cutting", "Flame Polished Acrylic Edges", "Matte / Gloss Overlaminate", "Stretching on Wooden Frames"],
    specs: [
      { label: "Max Width", value: "Up to 5.0 Meters Seamless" },
      { label: "Inks", value: "Eco-Solvent, UV Cured, HP Latex" },
      { label: "Durability", value: "Indoor 10+ Years, Outdoor 3–5 Years" },
      { label: "Turnaround", value: "48 – 72 Hours" },
    ],
    turnaround: "48 to 72 hours",
    minOrder: "1 item",
    seoTitle: "Large Format Printing Dubai | UV Flatbed & Canvas Prints | GLOSPRINT",
    seoDescription:
      "Dubai's premier large format printing service. UV flatbed direct printing on acrylic, canvas, wallpaper, foam board, and aluminum. Expert UAE installation.",
    faqs: [
      {
        question: "Will large format outdoor prints fade in the Dubai summer sun?",
        answer:
          "We use specialized UV-resistant cured inks combined with automotive-grade UV-protective overlaminates tested to resist intense heat, UV radiation, and sand abrasion for years.",
      },
    ],
    relatedServiceSlugs: ["banner-printing", "signage-printing"],
  },
  {
    id: "banner-printing",
    slug: "banner-printing",
    name: "Banner Printing",
    shortDescription:
      "Durable indoor and outdoor PVC flex banners, exhibition roll-ups, pop-up backdrops, and mesh construction hoardings built to endure.",
    fullDescription:
      "Whether setting up a showstopper booth at GITEX, Arab Health, or the Dubai Airshow, or launching a massive outdoor building wrap, GLOSPRINT provides turnkey banner printing. From executive aluminium roll-up pull-up banners to wind-resistant perforated mesh banners with heat-welded hems and brass eyelets, our displays grab attention.",
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Signage & Large Format",
    benefits: [
      "Heavy-duty 510gsm outdoor PVC frontlit & backlit flex materials",
      "Reinforced heat-welded perimeter hems and anti-rust brass grommets",
      "Executive luxury teardrop base roll-up stands with zero curl media",
      "Wind-permeable mesh banners ideal for construction fence hoardings",
      "Lightweight pop-up fabric tension backdrops for effortless travel and setup",
    ],
    options: [
      {
        category: "Display Types",
        choices: ["Executive Roll-Up Banner (85x200cm or 120x200cm)", "Tension Fabric Pop-Up Wall (3x3m, 4x3m)", "Outdoor Hanging Grommet Banner", "Construction Fence Mesh"],
      },
      {
        category: "Material Options",
        choices: ["Anti-Curl Polypropylene Film", "510gsm Heavy PVC Flex", "Backlit Translucent Banner", "Polyester Stretch Fabric"],
      },
    ],
    finishes: ["Heat Welded Seams", "Solid Brass Eyelets", "Pole Pockets", "Velcro Border Tape"],
    specs: [
      { label: "Weights", value: "340gsm to 650gsm" },
      { label: "Stand Hardware", value: "Heavy-Gauge Anodized Aluminum" },
      { label: "Turnaround", value: "24 – 48 Hours" },
      { label: "Minimum Order", value: "1 Unit" },
    ],
    turnaround: "24 to 48 hours",
    minOrder: "1 banner",
    seoTitle: "Banner Printing Dubai | Roll-Up Banners & Exhibition Backdrops | GLOSPRINT",
    seoDescription:
      "High-quality banner printing in Dubai. Luxury roll-ups, exhibition pop-ups, outdoor PVC flex, and mesh banners. Quick 24-hour turnaround for events and trade shows.",
    faqs: [
      {
        question: "Do your roll-up banners curl at the edges?",
        answer:
          "No. Unlike cheap vinyl that curls inward, we exclusively use premium composite anti-curl PET film for our roll-up banners, ensuring perfectly straight vertical edges.",
      },
    ],
    relatedServiceSlugs: ["large-format-printing", "signage-printing", "promotional-products"],
  },
  {
    id: "signage-printing",
    slug: "signage-printing",
    name: "Signage Printing",
    shortDescription:
      "Illuminated 3D channel letters, architectural office acrylic signage, wayfinding systems, and luxury retail storefront branding.",
    fullDescription:
      "Your physical sign is the ultimate statement of brand prestige in Dubai. GLOSPRINT architects and fabricates premier signage solutions: from front-lit and halo-lit 3D acrylic letters with stainless steel trim to polished brass reception logos, wayfinding directional systems, and interior compliance ADA signage. We handle engineering, municipal permit coordination, and precision installation.",
    heroImage:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Signage & Large Format",
    benefits: [
      "Energy-efficient Samsung/Osram LED modules with 5-year warranty",
      "Precision laser-cut stainless steel (Titanium Gold, Rose Gold, Mirror Chrome, Brushed)",
      "High-transmission cast acrylic faces with seamless returns",
      "Elegant floating glass and standoff acrylic reception wall plaques",
      "Full Dubai Municipality / Civil Defense sign approval assistance",
    ],
    options: [
      {
        category: "Signage Types",
        choices: [
          "Halo-Lit 3D Letters (Warm / Cool LED)",
          "Front-Lit Face Illuminated Channel Letters",
          "Executive Reception Wall Acrylic Floating Logos",
          "Neon Flex Contemporary Accents",
          "Architectural Wayfinding & Door Plaques",
        ],
      },
      {
        category: "Metal & Acrylic Finishes",
        choices: ["Brushed Champagne Gold Titanium", "Mirror Polished Gold", "Matte Charcoal Black Powder-Coated", "Frosted Cast Acrylic"],
      },
    ],
    finishes: ["LED Halo Illumination", "Stainless Steel Fabrication", "Standoff Spacers", "UV Hard Coating"],
    specs: [
      { label: "Materials", value: "304 Stainless Steel, Cast Acrylic, Aluminum" },
      { label: "Lighting", value: "IP67 Waterproof Commercial Grade LEDs" },
      { label: "Installation", value: "Certified UAE Structural Install Team" },
      { label: "Warranty", value: "3 Years Comprehensive Hardware Warranty" },
    ],
    turnaround: "5 to 10 working days",
    minOrder: "1 signage project",
    seoTitle: "Signage Printing & Fabrication Dubai | 3D Letters & Office Signs | GLOSPRINT",
    seoDescription:
      "Bespoke 3D illuminated letters, executive reception signage, luxury retail storefront signs, and architectural wayfinding across Dubai. Turnkey fabrication & installation.",
    faqs: [
      {
        question: "Do you install signage and assist with Dubai Municipality approvals?",
        answer:
          "Yes. Our engineering division manages the complete lifecycle, including technical shop drawings, landlord approvals, Dubai Municipality permits, and structural rigging.",
      },
    ],
    relatedServiceSlugs: ["large-format-printing", "banner-printing"],
  },
  {
    id: "packaging-printing",
    slug: "packaging-printing",
    name: "Packaging Printing",
    shortDescription:
      "Transform your unboxing experience with bespoke luxury folding cartons, paper shopping bags, cosmetic sleeves, and retail product boxes.",
    fullDescription:
      "In the retail capitals of Dubai and Abu Dhabi, packaging is the decisive factor that elevates a product into an object of desire. GLOSPRINT crafts exquisite custom packaging for perfumes, luxury cosmetics, gourmet chocolates, confectionery, jewellery, and high-fashion retail. With precision die-cutting, soft-touch coatings, and artisan foil accents, your packaging becomes iconic.",
    heroImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Packaging & Boxes",
    benefits: [
      "Food-grade and cosmetics-certified virgin SBS and folding boxboards (FBB)",
      "Bespoke structural CAD design and physical white-mockup sampling before production",
      "Stunning foil blocking, debossing, and textured tactile embossing",
      "Environmentally conscious biodegradable and FSC-certified paperboards",
      "Luxury branded paper shopping bags with grosgrain or satin ribbon handles",
    ],
    options: [
      {
        category: "Packaging Style",
        choices: [
          "Custom Folding Cartons (Tuck End / Auto Lock Bottom)",
          "Perfume & Cosmetic Outer Cartons",
          "Luxury Branded Shopping Bags with Ribbon Handles",
          "Custom Product Sleeves & Belly Bands",
          "E-Commerce Corrugated Mailer Boxes",
        ],
      },
      {
        category: "Paperboard Substrates",
        choices: [
          "300gsm – 400gsm Virgin Solid Bleached Sulfate (SBS)",
          "Kraft Brown Eco Unbleached Card",
          "Metallic Mirror Foil Board",
          "Textured Tinted Specialty Boards",
        ],
      },
    ],
    finishes: ["Champagne Gold Foil", "Soft-Touch Velvet", "High-Gloss Spot UV", "Multi-Level Embossing", "Window Patching with Clear Film"],
    specs: [
      { label: "Paperboard Weights", value: "250gsm – 450gsm SBS / FBB" },
      { label: "Food Safety", value: "FDA / EC Compliant Low-Migration Inks" },
      { label: "Structural CAD", value: "Complimentary 3D & Physical Mockups" },
      { label: "Turnaround", value: "5 – 8 Working Days" },
      { label: "Minimum Order", value: "250 Units" },
    ],
    turnaround: "5 to 8 working days",
    minOrder: "250 pieces",
    seoTitle: "Packaging Printing Dubai | Luxury Boxes & Retail Packaging | GLOSPRINT",
    seoDescription:
      "Custom luxury packaging printing in Dubai. Perfume boxes, cosmetic cartons, bespoke shopping bags, and premium retail packaging with gold foil and embossing.",
    faqs: [
      {
        question: "Can I receive a physical prototype of my box before mass production?",
        answer:
          "Yes. We construct unprinted structural CAD mockups as well as full-color digital pre-production samples so you can test fit, weight, and aesthetics prior to factory run.",
      },
    ],
    relatedServiceSlugs: ["custom-box-printing", "sticker-label-printing", "offset-printing"],
  },
  {
    id: "custom-box-printing",
    slug: "custom-box-printing",
    name: "Custom Box Printing",
    shortDescription:
      "Handcrafted rigid presentation boxes, magnetic closure gift hampers, velvet-lined jewellery cases, and perfume presentation packaging.",
    fullDescription:
      "For elite products that deserve royalty-tier presentation, GLOSPRINT manufactures handcrafted rigid boxes (setup boxes) of unyielding strength and glamour. Constructed from thick 1200gsm to 2400gsm greyboard wrapped in fine European paper, bookcloth, or synthetic leather, our boxes feature concealed neodymium magnetic closures, bespoke EVA foam inserts, and velvet draping.",
    heroImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Packaging & Boxes",
    benefits: [
      "Heavyweight rigid structural core from 1.5mm to 3.0mm density board",
      "Seamless magnetic flip-top closures with satisfying snap seal",
      "Custom CNC routed high-density EVA foam and velvet-flocked inserts",
      "Shoulder and neck box styles with contrasting metallic reveals",
      "Hand-finished attention to corners, edge wraps, and interior linings",
    ],
    options: [
      {
        category: "Box Structures",
        choices: [
          "Magnetic Clamshell Book-Style Box",
          "Two-Piece Lid and Base (Telescopic Box)",
          "Shoulder & Neck Box with Gold Trim",
          "Slide Drawer Matchbox Style with Ribbon Pull",
          "Round Cylindrical Hat & Perfume Boxes",
        ],
      },
      {
        category: "Outer Wraps",
        choices: [
          "Fine Italian Textured Paper",
          "Soft-Touch Coated Printed Art Paper",
          "Metallic Shimmer Paper",
          "Vegan Leatherette & Suede Fabric",
        ],
      },
      {
        category: "Interior Inserts",
        choices: ["Custom Precision CNC Cut EVA Foam", "Velvet Flocked Foam", "Satin Fabric Draped Cushion", "Die-Cut Cardboard Tray"],
      },
    ],
    finishes: ["Hot Stamped Gold Foil", "Debossed Logo", "Laser Cut Foam", "Silk Ribbon Pulls", "Concealed Neodymium Magnets"],
    specs: [
      { label: "Core Board", value: "1.5mm – 3.0mm (1200gsm – 2000gsm) Rigid Greyboard" },
      { label: "Closures", value: "Rare-Earth Neodymium Hidden Magnets" },
      { label: "Sampling", value: "Physical Handcrafted Prototype Available" },
      { label: "Turnaround", value: "7 – 12 Working Days" },
      { label: "Minimum Order", value: "100 Boxes" },
    ],
    turnaround: "7 to 12 working days",
    minOrder: "100 boxes",
    seoTitle: "Custom Rigid Box Printing Dubai | Luxury Magnetic Gift Boxes | GLOSPRINT",
    seoDescription:
      "Manufacturer of handcrafted rigid gift boxes in Dubai. Magnetic closure boxes, luxury perfume hampers, velvet-lined jewelry cases, and customized unboxing packaging.",
    faqs: [
      {
        question: "Can you create custom foam inserts shaped exactly like our product bottles?",
        answer:
          "Yes. You can send us your physical product or 3D CAD file, and our engineers will precision CNC-route high-density EVA foam lined with velvet for a glove-like fit.",
      },
    ],
    relatedServiceSlugs: ["packaging-printing", "wedding-card-printing", "promotional-products"],
  },
  {
    id: "sticker-label-printing",
    slug: "sticker-label-printing",
    name: "Sticker & Label Printing",
    shortDescription:
      "Waterproof roll labels, die-cut vinyl stickers, metallic embossed seals, and tamper-evident packaging labels for luxury bottles and jars.",
    fullDescription:
      "Elevate cosmetics, food jars, beverage bottles, luxury candles, and retail shipping with GLOSPRINT's roll and sheet label printing. We manufacture waterproof, oil-resistant, and refrigerated-grade labels with precision digital die-cutting. Choose from crystal-clear transparent vinyl, metallic gold and silver foils, textured wine paper stocks, and tactile domed epoxy resin.",
    heroImage:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Packaging & Boxes",
    benefits: [
      "Supplied on machine-compatible rolls or convenient individual kiss-cut sheets",
      "100% waterproof, smudge-proof, and oil-resistant polypropylene (BOPP) media",
      "Clear transparent labels with opaque white ink underprinting",
      "Luxury textured estate papers for honey jars, olive oils, and perfumes",
      "Cold foil stamping and spot UV varnish on roll labels",
    ],
    options: [
      {
        category: "Label Format",
        choices: ["Continuous Rolls (For Automatic Label Applicators)", "Individual Die-Cut Stickers", "Multi-Sticker A4 Kiss-Cut Sheets"],
      },
      {
        category: "Media Types",
        choices: [
          "White Polypropylene (Waterproof & Tearproof)",
          "Clear Transparent Bopp",
          "Textured Uncoated Wine Paper",
          "Metallic Gold / Silver Mylar Foil",
          "Tamper-Evident Security Hologram",
        ],
      },
    ],
    finishes: ["Gloss Lamination", "Matte Lamination", "Metallic Foil Stamping", "Spot Gloss Varnish", "Custom Contour Die-Cut"],
    specs: [
      { label: "Core Sizes", value: "25mm, 40mm, 76mm Roll Cores" },
      { label: "Adhesive Strength", value: "Permanent, Removable, Deep Freeze (-40°C)" },
      { label: "Cutting Precision", value: "Optical Digital Laser Die-Cut ±0.1mm" },
      { label: "Turnaround", value: "48 – 72 Hours" },
      { label: "Minimum Order", value: "250 Labels" },
    ],
    turnaround: "48 to 72 hours",
    minOrder: "250 labels",
    seoTitle: "Sticker & Label Printing Dubai | Custom Roll Labels & Vinyl | GLOSPRINT",
    seoDescription:
      "Dubai's top manufacturer for custom roll labels and stickers. Waterproof BOPP, gold foil labels, cosmetic and jar stickers, and die-cut vinyl. Fast delivery in UAE.",
    faqs: [
      {
        question: "Are your labels resistant to water, oils, and moisture?",
        answer:
          "Yes. Our BOPP synthetic film labels with protective matte or gloss overlaminates are impervious to water, grease, oils, and condensation, making them ideal for cosmetics and refrigerated foods.",
      },
    ],
    relatedServiceSlugs: ["packaging-printing", "custom-box-printing"],
  },
  {
    id: "wedding-card-printing",
    slug: "wedding-card-printing",
    name: "Wedding Card Printing",
    shortDescription:
      "Bespoke Royal Arabic & Western wedding invitations, velvet boxes, acrylic laser-etched cards, and calligraphy gold-foiled envelopes.",
    fullDescription:
      "A wedding in the UAE is a celebration of heritage, family honor, and absolute elegance. GLOSPRINT crafts breathtaking wedding invitations that herald your sacred union with majestic beauty. From traditional Arabic calligraphy hot-stamped in Champagne Gold to frosted crystal acrylic suites, laser-cut floral gates, and hand-bound velvet invitation boxes with wax seal closures.",
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Luxury & Wedding",
    benefits: [
      "Mastery of intricate Arabic calligraphy typography and Quranic blessing layouts",
      "2mm & 3mm crystal clear and frosted acrylic cards with screen-printed gold",
      "Handmade Italian cotton papers with organic deckled feathered edges",
      "Custom velvet and silk presentation hardcase invitation folios",
      "Hand-poured metallic wax seals with custom couples' monogram stamps",
    ],
    options: [
      {
        category: "Invitation Suites",
        choices: [
          "Acrylic Laser-Etched & Gold Infilled Cards",
          "Velvet Folio Hardcase Presentation Box",
          "Deckled Edge Cotton Letterpress Suite",
          "Tri-Fold Laser Cut Lace Gatefold",
          "VIP Acrylic Box with Fresh / Preserved Rose Trays",
        ],
      },
      {
        category: "Matching Accessories",
        choices: [
          "RSVP Cards & Return Envelopes",
          "Save the Date Cards with Vellum Wraps",
          "Banquet Menus & Table Place Cards",
          "Custom Monogram Wax Seals & Silk Ribbon Ties",
        ],
      },
    ],
    finishes: ["Champagne Gold Hot Foil", "Laser Etching", "Silk Screen Metallic", "Custom Wax Seal", "Deckled Edges", "Velvet Casing"],
    specs: [
      { label: "Paper Options", value: "Cotton 600gsm, Vellum, Acrylic, Velvet" },
      { label: "Calligraphy", value: "Authentic Arabic & Modern Western Script" },
      { label: "Turnaround", value: "7 – 10 Business Days" },
      { label: "Minimum Order", value: "50 Suites" },
    ],
    turnaround: "7 to 10 business days",
    minOrder: "50 suites",
    seoTitle: "Wedding Card Printing Dubai | Luxury Wedding Invitations & Boxes | GLOSPRINT",
    seoDescription:
      "Luxury wedding invitation printing in Dubai. Arabic calligraphy, gold foil stamping, acrylic invitation cards, velvet boxes, and wax seals. Celebrate your special day.",
    faqs: [
      {
        question: "Can you typeset bilingual Arabic and English wedding invitations?",
        answer:
          "Yes, we specialize in harmonizing elegant Arabic calligraphy with refined English serif typography, ensuring cultural reverence, balance, and aesthetic perfection.",
      },
    ],
    relatedServiceSlugs: ["business-card-printing", "custom-box-printing"],
  },
  {
    id: "promotional-products",
    slug: "promotional-products",
    name: "Promotional Products",
    shortDescription:
      "Curated corporate executive gifts, engraved metallic pens, branded leather notebooks, thermal tumblers, and VIP event gift hampers.",
    fullDescription:
      "Strengthen relationships with high-value clients, international delegates, and loyal teams through GLOSPRINT's executive promotional gifts. Far from generic giveaways, our promotional line focuses on premium lifestyle goods: weighted laser-engraved metal pens, Moleskine-style soft leather notebooks with debossed crests, double-wall stainless steel flasks, and customized corporate gift sets.",
    heroImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Promotional",
    benefits: [
      "High perceived value items that reinforce luxury brand standing",
      "Precision fiber laser engraving for enduring, permanent metallic branding",
      "Rotary UV printing for 360-degree full-color graphics on drinkware and bottles",
      "Curated VIP welcome hampers packed in custom GLOSPRINT presentation boxes",
      "Fast production and bulk distribution across Dubai, Abu Dhabi, and KSA",
    ],
    options: [
      {
        category: "Executive Item Categories",
        choices: [
          "Luxury PU Leather Hardcover Journals with Gold Edge Paper",
          "Solid Brass & Stainless Steel Ballpoint Pens (Parker & Cross compatible)",
          "Vacuum Insulated Temperature Display Bottles (500ml)",
          "Fast-Charging Wireless Power Banks & Tech Organizers",
          "Custom Embroidered Pique Polo Shirts & Executive Vests",
        ],
      },
      {
        category: "Branding Techniques",
        choices: ["Precision Fiber Laser Engraving", "Deep Blind Debossing", "Full-Color Rotary UV Print", "Gold Foil Imprint", "Silk Screen"],
      },
    ],
    finishes: ["Laser Engraving", "Blind Debossing", "Rotary 360 UV Print", "Gold Foil Stamping", "Silk Screen"],
    specs: [
      { label: "Branding Methods", value: "Laser Engrave, UV Print, Deboss, Foil" },
      { label: "Packaging", value: "Individual Presentation Gift Boxes Included" },
      { label: "Turnaround", value: "3 – 6 Working Days" },
      { label: "Minimum Order", value: "50 Units" },
    ],
    turnaround: "3 to 6 working days",
    minOrder: "50 pieces",
    seoTitle: "Corporate Gifts & Promotional Products Dubai | Luxury Executive Swag | GLOSPRINT",
    seoDescription:
      "Premium promotional merchandise & executive corporate gifts in Dubai. Branded leather notebooks, engraved pens, VIP gift sets, and tech accessories with fast delivery.",
    faqs: [
      {
        question: "Can we bundle multiple promotional items into a custom gift box?",
        answer:
          "Yes! We design bespoke VIP presentation boxes with fitted EVA foam holding your branded notebook, pen, USB drive, and thermal tumbler for a flawless unboxing experience.",
      },
    ],
    relatedServiceSlugs: ["corporate-stationery", "custom-box-printing", "banner-printing"],
  },
];
