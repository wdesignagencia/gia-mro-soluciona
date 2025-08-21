import Navigation from "@/components/Navigation";
import { MapPin, Phone, Clock, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
const Locations = () => {
  const locationsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GIA MRO",
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
    "areaServed": ["São Paulo", "Jundiaí", "Grande São Paulo", "ABC Paulista", "Região de Campinas"]
  };

  const locations = [{
    id: "matriz",
    name: "Matriz - São Paulo",
    type: "Sede Principal",
    address: {
      district: "Cambuci",
      city: "São Paulo",
      state: "SP",
      fullAddress: "Região do Cambuci - São Paulo/SP"
    },
    contact: {
      phone: "+55 (11) 94754-3023",
      email: "contato@giamro.com.br"
    },
    services: ["Vendas e atendimento comercial", "Desenvolvimento de produtos", "Suporte técnico especializado", "Estoque completo de produtos", "Entrega expressa"],
    coverage: "100km",
    isPrimary: true
  }, {
    id: "filial",
    name: "Filial - Jundiaí",
    type: "Unidade Regional",
    address: {
      district: "Centro",
      city: "Jundiaí",
      state: "SP",
      fullAddress: "Jundiaí/SP"
    },
    contact: {
      phone: "+55 (11) 94754-3023",
      email: "contato@giamro.com.br"
    },
    services: ["Atendimento regional", "Estoque local", "Entrega rápida", "Suporte técnico", "Desenvolvimento conjunto"],
    coverage: "100km",
    isPrimary: false
  }];
  const coverageAreas = ["Grande São Paulo", "ABC Paulista", "Região de Campinas", "Vale do Paraíba", "Baixada Santista", "Interior de São Paulo", "Atendimento Nacional"];
  const deliveryFeatures = [{
    icon: Truck,
    title: "Entrega Gratuita",
    description: "Até 100km de cada unidade",
    highlight: "Sem custo adicional"
  }, {
    icon: Clock,
    title: "Entrega Expressa",
    description: "Produtos em estoque",
    highlight: "Mesmo dia"
  }, {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Atendemos todo o Brasil",
    highlight: "Logística especializada"
  }];
  return <div className="min-h-screen bg-background">
      <SEOHead 
        title="Localidades | São Paulo e Jundiaí | Entrega Gratuita 100km | GIA MRO"
        description="GIA MRO com unidades em São Paulo (Cambuci) e Jundiaí. Entrega gratuita até 100km, cobertura nacional. Atendimento especializado em suprimentos industriais."
        keywords="localidades GIA MRO, São Paulo Cambuci, Jundiaí filial, entrega gratuita 100km, cobertura nacional suprimentos"
        url="https://giamro.com.br/localidades"
        structuredData={locationsStructuredData}
      />
      <Navigation />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-steel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossas <span className="text-primary">Localidades</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Estrategicamente posicionados em São Paulo para melhor atender 
                todo o Brasil com agilidade e eficiência
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {locations.map((location, index) => <Card key={location.id} className={`group hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 border-border/50 ${location.isPrimary ? 'ring-2 ring-primary/20' : ''}`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      {location.isPrimary && <Badge className="bg-accent text-accent-foreground">
                          Sede Principal
                        </Badge>}
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {location.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-lg">
                      {location.type}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Address */}
                    <div className="p-4 bg-gradient-steel rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Endereço
                      </h4>
                      <p className="text-muted-foreground">
                        {location.address.fullAddress}
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="p-4 bg-card border border-border/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        Contato
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Telefone:</span>
                          <span className="font-medium text-foreground">{location.contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">E-mail:</span>
                          <span className="font-medium text-foreground">{location.contact.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Serviços Oferecidos:</h4>
                      <ul className="space-y-2">
                        {location.services.map((service, idx) => <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                            {service}
                          </li>)}
                      </ul>
                    </div>

                    {/* Coverage */}
                    <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Truck className="h-4 w-4 text-accent" />
                        <span className="font-semibold text-foreground">Área de Cobertura</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Entrega gratuita em um raio de <strong className="text-accent">{location.coverage}</strong> desta unidade
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="industrial" className="flex-1" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Entrar em Contato
                      </Button>
                      
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Delivery Features */}
        <section className="py-20 bg-gradient-steel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Logística e Entrega
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sistema de distribuição otimizado para garantir que seus produtos 
                cheguem rapidamente onde você precisa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {deliveryFeatures.map((feature, index) => <Card key={index} className="text-center hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 border-border/50" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      {feature.highlight}
                    </Badge>
                  </CardContent>
                </Card>)}
            </div>

            {/* Coverage Areas */}
            <div className="bg-card rounded-2xl p-8 shadow-card-industrial border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Regiões Atendidas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {coverageAreas.map((area, index) => <div key={index} className="flex items-center gap-2 p-3 bg-gradient-steel rounded-lg" style={{
                animationDelay: `${index * 0.05}s`
              }}>
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </div>)}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Não está em nossa área de entrega gratuita? Não se preocupe!
                </p>
                <Button variant="hero" size="lg">
                  <Truck className="h-5 w-5 mr-2" />
                  Consultar Frete para Sua Região
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <Clock className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Horário de Atendimento
              </h2>
              <p className="text-xl text-white/90 mb-6">
                <strong className="text-accent">Segunda a Sexta:</strong> 08:00 às 18:00
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Nossa equipe está sempre pronta para atender suas necessidades e oferecer 
                o suporte técnico que você precisa para encontrar a solução ideal.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default Locations;