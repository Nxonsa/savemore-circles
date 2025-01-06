import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { BudgetChart } from "@/components/dashboard/BudgetChart";
import { SavingsGoal } from "@/components/dashboard/SavingsGoal";
import { TransactionList } from "@/components/dashboard/TransactionList";

const mockTransactions = [
  {
    id: "1",
    date: new Date(),
    description: "Grocery Shopping",
    amount: 850.50,
    type: "debit" as const,
  },
  {
    id: "2",
    date: new Date(),
    description: "Salary Deposit",
    amount: 35000.00,
    type: "credit" as const,
  },
  {
    id: "3",
    date: new Date(),
    description: "Netflix Subscription",
    amount: 159.99,
    type: "debit" as const,
  },
];

const mockBudgets = [
  {
    category: "Shopping",
    spent: 4500,
    limit: 6000,
  },
  {
    category: "Entertainment",
    spent: 1200,
    limit: 2000,
  },
  {
    category: "Bills",
    spent: 9800,
    limit: 12000,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your financial overview.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BalanceCard title="Total Balance" balance={125000.00} />
        <BalanceCard title="Income" balance={45000.00} />
        <BalanceCard title="Expenses" balance={23000.00} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <BudgetChart budgets={mockBudgets} />
          <SavingsGoal
            title="New Car"
            current={150000}
            target={300000}
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

export default Dashboard;