export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: { title: string; href: string; description?: string }[];
}

export const headerNav: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Products",
    href: "/products",
    children: [
      {
        title: "All Products Catalog",
        href: "/products",
        description: "Explore our complete catalog of commercial & luxury print products",
      },
      {
        title: "Business & Corporate",
        href: "/products?category=business-corporate",
        description: "Business cards, letterheads, presentation folders & stationery",
      },
      {
        title: "Marketing & Promotional",
        href: "/products?category=marketing-promotional",
        description: "Flyers, tri-fold brochures, catalogues, booklets & posters",
      },
      {
        title: "Stickers & Labels",
        href: "/products?category=stickers-labels",
        description: "Die-cut stickers, waterproof labels & packaging seals",
      },
      {
        title: "Signage & Display",
        href: "/products?category=signage-display",
        description: "Roll-up banners, pop-up walls, exhibition backdrops & 3D signs",
      },
      {
        title: "Packaging & Boxes",
        href: "/products?category=packaging-custom-boxes",
        description: "Custom rigid boxes, magnetic gift boxes & folding cartons",
      },
      {
        title: "Corporate Gifts & Specialty",
        href: "/products?category=corporate-gifts",
        description: "Drinkware, notebooks, executive pens, lanyards & gift sets",
      },
      {
        title: "Stamps & Official Products",
        href: "/products?category=stamps-official",
        description: "Self-inking company stamps, date stamps & embossing seals",
      },
    ],
  },
  { title: "Capabilities", href: "/printing-capabilities" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const footerLinks = {
  products: [
    { title: "Business Cards", href: "/products/standard-business-cards" },
    { title: "Luxury Foil Cards", href: "/products/luxury-foil-business-cards" },
    { title: "Custom Rigid Boxes", href: "/products/custom-rigid-boxes" },
    { title: "Magnetic Gift Boxes", href: "/products/magnetic-gift-boxes" },
    { title: "Die-Cut Stickers", href: "/products/die-cut-stickers" },
    { title: "Roll-Up Banners", href: "/products/roll-up-banners" },
    { title: "Product Catalogues", href: "/products/catalogues" },
    { title: "Corporate Gift Sets", href: "/products/corporate-gift-sets" },
    { title: "Official Company Stamps", href: "/products/company-stamps" },
  ],
  capabilities: [
    { title: "Digital Express Printing", href: "/printing-capabilities#digital-printing" },
    { title: "Offset Litho Press", href: "/printing-capabilities#offset-printing" },
    { title: "Large Format UV Printing", href: "/printing-capabilities#large-format-printing" },
    { title: "Hot Foil Stamping", href: "/printing-capabilities#hot-foil-stamping" },
    { title: "Embossing & Debossing", href: "/printing-capabilities#embossing" },
    { title: "Raised 3D Spot UV", href: "/printing-capabilities#raised-3d-spot-uv" },
    { title: "Velvet Soft-Touch Film", href: "/printing-capabilities#soft-touch-lamination" },
    { title: "PUR Perfect Binding", href: "/printing-capabilities#custom-binding" },
  ],
  company: [
    { title: "About GLOSPRINT", href: "/about" },
    { title: "Our Portfolio", href: "/portfolio" },
    { title: "Printing Knowledge & Blog", href: "/blog" },
    { title: "Contact Our Atelier", href: "/contact" },
    { title: "Interactive Quote Estimator", href: "/request-quote" },
  ],
};
