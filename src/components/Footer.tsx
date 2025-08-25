const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Site desenvolvido por{" "}
            <a 
              href="https://wdesignagencia.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              W Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;