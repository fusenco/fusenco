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
    logo: "https://fusenco.com/machines/hero-workshop.jpg",
    email: "info@fusenco.com",
    telephone: "+8613365764352",
    description:
      "Exporter of used nut cold heading machines, bolt heading machines and screw cold formers, with worldwide shipping, installation and spare-parts support.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dongguan",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-133-6576-4352",
      contactType: "sales",
      email: "info@fusenco.com",
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
