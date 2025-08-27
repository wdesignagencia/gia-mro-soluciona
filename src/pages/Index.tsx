import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import KeyDifferentials from "@/components/KeyDifferentials";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GIA MRO",
    "description": "Especialistas em suprimentos industriais e soluções MRO. Fornecedor de mangueiras, correias, lençóis de borracha e plásticos de engenharia.",
    "url": "https://giamro.com.br",
    "logo": "https://giamro.com.br/logo.png",
    "telephone": "+55-11-94754-3023",
    "email": "contato@giamro.com.br",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR",
        "description": "Região do Cambuci - São Paulo/SP"
      }
    ],
    "areaServed": "São Paulo",
    "serviceType": ["Suprimentos Industriais", "Soluções MRO", "Peças de Reposição"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Produtos Industriais",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mangueiras Industriais"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Correias Industriais"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Lençóis de Borracha"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="GIA MRO - Suprimentos Industriais e Soluções MRO | São Paulo"
        description="Especialistas em suprimentos industriais, mangueiras, correias, lençóis de borracha e plásticos de engenharia. Atendimento em São Paulo e Jundiaí."
        keywords="suprimentos industriais, MRO, mangueiras industriais, correias industriais, lençóis de borracha, plásticos de engenharia, fornecedor industrial São Paulo"
        url="https://giamro.com.br"
        structuredData={homeStructuredData}
      />
      <Navigation />
      <main>
        <HeroSection />
        <KeyDifferentials />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
