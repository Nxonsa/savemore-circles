import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";

interface Budget {
  category: string;
  spent: number;
  limit: number;
}

interface BudgetChartProps {
  budgets: Budget[];
}

export function BudgetChart({ budgets }: BudgetChartProps) {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {budgets.map((budget) => (
          <div key={budget.category} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>{budget.category}</span>
              <span>
                {formatCurrency(budget.spent)} / {formatCurrency(budget.limit)}
              </span>
            </div>
            <Progress
              value={(budget.spent / budget.limit) * 100}
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}