import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

export const SEOHead = ({
  title = "GIA MRO - Produtos Industriais e Produtos MRO",
  description = "Especialistas em produtos industriais, peças de reposição e produtos MRO. Atendimento em São Paulo e Jundiaí com estoque completo e entregas rápidas.",
  keywords = "produtos industriais, MRO, peças de reposição, manutenção industrial, equipamentos industriais, São Paulo, Jundiaí, fornecedor industrial, estoque industrial",
  image = "/hero-industrial.jpg",
  url = "https://giamro.com.br",
  type = "website",
  structuredData
}: SEOHeadProps) => {
  const jsonLd = structuredData || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GIA MRO",
    "description": description,
    "url": url,
    "logo": `${url}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-94754-3023",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR",
        "description": "Região do Cambuci - São Paulo/SP"
      },
      {
        "@type": "PostalAddress", 
        "addressLocality": "Jundiaí",
        "addressRegion": "SP",
        "addressCountry": "BR"
      }
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "São Paulo"
      }
    ],
    "serviceType": [
      "Produtos Industriais",
      "Peças de Reposição",
      "Produtos MRO",
      "Manutenção Industrial"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GIA MRO" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="GIA MRO" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo, Jundiaí" />
      <meta name="geo.position" content="-23.5505,-46.6333" />
      <meta name="ICBM" content="-23.5505,-46.6333" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};