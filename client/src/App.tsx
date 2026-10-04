import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { AccountPage } from "./pages/AccountPage";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

// Plain <a href="#id"> links only change the hash — the browser doesn't
// always scroll inside the React shell, so settle on the section ourselves.
function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);
  return null;
}

export function App() {
  return (
    <div className="flex min-h-screen min-w-0 flex-col bg-bone text-ink">
      <ScrollToHash />
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
      <SiteFooter />
    </div>
  );
}
