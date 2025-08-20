import Navigation from "@/components/Navigation";
import { Users, Target, Clock, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const milestones = [
    {
      year: "2001",
      title: "Início da Jornada",
      description: "Início da experiência no segmento de manutenção industrial"
    },
    {
      year: "2021",
      title: "Fundação da GIA MRO",
      description: "Nascimento da empresa com foco em soluções completas"
    },
    {
      year: "2023",
      title: "Expansão Regional",
      description: "Criação do ponto de apoio em Jundiaí para melhor atendimento"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer tranquilidade aos clientes, garantindo que recebam exatamente aquilo que realmente servirá para sua aplicação."
    },
    {
      icon: Users,
      title: "Visão",
      description: "Ser a empresa de referência em soluções completas de manutenção industrial no Brasil."
    },
    {
      icon: Award,
      title: "Valores",
      description: "Experiência, qualidade, confiabilidade e compromisso com soluções personalizadas."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-steel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sobre a <span className="text-primary">GIA MRO</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Mais de 20 anos de experiência transformados em soluções completas 
                para manutenção industrial
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Nossa História
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    Com mais de <strong className="text-foreground">20 anos de experiência</strong> no 
                    segmento de manutenção industrial, a GIA MRO nasceu do sonho de ter uma empresa 
                    própria focada em fornecer não apenas produtos, mas <strong className="text-primary">soluções completas</strong> para 
                    nossos clientes.
                  </p>
                  <p>
                    Fundada há <strong className="text-foreground">3 anos</strong>, nossa missão é oferecer 
                    tranquilidade aos clientes, garantindo que recebam exatamente aquilo que realmente 
                    servirá para sua aplicação específica.
                  </p>
                  <p>
                    Nossa vasta experiência nos permite não apenas fornecer produtos de qualidade, 
                    mas também desenvolver soluções personalizadas que atendem às necessidades 
                    específicas de cada cliente.
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <Card className="bg-gradient-hero text-white border-0 shadow-industrial">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Clock className="h-8 w-8" />
                      Horário de Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-white/20">
                        <span className="font-medium">Segunda a Sexta</span>
                        <span className="text-accent">08:00 às 18:00</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        Estamos sempre prontos para atender suas necessidades 
                        e oferecer o suporte que você precisa.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-steel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossa Jornada
              </h2>
              <p className="text-lg text-muted-foreground">
                Mais de duas décadas construindo experiência e confiança
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-px"></div>

              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="shadow-card-industrial border-border/50 hover:shadow-industrial transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground">
                Os princípios que guiam nossa atuação no mercado
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="group text-center hover:shadow-industrial transition-all duration-300 hover:-translate-y-2 border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <div className="text-white/90">Anos de Experiência</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <div className="text-white/90">Anos da GIA MRO</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-white/90">Unidades SP</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-4xl font-bold text-accent mb-2">100km</div>
                <div className="text-white/90">Entrega Gratuita</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;