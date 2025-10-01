import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScoreBadge from "./ScoreBadge";
import { Clock, User } from "lucide-react";

interface LoanRequest {
  id: string;
  borrowerName: string;
  amount: number;
  reason: string;
  score: number;
  timePosted: string;
  interestRate: number;
  term: number; // in months
}

interface LoanCardProps {
  loan: LoanRequest;
  onViewDetails: (loanId: string) => void;
}

const LoanCard = ({ loan, onViewDetails }: LoanCardProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount);
  };

  return (
    <Card className="bg-gradient-card hover:shadow-hover transition-smooth border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{loan.borrowerName}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{loan.timePosted}</span>
              </div>
            </div>
          </div>
          <ScoreBadge score={loan.score} />
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="space-y-3">
          <div>
            <div className="text-2xl font-bold text-primary">
              {formatCurrency(loan.amount)}
            </div>
            <div className="text-sm text-muted-foreground">
              {loan.interestRate}% a.m. • {loan.term} meses
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Motivo:</p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {loan.reason}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Badge variant="secondary" className="text-xs">
              Verificado
            </Badge>
            <Badge variant="outline" className="text-xs">
              Garantia
            </Badge>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={() => onViewDetails(loan.id)}
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
        >
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoanCard;