-- Create customer_inquiries table to store questions and contact preferences
CREATE TABLE public.customer_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  preferred_contact_method TEXT CHECK (preferred_contact_method IN ('call', 'text', 'email')),
  is_sent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.customer_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own inquiries" 
ON public.customer_inquiries 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own inquiries" 
ON public.customer_inquiries 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own inquiries" 
ON public.customer_inquiries 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_customer_inquiries_updated_at
BEFORE UPDATE ON public.customer_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();