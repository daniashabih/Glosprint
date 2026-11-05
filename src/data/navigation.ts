export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export const headerNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const quickServiceLinks = [
  { title: "Business Card Printing", href: "/services/business-card-printing" },
  { title: "Packaging & Boxes", href: "/services/packaging-printing" },
  { title: "Custom Box Printing", href: "/services/custom-box-printing" },
  { title: "Corporate Stationery", href: "/services/corporate-stationery" },
  { title: "Brochure & Lookbooks", href: "/services/brochure-printing" },
  { title: "Large Format & Signage", href: "/services/large-format-printing" },
  { title: "Sticker & Label Printing", href: "/services/sticker-label-printing" },
  { title: "Luxury Wedding Invitations", href: "/services/wedding-card-printing" },
];

export const footerLinks = {
  company: [
    { title: "About Us", href: "/about" },
    { title: "Our Portfolio", href: "/portfolio" },
    { title: "Our Printing Process", href: "/#process" },
    { title: "Industries Served", href: "/#industries" },
    { title: "Blog & Insights", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
  ],
  services: [
    { title: "Business Card Printing", href: "/services/business-card-printing" },
    { title: "Brochure Printing", href: "/services/brochure-printing" },
    { title: "Packaging Printing", href: "/services/packaging-printing" },
    { title: "Custom Box Printing", href: "/services/custom-box-printing" },
    { title: "Corporate Stationery", href: "/services/corporate-stationery" },
    { title: "Signage & 3D Letters", href: "/services/signage-printing" },
    { title: "Offset Litho Press", href: "/services/offset-printing" },
    { title: "Digital Express Printing", href: "/services/digital-printing" },
  ],
  solutions: [
    { title: "Luxury Wedding Cards", href: "/services/wedding-card-printing" },
    { title: "Promotional Gifts", href: "/services/promotional-products" },
    { title: "Stickers & Labels", href: "/services/sticker-label-printing" },
    { title: "Exhibition Banners", href: "/services/banner-printing" },
    { title: "Product Catalogues", href: "/services/catalogue-printing" },
    { title: "Request a Fast Quote", href: "/request-a-quote" },
  ],
};
