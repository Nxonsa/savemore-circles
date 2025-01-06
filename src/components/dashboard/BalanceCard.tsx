import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface BalanceCardProps {
  balance: number;
  title: string;
}

export function BalanceCard({ balance, title }: BalanceCardProps) {
  return (
    <Card className="glass-card hover-scale">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold tracking-tight">
          {formatCurrency(balance)}
        </div>
      </CardContent>
    </Card>
  );
}