import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-32 md:py-48 mx-auto max-w-3xl"
    >
      <Reveal as="header" className="text-center">
        <p className="section-heading">What is Reverie</p>
        <div className="mx-auto mt-6 h-px w-12 bg-accent-glow/40" />
      </Reveal>

      <div className="mt-14 space-y-7 text-text-secondary text-base md:text-lg leading-[1.85] font-light">
        <Reveal>
          <p>
            Some dreams stay with us. Reverie remembers them on your behalf —
            the half-formed scenes, the strange weather of the night before,
            the people who shouldn&apos;t have been there but were.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p>
            Speak into your phone the moment you wake. Reverie listens,
            transcribes, and quietly assembles what you described into
            something you can revisit: hazy looping clips that play back the
            shape of the dream, an interpretation drawn from psychology and
            symbolism, and the Oracle — a way to talk with everything
            you&apos;ve ever recorded as if it were one continuous mind.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p>
            Dreams are private by default. When you choose, you can share one
            to the Feed and let others wander through it. Either way, what
            you remember is yours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
