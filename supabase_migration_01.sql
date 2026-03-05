-- 1. Add email and username columns to existing user_profiles
-- We use 'IF NOT EXISTS' for columns via a conditional block to be safe
DO $$ 
BEGIN 
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='user_profiles' AND column_name='email') THEN
    ALTER TABLE public.user_profiles ADD COLUMN email text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='user_profiles' AND column_name='username') THEN
    ALTER TABLE public.user_profiles ADD COLUMN username text;
  END IF;
END $$;

-- 2. Add unique constraint to username (if not already there)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'user_profiles_username_key') THEN
    ALTER TABLE public.user_profiles ADD CONSTRAINT user_profiles_username_key UNIQUE (username);
  END IF;
END $$;

-- 3. Update the trigger function to handle the email synchronization
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.user_profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do update set email = excluded.email; -- Handles case if profile already exists
  return new;
end;
$$;

-- 4. Backfill existing emails from auth.users (Dashbord only)
UPDATE public.user_profiles
SET email = auth.users.email
FROM auth.users
WHERE public.user_profiles.id = auth.users.id
AND public.user_profiles.email IS NULL;
