import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Subscriptions from "./pages/Subscriptions";
import VirtualCard from "./pages/VirtualCard";
import CreditScore from "./pages/CreditScore";
import Opportunities from "./pages/Opportunities";
import SideHustles from "./pages/SideHustles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="virtual-card" element={<VirtualCard />} />
            <Route path="credit-score" element={<CreditScore />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="side-hustles" element={<SideHustles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;