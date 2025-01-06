import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { BudgetChart } from "@/components/dashboard/BudgetChart";
import { SavingsGoal } from "@/components/dashboard/SavingsGoal";
import { TransactionList } from "@/components/dashboard/TransactionList";

// Mock data - replace with real data later
const mockTransactions = [
  {
    id: "1",
    date: new Date(),
    description: "Grocery Shopping",
    amount: 85.50,
    type: "debit" as const,
  },
  {
    id: "2",
    date: new Date(),
    description: "Salary Deposit",
    amount: 3500.00,
    type: "credit" as const,
  },
  {
    id: "3",
    date: new Date(),
    description: "Netflix Subscription",
    amount: 15.99,
    type: "debit" as const,
  },
];

const mockBudgets = [
  {
    category: "Shopping",
    spent: 450,
    limit: 600,
  },
  {
    category: "Entertainment",
    spent: 120,
    limit: 200,
  },
  {
    category: "Bills",
    spent: 980,
    limit: 1200,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your financial overview.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BalanceCard title="Total Balance" balance={12500.00} />
        <BalanceCard title="Income" balance={4500.00} />
        <BalanceCard title="Expenses" balance={2300.00} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <BudgetChart budgets={mockBudgets} />
          <SavingsGoal
            title="New Car"
            current={15000}
            target={30000}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Recent Transactions
          </h2>
          <TransactionList transactions={mockTransactions} />
        </div>
      </div>
    </div>
  );
};

export default Index;