import { Star, Headphones, DollarSign, Package, MapPin, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const KeyDifferentials = () => {
  const differentials = [
    {
      icon: Star,
      title: "20+ Anos Experiência",
      description: "Mais de 20 anos no segmento de manutenção industrial, fornecendo mangueiras, correias e mangotes de qualidade certificada.",
      highlight: "Desde 2004"
    },
    {
      icon: Headphones,
      title: "Suporte Técnico Especializado",
      description: "Suporte técnico pré e pós-venda especializado em aplicações industriais. Nossa equipe entende sua necessidade específica.",
      highlight: "Pré e Pós"
    },
    {
      icon: DollarSign,
      title: "Desenvolvimento Sem Custo",
      description: "Desenvolvemos produtos personalizados para sua aplicação específica sem custo adicional. Soluções, não apenas produtos.",
      highlight: "Sem custo"
    },
    {
      icon: Package,
      title: "Pronta Entrega 100km",
      description: "Estoque completo em São Paulo e Jundiaí com entrega gratuita em até 100km. Mangueiras, correias e mangotes sempre disponíveis.",
      highlight: "Entrega grátis"
    },
    {
      icon: MapPin,
      title: "Atendimento Nacional",
      description: "Cobertura nacional para fornecimento de mangueiras borracha/PVC, correias em V e mangotes flangeados para todos os setores.",
      highlight: "Todo Brasil"
    },
    {
      icon: Wrench,
      title: "Qualidade Certificada",
      description: "Fornecedor MRO certificado com produtos que atendem normas técnicas brasileiras (ABNT) e internacionais (ISO).",
      highlight: "ISO/ABNT"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/71bc1e17-59f6-46a3-8a2a-70f543a66b36.png"
          alt="Industrial hoses background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Por que escolher a GIA há 20+ anos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Diferenciais Competitivos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos <strong>fornecedor MRO especializado</strong> em mangueiras borracha/PVC, 
            correias em V e mangotes flangeados. Oferecemos tranquilidade e aplicação correta.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-accent opacity-5 rounded-full -translate-y-8 translate-x-8"></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-steel rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para experimentar a diferença?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se aos nossos clientes que já experimentam a tranquilidade de trabalhar 
            com uma empresa que oferece soluções completas e personalizadas.
          </p>
          <div className="text-sm text-muted-foreground">
            <strong className="text-foreground">Horário de Atendimento:</strong> Segunda a sexta, das 08:00 às 18:00
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentials;