import { Wrench, Cog, Shield, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductHighlights = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511947543023?text=Olá! Gostaria de informações sobre mangueiras, correias e mangotes industriais.', '_blank');
  };

  const products = [
    {
      icon: Wrench,
      title: "Mangueiras Borracha e PVC",
      description: "Mangueiras para sucção, óleo, água e ar comprimido",
      keywords: ["mangueira borracha", "mangueira PVC", "mangueira sucção", "mangueira para óleo"]
    },
    {
      icon: Cog,
      title: "Correias Industriais",
      description: "Correias em V, sincronizadoras e transportadoras",
      keywords: ["correia em V", "correia sincronizadora", "correias industriais"]
    },
    {
      icon: Shield,
      title: "Mangotes e Lençóis",
      description: "Mangotes flangeados para draga e lençóis de borracha",
      keywords: ["mangote flangeado", "mangote borracha", "lençol de borracha", "manta borracha"]
    },
    {
      icon: Truck,
      title: "Plásticos de Engenharia",
      description: "Tarugos de nylon, chapas acrílicas e polipropileno",
      keywords: ["tarugo de nylon", "chapa acrílica", "polipropileno", "chapa de nylon"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Especialistas em <span className="text-primary">Produtos Industriais MRO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Com <strong>20+ anos de experiência</strong>, somos fornecedor de confiança para 
            <strong> manutenção industrial</strong> nas seguintes áreas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 flex flex-col h-full overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4 p-4 sm:p-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4 sm:p-6">
                <div className="flex flex-wrap gap-1.5 mb-4 flex-grow items-start">
                  {product.keywords.map((keyword, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap inline-block">
                      {keyword}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-primary hover:text-primary-foreground mt-auto text-xs sm:text-sm"
                  onClick={() => navigate('/produtos')}
                >
                  Ver Catálogo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Focus */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Atendemos Diversos Setores Industriais
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            {["Mineração", "Siderurgia", "Petroquímica", "Alimentícia", "Química", "Têxtil"].map((sector, index) => (
              <div key={index} className="p-2 sm:p-3 bg-gradient-steel rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-foreground">{sector}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="hero" size="lg" className="text-xs sm:text-sm md:text-base px-4 py-3 sm:px-6 sm:py-4" onClick={handleWhatsApp}>
              Consultar Aplicação no Seu Setor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;