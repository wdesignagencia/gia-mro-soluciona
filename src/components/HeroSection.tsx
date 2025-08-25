import { ArrowRight, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial-new.jpg";

const HeroSection = () => {
  const differentials = [
    "Mais de 20 anos de experiência",
    "Soluções completas personalizadas",
    "Desenvolvimento sem custo",
    "Atendimento nacional"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/97b2a341-3ed2-4729-9e9c-be4a92d52607.png"
          alt="Instalações industriais modernas da GIA MRO"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6 lg:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 lg:px-4 lg:py-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-xs lg:text-sm font-medium">Líder em Soluções MRO</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                GIA MRO
                <span className="block text-accent">Soluções Completas</span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white/90">
                  em Manutenção Industrial
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Mais de 20 anos de experiência fornecendo não apenas produtos, 
                mas soluções completas para sua operação industrial.
              </p>
            </div>

            {/* Key Differentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-2 lg:gap-3">
                  <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-accent flex-shrink-0" />
                  <span className="text-sm lg:text-base text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-sm lg:text-lg px-6 py-4 lg:px-8 lg:py-6 group"
              >
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                Solicite um Orçamento Gratuito
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="whatsapp" 
                size="lg" 
                className="text-sm lg:text-lg px-6 py-4 lg:px-8 lg:py-6"
              >
                <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                Fale via WhatsApp
              </Button>
            </div>

          </div>

          {/* Right Column - Stats Card */}
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <div className="bg-background/95 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 shadow-2xl w-full max-w-sm animate-fade-in">
              <div className="text-center mb-4 lg:mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Nossa Experiência</h3>
                <p className="text-sm lg:text-base text-muted-foreground">Números que comprovam nossa excelência</p>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="text-center p-3 lg:p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">20+</div>
                  <div className="text-xs lg:text-sm font-medium text-foreground">Anos de Experiência</div>
                  <div className="text-xs text-muted-foreground mt-1">Soluções industriais comprovadas</div>
                </div>
                
                <div className="text-center p-3 lg:p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                  <div className="text-3xl lg:text-4xl font-bold text-secondary mb-1">3</div>
                  <div className="text-xs lg:text-sm font-medium text-foreground">Anos no Mercado</div>
                  <div className="text-xs text-muted-foreground mt-1">Crescimento consistente</div>
                </div>
                
                <div className="text-center p-3 lg:p-4 bg-accent/5 rounded-xl border border-accent/10">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">100km</div>
                  <div className="text-xs lg:text-sm font-medium text-foreground">Entrega Gratuita</div>
                  <div className="text-xs text-muted-foreground mt-1">Região metropolitana</div>
                </div>
              </div>
              
              <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-border text-center">
                <div className="text-xs text-muted-foreground">Atendimento Nacional</div>
                <div className="text-xs lg:text-sm font-medium text-foreground">Soluções em todo Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;