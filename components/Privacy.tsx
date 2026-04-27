import LegalSection from "./LegalSection";

export default function Privacy() {
  return (
    <LegalSection
      id="privacy"
      eyebrow="Privacy Policy"
      heading="Privacy Policy"
      lastUpdated="April 26, 2026"
    >
      <p>
        Reverie is a dream journal. The whole point of the app is to remember
        what you choose to record. This page describes — in plain English —
        what we collect, how we use it, who we share it with, and the controls
        you have over your data.
      </p>

      <h3 className="legal-h">Information we collect</h3>
      <p>
        When you use Reverie we collect:
      </p>
      <ul className="legal-list">
        <li>
          <strong>Audio recordings</strong> of the dreams you choose to record,
          and the <strong>transcripts</strong> generated from them.
        </li>
        <li>
          <strong>Account information</strong> you provide when signing up:
          email address, display name, and (optionally) a profile photo.
        </li>
        <li>
          <strong>Generated content</strong> attached to each dream:
          AI-written interpretations, scene descriptions, the looping video
          clips we render for you, and the music we match to each dream.
        </li>
        <li>
          <strong>Social activity</strong> if you choose to use the public
          Feed: the dreams you mark public, comments, follows, and likes.
        </li>
        <li>
          <strong>Usage data</strong>: basic information about how you use the
          app (which screens you visit, when you record, which features you
          use). We use this to fix bugs and improve Reverie.
        </li>
        <li>
          <strong>Device data</strong>: device model, OS version, and crash
          reports, used for diagnostics only.
        </li>
      </ul>

      <h3 className="legal-h">How we use your information</h3>
      <p>
        We use your information to provide the app&apos;s core features and
        nothing else. Specifically:
      </p>
      <ul className="legal-list">
        <li>
          <strong>Transcription</strong>: your audio is sent to OpenAI&apos;s
          Whisper service to be turned into text.
        </li>
        <li>
          <strong>Interpretation &amp; scene description</strong>: your dream
          transcript is sent to Anthropic&apos;s Claude to generate the
          psychological / symbolic interpretation and the scene breakdown
          used to render your dream.
        </li>
        <li>
          <strong>Video generation</strong>: scene descriptions are sent to
          Luma and / or fal.ai to generate the hazy looping clips you watch
          back.
        </li>
        <li>
          <strong>Music matching</strong>: the mood of each dream is used to
          select an ambient track to play under the video.
        </li>
        <li>
          <strong>Oracle</strong>: when you ask the Oracle a question, your
          past dreams are queried and used as context for an AI response.
        </li>
        <li>
          <strong>Social features</strong>: dreams you choose to mark public
          appear on the Feed for other users; everything else stays private
          to you.
        </li>
      </ul>

      <h3 className="legal-h">Where your data lives</h3>
      <p>
        Your account, dreams, transcripts, generated media, and social
        activity are stored in <strong>Supabase</strong>, hosted in the
        Canada Central region. Audio files and rendered video clips are
        stored in encrypted cloud storage in the same region.
      </p>

      <h3 className="legal-h">Third-party services</h3>
      <p>
        To provide the app we share specific data with the following
        services. We share only what each service needs to do its job, and
        we don&apos;t sell your data to anyone.
      </p>
      <ul className="legal-list">
        <li>
          <strong>Anthropic (Claude)</strong> — receives the text of dreams
          you submit for interpretation and the questions you ask the Oracle.
        </li>
        <li>
          <strong>OpenAI (Whisper)</strong> — receives your dream audio for
          transcription.
        </li>
        <li>
          <strong>Luma / fal.ai</strong> — receive AI-generated scene
          descriptions used to produce the looping video clips. They do not
          receive your raw audio or your account identity.
        </li>
        <li>
          <strong>Supabase</strong> — our database and storage provider.
        </li>
        <li>
          <strong>Apple</strong> — handles sign-in (if you use Sign in with
          Apple) and App Store delivery.
        </li>
      </ul>
      <p>
        Each of these providers has their own privacy practices. We have
        configured them, where the option exists, not to use your content to
        train their models.
      </p>

      <h3 className="legal-h">Public vs. private dreams</h3>
      <p>
        Every dream is <strong>private by default</strong>. A private dream
        is visible only to you. You can choose, on a per-dream basis, to
        publish a dream to the public Feed, where other Reverie users can
        view it, comment on it, and react. You can change a dream from
        public back to private at any time, and you can delete public posts
        you&apos;ve made. Comments you&apos;ve made on others&apos; dreams
        are also yours to delete.
      </p>

      <h3 className="legal-h">Your rights and controls</h3>
      <ul className="legal-list">
        <li>
          <strong>Access</strong>: you can view all of your recorded dreams
          and account data inside the app.
        </li>
        <li>
          <strong>Export</strong>: email{" "}
          <a className="legal-link" href="mailto:hello@reveriedreams.com">
            hello@reveriedreams.com
          </a>{" "}
          and we&apos;ll send you a copy of your dreams and transcripts.
        </li>
        <li>
          <strong>Deletion</strong>: use the &ldquo;Forget Me&rdquo; option in
          the app to permanently delete your account and everything in it
          (dreams, transcripts, generated media, comments, follows).
          Deletion is irreversible.
        </li>
        <li>
          <strong>Single-dream deletion</strong>: any individual dream can be
          deleted from its detail screen.
        </li>
      </ul>

      <h3 className="legal-h">Children&apos;s privacy</h3>
      <p>
        Reverie is not intended for children. As required by the Apple App
        Store, you must be at least 13 years old to use Reverie. In some
        regions, certain features (such as the public Feed) may be limited
        for users under 18. We do not knowingly collect data from anyone
        under 13. If you believe a child under 13 has created an account,
        contact us and we will delete it.
      </p>

      <h3 className="legal-h">Security</h3>
      <p>
        Data is encrypted in transit (TLS) and at rest. We use industry-
        standard practices to protect your account. No system is perfectly
        secure; if we ever detect a breach affecting your data, we will
        notify you.
      </p>

      <h3 className="legal-h">Changes to this policy</h3>
      <p>
        We may update this policy as Reverie evolves. When we make material
        changes, we&apos;ll update the &ldquo;Last updated&rdquo; date above
        and, where appropriate, notify you in the app.
      </p>

      <h3 className="legal-h">Contact</h3>
      <p>
        Questions about privacy?{" "}
        <a className="legal-link" href="mailto:hello@reveriedreams.com">
          hello@reveriedreams.com
        </a>
        .
      </p>
    </LegalSection>
  );
}
