import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X, TrendingUp } from "lucide-react";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import handbag from "@/assets/handbag.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("vestido");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const searchResults = [
    {
      id: 1,
      image: product1,
      name: "Vestido Floral Elegante Premium",
      price: 189.90,
      originalPrice: 229.90,
      category: "Vestidos",
      isNew: true,
      onSale: true,
    },
    {
      id: 2,
      image: product4,
      name: "Vestido de Festa Rosé Elegante",
      price: 299.90,
      category: "Vestidos",
      isNew: true,
    },
    {
      id: 3,
      image: product2,
      name: "Blusa Romântica Rosa com Vestido",
      price: 129.90,
      originalPrice: 159.90,
      category: "Blusas",
      onSale: true,
    },
    {
      id: 4,
      image: product3,
      name: "Conjunto Casual Chic",
      price: 249.90,
      category: "Conjuntos",
    },
    {
      id: 5,
      image: handbag,
      name: "Bolsa Clássica Premium",
      price: 199.90,
      category: "Acessórios",
    },
    {
      id: 6,
      image: accessoriesCollection,
      name: "Kit Acessórios Completo",
      price: 149.90,
      originalPrice: 199.90,
      category: "Acessórios",
      onSale: true,
    },
  ];

  const trendingSearches = [
    "vestido midi",
    "blusa romântica", 
    "bolsa couro",
    "vestido festa",
    "casual chic",
    "acessórios"
  ];

  const popularCategories = [
    "Vestidos", "Blusas", "Calças", "Conjuntos", "Acessórios", "Sapatos"
  ];

  const removeFilter = (filter: string) => {
    setSelectedFilters(prev => prev.filter(f => f !== filter));
  };

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters(prev => [...prev, filter]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar produtos..."
                className="pl-10 pr-4 h-12 text-lg"
              />
            </div>
            <Button variant="elegant" size="lg">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>

          {/* Search Results Info */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">
                Resultados para "{searchQuery}"
              </h1>
              <p className="text-muted-foreground">
                {searchResults.length} produtos encontrados
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevância</SelectItem>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                  <SelectItem value="newest">Mais recentes</SelectItem>
                  <SelectItem value="popular">Mais populares</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {selectedFilters.length > 0 && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Filtros ativos:</span>
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="gap-1">
                  {filter}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-3 w-3 p-0 hover:bg-transparent"
                    onClick={() => removeFilter(filter)}
                  >
                    <X className="h-2 w-2" />
                  </Button>
                </Badge>
              ))}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedFilters([])}
                className="text-xs"
              >
                Limpar todos
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Searches */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Buscas em Alta
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => setSearchQuery(term)}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Categorias Populares</h3>
                <div className="space-y-2">
                  {popularCategories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="w-full justify-start h-8 text-sm"
                      onClick={() => addFilter(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Searches */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Buscas Recentes</h3>
                <div className="space-y-2">
                  {["vestido midi", "blusa rosa", "bolsa preta"].map((term) => (
                    <Button
                      key={term}
                      variant="ghost"
                      className="w-full justify-between h-8 text-sm"
                      onClick={() => setSearchQuery(term)}
                    >
                      <span>{term}</span>
                      <X className="h-3 w-3 opacity-50" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            {searchResults.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {searchResults.map((product) => (
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

                {/* Pagination */}
                <div className="flex justify-center">
                  <div className="flex gap-2">
                    <Button variant="outline" disabled>Anterior</Button>
                    <Button variant="default">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Próximo</Button>
                  </div>
                </div>
              </>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold mb-2">
                  Nenhum resultado encontrado
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Não encontramos produtos para "{searchQuery}". 
                  Tente usar outras palavras-chave ou navegue pelas categorias.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Sugestões de busca:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {trendingSearches.slice(0, 4).map((term) => (
                        <Button
                          key={term}
                          variant="outline"
                          size="sm"
                          onClick={() => setSearchQuery(term)}
                        >
                          {term}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="elegant" onClick={() => setSearchQuery("")}>
                    Ver Todos os Produtos
                  </Button>
                </div>
              </div>
            )}

            {/* Search Suggestions */}
            {searchResults.length > 0 && (
              <div className="mt-12 p-6 gradient-hero rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Você também pode gostar
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {trendingSearches.filter(term => term !== searchQuery).slice(0, 5).map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchQuery(term)}
                      className="border-border/50"
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;