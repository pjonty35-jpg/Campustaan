import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";

const Buzz = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Please log in to create a buzz");
      navigate("/auth");
      return;
    }

    if (!content.trim()) {
      toast.error("Please write something");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('buzzes')
        .insert({
          user_id: user.id,
          content: content.trim()
        });

      if (error) throw error;

      toast.success("Buzz created successfully!");
      setContent("");
    } catch (error: any) {
      toast.error(error.message || "Failed to create buzz");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Create a Buzz
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Share what's happening on campus
          </p>

          <Card>
            <CardHeader>
              <CardTitle>What's the buzz?</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  placeholder="Share your thoughts, news, or updates..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={6}
                  required
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Posting..." : "Post Buzz"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Buzz;
