import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App.tsx";
import "./index.css";
import OverlayProvider from "./contexts/OverlayProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <ReactQueryDevtools />
        <App />
      </OverlayProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
