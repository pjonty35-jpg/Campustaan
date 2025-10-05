import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import campustaanBg from "@/assets/campustaan-background.jpg";

const Announcement = () => {
  const [creating, setCreating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    toast.success("Announcement created successfully!");
    setCreating(false);
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
            Campus Announcements
          </h1>
          <p className="text-white/80 text-center mb-12">
            Share important updates with the campus community
          </p>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">Announcement Title</Label>
                  <Input 
                    id="title" 
                    placeholder="Enter announcement title" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content" className="text-white">Content</Label>
                  <Textarea 
                    id="content" 
                    placeholder="Write your announcement details..." 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={creating}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg shadow-orange-500/50"
                >
                  <Megaphone className="mr-2" size={20} />
                  {creating ? "Creating..." : "Post Announcement"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Announcements</h2>
            <div className="space-y-4">
              {/* Announcement cards will be displayed here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Announcement;
