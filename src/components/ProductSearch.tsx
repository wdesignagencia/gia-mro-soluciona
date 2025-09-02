import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductSearchProps {
  placeholder?: string;
  onSearch: (term: string) => void;
  className?: string;
  value?: string;
  showClearButton?: boolean;
  variant?: "navigation" | "page";
}

export const ProductSearch = ({
  placeholder = "Buscar produtos...",
  onSearch,
  className,
  value = "",
  showClearButton = true,
  variant = "page"
}: ProductSearchProps) => {
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  if (variant === "navigation") {
    return (
      <div className={cn("relative flex-1 max-w-md", className)}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 pr-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
          />
          {searchTerm && showClearButton && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 hover:bg-destructive/10 hover:text-destructive"
              onClick={handleClear}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-12 pr-12 h-12 text-base bg-card/50 border-2 border-border/30 rounded-xl focus:bg-card focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all duration-300"
        />
        {searchTerm && showClearButton && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 hover:bg-destructive/10 hover:text-destructive rounded-lg"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg">
          <p className="text-sm text-muted-foreground">
            Buscando por: <span className="font-medium text-foreground">"{searchTerm}"</span>
          </p>
        </div>
      )}
    </div>
  );
};