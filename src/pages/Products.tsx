import Navigation from "@/components/Navigation";
import { Package, ArrowRight, Waves, Settings2, Layers, Shapes, ShieldCheck, Archive } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { useSearchParams, useNavigate } from "react-router-dom";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511947543023?text=Olá! Gostaria de mais informações sobre seus produtos industriais.', '_blank');
  };

  const handleOrcamento = () => {
    navigate('/contato');
  };

  // Handle URL category parameter
  useEffect(() => {
    const categoria = searchParams.get('categoria');
    if (categoria) {
      setSelectedCategory(categoria);
    }
  }, [searchParams]);

  const productCategories = [
    {
      id: "mangueiras",
      title: "Mangueiras e Mangotes Industriais",
      description: "Soluções completas para transporte de fluidos industriais",
      icon: Waves,
      color: "bg-blue-500",
      products: [
        {
          name: "Mangueiras em Borracha",
          description: "Alta resistência para aplicações pesadas",
          specs: ["Pressão até 40 bar", "Temperatura -40°C a +100°C", "Diversas bitolas"],
          applications: ["Ar comprimido", "Óleo hidráulico", "Combustíveis"]
        },
        {
          name: "Mangueiras em PVC",
          description: "Flexibilidade e durabilidade para uso geral",
          specs: ["Transparente ou colorida", "Atóxica", "Flexível"],
          applications: ["Água", "Ar", "Produtos químicos leves"]
        },
        {
          name: "Mangueiras para Sucção",
          description: "Ideais para bombeamento e aspiração",
          specs: ["Reforço em espiral", "Resistente ao colapso", "Diversas pressões"],
          applications: ["Bombeamento", "Aspiração", "Transferência"]
        },
        {
          name: "Mangotes Flangeados",
          description: "Conexões personalizadas para aplicações específicas",
          specs: ["Conexões diversas", "Flanges padrão", "Sob medida"],
          applications: ["Conexões industriais", "Equipamentos fixos", "Linhas de produção"]
        }
      ]
    },
    {
      id: "correias",
      title: "Correias Industriais",
      description: "Transmissão de potência para todos os tipos de equipamentos",
      icon: Settings2,
      color: "bg-green-500",
      products: [
        {
          name: "Correias em V",
          description: "Transmissão confiável de potência",
          specs: ["Perfis A, B, C, D", "Classical e Narrow", "Múltiplas"],
          applications: ["Motores", "Compressores", "Ventiladores"]
        },
        {
          name: "Correias Sincronizadoras",
          description: "Sincronização precisa sem deslizamento",
          specs: ["Dentes trapezoidais", "Diversos passos", "Larguras variadas"],
          applications: ["Máquinas CNC", "Impressoras", "Automação"]
        },
        {
          name: "Correias Transportadoras",
          description: "Movimentação eficiente de materiais",
          specs: ["PVC, borracha, PU", "Lisa ou rugosa", "Antichama"],
          applications: ["Esteiras", "Elevadores", "Transporte"]
        }
      ]
    },
    {
      id: "lencois",
      title: "Lençóis e Mantas de Borracha",
      description: "Vedação e proteção para equipamentos industriais",
      icon: Layers,
      color: "bg-purple-500",
      products: [
        {
          name: "Lençóis de Borracha Comum",
          description: "Solução econômica para vedações gerais",
          specs: ["1mm a 50mm", "Boa flexibilidade", "Custo-benefício"],
          applications: ["Vedações simples", "Proteções", "Isolamento"]
        },
        {
          name: "Lençóis de Borracha Sintética (NBR)",
          description: "Resistência a óleos e combustíveis",
          specs: ["NBR", "Resistente a óleo", "Diversas durezas"],
          applications: ["Vedações automotivas", "Tanques", "Equipamentos"]
        },
        {
          name: "Lençóis de Neoprene",
          description: "Excelente resistência ao ozônio e intempéries",
          specs: ["CR", "Resistente ao clima", "Flexível a baixas temperaturas"],
          applications: ["Vedações externas", "Juntas marítimas", "Isolamento"]
        },
        {
          name: "Lençóis de EPDM",
          description: "Superior resistência ao calor e envelhecimento",
          specs: ["EPDM", "Resistente a vapor", "Longa durabilidade"],
          applications: ["Vedações de alta temperatura", "Automotivo", "Construção"]
        },
        {
          name: "Mantas Antiderrapantes",
          description: "Segurança e aderência em pisos industriais",
          specs: ["Ranhuras diversas", "Resistente a óleo", "Diferentes cores"],
          applications: ["Pisos", "Rampas", "Plataformas"]
        }
      ]
    },
    {
      id: "plasticos",
      title: "Plásticos de Engenharia",
      description: "Materiais técnicos para aplicações especializadas",
      icon: Shapes,
      color: "bg-orange-500",
      products: [
        {
          name: "Chapas e Tarugos de Nylon",
          description: "Resistência mecânica e baixo atrito",
          specs: ["PA6, PA6.6", "Natural ou aditivado", "Usinagem precisa"],
          applications: ["Engrenagens", "Buchas", "Guias"]
        },
        {
          name: "Chapas Acrílicas",
          description: "Transparência cristalina e moldabilidade",
          specs: ["Transparente ou colorido", "2mm a 50mm", "Cast ou extrudado"],
          applications: ["Visores", "Proteções", "Displays"]
        },
        {
          name: "Polipropileno",
          description: "Resistência química excepcional",
          specs: ["Soldável", "Atóxico", "Diversas cores"],
          applications: ["Tanques", "Tubulações", "Laboratórios"]
        }
      ]
    },
    {
      id: "vedacoes",
      title: "Vedações",
      description: "Soluções especializadas para vedação industrial",
      icon: ShieldCheck,
      color: "bg-indigo-500",
      products: [
        {
          name: "Papelões Hidráulicos",
          description: "Vedação para sistemas hidráulicos",
          specs: ["Livres de amianto", "Diversas pressões", "Temperaturas elevadas"],
          applications: ["Juntas", "Vedações", "Isolamento"]
        },
        {
          name: "Gaxetas",
          description: "Vedação precisa para equipamentos rotativos",
          specs: ["Grafite, PTFE", "Diversas seções", "Alta performance"],
          applications: ["Bombas", "Válvulas", "Compressores"]
        }
      ]
    },
    {
      id: "complementares",
      title: "Produtos Complementares",
      description: "Soluções adicionais para completar sua operação",
      icon: Archive,
      color: "bg-red-500",
      products: [
        {
          name: "Lonas Plásticas",
          description: "Proteção e cobertura industrial",
          specs: ["PVC, polietileno", "Diversas gramaturas", "Ilhós reforçados"],
          applications: ["Coberturas", "Proteção", "Divisórias"]
        },
        {
          name: "Encerados",
          description: "Proteção resistente e durável",
          specs: ["Impermeável", "Anti-UV", "Reforçado"],
          applications: ["Caminhões", "Máquinas", "Estoque"]
        }
      ]
    }
  ];

  const categories = [
    { id: "all", name: "Principais Produtos" },
    { id: "mangueiras", name: "Mangueiras" },
    { id: "correias", name: "Correias" },
    { id: "lencois", name: "Lençóis de Borracha" },
    { id: "plasticos", name: "Plásticos de Engenharia" },
    { id: "vedacoes", name: "Vedações" },
    { id: "complementares", name: "Complementares" }
  ];

  const filteredCategories = productCategories.filter(category => 
    selectedCategory === "all" || category.id === selectedCategory
  );

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Produtos Industriais GIA MRO",
    "description": "Catálogo completo de produtos industriais: mangueiras, correias, lençóis de borracha, plásticos de engenharia e produtos complementares",
    "brand": {
      "@type": "Brand",
      "name": "GIA MRO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "GIA MRO"
      }
    },
    "category": "Industrial Supplies"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Catálogo Produtos | Mangueira Borracha, Correia em V, Mangotes | GIA"
        description="Mangueiras borracha/PVC, correias em V, mangotes flangeados, lençóis borracha. 20+ anos experiência. Pronta entrega São Paulo/Jundiaí. Desenvolvimento sem custo."
        keywords="mangueira borracha, mangueira PVC, correia em V, correia sincronizadora, mangote flangeado, lençol de borracha, tarugo de nylon, fornecedor MRO"
        url="https://giamro.com.br/produtos"
        structuredData={productStructuredData}
      />
      <Navigation />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-blue-50/30 to-primary/10 dark:from-background dark:via-blue-950/20 dark:to-primary/10 relative overflow-hidden">
          {/* Blue accent decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Principais <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text">Produtos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Nosso catálogo completo de produtos industriais para atender todas as necessidades 
                de manutenção, reparo e operação da sua empresa. Temos muito mais produtos disponíveis - entre em contato!
              </p>

              {/* Filter Categories */}
              <div className="max-w-4xl mx-auto">
                <div className="flex gap-2 flex-wrap justify-center mb-6">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "hero" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gradient-to-br from-background via-blue-50/20 to-primary/5 dark:from-background dark:via-blue-950/10 dark:to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {filteredCategories.map((category, categoryIndex) => (
                <div 
                  key={category.id}
                  className="bg-gradient-to-br from-background/90 via-blue-50/30 to-primary/5 dark:from-background/90 dark:via-blue-950/20 dark:to-primary/5 border-2 border-primary/20 backdrop-blur-sm rounded-[40px] p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.1),0_0_50px_rgba(59,130,246,0.05)] animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/15 to-blue-500/15 text-primary rounded-full px-6 py-3 text-lg font-bold mb-6 shadow-lg border border-blue-200/30 dark:border-blue-800/30">
                      <category.icon className="h-8 w-8" />
                      {category.title}
                    </div>
                    <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Featured Products */}
                  <div className="space-y-4 mb-8">
                    {category.products.map((product, productIndex) => (
                      <div 
                        key={productIndex}
                        className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/30 hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]"
                      >
                        {/* Mobile Layout */}
                        <div className="flex flex-col sm:hidden space-y-4">
                          {/* Mobile Header */}
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 via-blue-400/15 to-primary/10 rounded-xl flex items-center justify-center border border-blue-200/20 dark:border-blue-800/20">
                                <category.icon className="h-8 w-8 text-primary" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-foreground text-lg mb-1 leading-tight">
                                {product.name}
                              </h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          {/* Mobile Specs */}
                          <div className="space-y-3">
                            <div>
                              <h5 className="text-xs font-semibold text-foreground mb-2">ESPECIFICAÇÕES:</h5>
                              <div className="flex flex-wrap gap-1">
                                {product.specs.map((spec, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                                    {spec}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5 className="text-xs font-semibold text-foreground mb-2">APLICAÇÕES:</h5>
                              <div className="flex flex-wrap gap-1">
                                {product.applications.map((app, idx) => (
                                  <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                    {app}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Mobile Button */}
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={handleOrcamento}
                          >
                            <Package className="h-4 w-4 mr-2" />
                            Solicitar Orçamento
                          </Button>
                        </div>

                        {/* Desktop/Tablet Layout */}
                        <div className="hidden sm:flex gap-6 items-start">
                          {/* Product Icon/Visual */}
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 via-blue-400/15 to-primary/10 rounded-2xl flex items-center justify-center border border-blue-200/20 dark:border-blue-800/20">
                              <category.icon className="h-10 w-10 text-primary" />
                            </div>
                          </div>

                          {/* Product Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              {/* Main Info */}
                              <div className="flex-1">
                                <h4 className="font-bold text-foreground text-xl mb-2 leading-tight">
                                  {product.name}
                                </h4>
                                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                                  {product.description}
                                </p>
                                
                                {/* Specs and Applications in horizontal layout */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {/* Key specs */}
                                  <div>
                                    <h5 className="text-sm font-semibold text-foreground mb-2">ESPECIFICAÇÕES:</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {product.specs.map((spec, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
                                          {spec}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Applications */}
                                  <div>
                                    <h5 className="text-sm font-semibold text-foreground mb-2">APLICAÇÕES:</h5>
                                    <div className="flex flex-wrap gap-1">
                                      {product.applications.map((app, idx) => (
                                        <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                          {app}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* CTA Button */}
                              <div className="flex-shrink-0 lg:ml-6">
                                <Button 
                                  variant="outline" 
                                  size="lg" 
                                  className="w-full lg:w-auto hover:bg-primary hover:text-primary-foreground transition-colors px-8 py-3"
                                  onClick={handleOrcamento}
                                >
                                  <Package className="h-5 w-5 mr-2" />
                                  Solicitar Orçamento
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-6 mb-6 border border-blue-200/20 dark:border-blue-800/20">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Precisa de {category.title.toLowerCase()}?
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Envie sua mensagem via WhatsApp e receba atendimento especializado
                      </p>
                    </div>
                     <Button 
                       variant="whatsapp" 
                       size="lg"
                       className="shadow-lg hover:shadow-xl transition-all duration-300"
                       onClick={handleWhatsApp}
                     >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Falar via WhatsApp
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Development CTA */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Não encontrou o que precisa?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Desenvolvemos produtos personalizados para sua aplicação específica 
                <strong className="text-accent"> sem custo adicional</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" onClick={handleWhatsApp}>
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Solicitar Desenvolvimento Personalizado
                </Button>
                <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                  <Package className="h-5 w-5 mr-2" />
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;