import Reveal from "./Reveal";
import { Moon } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 8.5a3 3 0 0 0-2.1-2.12C18.06 6 12 6 12 6s-6.06 0-7.9.38A3 3 0 0 0 2 8.5 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.5a3 3 0 0 0 2.1 2.12C5.94 18 12 18 12 18s6.06 0 7.9-.38A3 3 0 0 0 22 15.5 31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.5Z" />
      <path d="m10 9.5 5 2.5-5 2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 pt-28 md:pt-40 pb-16 md:pb-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal as="header">
          <p className="section-heading">Contact</p>
          <div className="mx-auto mt-6 h-px w-12 bg-accent-glow/40" />
        </Reveal>

        <Reveal>
          <a
            href="mailto:hello@reveriedreams.com"
            className="mt-12 inline-block font-display text-2xl md:text-3xl font-light tracking-wide text-text-primary border-b border-accent-glow/30 hover:border-accent-glow/80 transition-colors pb-1"
          >
            hello@reveriedreams.com
          </a>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-12 flex items-center justify-center gap-6">
            <li>
              <a
                href="https://instagram.com/reveriedreamcanvas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reverie on Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-secondary hover:text-text-primary hover:border-accent-glow/50 transition-all"
              >
                <InstagramIcon size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@reveriedreamcanvas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reverie on YouTube"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-secondary hover:text-text-primary hover:border-accent-glow/50 transition-all"
              >
                <YoutubeIcon size={18} />
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      <footer className="mt-24 md:mt-32 border-t border-white/5 pt-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center text-xs text-text-tertiary">
          <p className="inline-flex items-center gap-2 tracking-[0.18em] uppercase">
            <Moon size={12} strokeWidth={1.5} className="text-accent-glow" />
            <span>
              © 2026 Reverie Dreams &middot; Made with care in Vaughan, Ontario
            </span>
          </p>
        </div>
      </footer>
    </section>
  );
}
