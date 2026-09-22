import type { Metadata } from "next";

import { AuthForm } from "@/components/template/auth-form";
import { AuthVisual } from "@/components/template/auth-visual";

export const metadata: Metadata = {
  title: "Giriş Yap — Velora Music",
  description: "Velora Music hesabınıza giriş yapın.",
};

export default function LoginPage() {
  return (
    <main className="grid min-h-svh bg-black lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <AuthForm mode="login" />
        </div>
      </div>

      <div className="hidden lg:block">
        <AuthVisual />
      </div>
    </main>
  );
}
