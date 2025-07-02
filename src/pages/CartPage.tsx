import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product4 from "@/assets/product-4.jpg";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: product1,
      name: "Vestido Floral Elegante",
      price: 189.90,
      size: "M",
      color: "Rosa Claro",
      quantity: 1,
    },
    {
      id: 2,
      image: product2,
      name: "Blusa Romântica Rosa",
      price: 129.90,
      size: "P",
      color: "Rosa",
      quantity: 2,
    },
    {
      id: 3,
      image: product4,
      name: "Vestido de Festa Rosé",
      price: 299.90,
      size: "G",
      color: "Rosé",
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 199 ? 0 : 15.90;
  const discount = couponCode === "PRIMEIRA10" ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const applyCoupon = () => {
    // Simula aplicação do cupom
    if (couponCode === "PRIMEIRA10") {
      // Cupom válido
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center py-16">
            <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-3xl font-playfair font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Que tal dar uma olhada nas nossas coleções e encontrar algo especial?
            </p>
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => navigate('/categoria/roupas')}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Continuar Comprando
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/categoria/roupas')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continuar Comprando
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-playfair font-bold">Seu Carrinho</h1>
            <p className="text-muted-foreground">{cartItems.length} itens no seu carrinho</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-lg truncate pr-4">{item.name}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive flex-shrink-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-sm text-muted-foreground mb-3">
                        <span>Tamanho: {item.size}</span>
                        <span className="mx-2">•</span>
                        <span>Cor: {item.color}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-8 w-8 rounded-r-none"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 min-w-[40px] text-center text-sm border-x">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-8 w-8 rounded-l-none"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="font-semibold text-lg text-primary">
                            R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            R$ {item.price.toFixed(2).replace('.', ',')} cada
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Actions */}
            <div className="flex items-center justify-between pt-4">
              <Button variant="ghost">
                <Heart className="h-4 w-4 mr-2" />
                Salvar para depois
              </Button>
              <Button variant="outline">
                Limpar carrinho
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Resumo do Pedido</h2>

                {/* Coupon */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Cupom de Desconto
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite o código"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" onClick={applyCoupon}>
                      Aplicar
                    </Button>
                  </div>
                  {couponCode === "PRIMEIRA10" && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ Cupom aplicado: 10% de desconto
                    </p>
                  )}
                </div>

                <Separator className="mb-6" />

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} itens)</span>
                    <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">Grátis</span>
                      ) : (
                        `R$ ${shipping.toFixed(2).replace('.', ',')}`
                      )}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto (PRIMEIRA10)</span>
                      <span>-R$ {discount.toFixed(2).replace('.', ',')}</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                {/* Shipping Info */}
                {subtotal < 199 && (
                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-sm">
                      <span className="font-medium">
                        Faltam R$ {(199 - subtotal).toFixed(2).replace('.', ',')}
                      </span>
                      {" "}para ganhar frete grátis!
                    </p>
                  </div>
                )}

                <Button 
                  variant="elegant" 
                  size="lg" 
                  className="w-full mb-3"
                  onClick={() => navigate('/checkout')}
                >
                  Finalizar Compra
                </Button>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span>🔒</span>
                    <span>Compra 100% segura</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;