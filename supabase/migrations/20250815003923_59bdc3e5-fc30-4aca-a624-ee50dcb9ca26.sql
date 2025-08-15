-- Add phone_number column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN phone_number TEXT;

-- Update the handle_new_user function to include phone number
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, company, email, phone_number)
  VALUES (
    new.id, 
    new.raw_user_meta_data ->> 'first_name', 
    new.raw_user_meta_data ->> 'last_name',
    new.raw_user_meta_data ->> 'company',
    new.email,
    new.raw_user_meta_data ->> 'phone_number'
  );
  RETURN new;
END;
$$;