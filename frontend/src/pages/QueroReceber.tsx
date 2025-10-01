import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, Shield, Clock, CheckCircle } from "lucide-react";

const QueroReceber = () => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [term, setTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit loan request
    setSubmitted(true);
  };

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(Number(numericValue) / 100);
  };

  const calculateMonthlyPayment = () => {
    const principal = Number(amount.replace(/\D/g, '')) / 100;
    const rate = 0.025; // 2.5% ao mês
    const months = Number(term);
    
    if (principal && months) {
      const payment = principal * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(payment);
    }
    
    return "R$ 0,00";
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-gradient-card border-secondary/20">
            <CardContent className="p-8 text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Solicitação Enviada com Sucesso!
              </h2>
              <p className="text-muted-foreground mb-6">
                Sua solicitação de empréstimo está sendo analisada. Em breve você receberá propostas de emprestadores interessados.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Perfil verificado automaticamente</p>
                <p>✓ Score de confiabilidade calculado</p>
                <p>✓ Proposta visível para emprestadores</p>
              </div>
              <Button 
                className="mt-6" 
                onClick={() => setSubmitted(false)}
              >
                Fazer Nova Solicitação
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Solicitar Empréstimo</h1>
          <p className="text-muted-foreground text-lg">
            Preencha os dados abaixo e receba propostas de emprestadores
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle>Dados da Solicitação</CardTitle>
                <CardDescription>
                  Seja transparente e detalhado para receber melhores propostas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Valor */}
                  <div className="space-y-2">
                    <Label htmlFor="amount">Valor Necessário</Label>
                    <Input
                      id="amount"
                      placeholder="R$ 0,00"
                      value={amount ? formatCurrency(amount) : ""}
                      onChange={(e) => setAmount(e.target.value)}
                      className="text-lg"
                      required
                    />
                  </div>

                  {/* Prazo */}
                  <div className="space-y-2">
                    <Label htmlFor="term">Prazo para Pagamento</Label>
                    <Select value={term} onValueChange={setTerm} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o prazo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6 meses</SelectItem>
                        <SelectItem value="12">12 meses</SelectItem>
                        <SelectItem value="18">18 meses</SelectItem>
                        <SelectItem value="24">24 meses</SelectItem>
                        <SelectItem value="36">36 meses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Motivo */}
                  <div className="space-y-2">
                    <Label htmlFor="reason">Motivo do Empréstimo</Label>
                    <Textarea
                      id="reason"
                      placeholder="Explique detalhadamente para que você precisa do dinheiro. Seja transparente e específico."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="min-h-32"
                      required
                    />
                  </div>

                  {/* Categoria */}
                  <div className="space-y-2">
                    <Label>Categoria</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Emergência
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Negócios
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Educação
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Casa/Reforma
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Saúde
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Outros
                      </Badge>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-success">
                    Solicitar Empréstimo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calculator */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <span>Simulação</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Valor solicitado:</span>
                    <span className="font-medium">{amount ? formatCurrency(amount) : "R$ 0,00"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Taxa estimada:</span>
                    <span className="font-medium">2,5% a.m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Prazo:</span>
                    <span className="font-medium">{term ? `${term} meses` : "-"}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Parcela mensal:</span>
                    <span className="text-primary">{calculateMonthlyPayment()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="bg-gradient-card border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span>Segurança</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Verificação Automática</p>
                    <p className="text-xs text-muted-foreground">
                      Seus dados são verificados automaticamente
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Score de Confiabilidade</p>
                    <p className="text-xs text-muted-foreground">
                      Calculamos seu score para aumentar suas chances
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Dados Protegidos</p>
                    <p className="text-xs text-muted-foreground">
                      Informações criptografadas e seguras
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-foreground" />
                  <span>Como Funciona</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <p className="text-sm">Preencha sua solicitação</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <p className="text-sm">Receba propostas de emprestadores</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <p className="text-sm">Escolha a melhor oferta</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <p className="text-sm">Receba o dinheiro</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueroReceber;