import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload, Video, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";

const Talent = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (type: 'photo' | 'video') => {
    if (!user) {
      toast.error("Please log in to upload your talent");
      navigate("/auth");
      return;
    }

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = type === 'photo' ? 'image/*' : 'video/*';
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      setUploading(true);
      try {
        // Upload to storage
        const fileExt = file.name.split('.').pop();
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('user-uploads')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('user-uploads')
          .getPublicUrl(fileName);

        // Prompt for title and description
        const title = prompt("Enter a title for your talent:");
        if (!title) {
          toast.error("Title is required");
          setUploading(false);
          return;
        }

        const description = prompt("Enter a description (optional):");

        // Save to database
        const { error: dbError } = await supabase
          .from('talents')
          .insert({
            user_id: user.id,
            title,
            description: description || null,
            media_url: publicUrl,
            media_type: type
          });

        if (dbError) throw dbError;

        toast.success("Your talent has been uploaded!");
      } catch (error: any) {
        toast.error(error.message || "Failed to upload");
      } finally {
        setUploading(false);
      }
    };

    input.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Showcase Your Talent
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your skills, creativity, and passion with the Campustaan community
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            onClick={() => handleUpload('photo')}
            disabled={uploading}
            className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <ImageIcon className="mr-2 h-5 w-5" />
            Upload Photo
          </Button>
          
          <Button
            size="lg"
            onClick={() => handleUpload('video')}
            disabled={uploading}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Video className="mr-2 h-5 w-5" />
            Upload Video
          </Button>
        </div>

        {uploading && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-2 text-muted-foreground">Uploading...</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Talent;
