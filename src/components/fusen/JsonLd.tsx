// ============================================================
// FUSEN - JSON-LD structured data (server-rendered)
// Organization + WebSite schema for rich results / knowledge graph
// ============================================================

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://fusenco.com/#organization",
    name: "FUSEN",
    alternateName: "FUSEN Used Machinery",
    url: "https://fusenco.com",
    logo: "https://fusenco.com/fusen-logo.png",
    image: "https://fusenco.com/og-image.jpg",
    email: "info@fusenco.com",
    telephone: "+8613365764352",
    description:
      "Exporter of used nut cold heading machines, bolt heading machines and screw cold formers, with worldwide shipping, installation and spare-parts support.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zhejiang",
        addressCountry: "CN",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zhejiang",
      addressRegion: "Zhejiang",
      addressCountry: "CN",
    },
    areaServed: "Worldwide",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-133-6576-4352",
      contactType: "sales",
      email: "info@fusenco.com",
      url: "https://wa.me/8613365764352",
      availableLanguage: [
        "English",
        "Russian",
        "Spanish",
        "Portuguese",
        "French",
        "Arabic",
        "German",
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://fusenco.com/#website",
    url: "https://fusenco.com",
    name: "FUSEN Used Machinery",
    description:
      "Supplier of inspected used nut cold heading machines, bolt heading machines and screw cold formers with worldwide export support.",
    publisher: { "@id": "https://fusenco.com/#organization" },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD content is static and trusted
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
