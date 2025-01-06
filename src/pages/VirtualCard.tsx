import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const VirtualCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const generateCardNumber = () => {
    const number = Math.random().toString().slice(2, 18);
    return number.match(/.{1,4}/g)?.join(" ") || "";
  };

  const generateCVC = () => {
    return Math.random().toString().slice(2, 5);
  };

  const generateExpiryDate = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = (today.getFullYear() + 3).toString().slice(2);
    return `${month}/${year}`;
  };

  const regenerateCard = () => {
    setCardNumber(generateCardNumber());
    setCvc(generateCVC());
    setExpiryDate(generateExpiryDate());
    toast.success("Virtual card details regenerated");
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  useEffect(() => {
    regenerateCard();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Virtual Card</h1>
        <p className="text-muted-foreground">
          Generate secure virtual card details for online purchases
        </p>
      </header>

      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <CardHeader>
          <CardTitle>Virtual Card</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm opacity-80">Card Number</label>
            <div className="flex justify-between items-center">
              <span className="font-mono text-lg">{cardNumber}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(cardNumber.replace(/\s/g, ""), "Card number")}
                className="text-white hover:text-white/80"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="space-y-2">
              <label className="text-sm opacity-80">Expiry Date</label>
              <div className="flex items-center gap-2">
                <span className="font-mono">{expiryDate}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(expiryDate, "Expiry date")}
                  className="text-white hover:text-white/80"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm opacity-80">CVC</label>
              <div className="flex items-center gap-2">
                <span className="font-mono">{cvc}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(cvc, "CVC")}
                  className="text-white hover:text-white/80"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button
            className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white"
            onClick={regenerateCard}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate New Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VirtualCard;