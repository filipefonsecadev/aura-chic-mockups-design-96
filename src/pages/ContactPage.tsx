import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@chicaura.com.br",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      description: "Seg à Sex, 9h às 18h"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(11) 99999-9999",
      description: "Atendimento imediato"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP",
      description: "Escritório central"
    }
  ];

  const faqItems = [
    {
      question: "Como faço para trocar um produto?",
      answer: "Você tem até 30 dias para trocar qualquer produto. Basta entrar em contato conosco e seguir as instruções de devolução."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo varia conforme sua região: São Paulo (1-2 dias úteis), outras capitais (2-3 dias úteis), interior (3-5 dias úteis)."
    },
    {
      question: "Como consultar meu pedido?",
      answer: "Você pode consultar o status do seu pedido através do link enviado por e-mail ou entrando em contato conosco."
    },
    {
      question: "Vocês fazem entrega para todo o Brasil?",
      answer: "Sim! Entregamos para todo o território nacional. Frete grátis para compras acima de R$ 199."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo ou envie sua mensagem
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nome *</Label>
                    <Input id="firstName" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Sobrenome *</Label>
                    <Input id="lastName" placeholder="Seu sobrenome" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>

                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input id="subject" placeholder="Como podemos ajudar?" required />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva sua dúvida ou sugestão..."
                    rows={6}
                    required
                  />
                </div>

                <Button variant="elegant" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>

                <p className="text-sm text-muted-foreground">
                  * Campos obrigatórios. Responderemos sua mensagem em até 24 horas úteis.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6">Outras Formas de Contato</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 hover-lift border-0 shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-primary font-medium">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta-feira</span>
                    <span className="font-medium">09:00 às 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-medium">09:00 às 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm">
                    <strong>WhatsApp:</strong> Atendimento 24/7 para urgências
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Nossa Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium">São Paulo, SP</p>
                    <p className="text-sm">Mapa interativo</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Nosso escritório está localizado no coração de São Paulo, sempre perto de você.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Encontre respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqItems.map((item, index) => (
              <Card key={index} className="p-6 hover-lift border-0 shadow-soft">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-3 text-lg">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Não encontrou o que procura?
            </p>
            <Button variant="outline" size="lg">
              Ver Todas as Perguntas
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;