import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UnitDetail from "./pages/UnitDetail";
import AgendaCultural from "./pages/AgendaCultural";
import InformacoesTuristicas from "./pages/InformacoesTuristicas";
import QuemSomosPage from "./pages/QuemSomosPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/unidade/:slug" element={<UnitDetail />} />
          <Route path="/agenda-cultural" element={<AgendaCultural />} />
          <Route path="/informacoes-turisticas" element={<InformacoesTuristicas />} />
          <Route path="/quem-somos" element={<QuemSomosPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
