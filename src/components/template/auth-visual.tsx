import { Headphones, Music2, Play, Waves } from "lucide-react";

/** Nova Music auth ekranının dekoratif sağ paneli. */
export function AuthVisual() {
  return (
    <div className="relative hidden h-full min-h-screen overflow-hidden bg-[#050507] lg:block">
      {/* Ambient glow */}
      <div className="absolute -right-32 -top-32 size-[520px] rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 size-[500px] rounded-full bg-fuchsia-500/15 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main content */}
      <div className="relative flex h-full flex-col justify-between p-12 xl:p-16">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20">
            <Headphones className="size-5 text-white" />
          </div>

          <div>
            <div className="text-lg font-bold tracking-tight text-white">
              Nova<span className="text-cyan-400">Music</span>
            </div>

            <div className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Your sound · Your world
            </div>
          </div>
        </div>

        {/* Center visual */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Floating music card */}
          <div className="absolute -right-4 -top-12 z-20 hidden w-48 rotate-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl xl:block">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600">
                <Music2 className="size-4 text-white" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-white">
                  Night Drive
                </p>
                <p className="truncate text-[10px] text-white/35">
                  Nova Playlist
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-end gap-1">
              {[18, 28, 14, 34, 24, 42, 20, 31, 16, 38, 25, 30].map(
                (height, index) => (
                  <span
                    key={index}
                    className="w-1 rounded-full bg-gradient-to-t from-cyan-400 to-fuchsia-400"
                    style={{ height }}
                  />
                ),
              )}
            </div>
          </div>

          {/* Album artwork */}
          <div className="relative mx-auto aspect-square max-w-[390px] overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-400/20 via-blue-600/20 to-fuchsia-600/30 shadow-[0_40px_100px_rgba(0,0,0,.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(34,211,238,.35),transparent_35%),radial-gradient(circle_at_75%_75%,rgba(217,70,239,.35),transparent_40%)]" />

            {/* Vinyl */}
            <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 shadow-2xl">
              <div className="absolute inset-5 rounded-full border border-white/5" />
              <div className="absolute inset-10 rounded-full border border-white/5" />
              <div className="absolute inset-16 rounded-full border border-white/5" />

              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 shadow-lg">
                <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </div>
            </div>

            {/* Glow icon */}
            <div className="absolute bottom-8 left-8 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
              <Waves className="size-6 text-cyan-300" />
            </div>

            {/* Play */}
            <div className="absolute bottom-8 right-8 flex size-14 items-center justify-center rounded-full bg-white text-black shadow-xl">
              <Play className="ml-1 size-5 fill-current" />
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="max-w-lg">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-xl">
            <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.8)]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
              Music without limits
            </span>
          </div>

          <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-white xl:text-5xl">
            Sesini keşfet.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              Dünyanı oluştur.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/40">
            Favorilerini bir araya getir, kendi listelerini oluştur ve
            dinlemek istediğin müziği tek bir yerde keşfet.
          </p>
        </div>
      </div>
    </div>
  );
}
