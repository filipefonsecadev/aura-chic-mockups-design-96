import { Search, ShoppingCart, User, Menu, LogOut, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="hidden md:block">
            Frete grátis acima de R$ 199 | Primeira compra com 10% off
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Atendimento: (11) 99999-9999</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-primary">Newsletter</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="ChicAura" className="h-8 w-8" />
            <h1 className="text-2xl font-playfair font-bold text-primary">ChicAura</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Novidades</Link>
            <Link to="/categoria/roupas" className="font-medium hover:text-primary transition-colors">Roupas</Link>
            <Link to="/categoria/acessorios" className="font-medium hover:text-primary transition-colors">Acessórios</Link>
            <Link to="/promocoes" className="font-medium hover:text-primary transition-colors">Promoções</Link>
            <Link to="/sobre" className="font-medium hover:text-primary transition-colors">Sobre</Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
              <Input 
                placeholder="Buscar produtos..." 
                className="w-64 pr-10 bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-1">
                <Search className="h-4 w-4 text-muted-foreground" />
              </Button>
            </form>

            {/* Mobile search */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => navigate('/busca')}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  title="Minha Conta"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate('/perfil')}>
                  <User className="h-4 w-4 mr-2" />
                  Ver Meu Perfil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/perfil')}>
                  <Package className="h-4 w-4 mr-2" />
                  Meus Pedidos
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/login')}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shopping cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => navigate('/carrinho')}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;