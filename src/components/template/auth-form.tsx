"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon, Headphones, Mail, Lock, User, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const [done, setDone] = useState(false);
  const isLogin = mode === "login";

  if (done) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur-xl">
        <div className="absolute -right-16 -top-16 size-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20">
            <CheckIcon className="size-8 text-white" />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
            {isLogin ? "Tekrar hoş geldin!" : "Hesabın hazır!"}
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/50">
            {isLogin
              ? "Müzik deneyimine devam etmek için hazırsın."
              : "Nova Music hesabın başarıyla oluşturuldu."}
          </p>

          <Button
            variant="ghost"
            className="mt-6 text-white/70 hover:bg-white/10 hover:text-white"
            onClick={() => setDone(false)}
          >
            Forma geri dön
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-fuchsia-500/10 blur-3xl" />

      {/* Logo */}
      <Link
        href="/"
        className="group mb-10 flex w-fit items-center gap-3"
      >
        <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20 transition-transform duration-300 group-hover:scale-105">
          <Headphones className="size-5 text-white" />
        </div>

        <div>
          <div className="text-lg font-bold tracking-tight text-white">
            Nova<span className="text-cyan-400">Music</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/35">
            Music experience
          </div>
        </div>
      </Link>

      {/* Heading */}
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
          {isLogin ? "Hoş geldin" : "Yeni başlangıç"}
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white">
          {isLogin ? "Müziğe geri dön." : "Kendi müzik dünyanı oluştur."}
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
          {isLogin
            ? "Favori şarkıların, listelerin ve keşiflerin seni bekliyor."
            : "Favorilerini kaydet, listelerini oluştur ve yeni müzikleri keşfet."}
        </p>
      </div>

      {/* Form Card */}
      <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-7">
        {/* Google */}
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-12 w-full rounded-2xl border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="mr-2 size-4"
          >
            <path
              fill="currentColor"
              d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81"
            />
          </svg>
          Google ile devam et
        </Button>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/25">
          <Separator className="flex-1 bg-white/10" />
          veya e-posta ile
          <Separator className="flex-1 bg-white/10" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="space-y-4"
        >
          {/* Name */}
          {!isLogin && (
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-xs font-medium text-white/60"
              >
                Adın
              </Label>

              <div className="relative">
                <User className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/25" />

                <Input
                  id="name"
                  name="name"
                  placeholder="Adın ve soyadın"
                  required
                  className="h-12 rounded-2xl border-white/10 bg-black/20 pl-11 text-white placeholder:text-white/20 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-medium text-white/60"
            >
              E-posta
            </Label>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/25" />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ornek@mail.com"
                required
                className="h-12 rounded-2xl border-white/10 bg-black/20 pl-11 text-white placeholder:text-white/20 focus:border-cyan-400/50 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-medium text-white/60"
              >
                Şifre
              </Label>

              {isLogin && (
                <button
                  type="button"
                  className="text-[11px] text-cyan-400/70 transition-colors hover:text-cyan-300"
                >
                  Şifremi unuttum
                </button>
              )}
            </div>

            <div className="relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/25" />

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
                className="h-12 rounded-2xl border-white/10 bg-black/20 pl-11 text-white placeholder:text-white/20 focus:border-cyan-400/50 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="group mt-2 h-12 w-full rounded-2xl border-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-fuchsia-500/25"
          >
            {isLogin ? "Giriş yap" : "Hesap oluştur"}

            <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </form>

        {/* Bottom */}
        <p className="mt-6 text-center text-xs text-white/35">
          {isLogin ? (
            <>
              Henüz hesabın yok mu?{" "}
              <Link
                href="/signup"
                className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Hesap oluştur
              </Link>
            </>
          ) : (
            <>
              Zaten hesabın var mı?{" "}
              <Link
                href="/login"
                className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Giriş yap
              </Link>
            </>
          )}
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-center text-[10px] uppercase tracking-[0.18em] text-white/20">
        Nova Music • Your sound, your world
      </p>
    </div>
  );
}
