import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import campustaanBg from "@/assets/campustaan-background.jpg";

const FindMe = () => {
  const [creating, setCreating] = useState(false);
  const [activeTab, setActiveTab] = useState("lost");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    toast.success(`${activeTab === "lost" ? "Lost" : "Found"} item posted successfully!`);
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
            Lost & Found
          </h1>
          <p className="text-white/80 text-center mb-12">
            Help reunite lost items with their owners
          </p>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="lost">I Lost Something</TabsTrigger>
                  <TabsTrigger value="found">I Found Something</TabsTrigger>
                </TabsList>

                <TabsContent value="lost">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-white">Item Name</Label>
                      <Input 
                        id="title" 
                        placeholder="What did you lose?" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-white">Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Describe the item in detail..." 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-24"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-white">Last Seen Location</Label>
                      <Input 
                        id="location" 
                        placeholder="Where did you last see it?" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={creating}
                      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/50"
                    >
                      <Search className="mr-2" size={20} />
                      {creating ? "Posting..." : "Post Lost Item"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="found">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title-found" className="text-white">Item Name</Label>
                      <Input 
                        id="title-found" 
                        placeholder="What did you find?" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description-found" className="text-white">Description</Label>
                      <Textarea 
                        id="description-found" 
                        placeholder="Describe the item in detail..." 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-24"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location-found" className="text-white">Found Location</Label>
                      <Input 
                        id="location-found" 
                        placeholder="Where did you find it?" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={creating}
                      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/50"
                    >
                      <MapPin className="mr-2" size={20} />
                      {creating ? "Posting..." : "Post Found Item"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Posts</h2>
            <div className="space-y-4">
              {/* Lost & Found items will be displayed here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindMe;
