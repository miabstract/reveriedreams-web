import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open in Reverie",
  description: "Open this link in the Reverie app on your iPhone.",
  robots: { index: false, follow: false },
};

export default function AuthCallbackFallback() {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="orb" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center">
        <Image
          src="/logos/app-icon.png"
          alt="Reverie"
          width={96}
          height={96}
          priority
          className="h-20 w-20 rounded-[1.4rem] shadow-[0_20px_80px_-20px_rgba(181,156,255,0.55)]"
        />

        <p className="eyebrow mt-8">Reverie ✦</p>

        <h1 className="mt-4 font-display text-3xl font-light text-text-primary tracking-wide">
          Open this link on your iPhone
        </h1>

        <p className="mt-5 max-w-sm text-sm md:text-base font-light leading-relaxed text-text-secondary">
          The link in your email is meant for the Reverie app. Tap it again from your iPhone — or install Reverie first.
        </p>

        <a
          href="https://apps.apple.com/app/reverie-dream-canvas/id6765586926"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.72rem] uppercase tracking-[0.28em] text-text-primary border border-accent-glow/40 bg-accent-glow/[0.08] hover:bg-accent-glow/[0.14] hover:border-accent-glow/70 transition-all"
        >
          <span className="opacity-90 group-hover:opacity-100">
            Download on the App Store
          </span>
        </a>
      </div>
    </main>
  );
}
