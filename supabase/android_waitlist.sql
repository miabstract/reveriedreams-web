-- Run this once in the Supabase SQL Editor for project dqbchduqhmykwdfsztyt
-- (Project: Reverie — shared between iOS app and reveriedreams.com)

create table if not exists public.android_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

-- Defense in depth: reject malformed email at the column level even if
-- the app-tier validation is bypassed.
alter table public.android_waitlist
  drop constraint if exists android_waitlist_email_format;
alter table public.android_waitlist
  add constraint android_waitlist_email_format
  check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

alter table public.android_waitlist enable row level security;

-- Anon (publishable key) clients can insert their own row. No read,
-- update, or delete — so the table is write-only from the website.
drop policy if exists "android_waitlist_anon_insert" on public.android_waitlist;
create policy "android_waitlist_anon_insert"
  on public.android_waitlist
  for insert
  to anon
  with check (true);

-- Helpful index for future export queries from the dashboard.
create index if not exists android_waitlist_created_at_idx
  on public.android_waitlist (created_at desc);
