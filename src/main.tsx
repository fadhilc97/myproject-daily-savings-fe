import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App.tsx";
import "./index.css";
import OverlayProvider from "./contexts/OverlayProvider.tsx";
import AlertProvider from "./contexts/AlertProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <OverlayProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </OverlayProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
