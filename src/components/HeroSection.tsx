import { ArrowRight, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  const differentials = [
    "Mais de 20 anos de experiência",
    "Soluções completas personalizadas",
    "Desenvolvimento sem custo",
    "Atendimento nacional"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Instalações industriais modernas da GIA MRO"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Líder em Soluções MRO</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                GIA MRO
                <span className="block text-accent">Soluções Completas</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90">
                  em Manutenção Industrial
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Mais de 20 anos de experiência fornecendo não apenas produtos, 
                mas soluções completas para sua operação industrial.
              </p>
            </div>

            {/* Key Differentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 group"
              >
                <Phone className="h-5 w-5 mr-2" />
                Solicite um Orçamento Gratuito
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="whatsapp" 
                size="lg" 
                className="text-lg px-8 py-6"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Fale via WhatsApp
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">20+</div>
                <div className="text-sm text-white/70">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm text-white/70">Anos no Mercado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100km</div>
                <div className="text-sm text-white/70">Entrega Gratuita</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element (Optional for spacing) */}
          <div className="lg:block hidden">
            {/* This column provides visual balance - the image is in the background */}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;