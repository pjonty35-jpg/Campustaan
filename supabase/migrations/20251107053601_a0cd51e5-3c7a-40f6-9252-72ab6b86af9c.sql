-- Make user-uploads bucket private
UPDATE storage.buckets 
SET public = false 
WHERE id = 'user-uploads';

-- Create RLS policy for authenticated users to view images
CREATE POLICY "Authenticated users can view images"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'user-uploads');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'user-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Allow users to delete their own images
CREATE POLICY "Users can delete their own images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'user-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);