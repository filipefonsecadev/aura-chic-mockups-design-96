import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, Grid, List } from "lucide-react";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import handbag from "@/assets/handbag.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";

const CategoryPage = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      image: product1,
      name: "Vestido Floral Elegante em Tecido Premium",
      price: 189.90,
      originalPrice: 229.90,
      category: "Vestidos",
      size: ["P", "M", "G", "GG"],
      colors: ["Rosa", "Azul", "Branco"],
      isNew: true,
      onSale: true,
    },
    {
      id: 2,
      image: product2,
      name: "Blusa Romântica Rosa com Detalhes em Renda",
      price: 129.90,
      category: "Blusas",
      size: ["P", "M", "G"],
      colors: ["Rosa", "Branco"],
    },
    {
      id: 3,
      image: product3,
      name: "Conjunto Casual Chic para o Dia a Dia",
      price: 249.90,
      category: "Conjuntos",
      size: ["P", "M", "G", "GG"],
      colors: ["Bege", "Preto"],
    },
    {
      id: 4,
      image: product4,
      name: "Vestido de Festa Rosé Elegante",
      price: 299.90,
      category: "Vestidos",
      size: ["P", "M", "G"],
      colors: ["Rosé", "Dourado"],
      isNew: true,
    },
    {
      id: 5,
      image: handbag,
      name: "Bolsa Clássica em Couro Premium",
      price: 199.90,
      originalPrice: 249.90,
      category: "Acessórios",
      colors: ["Cream", "Preto", "Marrom"],
      onSale: true,
    },
    {
      id: 6,
      image: accessoriesCollection,
      name: "Kit Acessórios Premium Completo",
      price: 149.90,
      originalPrice: 199.90,
      category: "Acessórios",
      onSale: true,
    },
    {
      id: 7,
      image: product1,
      name: "Vestido Midi Estampado",
      price: 169.90,
      category: "Vestidos",
      size: ["P", "M", "G"],
      colors: ["Estampado"],
    },
    {
      id: 8,
      image: product2,
      name: "Cardigan Delicado",
      price: 119.90,
      category: "Blusas",
      size: ["P", "M", "G", "GG"],
      colors: ["Rosa", "Cinza", "Branco"],
    },
  ];

  const categories = ["Vestidos", "Blusas", "Calças", "Conjuntos", "Acessórios"];
  const sizes = ["PP", "P", "M", "G", "GG"];
  const colors = ["Preto", "Branco", "Rosa", "Azul", "Bege", "Cinza"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="text-sm text-muted-foreground">
          <span>Home</span> <span className="mx-2">/</span> <span className="text-foreground font-medium">Roupas</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-playfair font-bold mb-2">Roupas</h1>
            <p className="text-muted-foreground">Descubra nossa coleção completa de roupas femininas</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sort */}
            <Select defaultValue="recent">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Mais recentes</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
                <SelectItem value="popular">Mais populares</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Mostrando {products.length} produtos
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block w-80 ${showFilters ? 'block' : 'hidden'}`}>
            <Card className="p-6 sticky top-24">
              <h3 className="font-semibold mb-4">Filtros</h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Faixa de Preço</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  step={10}
                  className="mb-3"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>R$ {priceRange[0]}</span>
                  <span>R$ {priceRange[1]}</span>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categorias</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Tamanhos</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <Button key={size} variant="outline" size="sm" className="h-8">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Cores</h4>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox id={color} />
                      <label htmlFor={color} className="text-sm cursor-pointer">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Limpar Filtros
              </Button>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {products.map((product) => (
                viewMode === "grid" ? (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    isNew={product.isNew}
                    onSale={product.onSale}
                  />
                ) : (
                  <Card key={product.id} className="flex overflow-hidden hover-lift">
                    <div className="w-48 h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-lg">{product.name}</h3>
                        <div className="flex gap-2">
                          {product.isNew && (
                            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                              Novo
                            </span>
                          )}
                          {product.onSale && (
                            <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                              Sale
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-primary">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                      {product.size && (
                        <div className="mb-3">
                          <span className="text-sm text-muted-foreground">Tamanhos: </span>
                          <span className="text-sm">{product.size.join(", ")}</span>
                        </div>
                      )}
                      <Button variant="elegant" className="w-full">
                        Adicionar ao Carrinho
                      </Button>
                    </CardContent>
                  </Card>
                )
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" disabled>Anterior</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Próximo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;