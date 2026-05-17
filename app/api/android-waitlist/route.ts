import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("[android-waitlist] Supabase env vars missing");
    return Response.json({ ok: false }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const rawEmail =
    body && typeof body === "object" && "email" in body && typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim().toLowerCase()
      : "";

  if (!rawEmail || rawEmail.length > 254 || !EMAIL_RE.test(rawEmail)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase
    .from("android_waitlist")
    .insert({ email: rawEmail, source: "website" });

  // 23505 = unique_violation. We return the same "ok" so the response
  // doesn't reveal whether this email is already on the list.
  if (error && error.code !== "23505") {
    console.warn("[android-waitlist] insert failed", error.code, error.message);
    return Response.json({ ok: false }, { status: 500 });
  }

  return Response.json({ ok: true });
}
