import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share2, Truck, Shield, ArrowLeft, Plus, Minus } from "lucide-react";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Vestido Floral Elegante Premium",
    price: 189.90,
    originalPrice: 229.90,
    images: [product1, product2, product3, product4],
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Rosa Claro", code: "#F8BBD9" },
      { name: "Azul Pastel", code: "#B8E6F0" },
      { name: "Branco", code: "#FFFFFF" },
    ],
    description: "Vestido elegante confeccionado em tecido premium com estampa floral delicada. Perfeito para ocasiões especiais ou para quem busca sofisticação no dia a dia. O caimento impecável valoriza a silhueta feminina.",
    details: [
      "Tecido: 95% Viscose, 5% Elastano",
      "Modelagem: Regular",
      "Comprimento: Midi",
      "Manga: Curta",
      "Fechamento: Zíper traseiro invisível",
      "Forro: Sim",
    ],
    care: [
      "Lavar à mão ou máquina (ciclo delicado)",
      "Temperatura máxima: 30°C",
      "Não usar alvejante",
      "Secar à sombra",
      "Passar ferro em temperatura baixa",
    ],
    inStock: true,
    category: "Vestidos",
    sku: "VFE001",
  };

  const relatedProducts = [
    {
      id: 2,
      image: product2,
      name: "Blusa Romântica Rosa",
      price: 129.90,
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
      image: product1,
      name: "Vestido Midi Estampado",
      price: 169.90,
    },
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" className="p-0 h-auto">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar
          </Button>
          <span className="mx-2">/</span>
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Roupas</span>
          <span className="mx-2">/</span>
          <span>Vestidos</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">SKU: {product.sku}</Badge>
                {product.originalPrice && (
                  <Badge variant="destructive">-17%</Badge>
                )}
              </div>
              <h1 className="text-3xl font-playfair font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Tamanho</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-12 h-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <Button variant="link" className="p-0 h-auto mt-2 text-sm">
                Guia de Tamanhos
              </Button>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Cor</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.name ? "border-primary" : "border-border"
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-muted-foreground mt-2">
                  Cor selecionada: {selectedColor}
                </p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantidade</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    className="h-10 w-10 rounded-r-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[50px] text-center border-x">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    className="h-10 w-10 rounded-l-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.inStock ? "Em estoque" : "Fora de estoque"}
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button
                variant="elegant"
                size="lg"
                className="w-full"
                disabled={!selectedSize || !selectedColor}
              >
                Adicionar ao Carrinho - R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Comprar Agora
              </Button>
            </div>

            {/* Shipping Info */}
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Frete Grátis</p>
                  <p className="text-sm text-muted-foreground">
                    Para compras acima de R$ 199
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Compra Segura</p>
                  <p className="text-sm text-muted-foreground">
                    Seus dados estão protegidos
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Detalhes</TabsTrigger>
              <TabsTrigger value="care">Cuidados</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Detalhes do Produto</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="care" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Instruções de Cuidado</h3>
                  <ul className="space-y-2">
                    {product.care.map((instruction, index) => (
                      <li key={index} className="flex">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Avaliações dos Clientes</h3>
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Ainda não há avaliações para este produto.</p>
                    <p className="text-sm mt-2">Seja o primeiro a avaliar!</p>
                    <Button variant="outline" className="mt-4">
                      Escrever Avaliação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-playfair font-bold mb-8">Você Pode Gostar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;