import { companyInfo } from "@/data/company";
import { FAQ, Service, BlogPost } from "@/types";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: companyInfo.siteUrl,
    logo: `${companyInfo.siteUrl}/logo/glosprint-logo-full.png`,
    slogan: companyInfo.tagline,
    description: companyInfo.description,
    foundingDate: companyInfo.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.region,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyInfo.phone,
        contactType: "customer service",
        areaServed: ["AE", "SA", "QA", "OM", "KW", "BH"],
        availableLanguage: ["English", "Arabic"],
      },
    ],
    sameAs: [
      companyInfo.socialLinks.instagram,
      companyInfo.socialLinks.linkedin,
      companyInfo.socialLinks.facebook,
    ],
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: `${companyInfo.siteUrl}/logo/glosprint-logo-full.png`,
    "@id": `${companyInfo.siteUrl}/#localbusiness`,
    url: companyInfo.siteUrl,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    priceRange: "$$$",
    currenciesAccepted: "AED, USD, EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.region,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "19:30",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Dubai",
      },
      {
        "@type": "City",
        name: "Abu Dhabi",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    ],
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${companyInfo.siteUrl}${item.url}`,
    })),
  };
}

export function createServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: companyInfo.name,
      url: companyInfo.siteUrl,
      telephone: companyInfo.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.address.street,
        addressLocality: companyInfo.address.city,
        addressCountry: companyInfo.address.countryCode,
      },
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    description: service.shortDescription,
    url: `${companyInfo.siteUrl}/services/${service.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Options`,
      itemListElement: service.options.map((opt) => ({
        "@type": "OfferCatalog",
        name: opt.category,
      })),
    },
  };
}

export function createFAQSchema(faqs: FAQ[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
      logo: {
        "@type": "ImageObject",
        url: `${companyInfo.siteUrl}/logo/glosprint-logo-full.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${companyInfo.siteUrl}/blog/${post.slug}`,
    },
  };
}
