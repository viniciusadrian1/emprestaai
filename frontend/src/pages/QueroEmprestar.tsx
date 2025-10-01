import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LoanCard from "@/components/LoanCard";
import { Search, Filter, DollarSign, Users, TrendingUp } from "lucide-react";

// Mock data
const mockLoans = [
  {
    id: "1",
    borrowerName: "Maria Silva",
    amount: 5000,
    reason: "Reforma da casa para melhorar as condições de moradia da família",
    score: 850,
    timePosted: "2 horas atrás",
    interestRate: 2.5,
    term: 12
  },
  {
    id: "2", 
    borrowerName: "João Santos",
    amount: 2500,
    reason: "Capital para expandir meu pequeno negócio de confeitaria",
    score: 720,
    timePosted: "4 horas atrás",
    interestRate: 3.0,
    term: 18
  },
  {
    id: "3",
    borrowerName: "Ana Costa",
    amount: 8000,
    reason: "Curso de especialização para conseguir uma promoção no trabalho",
    score: 680,
    timePosted: "1 dia atrás",
    interestRate: 3.2,
    term: 24
  },
  {
    id: "4",
    borrowerName: "Pedro Lima",
    amount: 3500,
    reason: "Emergência médica na família - cirurgia urgente",
    score: 750,
    timePosted: "6 horas atrás",
    interestRate: 2.8,
    term: 15
  },
  {
    id: "5",
    borrowerName: "Carla Mendes",
    amount: 1500,
    reason: "Compra de equipamentos para trabalhar como freelancer",
    score: 820,
    timePosted: "3 horas atrás",
    interestRate: 2.3,
    term: 10
  },
  {
    id: "6",
    borrowerName: "Roberto Silva",
    amount: 6000,
    reason: "Quitação de dívidas com juros altos para reorganizar finanças",
    score: 590,
    timePosted: "8 horas atrás",
    interestRate: 4.1,
    term: 20
  }
];

const QueroEmprestar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLoans] = useState(mockLoans);

  const handleViewDetails = (loanId: string) => {
    console.log("Viewing details for loan:", loanId);
    // TODO: Navigate to loan details page
  };

  const totalRequested = filteredLoans.reduce((sum, loan) => sum + loan.amount, 0);
  const avgScore = Math.round(filteredLoans.reduce((sum, loan) => sum + loan.score, 0) / filteredLoans.length);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Oportunidades de Empréstimo</h1>
          <p className="text-muted-foreground text-lg">
            Encontre pessoas que precisam de ajuda financeira e faça a diferença
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Solicitado</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(totalRequested)}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Solicitações Ativas</p>
                  <p className="text-2xl font-bold text-secondary">{filteredLoans.length}</p>
                </div>
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-score-good/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Score Médio</p>
                  <p className="text-2xl font-bold text-score-good">{avgScore}</p>
                </div>
                <div className="bg-score-good/10 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-score-good" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Buscar Oportunidades</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Buscar por nome, motivo ou valor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
                <Button size="sm">Buscar</Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">Todos</Badge>
              <Badge variant="outline">Score Alto (800+)</Badge>
              <Badge variant="outline">Até R$ 5.000</Badge>
              <Badge variant="outline">Emergência</Badge>
              <Badge variant="outline">Negócios</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Loan Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLoans.map((loan) => (
            <LoanCard
              key={loan.id}
              loan={loan}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar Mais Oportunidades
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QueroEmprestar;