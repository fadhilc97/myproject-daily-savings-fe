import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App.tsx";
import "./index.css";
import OverlayProvider from "./contexts/OverlayProvider.tsx";
import AlertProvider from "./contexts/AlertProvider.tsx";
import AuthProvider from "./contexts/AuthProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <OverlayProvider>
        <AlertProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </AlertProvider>
      </OverlayProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
