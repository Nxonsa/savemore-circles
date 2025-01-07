import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const creditTips = [
  {
    title: "Payment History",
    description: "Make all your payments on time. Set up automatic payments or reminders to avoid missing due dates.",
  },
  {
    title: "Credit Utilization",
    description: "Keep your credit card balances low relative to your credit limits. Aim for using less than 30% of your available credit.",
  },
  {
    title: "Length of Credit History",
    description: "Keep old accounts open, even if you don't use them often. A longer credit history can help your score.",
  },
  {
    title: "Credit Mix",
    description: "Having different types of credit (credit cards, installment loans) can positively impact your score.",
  },
  {
    title: "New Credit Applications",
    description: "Limit how often you apply for new credit. Multiple applications in a short time can hurt your score.",
  },
];

const CreditScore = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Credit Score Optimization</h1>
        <p className="text-muted-foreground">Learn how to improve your credit score</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {creditTips.map((tip, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle>{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Note: This information is for educational purposes only and does not constitute financial advice.</p>
      </div>
    </div>
  );
};

export default CreditScore;