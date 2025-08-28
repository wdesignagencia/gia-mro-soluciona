import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511947543023?text=Olá! Gostaria de mais informações sobre mangueiras, correias e mangotes industriais.', '_blank');
  };
  const handleOrcamento = () => {
    navigate('/contato');
  };
  const navItems = [{
    href: "/",
    label: "Home"
  }, {
    href: "/sobre",
    label: "Sobre"
  }, {
    href: "/produtos",
    label: "Produtos"
  }, {
    href: "/localidades",
    label: "Localidades"
  }, {
    href: "/contato",
    label: "Contato"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card-industrial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/bc4bfb01-72a0-48f4-9112-e877622b0b14.png" 
              alt="GIA MRO - Soluções em Manutenção Industrial" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.href} to={item.href} className={cn("text-sm font-medium transition-colors hover:text-primary", isActive(item.href) ? "text-primary border-b-2 border-accent pb-1" : "text-muted-foreground")}>
                {item.label}
              </Link>)}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="whatsapp" size="sm" className="flex items-center gap-2" onClick={handleWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button variant="hero" size="sm" className="flex items-center gap-2" onClick={handleOrcamento}>
              <Phone className="h-4 w-4" />
              Orçamento
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map(item => <Link key={item.href} to={item.href} className={cn("block px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-accent/50")} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>)}
              <div className="flex flex-col space-y-2 px-3 pt-3">
                <Button variant="whatsapp" size="sm" className="w-full justify-center" onClick={handleWhatsApp}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="hero" size="sm" className="w-full justify-center" onClick={handleOrcamento}>
                  <Phone className="h-4 w-4 mr-2" />
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;