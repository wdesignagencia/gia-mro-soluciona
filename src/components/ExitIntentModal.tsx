import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Clock, Users, CheckCircle } from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentModal = ({ isOpen, onClose }: ExitIntentModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Vi seu site e gostaria de tirar algumas dúvidas sobre MRO e peças industriais. Podem me ajudar?'
    );
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={`
        max-w-md mx-auto p-0 gap-0 border-0 bg-transparent shadow-none
        ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}
      `}>
        <div className="relative bg-background border border-border rounded-xl shadow-industrial overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-accent p-6 text-center relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-accent-foreground/60 hover:text-accent-foreground transition-colors p-1 rounded-full hover:bg-black/10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="bg-background/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-accent-foreground" />
            </div>
            
            <h2 className="text-xl font-bold text-accent-foreground mb-2">
              Antes de sair...
            </h2>
            <p className="text-accent-foreground/90 text-sm">
              Que tal tirar suas dúvidas pelo WhatsApp?
            </p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Benefits */}
            <div className="space-y-3">
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
                <span className="text-foreground">Orçamento gratuito</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full text-base font-semibold hover-scale"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp Agora
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
              <p className="text-xs text-muted-foreground">
                Milhares de empresas confiam em nós
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentModal;