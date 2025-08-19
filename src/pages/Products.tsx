import Navigation from "@/components/Navigation";
import { Package, ArrowRight, Search, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    {
      id: "mangueiras",
      title: "Mangueiras e Mangotes Industriais",
      description: "Soluções completas para transporte de fluidos industriais",
      icon: "🔧",
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
      icon: "⚙️",
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
      icon: "🛡️",
      color: "bg-purple-500",
      products: [
        {
          name: "Lençóis de Borracha Natural",
          description: "Flexibilidade superior para vedações",
          specs: ["1mm a 50mm", "Diversas durezas", "NBR, EPDM, Neoprene"],
          applications: ["Vedações", "Juntas", "Revestimentos"]
        },
        {
          name: "Mantas Antiderrapantes",
          description: "Segurança e aderência em pisos industriais",
          specs: ["Ranhuras diversas", "Resistente a óleo", "Diferentes cores"],
          applications: ["Pisos", "Rampas", "Plataformas"]
        },
        {
          name: "Lençóis para Prensa",
          description: "Resistência extrema para aplicações de prensagem",
          specs: ["Alta dureza", "Resistente ao calor", "Espessuras especiais"],
          applications: ["Prensas", "Vulcanização", "Moldagem"]
        }
      ]
    },
    {
      id: "plasticos",
      title: "Plásticos de Engenharia",
      description: "Materiais técnicos para aplicações especializadas",
      icon: "🔬",
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
      id: "complementares",
      title: "Produtos Complementares",
      description: "Soluções adicionais para completar sua operação",
      icon: "📦",
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
        },
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
    }
  ];

  const categories = [
    { id: "all", name: "Todos os Produtos" },
    { id: "mangueiras", name: "Mangueiras" },
    { id: "correias", name: "Correias" },
    { id: "lencois", name: "Lençóis" },
    { id: "plasticos", name: "Plásticos" },
    { id: "complementares", name: "Complementares" }
  ];

  const filteredCategories = productCategories.filter(category => 
    selectedCategory === "all" || category.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-steel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossos <span className="text-primary">Produtos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Catálogo completo de produtos industriais para atender todas as necessidades 
                de manutenção, reparo e operação da sua empresa
              </p>

              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "industrial" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="whitespace-nowrap"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {filteredCategories.map((category, categoryIndex) => (
                <div 
                  key={category.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-6 py-3 text-lg font-medium mb-4">
                      <span className="text-2xl">{category.icon}</span>
                      {category.title}
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Products Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.products.map((product, productIndex) => (
                      <Card 
                        key={productIndex}
                        className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 border-border/50"
                      >
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          {/* Specifications */}
                          <div>
                            <h4 className="font-medium text-foreground mb-2">Especificações:</h4>
                            <div className="flex flex-wrap gap-1">
                              {product.specs.map((spec, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Applications */}
                          <div>
                            <h4 className="font-medium text-foreground mb-2">Aplicações:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {product.applications.map((app, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          >
                            <Package className="h-4 w-4 mr-2" />
                            Solicitar Orçamento
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
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
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Solicitar Desenvolvimento Personalizado
                </Button>
                <Button variant="whatsapp" size="lg">
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