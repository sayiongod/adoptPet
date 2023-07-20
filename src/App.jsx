import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParam";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
