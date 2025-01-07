import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CORRECT_PIN = "222000";

export function PinAuth({ onAuthenticated }: { onAuthenticated: () => void }) {
  const [pin, setPin] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      onAuthenticated();
      toast({
        title: "Access Granted",
        description: "Welcome to Maliyami",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Incorrect PIN. Please try again.",
      });
      setPin("");
    }
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="bg-gradient-to-br from-purple-50 to-pink-50 sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl font-bold text-purple-600">
            Welcome to Maliyami
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Please enter the PIN to access the application
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="text-center text-lg"
            maxLength={6}
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 w-full"
            >
              Enter
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}