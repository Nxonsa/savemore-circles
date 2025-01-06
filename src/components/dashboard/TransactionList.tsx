import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency, formatDate } from "@/lib/utils";

interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  type: "credit" | "debit";
}

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <ScrollArea className="h-[400px] rounded-md border p-4">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 hover:bg-accent rounded-lg transition-colors"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {transaction.description}
              </p>
              <p className="text-sm text-muted-foreground">
                {formatDate(transaction.date)}
              </p>
            </div>
            <div
              className={`text-sm font-medium ${
                transaction.type === "credit"
                  ? "text-green-600"
                  : "text-destructive"
              }`}
            >
              {transaction.type === "credit" ? "+" : "-"}
              {formatCurrency(transaction.amount)}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}