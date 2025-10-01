import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { TrendingUp, TrendingDown, Shield, Users, Star, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Empréstimos <span className="text-primary-glow">Peer-to-Peer</span>
            <br />Simples e Seguros
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Conectamos pessoas que precisam de dinheiro com pessoas que querem emprestar. 
            Sem bancos, sem burocracia, com total transparência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="min-w-48">
              <NavLink to="/emprestar">
                <TrendingUp className="mr-2 h-5 w-5" />
                Quero Emprestar
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="min-w-48 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <NavLink to="/receber">
                <TrendingDown className="mr-2 h-5 w-5" />
                Preciso de Dinheiro
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Por que escolher o EmprestaAí?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma oferece a melhor experiência em empréstimos P2P do Brasil
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50 hover:shadow-hover transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Seguro</h3>
                <p className="text-muted-foreground">
                  Sistema de verificação rigoroso e score de confiabilidade para cada usuário
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 hover:shadow-hover transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comunidade</h3>
                <p className="text-muted-foreground">
                  Milhares de pessoas ajudando umas às outras a realizar seus sonhos
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 hover:shadow-hover transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="bg-score-good/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-score-good" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Melhores Taxas</h3>
                <p className="text-muted-foreground">
                  Taxas competitivas e transparentes, muito melhores que bancos tradicionais
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para começar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Junte-se à nossa comunidade e descubra uma nova forma de lidar com dinheiro
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <NavLink to="/cadastro">
                Criar Conta Grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <NavLink to="/login">
                Já tenho conta
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;