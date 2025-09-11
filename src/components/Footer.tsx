const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vi seu site e gostaria de tirar algumas dúvidas sobre MRO e peças industriais. Podem me ajudar?');
    const whatsappUrl = `https://wa.me/5511947543023?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-primary/10 border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-accent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Empresa */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">GIA</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Gia Comércio e Representação Ltda</p>
              <p>Especialistas em MRO e Peças Industriais</p>
              <p>Mais de 20 anos de experiência no mercado</p>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <button 
                  onClick={handleWhatsAppClick}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  (11) 9.4754-3023
                </button>
              </div>
              <div className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <p>Rua José Bento, 244</p>
                  <p>Cambuci – São Paulo/SP</p>
                  <p>CEP: 01523-030</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Legais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Informações Legais</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <p className="font-medium">CNPJ:</p>
                <p>46.743.371/0001-64</p>
              </div>
              <div>
                <p className="font-medium">Inscrição Estadual:</p>
                <p>121.978.696.111</p>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Navegação</h3>
            <div className="space-y-2 text-sm">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="/produtos" className="block text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="/localidades" className="block text-muted-foreground hover:text-primary transition-colors">
                Localidades
              </a>
              <a href="/contato" className="block text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} GIA - Gia Comércio e Representação Ltda. Todos os direitos reservados.</p>
            </div>
            
            {/* Assinatura */}
            <div className="text-sm text-muted-foreground">
              Site desenvolvido por{" "}
              <a 
                href="https://wdesignagencia.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                W Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;