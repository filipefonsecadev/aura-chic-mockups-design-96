import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Import images
import heroBanner from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";
import handbag from "@/assets/handbag.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      image: product1,
      name: "Vestido Floral Elegante",
      price: 189.90,
      isNew: true,
    },
    {
      id: 2,
      image: product2,
      name: "Blusa Romântica Rosa",
      price: 129.90,
      originalPrice: 159.90,
      onSale: true,
    },
    {
      id: 3,
      image: product3,
      name: "Conjunto Casual Chic",
      price: 249.90,
    },
    {
      id: 4,
      image: product4,
      name: "Vestido de Festa Rosé",
      price: 299.90,
      isNew: true,
    },
    {
      id: 5,
      image: handbag,
      name: "Bolsa Clássica Cream",
      price: 199.90,
    },
    {
      id: 6,
      image: accessoriesCollection,
      name: "Kit Acessórios Premium",
      price: 149.90,
      originalPrice: 199.90,
      onSale: true,
    },
  ];

  const newArrivals = featuredProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Nova Coleção ChicAura"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-lg text-white fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
              Nova Coleção
              <span className="block text-primary">Primavera</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Descubra peças únicas que expressam sua personalidade com elegância e sofisticação.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="elegant" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate('/categoria/roupas')}
              >
                Compre Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-primary"
                onClick={() => navigate('/categoria/novidades')}
              >
                Ver Coleção
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/categoria/roupas">
            <Card className="group cursor-pointer overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product1} 
                  alt="Roupas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-playfair font-semibold mb-2">Roupas</h3>
                  <p className="text-white/90">Vestidos, blusas e muito mais</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/categoria/acessorios">
            <Card className="group cursor-pointer overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={accessoriesCollection} 
                  alt="Acessórios"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-playfair font-semibold mb-2">Acessórios</h3>
                  <p className="text-white/90">Bolsas, joias e óculos</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/">
            <Card className="group cursor-pointer overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product4} 
                  alt="Novidades"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-playfair font-semibold mb-2">Novidades</h3>
                  <p className="text-white/90">As últimas tendências</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selecionamos especialmente para você as peças mais desejadas da nossa coleção
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                isNew={product.isNew}
                onSale={product.onSale}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/categoria/todos')}
            >
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-4">Novidades</h2>
              <p className="text-lg text-muted-foreground">
                Recém-chegadas para você se apaixonar
              </p>
            </div>
            <Button 
              variant="elegant"
              onClick={() => navigate('/')}
            >
              Ver Todas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                isNew={product.isNew}
                onSale={product.onSale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Tendências da Temporada</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Inspire-se com os looks mais desejados desta temporada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trend 1 */}
            <Card className="group overflow-hidden hover-lift border-0 shadow-elegant">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product2} 
                  alt="Trend 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-playfair font-semibold mb-2">Romantic Vibes</h3>
                  <p className="text-white/90 text-sm">Looks delicados e femininos</p>
                </div>
              </div>
            </Card>

            {/* Trend 2 */}
            <Card className="group overflow-hidden hover-lift border-0 shadow-elegant">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product3} 
                  alt="Trend 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-playfair font-semibold mb-2">Casual Chic</h3>
                  <p className="text-white/90 text-sm">Elegância no dia a dia</p>
                </div>
              </div>
            </Card>

            {/* Trend 3 */}
            <Card className="group overflow-hidden hover-lift border-0 shadow-elegant md:col-span-2 lg:col-span-1">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product4} 
                  alt="Trend 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-playfair font-semibold mb-2">Evening Glow</h3>
                  <p className="text-white/90 text-sm">Para ocasiões especiais</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;