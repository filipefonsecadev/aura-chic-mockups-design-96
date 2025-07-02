import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="text-center mb-12 py-8 gradient-hero rounded-2xl">
          <h3 className="text-2xl font-playfair font-semibold mb-3">
            Receba nossas novidades
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Seja a primeira a saber sobre lançamentos e promoções exclusivas
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Seu e-mail" 
              className="flex-1"
            />
            <Button variant="elegant">Inscrever</Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="ChicAura" className="h-6 w-6" />
              <h4 className="text-lg font-playfair font-bold text-primary">ChicAura</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Moda feminina elegante e contemporânea para mulheres que valorizam estilo e qualidade.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <span className="text-xs">@</span>
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h5 className="font-semibold mb-4">Comprar</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Novidades</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vestidos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blusas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Calças</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Acessórios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Promoções</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold mb-4">Atendimento</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guia de Tamanhos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4">Contato</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 contato@chicaura.com.br</li>
              <li>📱 (11) 99999-9999</li>
              <li>🕒 Seg - Sex: 9h às 18h</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ChicAura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;