import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User, Package, Heart, MapPin, CreditCard, Bell, Settings, Edit, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const user = {
    name: "Teste Usuario",
    email: "teste@teste.com",
    phone: "(11) 99999-9999",
    avatar: "TU",
    memberSince: "Janeiro 2023",
    totalOrders: 12,
    totalSpent: 2490.80,
  };

  const recentOrders = [
    {
      id: "#12345",
      date: "15/12/2024",
      status: "Entregue",
      total: 289.90,
      items: [
        { name: "Vestido Floral Elegante", image: product1 },
        { name: "Blusa Romântica Rosa", image: product2 },
      ]
    },
    {
      id: "#12344",
      date: "08/12/2024", 
      status: "Em transporte",
      total: 199.90,
      items: [
        { name: "Bolsa Clássica Premium", image: product1 },
      ]
    },
  ];

  const wishlistItems = [
    { id: 1, name: "Vestido de Festa Rosé", price: 299.90, image: product1 },
    { id: 2, name: "Conjunto Casual Chic", price: 249.90, image: product2 },
  ];

  const handleBuyAgain = (orderId: string) => {
    toast({
      title: "Itens adicionados ao carrinho!",
      description: `Os produtos do pedido ${orderId} foram adicionados ao seu carrinho.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 gradient-hero opacity-50"></div>
            <CardContent className="relative p-8">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h1 className="text-3xl font-playfair font-bold mb-2">{user.name}</h1>
                  <p className="text-muted-foreground mb-4">
                    Membro desde {user.memberSince}
                  </p>
                  
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="font-semibold text-primary">{user.totalOrders}</span>
                      <span className="text-muted-foreground ml-1">pedidos</span>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">
                        R$ {user.totalSpent.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-muted-foreground ml-1">total gasto</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancelar" : "Editar Perfil"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Pedidos
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Dados
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favoritos
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Endereços
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configurações
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Meus Pedidos</h2>
              <Button variant="outline">Ver Todos</Button>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Card key={order.id} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">Pedido {order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={order.status === "Entregue" ? "default" : "secondary"}>
                          {order.status}
                        </Badge>
                        <p className="font-semibold text-primary mt-1">
                          R$ {order.total.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <span className="text-sm">{item.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Ver Detalhes
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Detalhes do Pedido {order.id}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Order Status */}
                            <div className="flex justify-between items-center p-4 bg-muted/20 rounded-lg">
                              <div>
                                <p className="font-medium">Status do Pedido</p>
                                <p className="text-sm text-muted-foreground">Pedido realizado em {order.date}</p>
                              </div>
                              <Badge variant={order.status === "Entregue" ? "default" : "secondary"}>
                                {order.status}
                              </Badge>
                            </div>
                            
                            {/* Items */}
                            <div>
                              <h4 className="font-medium mb-3">Itens do Pedido</h4>
                              <div className="space-y-3">
                                {order.items.map((item, index) => (
                                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                                    <img 
                                      src={item.image} 
                                      alt={item.name}
                                      className="w-16 h-16 rounded-md object-cover"
                                    />
                                    <div className="flex-1">
                                      <h5 className="font-medium">{item.name}</h5>
                                      <p className="text-sm text-muted-foreground">Quantidade: 1</p>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-medium">R$ {(order.total / order.items.length).toFixed(2).replace('.', ',')}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Order Summary */}
                            <div className="border-t pt-4">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">Total do Pedido</span>
                                <span className="text-lg font-semibold text-primary">
                                  R$ {order.total.toFixed(2).replace('.', ',')}
                                </span>
                              </div>
                            </div>
                            
                            {/* Delivery Address */}
                            <div className="p-4 bg-muted/20 rounded-lg">
                              <h4 className="font-medium mb-2">Endereço de Entrega</h4>
                              <p className="text-sm text-muted-foreground">
                                Rua das Flores, 123, Apto 45<br/>
                                Jardim Primavera<br/>
                                São Paulo, SP - 01234-567
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      {order.status === "Entregue" && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleBuyAgain(order.id)}
                        >
                          <Package className="h-4 w-4 mr-1" />
                          Comprar Novamente
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Data Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nome</Label>
                    <Input 
                      id="firstName" 
                      defaultValue="Teste" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input 
                      id="lastName" 
                      defaultValue="Usuario" 
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    defaultValue={user.email} 
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone" 
                    defaultValue={user.phone} 
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <Label htmlFor="birthDate">Data de Nascimento</Label>
                  <Input 
                    id="birthDate" 
                    type="date" 
                    defaultValue="1990-05-15" 
                    disabled={!isEditing}
                  />
                </div>

                {isEditing && (
                  <div className="flex gap-2">
                    <Button variant="elegant">Salvar Alterações</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancelar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Lista de Desejos</h2>
              <p className="text-muted-foreground">{wishlistItems.length} itens salvos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="hover-lift">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">{item.name}</h3>
                    <p className="font-semibold text-primary mb-3">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>
                    <Button variant="elegant" className="w-full">
                      Adicionar ao Carrinho
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Meus Endereços</h2>
              <Button variant="elegant">Adicionar Endereço</Button>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-2">Casa</h3>
                      <p className="text-muted-foreground">
                        Rua das Flores, 123, Apto 45<br/>
                        Jardim Primavera<br/>
                        São Paulo, SP - 01234-567
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge>Principal</Badge>
                      <Button variant="ghost" size="sm">Editar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notificações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">E-mail Marketing</h4>
                    <p className="text-sm text-muted-foreground">Receber ofertas e novidades</p>
                  </div>
                  <Button variant="outline" size="sm">Ativado</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Atualizações de Pedido</h4>
                    <p className="text-sm text-muted-foreground">Status de entrega</p>
                  </div>
                  <Button variant="outline" size="sm">Ativado</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Métodos de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Gerenciar Cartões
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;