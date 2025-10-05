-- Create talents table for user talent uploads
CREATE TABLE public.talents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  media_url TEXT NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('photo', 'video')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  likes_count INTEGER DEFAULT 0
);

ALTER TABLE public.talents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view talents"
  ON public.talents FOR SELECT
  USING (true);

CREATE POLICY "Users can create their own talents"
  ON public.talents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own talents"
  ON public.talents FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own talents"
  ON public.talents FOR DELETE
  USING (auth.uid() = user_id);

-- Create announcements table
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view announcements"
  ON public.announcements FOR SELECT
  USING (true);

CREATE POLICY "Users can create announcements"
  ON public.announcements FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own announcements"
  ON public.announcements FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own announcements"
  ON public.announcements FOR DELETE
  USING (auth.uid() = user_id);

-- Create buzzes table
CREATE TABLE public.buzzes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  likes_count INTEGER DEFAULT 0
);

ALTER TABLE public.buzzes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view buzzes"
  ON public.buzzes FOR SELECT
  USING (true);

CREATE POLICY "Users can create buzzes"
  ON public.buzzes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own buzzes"
  ON public.buzzes FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own buzzes"
  ON public.buzzes FOR DELETE
  USING (auth.uid() = user_id);

-- Create lost_found table
CREATE TABLE public.lost_found (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('lost', 'found')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'resolved'))
);

ALTER TABLE public.lost_found ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view lost/found items"
  ON public.lost_found FOR SELECT
  USING (true);

CREATE POLICY "Users can create lost/found items"
  ON public.lost_found FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own lost/found items"
  ON public.lost_found FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own lost/found items"
  ON public.lost_found FOR DELETE
  USING (auth.uid() = user_id);

-- Create shop_products table
CREATE TABLE public.shop_products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  image_url TEXT,
  stock INTEGER DEFAULT 0,
  product_type TEXT NOT NULL CHECK (product_type IN ('tshirt', 'mug', 'sticker')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.shop_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON public.shop_products FOR SELECT
  USING (true);

-- Create storage bucket for user uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('user-uploads', 'user-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for user uploads
CREATE POLICY "Anyone can view uploaded files"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'user-uploads');

CREATE POLICY "Users can upload their own files"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'user-uploads' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can update their own files"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'user-uploads' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete their own files"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'user-uploads' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );