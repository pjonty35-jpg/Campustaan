import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Camera, Video } from "lucide-react";
import { toast } from "sonner";
import campustaanBg from "@/assets/campustaan-background.jpg";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

const Talent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaType, setMediaType] = useState<"photo" | "video" | null>(null);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const handleFileSelect = (file: File, type: "photo" | "video") => {
    setMediaFile(file);
    setMediaType(type);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !mediaFile || !mediaType) return;
    
    setUploading(true);
    try {
      const fileExt = mediaFile.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('user-uploads')
        .upload(fileName, mediaFile);

      if (uploadError) throw uploadError;

      const { error } = await supabase.from("talents").insert([{
        title,
        description,
        media_url: fileName,
        media_type: mediaType,
        user_id: user.id,
      }]);

      if (error) throw error;
      
      toast.success("Talent uploaded successfully!");
      setTitle("");
      setDescription("");
      setMediaFile(null);
      setMediaType(null);
    } catch (error) {
      console.error("Error uploading talent:", error);
      toast.error("Failed to upload talent");
    } finally {
      setUploading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main 
        className="relative min-h-screen py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${campustaanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Showcase Your Talent
          </h1>
          <p className="text-white/80 text-center mb-12">
            Share your amazing skills with the campus community
          </p>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleUpload} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">Title</Label>
                  <Input 
                    id="title" 
                    placeholder="Give your talent a title" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Tell us about your talent..." 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-24"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={() => document.getElementById('photo-upload')?.click()}
                  >
                    <Camera className="mr-2" size={18} />
                    Upload Photo
                  </Button>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0], "photo")}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={() => document.getElementById('video-upload')?.click()}
                  >
                    <Video className="mr-2" size={18} />
                    Upload Video
                  </Button>
                  <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0], "video")}
                  />
                </div>
                {mediaFile && (
                  <p className="text-sm text-white/70">Selected: {mediaFile.name}</p>
                )}

                <Button
                  type="submit"
                  disabled={uploading || !mediaFile}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/50"
                >
                  {uploading ? "Uploading..." : "Showcase Your Talent"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Talents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Talent cards will be displayed here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Talent;
