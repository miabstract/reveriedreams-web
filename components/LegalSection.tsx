import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  heading: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalSection({
  id,
  eyebrow,
  heading,
  lastUpdated,
  children,
}: Props) {
  return (
    <section id={id} className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal as="header" className="text-center">
          <p className="section-heading">{eyebrow}</p>
          <h2 className="mt-6 font-display text-3xl md:text-4xl font-light tracking-wide text-text-primary">
            {heading}
          </h2>
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-text-tertiary">
            Last updated: {lastUpdated}
          </p>
          <div className="mx-auto mt-8 h-px w-12 bg-accent-glow/40" />
        </Reveal>

        <Reveal>
          <div className="legal-prose mt-12 space-y-6 text-text-secondary text-[0.95rem] leading-[1.85] font-light">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
