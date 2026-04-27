import Reveal from "./Reveal";
import { Mic, Film, Sparkles } from "lucide-react";

const items = [
  {
    icon: Mic,
    title: "Record",
    body: "Speak it the moment you wake. Reverie listens, transcribes, remembers.",
  },
  {
    icon: Film,
    title: "See",
    body: "Watch your dream replay as a sequence of hazy looping clips. Set to ambient sound.",
  },
  {
    icon: Sparkles,
    title: "Decode",
    body: "Ask the Oracle what your dreams have been trying to tell you.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal as="header" className="text-center">
          <p className="section-heading">Three movements</p>
          <div className="mx-auto mt-6 h-px w-12 bg-accent-glow/40" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 120}>
                <article className="group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm transition-all duration-700 hover:border-accent-glow/30 hover:bg-white/[0.035]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-glow/30 bg-accent-glow/[0.08] text-accent-glow">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-7 text-[0.72rem] uppercase tracking-[0.32em] text-text-primary">
                    {it.title}
                  </h3>
                  <p className="mt-4 text-text-secondary text-[0.95rem] leading-[1.75] font-light">
                    {it.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
