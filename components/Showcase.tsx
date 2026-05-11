import Image from "next/image";
import Reveal from "./Reveal";

export default function Showcase() {
  return (
    <section className="relative px-6 py-32 md:py-44">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden="true"
              className="icon-halo pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(181,156,255,0.35) 0%, rgba(181,156,255,0) 65%)",
                filter: "blur(40px)",
              }}
            />
            <div className="relative">
              <Image
                src="/logos/app-icon.png"
                alt="Reverie app icon"
                width={512}
                height={512}
                className="relative h-44 w-44 md:h-56 md:w-56 rounded-[2.4rem] shadow-[0_30px_120px_-20px_rgba(181,156,255,0.45)]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <a
            href="https://apps.apple.com/app/reverie-dream-canvas/id6765586926"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.72rem] uppercase tracking-[0.32em] text-text-primary border border-accent-glow/40 bg-accent-glow/[0.08] hover:bg-accent-glow/[0.14] hover:border-accent-glow/70 transition-all"
          >
            <span className="opacity-90 group-hover:opacity-100">
              Download on the App Store
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
