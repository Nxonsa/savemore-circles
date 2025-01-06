import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Subscription {
  id: string;
  name: string;
  amount: number;
  nextBilling: Date;
  email: string;
}

const mockSubscriptions: Subscription[] = [
  {
    id: "1",
    name: "Netflix",
    amount: 159.99,
    nextBilling: new Date(2024, 3, 15),
    email: "billing@netflix.com"
  },
  {
    id: "2",
    name: "Spotify",
    amount: 89.99,
    nextBilling: new Date(2024, 3, 20),
    email: "support@spotify.com"
  }
];

const Subscriptions = () => {
  const handleCancelSubscription = (subscription: Subscription) => {
    const emailSubject = `Cancel Subscription - ${subscription.name}`;
    const emailBody = `Hello,\n\nI would like to cancel my subscription to ${subscription.name}.\n\nThank you.`;
    window.location.href = `mailto:${subscription.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Subscriptions</h1>
        <p className="text-muted-foreground">Manage your recurring payments</p>
      </header>

      <div className="grid gap-6">
        {mockSubscriptions.map((subscription) => (
          <Card key={subscription.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{subscription.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Next billing: {subscription.nextBilling.toLocaleDateString()}</span>
                </div>
                <span className="font-bold">{formatCurrency(subscription.amount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{subscription.email}</span>
                </div>
                <Button 
                  variant="destructive"
                  onClick={() => handleCancelSubscription(subscription)}
                >
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;