import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Copy, CheckCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

const reasons = [
  "Financial hardship",
  "Better competitor pricing",
  "Service not fully utilized",
  "Technical issues",
  "Found better alternative"
];

const Subscriptions = () => {
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [customMessage, setCustomMessage] = useState<string>("");

  const generateEmailTemplate = (subscription: Subscription, reason: string) => {
    const subject = `Request for Subscription Price Negotiation - ${subscription.name}`;
    const body = `Dear ${subscription.name} Team,

I hope this email finds you well. I am writing regarding my subscription to ${subscription.name}.

${reason === "Financial hardship" 
  ? "Due to current financial circumstances, I am reviewing all my monthly expenses."
  : reason === "Better competitor pricing"
  ? "I've noticed that similar services are offering competitive rates."
  : reason === "Service not fully utilized"
  ? "I've analyzed my usage of the service and found that I'm not utilizing it to its full potential."
  : reason === "Technical issues"
  ? "I've experienced several technical issues that have affected my experience."
  : "I've found alternative services that better suit my needs."}

I value your service and would like to continue using it. However, I would appreciate if we could discuss the possibility of adjusting my subscription rate to better align with my current situation.

${customMessage}

Thank you for considering my request. I look forward to your response.

Best regards,
[Your name]`;

    return { subject, body };
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard`);
  };

  const handleCancelSubscription = (subscription: Subscription) => {
    setSelectedSubscription(subscription);
    setSelectedReason("");
    setCustomMessage("");
  };

  const { subject, body } = selectedSubscription && selectedReason
    ? generateEmailTemplate(selectedSubscription, selectedReason)
    : { subject: "", body: "" };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Subscriptions</h1>
        <p className="text-muted-foreground">Manage your recurring payments</p>
      </header>

      <div className="grid gap-6">
        {mockSubscriptions.map((subscription) => (
          <Card key={subscription.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
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
                  Negotiate Price
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedSubscription && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Negotiate Price - {selectedSubscription.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Reason for Negotiation</label>
              <Select
                value={selectedReason}
                onValueChange={setSelectedReason}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent>
                  {reasons.map((reason) => (
                    <SelectItem key={reason} value={reason}>
                      {reason}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedReason && (
              <>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Email Subject</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => copyToClipboard(subject, "Subject")}
                    >
                      <Copy className="h-4 w-4" />
                      Copy Subject
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{subject}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Email Body</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => copyToClipboard(body, "Email body")}
                    >
                      <Copy className="h-4 w-4" />
                      Copy Body
                    </Button>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm text-muted-foreground bg-gray-50 p-4 rounded-md">
                    {body}
                  </pre>
                </div>

                <Button
                  className="w-full"
                  onClick={() => {
                    window.location.href = `mailto:${selectedSubscription.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                >
                  Open in Email Client
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Subscriptions;