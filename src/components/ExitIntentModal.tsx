import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Clock, Users, CheckCircle, Gift, Phone } from 'lucide-react';
import { useEmailJS } from '@/hooks/useEmailJS';
import { useToast } from '@/hooks/use-toast';
interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ExitIntentModal = ({
  isOpen,
  onClose
}: ExitIntentModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { sendLead, isLoading, error } = useEmailJS();
  const { toast } = useToast();
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vi seu site e gostaria de tirar algumas dúvidas sobre MRO e peças industriais. Podem me ajudar?');
    const whatsappUrl = `https://wa.me/5511947543023?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !whatsapp.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e WhatsApp.",
        variant: "destructive"
      });
      return;
    }

    const success = await sendLead({ name: name.trim(), whatsapp });
    
    if (success) {
      setIsSubmitted(true);
      toast({
        title: "Desconto garantido!",
        description: "Entraremos em contato em breve com sua oferta especial.",
        variant: "default"
      });
      
      setTimeout(() => {
        onClose();
      }, 3000);
    } else {
      toast({
        title: "Erro no envio",
        description: error || "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    }
  };
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };
  if (isSubmitted) {
    return <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={`
        max-w-md mx-auto p-0 gap-0 border-0 bg-transparent shadow-none
        animate-scale-in
      `}>
        <div className="relative bg-background border border-border rounded-xl shadow-industrial overflow-hidden">
          <div className="bg-gradient-success p-6 text-center">
            <div className="bg-background/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success-foreground" />
            </div>
            
            <h2 className="text-xl font-bold text-success-foreground mb-2">
              Desconto Garantido!
            </h2>
            <p className="text-success-foreground/90 text-sm">
              Entraremos em contato em breve com sua oferta especial.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
  }

  return <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={`
        max-w-lg mx-auto p-0 gap-0 border-0 bg-transparent shadow-none
        ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}
      `}>
        <div className="relative bg-background border border-border rounded-xl shadow-industrial overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-accent p-6 text-center relative">
            <button onClick={handleClose} className="absolute top-4 right-4 text-accent-foreground/60 hover:text-accent-foreground transition-colors p-1 rounded-full hover:bg-black/10" aria-label="Fechar">
              <X className="w-5 h-5" />
            </button>
            
            <div className="bg-background/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Gift className="w-8 h-8 text-accent-foreground" />
            </div>
            
            <h2 className="text-xl font-bold text-accent-foreground mb-2">
              Oferta Especial!
            </h2>
            <p className="text-accent-foreground/90 text-lg font-semibold mb-1">
              10% OFF em Mangueiras e Correias
            </p>
            <p className="text-accent-foreground/80 text-sm">
              Válido apenas hoje para visitantes do site
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {!showForm ? (
              <div className="space-y-4">
                {/* Benefits */}
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="bg-success/10 rounded-full p-1">
                      <Clock className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-foreground">Resposta em minutos</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <div className="bg-primary/10 rounded-full p-1">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">20+ anos de experiência</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <div className="bg-accent/10 rounded-full p-1">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">Desconto garantido</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    variant="orcamento" 
                    size="lg" 
                    onClick={() => setShowForm(true)} 
                    className="w-full text-base font-semibold hover-scale"
                  >
                    <Gift className="w-5 h-5 mr-2" />
                    Garantir Meu Desconto
                  </Button>
                  
                  <Button 
                    variant="whatsapp" 
                    size="lg" 
                    onClick={handleWhatsAppClick} 
                    className="w-full text-base font-semibold hover-scale"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Falar Direto no WhatsApp
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleClose} 
                    className="w-full text-muted-foreground hover:text-foreground"
                  >
                    Continuar Navegando
                  </Button>
                </div>

                {/* Trust indicator */}
                <div className="text-center pt-2">
                  <p className="text-xs text-muted-foreground">Mais de 500 empresas confiam na GIA MRO</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Garanta seu desconto
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Preencha os dados e entraremos em contato
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      placeholder="WhatsApp (11) 99999-9999"
                      value={whatsapp}
                      onChange={handleWhatsAppChange}
                      className="w-full"
                      required
                    />
                  </div>

                  <div className="bg-accent/5 rounded-lg p-3 text-center">
                    <p className="text-sm font-medium text-accent">
                      🎯 10% OFF garantido em mangueiras e correias
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      type="submit" 
                      variant="orcamento" 
                      size="lg" 
                      className="w-full text-base font-semibold hover-scale"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Gift className="w-5 h-5 mr-2" />
                          Garantir Desconto
                        </>
                      )}
                    </Button>

                    <Button 
                      type="button"
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowForm(false)}
                      className="w-full"
                    >
                      Voltar
                    </Button>
                  </div>
                </form>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Seus dados estão protegidos e não serão compartilhados</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default ExitIntentModal;