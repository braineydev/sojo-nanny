create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  client_name varchar not null,
  phone_number varchar not null,
  service_type varchar not null,
  start_date date,
  location varchar not null,
  notes text,
  status varchar not null default 'New',
  created_at timestamptz not null default now()
);
create table if not exists admin_users (
  id uuid primary key default gen_random_uuid(),
  email varchar unique not null,
  role varchar not null default 'admin',
  created_at timestamptz not null default now()
);
alter table inquiries enable row level security;
alter table admin_users enable row level security;
-- No public policies: the API route inserts with the service role key.
create policy "admins read inquiries" on inquiries for select
  using (exists (select 1 from admin_users a where a.email = auth.jwt() ->> 'email'));
create policy "admins update inquiries" on inquiries for update
  using (exists (select 1 from admin_users a where a.email = auth.jwt() ->> 'email'));
