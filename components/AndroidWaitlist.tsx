"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

type State = "idle" | "submitting" | "done" | "error";

export default function AndroidWaitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "submitting") return;
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed) || trimmed.length > 254) {
      setState("error");
      return;
    }
    setState("submitting");
    try {
      const res = await fetch("/api/android-waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) {
        setState("error");
        return;
      }
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="android" className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-xl">
        <div className="mx-auto h-px w-12 bg-accent-glow/30" aria-hidden="true" />

        <Reveal>
          <div className="mt-16 text-center">
            <h2 className="font-display text-xl md:text-2xl font-light text-text-primary tracking-wide">
              Android version coming soon
            </h2>

            <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-text-secondary">
              Drop your email and we&apos;ll let you know the moment it lands.
            </p>

            <div className="mt-10" aria-live="polite">
              {state === "done" ? (
                <p className="text-sm md:text-base font-light text-text-primary">
                  Got it. We&apos;ll be in touch. 🌙
                </p>
              ) : (
                <form
                  onSubmit={submit}
                  className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
                  noValidate
                >
                  <label htmlFor="android-waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="android-waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (state === "error") setState("idle");
                    }}
                    disabled={state === "submitting"}
                    placeholder="you@somewhere.com"
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    className="flex-1 h-12 rounded-full bg-white/[0.03] border border-white/10 px-5 text-sm font-light text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-glow/50 focus:bg-white/[0.05] transition-colors disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="group inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.72rem] uppercase tracking-[0.28em] text-text-primary border border-accent-glow/40 bg-accent-glow/[0.08] hover:bg-accent-glow/[0.14] hover:border-accent-glow/70 transition-all disabled:opacity-60"
                  >
                    <span className="opacity-90 group-hover:opacity-100">
                      {state === "submitting" ? "Sending…" : "Notify me"}
                    </span>
                  </button>
                </form>
              )}
              {state === "error" && (
                <p className="mt-4 text-xs text-text-tertiary">
                  That doesn&apos;t look like a valid email. Try again?
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
