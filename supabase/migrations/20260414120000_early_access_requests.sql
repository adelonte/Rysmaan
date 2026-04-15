-- Early access / waitlist signups from the landing page form.
-- RLS: anonymous clients may INSERT only (no reads). Dashboard / service_role still sees all rows.

create table if not exists public.early_access_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  created_at timestamptz not null default now()
);

comment on table public.early_access_requests is 'VendorGate landing page early access requests';

create unique index if not exists early_access_requests_email_lower_key
  on public.early_access_requests (lower(trim(email)));

alter table public.early_access_requests enable row level security;

create policy "Allow anon insert"
  on public.early_access_requests
  for insert
  to anon
  with check (true);

grant insert on table public.early_access_requests to anon;
