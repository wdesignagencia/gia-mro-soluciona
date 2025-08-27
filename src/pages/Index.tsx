import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductHighlights from "@/components/ProductHighlights";
import KeyDifferentials from "@/components/KeyDifferentials";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GIA",
    "alternateName": "GIA Produtos Industriais",
    "description": "20+ anos fornecendo mangueiras borracha/PVC, correias em V, mangotes flangeados e lençóis de borracha para manutenção industrial. Atendimento nacional.",
    "url": "https://giamro.com.br",
    "logo": "https://giamro.com.br/logo.png",
    "telephone": "+55-11-94754-3023",
    "email": "contato@giamro.com.br",
    "foundingDate": "2004",
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
    "areaServed": ["São Paulo", "ABC Paulista", "Região de Campinas", "Brasil"],
    "serviceType": ["Fornecedor MRO", "Mangueiras Industriais", "Correias Industriais", "Mangotes Flangeados"],
    "knowsAbout": ["Manutenção Industrial", "Equipamentos Manutenção Industrial", "Gestão de MRO"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Produtos Industriais para Manutenção",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mangueira Borracha",
            "category": "Mangueiras Industriais",
            "description": "Mangueiras borracha alta pressão para aplicações industriais"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Correia em V",
            "category": "Correias Industriais",
            "description": "Correias em V para transmissão de potência industrial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mangote Flangeado", 
            "category": "Mangotes Industriais",
            "description": "Mangotes flangeados personalizados para draga e sucção"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="GIA Produtos Industriais | Mangueiras, Correias e Mangotes | 20 Anos SP"
        description="GIA: 20+ anos fornecendo mangueiras borracha/PVC, correias em V, mangotes flangeados. Pronta entrega 100km São Paulo/Jundiaí. Desenvolvimento sem custo."
        keywords="mangueira borracha, mangueira PVC, correia em V, mangote flangeado, lençol de borracha, fornecedor industrial São Paulo, manutenção industrial, 20 anos experiência"
        url="https://giamro.com.br"
        structuredData={homeStructuredData}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ProductHighlights />
        <KeyDifferentials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
