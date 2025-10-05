import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload, Video, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import campustaanBg from "@/assets/campustaan-background.jpg";

const Talent = () => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    toast.success("Talent uploaded successfully!");
    setUploading(false);
  };

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
                    placeholder="Enter talent title" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your talent" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-24"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Upload Media</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/70 text-white backdrop-blur-md"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <ImageIcon size={32} />
                        <span className="font-semibold">Upload Photo</span>
                      </div>
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/50 hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/70 text-white backdrop-blur-md"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Video size={32} />
                        <span className="font-semibold">Upload Video</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={uploading}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/50"
                >
                  <Upload className="mr-2" size={20} />
                  {uploading ? "Uploading..." : "Share Your Talent"}
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
