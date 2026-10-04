import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { useAuth } from "@clerk/clerk-react";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { AccountPage } from "./pages/AccountPage";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

// Section links live in the global header/footer but the targets only exist
// on "/". Plain <a href="#id"> breaks off-home, so header/footer link to
// "/#id" and we settle on the section after the route renders.
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    let cancelled = false;
    const scroll = () => {
      if (cancelled) return;
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const raf = requestAnimationFrame(scroll);
    const timer = window.setTimeout(scroll, 80);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [pathname, hash]);
  return null;
}

// Email-link verification opens a fresh tab on "/" with __clerk_status in
// the URL, bypassing the auth pages entirely. Catch it and send fresh
// sessions to /account. Rendered only when Clerk is configured (main.tsx).
function EmailLinkReturn() {
  const { hash } = useLocation();
  const { isLoaded, isSignedIn } = useAuth();
  const params = new URLSearchParams(window.location.search);
  if (params.has("__clerk_status") && isLoaded && isSignedIn && !hash) {
    return <Navigate to="/account" replace />;
  }
  return null;
}

export function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);
  return (
    <div className="flex min-h-screen min-w-0 flex-col bg-bone text-ink">
      <ScrollToHash />
      {clerkEnabled && <EmailLinkReturn />}
      <SiteHeader />
      <main className="min-w-0 flex-1">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="sign-in/*" element={<SignInPage />} />
          <Route path="sign-up/*" element={<SignUpPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {isHome && <SiteFooter />}
    </div>
  );
}
