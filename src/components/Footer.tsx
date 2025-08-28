const Footer = () => {
  return (
    <footer className="bg-primary/10 border-t border-primary/20 py-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-accent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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