import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, Gift, Percent, Star } from "lucide-react";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import handbag from "@/assets/handbag.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";

const PromotionsPage = () => {
  const promotionalProducts = [
    {
      id: 1,
      image: product1,
      name: "Vestido Floral Elegante",
      price: 189.90,
      originalPrice: 229.90,
      discount: 17,
      onSale: true,
    },
    {
      id: 2,
      image: product2,
      name: "Blusa Romântica Rosa",
      price: 129.90,
      originalPrice: 179.90,
      discount: 28,
      onSale: true,
    },
    {
      id: 3,
      image: product3,
      name: "Conjunto Casual Chic",
      price: 199.90,
      originalPrice: 299.90,
      discount: 33,
      onSale: true,
    },
    {
      id: 4,
      image: product4,
      name: "Vestido de Festa Rosé",
      price: 249.90,
      originalPrice: 349.90,
      discount: 29,
      onSale: true,
    },
    {
      id: 5,
      image: handbag,
      name: "Bolsa Clássica Premium",
      price: 159.90,
      originalPrice: 229.90,
      discount: 30,
      onSale: true,
    },
    {
      id: 6,
      image: accessoriesCollection,
      name: "Kit Acessórios Completo",
      price: 119.90,
      originalPrice: 189.90,
      discount: 37,
      onSale: true,
    },
  ];

  const promoOffers = [
    {
      icon: Percent,
      title: "Primeira Compra",
      description: "10% OFF",
      details: "Para novos clientes",
      code: "PRIMEIRA10",
      color: "bg-green-500"
    },
    {
      icon: Gift,
      title: "Frete Grátis",
      description: "Acima de R$ 199",
      details: "Para todo o Brasil",
      code: "FRETEGRATIS",
      color: "bg-blue-500"
    },
    {
      icon: Star,
      title: "Cliente VIP",
      description: "15% OFF",
      details: "Acima de 3 compras",
      code: "VIP15",
      color: "bg-purple-500"
    },
    {
      icon: Timer,
      title: "Flash Sale",
      description: "Até 50% OFF",
      details: "Por tempo limitado",
      code: "FLASH50",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Timer className="h-4 w-4" />
            <span className="text-sm font-medium">Ofertas por tempo limitado</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Super
            <span className="block text-yellow-300">Promoções</span>
          </h1>
          
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Descontos imperdíveis nas peças mais desejadas da nossa coleção. 
            Aproveite antes que acabe!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Ver Todas as Ofertas
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Cadastre-se e Ganhe 10% OFF
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Offers */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Cupons Exclusivos</h2>
            <p className="text-lg text-muted-foreground">
              Use os códigos abaixo e economize ainda mais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promoOffers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden hover-lift border-0 shadow-elegant">
                <div className={`absolute top-0 right-0 w-16 h-16 ${offer.color} transform rotate-45 translate-x-8 -translate-y-8`}></div>
                
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <offer.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{offer.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{offer.details}</p>
                  
                  <div className="bg-muted rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Código do cupom:</p>
                    <p className="font-mono font-bold">{offer.code}</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Copiar Código
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sales Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-4">Produtos em Promoção</h2>
              <p className="text-lg text-muted-foreground">
                Peças selecionadas com descontos especiais
              </p>
            </div>
            
            <div className="hidden md:flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full">
              <Timer className="h-4 w-4" />
              <span className="text-sm font-medium">Últimas 24h</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
            {promotionalProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  onSale={product.onSale}
                />
                
                {/* Discount Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="destructive" className="text-white font-bold">
                    -{product.discount}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="elegant" size="lg">
              Ver Mais Promoções
            </Button>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="py-16 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Timer className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">Oferta por tempo limitado</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Flash Sale 50% OFF
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              Apenas hoje! 50% de desconto em produtos selecionados. 
              Não perca essa oportunidade única!
            </p>

            {/* Countdown Timer Mockup */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">08</div>
                <div className="text-sm">Horas</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm">Min</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm">Seg</div>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Aproveitar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Seja a Primeira a Saber
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cadastre-se na nossa newsletter e receba ofertas exclusivas, 
            lançamentos e cupons de desconto especiais
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
            />
            <Button variant="elegant" className="px-6">
              Cadastrar
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            🎁 Ganhe 10% OFF na primeira compra ao se cadastrar
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromotionsPage;