import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";

interface SavingsGoalProps {
  title: string;
  current: number;
  target: number;
}

export function SavingsGoal({ title, current, target }: SavingsGoalProps) {
  const progress = (current / target) * 100;

  return (
    <Card className="glass-card hover-scale">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>
            {formatCurrency(current)} / {formatCurrency(target)}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-muted-foreground text-right">
          {progress.toFixed(0)}% Complete
        </p>
      </CardContent>
    </Card>
  );
}