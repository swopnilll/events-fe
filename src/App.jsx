import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "./routes/AppRoutes";

import GlobalProvider from "./contexts/GlobalProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </QueryClientProvider>
  );
}

export default App;
