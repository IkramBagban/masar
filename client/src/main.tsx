import { ClerkProvider } from "@clerk/clerk-react";
import { arSA } from "@clerk/localizations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router";
import { App } from "./App";
import { applyLocale, LocaleProvider, readLocale, useLocale } from "./i18n";
import "./styles/globals.css";

applyLocale(readLocale());

const queryClient = new QueryClient();
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as
  | string
  | undefined;

function LocalizedClerkProvider({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  const navigate = useNavigate();

  if (!publishableKey) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      localization={locale === "ar" ? arSA : undefined}
      routerPush={(to: string) => {
        void navigate(to);
      }}
      routerReplace={(to: string) => {
        void navigate(to, { replace: true });
      }}
    >
      {children}
    </ClerkProvider>
  );
}

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element missing");
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LocaleProvider>
          <LocalizedClerkProvider>
            <App />
          </LocalizedClerkProvider>
        </LocaleProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
