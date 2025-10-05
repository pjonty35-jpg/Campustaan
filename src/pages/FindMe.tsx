import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";

const FindMe = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [type, setType] = useState<'lost' | 'found'>('lost');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Please log in to post");
      navigate("/auth");
      return;
    }

    if (!title.trim() || !description.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('lost_found')
        .insert({
          user_id: user.id,
          type,
          title: title.trim(),
          description: description.trim(),
          location: location.trim() || null
        });

      if (error) throw error;

      toast.success(`${type === 'lost' ? 'Lost' : 'Found'} item posted successfully!`);
      setTitle("");
      setDescription("");
      setLocation("");
    } catch (error: any) {
      toast.error(error.message || "Failed to create post");
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
            Lost & Found
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Help reunite lost items with their owners
          </p>

          <Tabs value={type} onValueChange={(v) => setType(v as 'lost' | 'found')} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="lost">I Lost Something</TabsTrigger>
              <TabsTrigger value="found">I Found Something</TabsTrigger>
            </TabsList>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>
                {type === 'lost' ? 'Report Lost Item' : 'Report Found Item'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Item Name</Label>
                  <Input
                    id="title"
                    placeholder="What item?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the item in detail..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (Optional)</Label>
                  <Input
                    id="location"
                    placeholder="Where was it lost/found?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Posting..." : `Post ${type === 'lost' ? 'Lost' : 'Found'} Item`}
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

export default FindMe;
