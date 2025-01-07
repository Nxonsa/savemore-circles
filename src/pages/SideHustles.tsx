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
  {
    name: "Fiverr",
    description: "Offer freelance services in various categories",
    url: "https://www.fiverr.com/",
  },
  {
    name: "Upwork",
    description: "Find freelance work opportunities globally",
    url: "https://www.upwork.com/",
  },
  {
    name: "TranscribeMe",
    description: "Earn money transcribing audio files",
    url: "https://www.transcribeme.com/",
  },
  {
    name: "Rev",
    description: "Work as a transcriptionist or captioner",
    url: "https://www.rev.com/",
  },
  {
    name: "Appen",
    description: "Work on data collection and annotation projects",
    url: "https://appen.com/",
  },
  {
    name: "Lionbridge",
    description: "Participate in language and testing projects",
    url: "https://www.lionbridge.com/",
  },
  {
    name: "Swagbucks",
    description: "Earn rewards for surveys and online activities",
    url: "https://www.swagbucks.com/",
  },
  {
    name: "Amazon MTurk",
    description: "Complete small tasks for payment",
    url: "https://www.mturk.com/",
  },
  {
    name: "Clickworker",
    description: "Work on various micro tasks",
    url: "https://www.clickworker.com/",
  },
  {
    name: "Testlio",
    description: "Join a network of freelance testers",
    url: "https://testlio.com/",
  }
];

const SideHustles = () => {
  const connectPaypal = () => {
    // This would integrate with PayPal's API in a real implementation
    window.open("https://www.paypal.com/connect", "_blank");
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Side Hustles</h1>
        <p className="text-muted-foreground">Earn extra income through various online platforms</p>
      </header>

      <Button 
        onClick={connectPaypal}
        className="w-full max-w-md mx-auto flex items-center justify-center gap-2 mb-8 hover:scale-105 transition-transform duration-200"
      >
        <CreditCard className="h-5 w-5" />
        Connect PayPal Account
      </Button>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform) => (
          <Card key={platform.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/50 backdrop-blur-sm border border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-primary">
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

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>Note: These platforms are independently operated. Maliyami is not responsible for any transactions or relationships formed through these services.</p>
      </footer>
    </div>
  );
};

export default SideHustles;