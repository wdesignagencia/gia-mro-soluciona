import { useState } from "react";
import { useEmailJS } from "@/hooks/useEmailJS";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuickQuoteForm = () => {
  const { toast } = useToast();
  const { sendQuickLead, isLoading } = useEmailJS();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    product: ""
  });

  const productOptions = [
    { value: "mangueiras-pvc", label: "Mangueiras PVC" },
    { value: "mangueiras-borracha", label: "Mangueiras Borracha" },
    { value: "correias-geral", label: "Correias em Geral" },
    { value: "lencois-borracha", label: "Lençóis de Borracha" },
    { value: "plasticos-engenharia", label: "Plásticos de Engenharia" },
    { value: "desenvolvimento-personalizado", label: "Desenvolvimento Personalizado" },
    { value: "outros", label: "Outros" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.name.trim() || !formData.whatsapp.trim() || !formData.product) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // 1. Envia via EmailJS (captura garantida)
    const emailSent = await sendQuickLead(formData);

    if (emailSent) {
      // 2. Mostra toast de sucesso
      toast({
        title: "✅ Dados recebidos!",
        description: "Redirecionando para WhatsApp em instantes..."
      });

      // 3. Aguarda 1.5s e redireciona para WhatsApp
      setTimeout(() => {
        const productLabel = productOptions.find(p => p.value === formData.product)?.label || formData.product;
        const message = `🏭 *SOLICITAÇÃO DE ORÇAMENTO RÁPIDO - GIA MRO*

*Nome:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Produto de Interesse:* ${productLabel}

Gostaria de receber um orçamento personalizado!

---
Enviado através do site www.giamro.com.br`;

        const whatsappNumber = "5511947543023";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');

        // Reset form
        setFormData({ name: "", whatsapp: "", product: "" });
      }, 1500);
    }
  };

  return (
    <section id="quick-quote" className="py-20 bg-gradient-steel">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Orçamento em 30 Segundos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Receba sua Proposta Personalizada Agora
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha 3 campos e nossa equipe entra em contato via WhatsApp em minutos
          </p>
        </div>

        <Card className="shadow-industrial border-border/50 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Formulário Rápido</CardTitle>
            <CardDescription className="text-muted-foreground">
              Todos os campos são obrigatórios
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="quick-name" className="text-foreground">
                  Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="quick-name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quick-whatsapp" className="text-foreground">
                  WhatsApp <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="quick-whatsapp"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quick-product" className="text-foreground">
                  Produto de Interesse <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.product}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, product: value }))}
                  disabled={isLoading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o produto" />
                  </SelectTrigger>
                  <SelectContent>
                    {productOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Solicitar Orçamento Gratuito
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center pt-2 text-sm text-muted-foreground">
                <p>
                  🔒 Ao enviar, você concorda em compartilhar seus dados para receber orçamento. 
                  Seus dados são protegidos e não serão compartilhados com terceiros.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickQuoteForm;
