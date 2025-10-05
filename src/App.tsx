import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Talent from "./pages/Talent";
import Announcement from "./pages/Announcement";
import Buzz from "./pages/Buzz";
import FindMe from "./pages/FindMe";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Account from "./pages/Account";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/buzz" element={<Buzz />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/find-me" element={<FindMe />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/account" element={<Account />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
