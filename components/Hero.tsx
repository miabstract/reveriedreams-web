import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden flex items-center justify-center px-6 pt-40 pb-32 md:pt-48 md:pb-44 min-h-[88vh]"
    >
      <div className="orb" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <Image
          src="/logos/wordmark.png"
          alt="Reverie"
          width={720}
          height={180}
          priority
          className="w-[min(82vw,520px)] h-auto"
        />

        <h1 className="sr-only">Reverie Dreams — an AI-powered dream journal</h1>

        <p
          className="mt-10 font-display text-2xl md:text-3xl font-light text-text-primary tracking-wide"
          style={{ letterSpacing: "0.02em" }}
        >
          Record your dreams. See them again.
        </p>

        <p className="mt-5 max-w-xl text-sm md:text-base font-light leading-relaxed text-text-secondary">
          An AI-powered dream journal that turns the way you remember
          into something you can return to.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:hello@reveriedreams.com?subject=Notify%20me%20about%20Reverie%20launch"
            className="group inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.72rem] uppercase tracking-[0.28em] text-text-primary border border-accent-glow/40 bg-accent-glow/[0.08] hover:bg-accent-glow/[0.14] hover:border-accent-glow/70 transition-all"
          >
            <span className="opacity-90 group-hover:opacity-100">
              Notify me at launch
            </span>
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.72rem] uppercase tracking-[0.28em] text-text-secondary hover:text-text-primary border border-white/10 hover:border-white/25 transition-all"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* soft fade-out into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0a0612]"
      />
    </section>
  );
}
