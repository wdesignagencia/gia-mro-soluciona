import { Star, Headphones, DollarSign, Package, MapPin, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const KeyDifferentials = () => {
  const differentials = [
    {
      icon: Star,
      title: "Vasta Experiência",
      description: "Mais de 20 anos de experiência no segmento de manutenção industrial, garantindo conhecimento profundo do mercado.",
      highlight: "20+ anos"
    },
    {
      icon: Headphones,
      title: "Suporte Completo",
      description: "Suporte técnico especializado pré e pós-venda, assegurando que você tenha todo o apoio necessário.",
      highlight: "24/7"
    },
    {
      icon: DollarSign,
      title: "Preços Competitivos",
      description: "Oferecemos os melhores preços do mercado sem comprometer a qualidade dos nossos produtos e serviços.",
      highlight: "Melhor custo"
    },
    {
      icon: Package,
      title: "Qualidade Certificada",
      description: "Todos os nossos produtos passam por rigorosos controles de qualidade e atendem às normas técnicas mais exigentes.",
      highlight: "ISO Certified"
    },
    {
      icon: MapPin,
      title: "Atendimento Nacional",
      description: "Cobertura nacional com entregas gratuitas em um raio de até 100km das nossas unidades em SP.",
      highlight: "100km grátis"
    },
    {
      icon: Wrench,
      title: "Desenvolvimento Sem Custo",
      description: "Desenvolvemos produtos personalizados para sua aplicação específica sem custo adicional.",
      highlight: "Grátis"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Por que escolher a GIA MRO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos muito mais que produtos - entregamos tranquilidade e soluções 
            completas para garantir o sucesso da sua operação industrial.
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