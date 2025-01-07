import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  CreditCard, 
  CalendarClock,
  TrendingUp,
  Briefcase,
  Award
} from "lucide-react";
import { PinAuth } from "./PinAuth";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Subscriptions", href: "/subscriptions", icon: CalendarClock },
  { name: "Virtual Card", href: "/virtual-card", icon: CreditCard },
  { name: "Credit Score", href: "/credit-score", icon: TrendingUp },
  { name: "Opportunities", href: "/opportunities", icon: Briefcase },
  { name: "Side Hustles", href: "/side-hustles", icon: Award },
];

export function Layout() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <PinAuth onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen flex">
      <div className="fixed inset-y-0 flex w-72 flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img src="/lovable-uploads/80b8cf64-3aa0-414d-9d25-5296b0560aa8.png" alt="Maliyami" className="h-8 w-auto" />
            <h1 className="text-2xl font-bold ml-2">Maliyami</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={cn(
                          location.pathname === item.href
                            ? "bg-gray-50 text-primary"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-300 hover:scale-105"
                        )}
                      >
                        <item.icon
                          className={cn(
                            location.pathname === item.href
                              ? "text-primary"
                              : "text-gray-400 group-hover:text-primary",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4">
            <a 
              href="https://mediaowl.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-center text-gray-500 hover:text-primary transition-colors"
            >
              Powered by Media Owl Digital Innovations
            </a>
          </div>
        </div>
      </div>
      <main className="pl-72 w-full">
        <Outlet />
      </main>
    </div>
  );
}