import { ArrowRight, Package, Wrench, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511947543023?text=Olá! Gostaria de solicitar um produto personalizado.', '_blank');
  };

  const productCategories = [
    {
      id: 1,
      title: "Mangueiras e Mangotes",
      description: "Mangueiras em borracha, PVC, para sucção e óleo. Mangotes flangeados com conexões diversas.",
      icon: Package,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      features: ["Borracha industrial", "PVC resistente", "Conexões flangeadas"]
    },
    {
      id: 2,
      title: "Correias Industriais",
      description: "Correias em V, sincronizadoras e transportadoras para todas as aplicações industriais.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1565985999516-41e872b48e57?w=400&h=300&fit=crop",
      features: ["Correias em V", "Sincronizadoras", "Transportadoras"]
    },
    {
      id: 3,
      title: "Lençóis de Borracha",
      description: "Lençóis e mantas de borracha industrial para vedação e proteção de equipamentos.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
      features: ["Vedação industrial", "Alta resistência", "Múltiplas espessuras"]
    },
    {
      id: 4,
      title: "Plásticos de Engenharia",
      description: "Chapas e tarugos de nylon, chapas acrílicas, polipropileno para aplicações técnicas.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      features: ["Nylon técnico", "Chapas acrílicas", "Polipropileno"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Principais Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma linha completa de produtos industriais para atender todas as necessidades 
            de manutenção, reparo e operação da sua empresa. Temos muito mais produtos disponíveis!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 flex flex-col h-full">
                {/* Features List */}
                <ul className="space-y-2 mb-6 flex-1">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                  onClick={() => {
                    const categoryMap: { [key: string]: string } = {
                      "Mangueiras e Mangotes": "mangueiras",
                      "Correias Industriais": "correias", 
                      "Lençóis de Borracha": "lencois",
                      "Plásticos de Engenharia": "plasticos"
                    };
                    const categoryId = categoryMap[category.title];
                    if (categoryId) {
                      navigate(`/produtos?categoria=${categoryId}`);
                    }
                  }}
                >
                  Ver Detalhes
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-card-industrial border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Temos muito mais produtos disponíveis! Oferecemos desenvolvimento de produtos personalizados sem custo adicional. 
            Entre em contato e encontraremos a solução ideal para sua aplicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="industrial" size="lg" className="flex items-center gap-2" onClick={() => navigate('/produtos')}>
              <Package className="h-5 w-5" />
              Ver Principais Produtos
            </Button>
            <Button variant="hero" size="lg" className="flex items-center gap-2" onClick={handleWhatsApp}>
              <ArrowRight className="h-5 w-5" />
              Solicitar Produto Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;