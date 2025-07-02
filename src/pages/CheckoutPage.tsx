import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Smartphone, FileText, Shield, ArrowLeft } from "lucide-react";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [sameAsDelivery, setSameAsDelivery] = useState(true);

  const orderItems = [
    {
      id: 1,
      image: product1,
      name: "Vestido Floral Elegante",
      size: "M",
      color: "Rosa Claro",
      quantity: 1,
      price: 189.90,
    },
    {
      id: 2,
      image: product2,
      name: "Blusa Romântica Rosa",
      size: "P",
      color: "Rosa",
      quantity: 2,
      price: 129.90,
    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Frete grátis
  const discount = 44.97; // 10% de desconto
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Carrinho
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-playfair font-bold">Finalizar Compra</h1>
            <p className="text-muted-foreground">Preencha seus dados para concluir o pedido</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">1</span>
                  Informações de Entrega
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" placeholder="Seu nome" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" placeholder="Seu sobrenome" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" placeholder="Rua, número" />
                  </div>
                  <div>
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" placeholder="123" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" placeholder="Apto, bloco (opcional)" />
                  </div>
                  <div>
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input id="neighborhood" placeholder="Bairro" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input id="zipCode" placeholder="00000-000" />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="Cidade" />
                  </div>
                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="UF" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SP">SP</SelectItem>
                        <SelectItem value="RJ">RJ</SelectItem>
                        <SelectItem value="MG">MG</SelectItem>
                        <SelectItem value="RS">RS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">2</span>
                  Forma de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  {/* Credit Card */}
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5" />
                      Cartão de Crédito
                    </Label>
                  </div>

                  {paymentMethod === "credit-card" && (
                    <div className="ml-6 space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Validade</Label>
                          <Input id="expiry" placeholder="MM/AA" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Nome no Cartão</Label>
                        <Input id="cardName" placeholder="Nome como no cartão" />
                      </div>
                    </div>
                  )}

                  {/* PIX */}
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Smartphone className="h-5 w-5" />
                      PIX (5% de desconto)
                    </Label>
                  </div>

                  {/* Boleto */}
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label htmlFor="boleto" className="flex items-center gap-2 cursor-pointer flex-1">
                      <FileText className="h-5 w-5" />
                      Boleto Bancário
                    </Label>
                  </div>
                </RadioGroup>

                {/* Billing Address */}
                <div className="mt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox 
                      id="sameAddress" 
                      checked={sameAsDelivery}
                      onCheckedChange={(checked) => setSameAsDelivery(checked === true)}
                    />
                    <Label htmlFor="sameAddress">
                      Endereço de cobrança igual ao de entrega
                    </Label>
                  </div>

                  {!sameAsDelivery && (
                    <div className="space-y-4 p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-medium">Endereço de Cobrança</h4>
                      {/* Billing address fields would go here */}
                      <p className="text-sm text-muted-foreground">
                        Campos do endereço de cobrança...
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Order Review */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">3</span>
                  Revisar Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.size} • {item.color} • Qtd: {item.quantity}
                        </p>
                        <p className="font-semibold text-primary">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-6 p-4 bg-green-50 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-green-800">
                    Seus dados estão protegidos por criptografia SSL
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span className="text-green-600">Grátis</span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>Desconto (PRIMEIRA10)</span>
                    <span>-R$ {discount.toFixed(2).replace('.', ',')}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                <Button variant="elegant" size="lg" className="w-full mb-4">
                  Confirmar Pedido
                </Button>

                <div className="text-xs text-muted-foreground text-center space-y-1">
                  <p>Ao confirmar, você concorda com nossos</p>
                  <p>
                    <button className="underline">Termos de Uso</button> e{" "}
                    <button className="underline">Política de Privacidade</button>
                  </p>
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

export default CheckoutPage;