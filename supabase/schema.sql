create extension if not exists pgcrypto;

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  email text not null,
  phone text,
  project_type text,
  budget text,
  message text not null,
  status text not null default 'new'
);

create index if not exists contact_requests_created_at_idx
  on public.contact_requests (created_at desc);
