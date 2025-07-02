import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Users, Truck, ShieldCheck, Sparkles } from "lucide-react";

// Import images
import heroImage from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-1.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão pela Moda",
      description: "Cada peça é selecionada com carinho, pensando na mulher moderna que valoriza estilo e qualidade."
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Trabalhamos apenas com fornecedores confiáveis e tecidos de alta qualidade para garantir durabilidade."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Mais que uma loja, somos uma comunidade de mulheres que se apoiam e celebram a individualidade."
    },
    {
      icon: Sparkles,
      title: "Inovação",
      description: "Sempre em busca das últimas tendências, mas sem perder nossa essência elegante e atemporal."
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Frete grátis acima de R$ 199 e entrega expressa para todo o Brasil"
    },
    {
      icon: ShieldCheck,
      title: "Compra Segura",
      description: "Site protegido com certificado SSL e pagamento 100% seguro"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Nossa equipe está sempre pronta para te ajudar com carinho e atenção"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sobre a ChicAura"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
              Nossa História
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Fundada em 2020 com o sonho de democratizar a moda feminina elegante, 
              a ChicAura nasceu da paixão por criar looks que empoderam mulheres.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Acreditamos que toda mulher merece se sentir confiante e elegante. 
                Nossa missão é oferecer peças de alta qualidade que combinem 
                tendências atuais com atemporalidade, permitindo que cada mulher 
                expresse sua personalidade única através do que veste.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Mais do que uma loja de roupas, somos uma plataforma de empoderamento 
                feminino, onde cada peça conta uma história e cada cliente é parte 
                da nossa família ChicAura.
              </p>
              <Button variant="elegant" size="lg">
                Conheça Nossa Coleção
              </Button>
            </div>
            <div className="relative">
              <img 
                src={product1} 
                alt="Missão ChicAura"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e tornam a ChicAura única no mercado de moda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover-lift border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as pessoas apaixonadas que tornam a ChicAura possível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center overflow-hidden hover-lift border-0 shadow-soft">
              <div className="h-64 bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Marina Silva</h3>
                <p className="text-primary font-medium mb-3">Fundadora & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Formada em Moda pela ESPM, Marina tem mais de 10 anos de experiência no mercado fashion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden hover-lift border-0 shadow-soft">
              <div className="h-64 bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ana Costa</h3>
                <p className="text-primary font-medium mb-3">Diretora Criativa</p>
                <p className="text-sm text-muted-foreground">
                  Responsável por curar e desenvolver as coleções, sempre em sintonia com as tendências.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden hover-lift border-0 shadow-soft">
              <div className="h-64 bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Julia Santos</h3>
                <p className="text-primary font-medium mb-3">Gerente de Atendimento</p>
                <p className="text-sm text-muted-foreground">
                  Garante que cada cliente tenha uma experiência excepcional em todos os pontos de contato.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Por que Escolher a ChicAura?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos muito mais que roupas: uma experiência completa de compra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover-lift border-0 shadow-soft">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se às milhares de mulheres que já descobriram seu estilo único com a ChicAura
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Explorar Coleção
            </Button>
            <Button variant="secondary" size="lg">
              Cadastre-se e Ganhe 10% Off
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;