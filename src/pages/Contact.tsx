import Navigation from "@/components/Navigation";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
const Contact = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "GIA",
      "alternateName": "GIA Produtos Industriais",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-94754-3023",
        "email": "contato@giamro.com.br",
        "contactType": "customer service",
        "availableLanguage": "Portuguese",
        "hoursAvailable": "Mo-Fr 08:00-18:00",
        "description": "Fornecedor MRO especializado em mangueiras, correias e mangotes industriais"
      },
      "knowsAbout": ["Mangueira Borracha", "Correia em V", "Mangote Flangeado", "Fornecedor MRO"],
      "yearsOfExperience": "20+"
    }
  };
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    empresa: "",
    telefone: "",
    email: "",
    produtoInteresse: "",
    outrosProduto: "",
    quantidadeEspecificacoes: "",
    mensagem: ""
  });
  const productOptions = [{
    value: "mangueiras-pvc",
    label: "Mangueiras PVC"
  }, {
    value: "mangueiras-borracha",
    label: "Mangueiras Borracha"
  }, {
    value: "correias-geral",
    label: "Correias em Geral"
  }, {
    value: "lencois-borracha",
    label: "Lençóis de Borracha"
  }, {
    value: "plasticos-engenharia",
    label: "Plásticos de Engenharia"
  }, {
    value: "desenvolvimento-personalizado",
    label: "Desenvolvimento Personalizado"
  }, {
    value: "outros",
    label: "Outros"
  }];
  const contactMethods = [{
    icon: Phone,
    title: "Telefone",
    description: "Ligue diretamente para nossa equipe",
    contact: "+55 (11) 94754-3023",
    action: "Ligar Agora",
    available: "Seg-Sex: 08:00-18:00"
  }, {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Converse conosco pelo WhatsApp",
    contact: "+55 (11) 94754-3023",
    action: "Abrir WhatsApp",
    available: "Disponível 24h"
  }, {
    icon: Mail,
    title: "E-mail",
    description: "Envie sua solicitação por e-mail",
    contact: "vendas@giamro.com.br",
    action: "Enviar E-mail",
    available: "Resposta rápida"
  }];
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleContactAction = (method: any) => {
    if (method.title === "Telefone") {
      window.open(`tel:${method.contact}`, '_self');
    } else if (method.title === "WhatsApp") {
      const message = "Olá! Gostaria de mais informações sobre os produtos GIA MRO.";
      const whatsappNumber = "5511947543023";
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    } else if (method.title === "E-mail") {
      window.open(`mailto:${method.contact}?subject=Contato pelo site GIA MRO`, '_self');
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const requiredFields = ['nomeCompleto', 'empresa', 'telefone', 'email', 'produtoInteresse', 'mensagem'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Create WhatsApp message
    const productLabel = productOptions.find(p => p.value === formData.produtoInteresse)?.label || formData.produtoInteresse;
    const otherProduct = formData.produtoInteresse === 'outros' ? `\n*Produto Específico:* ${formData.outrosProduto}` : '';
    const message = `🏭 *SOLICITAÇÃO DE ORÇAMENTO - GIA MRO*

*Nome:* ${formData.nomeCompleto}
*Empresa:* ${formData.empresa}
*Telefone:* ${formData.telefone}
${formData.email ? `*E-mail:* ${formData.email}` : ''}

*Produto de Interesse:* ${productLabel}${otherProduct}

${formData.quantidadeEspecificacoes ? `*Especificações:* ${formData.quantidadeEspecificacoes}` : ''}

*Mensagem:* ${formData.mensagem}

---
Enviado através do site www.giamro.com.br`;

    // Send to WhatsApp
    const whatsappNumber = "5511947543023";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    try {
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      toast({
        title: "Redirecionando para WhatsApp!",
        description: "Sua mensagem foi preparada. Nossa equipe responderá em breve!"
      });

      // Reset form
      setFormData({
        nomeCompleto: "",
        empresa: "",
        telefone: "",
        email: "",
        produtoInteresse: "",
        outrosProduto: "",
        quantidadeEspecificacoes: "",
        mensagem: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao abrir WhatsApp",
        description: "Tente novamente ou entre em contato diretamente: (11) 94754-3023",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen bg-background">
      <SEOHead title="Contato | Orçamento Mangueiras, Correias, Mangotes | GIA | São Paulo" description="Solicite orçamento mangueiras borracha/PVC, correias em V, mangotes flangeados. WhatsApp (11) 94754-3023. Atendimento 08h-18h. Desenvolvimento sem custo." keywords="orçamento mangueira borracha, correia em V preço, mangote flangeado cotação, fornecedor MRO São Paulo, contato industrial" url="https://giamro.com.br/contato" structuredData={contactStructuredData} />
      <Navigation />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-steel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Entre em <span className="text-primary">Contato</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Solicite orçamento <strong>mangueiras borracha/PVC, correias em V, mangotes flangeados</strong>. 
                <strong> 20+ anos experiência</strong> em <strong>equipamentos manutenção industrial</strong>. 
                <strong> Desenvolvimento sem custo</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => <Card key={index} className="group text-center hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 border-border/50" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-gradient-steel rounded-lg">
                      <p className="font-semibold text-foreground">{method.contact}</p>
                      <p className="text-sm text-muted-foreground">{method.available}</p>
                    </div>
                    <Button variant="industrial" size="sm" className="w-full" onClick={() => handleContactAction(method)}>
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-steel">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Solicite seu Orçamento Gratuito
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato 
                com a solução ideal para sua necessidade
              </p>
            </div>

            <Card className="shadow-industrial border-border/50 bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Formulário de Contato
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Campos marcados com <span className="text-destructive">*</span> são obrigatórios
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nomeCompleto" className="text-foreground">
                        Nome Completo <span className="text-destructive">*</span>
                      </Label>
                      <Input id="nomeCompleto" placeholder="Seu nome completo" value={formData.nomeCompleto} onChange={e => handleInputChange('nomeCompleto', e.target.value)} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-foreground">
                        Empresa <span className="text-destructive">*</span>
                      </Label>
                      <Input id="empresa" placeholder="Nome da sua empresa" value={formData.empresa} onChange={e => handleInputChange('empresa', e.target.value)} required />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-foreground">
                        Telefone/WhatsApp <span className="text-destructive">*</span>
                      </Label>
                      <Input id="telefone" placeholder="(11) 99999-9999" value={formData.telefone} onChange={e => handleInputChange('telefone', e.target.value)} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        E-mail <span className="text-destructive">*</span>
                      </Label>
                      <Input id="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required />
                    </div>
                  </div>

                  {/* Product Interest */}
                  <div className="space-y-2">
                    <Label htmlFor="produtoInteresse" className="text-foreground">
                      Produto de Interesse <span className="text-destructive">*</span>
                    </Label>
                    <Select value={formData.produtoInteresse} onValueChange={value => handleInputChange('produtoInteresse', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o produto de interesse" />
                      </SelectTrigger>
                      <SelectContent>
                        {productOptions.map(option => <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Other Product (conditional) */}
                  {formData.produtoInteresse === 'outros' && <div className="space-y-2 animate-fade-in">
                      <Label htmlFor="outrosProduto" className="text-foreground">
                        Especifique o produto
                      </Label>
                      <Input id="outrosProduto" placeholder="Descreva o produto que você precisa" value={formData.outrosProduto} onChange={e => handleInputChange('outrosProduto', e.target.value)} />
                    </div>}

                  {/* Specifications */}
                  <div className="space-y-2">
                    <Label htmlFor="quantidadeEspecificacoes" className="text-foreground">
                      Quantidade/Especificações
                    </Label>
                    <Textarea id="quantidadeEspecificacoes" placeholder="Ex: Quantidade necessária, dimensões, especificações técnicas..." value={formData.quantidadeEspecificacoes} onChange={e => handleInputChange('quantidadeEspecificacoes', e.target.value)} className="min-h-[80px]" />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="mensagem" className="text-foreground">
                      Mensagem <span className="text-destructive">*</span>
                    </Label>
                    <Textarea id="mensagem" placeholder="Descreva sua necessidade, aplicação ou tire suas dúvidas..." value={formData.mensagem} onChange={e => handleInputChange('mensagem', e.target.value)} className="min-h-[120px]" required />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </> : <>
                          <Send className="h-5 w-5 mr-2" />
                          Enviar Solicitação de Orçamento
                        </>}
                    </Button>
                  </div>

                  {/* Additional Info */}
                  <div className="text-center pt-4 text-sm text-muted-foreground">
                    <p className="mb-2">
                      🔒 Seus dados estão seguros conosco e não serão compartilhados
                    </p>
                    <p>
                      ⚡ Resposta <strong className="text-foreground">IMEDIATA</strong> via WhatsApp!
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Nossas Unidades</h3>
                      <p className="text-white/90">Matriz: Cambuci - São Paulo/SP</p>
                      <p className="text-white/90">Filial: Jundiaí/SP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Horário de Atendimento</h3>
                      <p className="text-white/90">Segunda a Sexta: 08:00 às 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-accent" />
                      Por que nos escolher?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Desenvolvimento sem custo adicional
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Entrega gratuita até 100km
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Suporte técnico especializado
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Mais de 20 anos de experiência
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default Contact;