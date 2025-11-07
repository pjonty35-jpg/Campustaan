import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import campustaanBg from "@/assets/campustaan-background.jpg";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

const Buzz = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setCreating(true);
    try {
      const { error } = await supabase.from("buzzes").insert([{
        content,
        user_id: user.id,
      }]);

      if (error) throw error;
      
      toast.success("Buzz created successfully!");
      setContent("");
    } catch (error) {
      console.error("Error creating buzz:", error);
      toast.error("Failed to create buzz");
    } finally {
      setCreating(false);
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
            Campus Buzz
          </h1>
          <p className="text-white/80 text-center mb-12">
            What's buzzing on campus today?
          </p>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-white">What's on your mind?</Label>
                  <Textarea 
                    id="content" 
                    placeholder="Share something interesting..." 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-24"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={creating}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/50"
                >
                  <Zap className="mr-2" size={20} />
                  {creating ? "Creating..." : "Create Buzz"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Buzz</h2>
            <div className="space-y-4">
              {/* Buzz cards will be displayed here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Buzz;
