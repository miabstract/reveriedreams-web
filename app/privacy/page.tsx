import type { Metadata } from "next";
import Nav from "@/components/Nav";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy — Reverie",
  description:
    "Privacy Policy for Reverie: Dream Canvas — what we collect, how we use it, and the choices you have.",
  alternates: { canonical: "/privacy" },
};

const subHeadingClass =
  "mt-8 mb-2 text-text-primary font-medium tracking-wide";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <LegalSection
          id="privacy"
          eyebrow="Privacy Policy"
          heading="Privacy Policy for Reverie: Dream Canvas"
          lastUpdated="May 2, 2026"
        >
          <h3 className="legal-h">Overview</h3>
          <p>
            Reverie: Dream Canvas (&ldquo;Reverie,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a dream journaling
            application that uses artificial intelligence to help you record,
            visualize, and understand your dreams. This Privacy Policy explains
            what information we collect, how we use it, and the choices you
            have.
          </p>
          <p>
            By using Reverie, you agree to the collection and use of
            information in accordance with this policy.
          </p>

          <h3 className="legal-h">Information we collect</h3>

          <h4 className={subHeadingClass}>Account information</h4>
          <p>
            When you create an account, we collect your{" "}
            <strong>email address</strong> and <strong>password</strong>{" "}
            (stored in encrypted form via our authentication provider,
            Supabase). We use this information solely to authenticate you and
            provide access to your dream journal.
          </p>

          <h4 className={subHeadingClass}>Dream content</h4>
          <ul className="legal-list">
            <li>
              <strong>Audio recordings:</strong> when you record a dream by
              voice, the audio is sent to OpenAI&apos;s Whisper API for
              transcription. After transcription, the audio is not retained by
              Reverie or OpenAI.
            </li>
            <li>
              <strong>Dream text:</strong> the transcribed text or text you
              type directly is stored in your Reverie account so you can
              revisit your dreams. Your dreams are linked to your account and
              not shared with other users.
            </li>
            <li>
              <strong>Generated content:</strong> visualizations,
              interpretations, and audio (music) generated for each dream are
              stored alongside your dream entries.
            </li>
          </ul>

          <h4 className={subHeadingClass}>Subscription status</h4>
          <p>
            If you subscribe to Reverie Plus, your subscription status is
            managed via RevenueCat and Apple. Reverie receives a confirmation
            that you are a paid subscriber, but does not access your payment
            details &mdash; Apple handles all payment processing directly.
          </p>

          <h4 className={subHeadingClass}>Usage data</h4>
          <p>
            We collect basic usage data necessary for the app to function
            &mdash; such as your daily Oracle conversation count and re-dream
            usage &mdash; to enforce free tier limits and provide premium
            feature access.
          </p>

          <h3 className="legal-h">How your data is used</h3>
          <p>We use your data to:</p>
          <ul className="legal-list">
            <li>
              Provide the core functionality of Reverie (recording,
              transcribing, interpreting, and storing your dreams)
            </li>
            <li>
              Generate AI-powered dream interpretations, visualizations, and
              accompanying music
            </li>
            <li>Authenticate you across sessions</li>
            <li>Enforce subscription tier limits</li>
            <li>Respond to support requests</li>
          </ul>
          <p>We do <strong>not</strong>:</p>
          <ul className="legal-list">
            <li>Sell your personal information to third parties</li>
            <li>Use your dreams to train AI models</li>
            <li>Display advertising</li>
            <li>Track you across other apps or websites</li>
          </ul>

          <h3 className="legal-h">Third-party services</h3>
          <p>
            Reverie relies on the following third-party services to function:
          </p>
          <ul className="legal-list">
            <li>
              <strong>Supabase</strong> (hosted in Canada Central): stores
              your account information and dream entries.{" "}
              <a
                className="legal-link"
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supabase Privacy Policy
              </a>
            </li>
            <li>
              <strong>Anthropic Claude:</strong> generates dream
              interpretations and powers the Oracle feature. Dream text is
              transmitted in real time and is not retained beyond the
              immediate request.{" "}
              <a
                className="legal-link"
                href="https://www.anthropic.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anthropic Privacy Policy
              </a>
            </li>
            <li>
              <strong>OpenAI Whisper:</strong> transcribes voice recordings
              to text. Audio is processed and not retained.{" "}
              <a
                className="legal-link"
                href="https://openai.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenAI Privacy Policy
              </a>
            </li>
            <li>
              <strong>fal.ai (Luma Ray Flash 2):</strong> generates dream
              video clips from text prompts.{" "}
              <a
                className="legal-link"
                href="https://fal.ai/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                fal.ai Privacy Policy
              </a>
            </li>
            <li>
              <strong>Pixabay:</strong> provides ambient music tracks. No
              user data is shared with Pixabay.{" "}
              <a
                className="legal-link"
                href="https://pixabay.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay Privacy Policy
              </a>
            </li>
            <li>
              <strong>RevenueCat:</strong> manages subscription status and
              entitlements.{" "}
              <a
                className="legal-link"
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                RevenueCat Privacy Policy
              </a>
            </li>
            <li>
              <strong>Apple App Store:</strong> handles all payment
              processing for Reverie Plus subscriptions.{" "}
              <a
                className="legal-link"
                href="https://www.apple.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Privacy Policy
              </a>
            </li>
          </ul>

          <h3 className="legal-h">Data retention</h3>
          <p>
            Your dream entries are retained for as long as your account is
            active. If you delete your account, your dreams and associated
            data are permanently deleted from Reverie&apos;s database within
            30 days. To delete your account, contact us at{" "}
            <a
              className="legal-link"
              href="mailto:hello@reveriedreams.com"
            >
              hello@reveriedreams.com
            </a>
            .
          </p>

          <h3 className="legal-h">Children&apos;s privacy</h3>
          <p>
            Reverie is not directed at children under the age of 13, and we
            do not knowingly collect personal information from children under
            13. If you believe a child has provided us with personal
            information, please contact us so we can delete it.
          </p>

          <h3 className="legal-h">Your rights</h3>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="legal-list">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Object to certain processing</li>
            <li>Receive a copy of your data in a portable format</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a
              className="legal-link"
              href="mailto:hello@reveriedreams.com"
            >
              hello@reveriedreams.com
            </a>
            . We will respond within 30 days.
          </p>
          <p>
            For users in the European Union, the legal basis for processing
            your data is your consent and the performance of the service you
            have requested. You may withdraw consent at any time.
          </p>

          <h3 className="legal-h">Data security</h3>
          <p>
            Your data is encrypted in transit (HTTPS) and at rest.
            Authentication tokens are stored securely on your device. We use
            industry-standard security practices but cannot guarantee
            absolute security; please use a strong, unique password.
          </p>

          <h3 className="legal-h">Changes to this policy</h3>
          <p>
            We may update this Privacy Policy from time to time. The
            &ldquo;Last updated&rdquo; date at the top of this policy will
            reflect any changes. Significant changes will be communicated via
            email or in-app notification.
          </p>

          <h3 className="legal-h">Contact us</h3>
          <p>
            If you have questions about this Privacy Policy or your data,
            contact us at:
          </p>
          <ul className="legal-list">
            <li>
              <strong>Email:</strong>{" "}
              <a
                className="legal-link"
                href="mailto:hello@reveriedreams.com"
              >
                hello@reveriedreams.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                className="legal-link"
                href="https://reveriedreams.com"
              >
                https://reveriedreams.com
              </a>
            </li>
          </ul>
          <p>
            Reverie is operated by Ante O&apos;Connor, an individual
            developer based in Toronto, Ontario, Canada.
          </p>
        </LegalSection>
      </main>
    </>
  );
}
