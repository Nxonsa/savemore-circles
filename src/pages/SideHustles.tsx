import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CreditCard } from "lucide-react";

const platforms = [
  {
    name: "UserTesting",
    description: "Get paid to test websites and apps",
    url: "https://www.usertesting.com/",
  },
  {
    name: "UserCrowd",
    description: "Earn money testing websites and apps",
    url: "https://www.usercrowd.com/",
  },
  {
    name: "User Interviews",
    description: "Participate in research studies and interviews",
    url: "https://www.userinterviews.com/",
  },
  {
    name: "PlaybookUX",
    description: "Get paid for user research participation",
    url: "https://www.playbookux.com/",
  },
  {
    name: "Outlier",
    description: "Participate in paid research studies",
    url: "https://www.outlier.ai/",
  },
  {
    name: "Respondent",
    description: "Participate in research studies and surveys",
    url: "https://www.respondent.io/",
  },
  {
    name: "TestBirds",
    description: "Test apps and websites for money",
    url: "https://www.testbirds.com/",
  },
  {
    name: "Userlytics",
    description: "Get paid for testing digital products",
    url: "https://www.userlytics.com/",
  },
];

const SideHustles = () => {
  const connectPaypal = () => {
    // This would integrate with PayPal's API in a real implementation
    window.open("https://www.paypal.com/connect", "_blank");
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Side Hustles</h1>
        <p className="text-muted-foreground">Earn extra income through user testing and research participation</p>
      </header>

      <Button 
        onClick={connectPaypal}
        className="w-full max-w-md mx-auto flex items-center justify-center gap-2 mb-8"
      >
        <CreditCard className="h-5 w-5" />
        Connect PayPal Account
      </Button>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform) => (
          <Card key={platform.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {platform.name}
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{platform.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SideHustles;