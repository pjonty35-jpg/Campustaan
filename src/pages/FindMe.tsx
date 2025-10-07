import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Filter, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router-dom";
import campustaanBg from "@/assets/campustaan-background.jpg";

type LostFoundItem = {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string | null;
  created_at: string;
  status: string;
};

const FindMe = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [activeTab, setActiveTab] = useState("lost");
  const [items, setItems] = useState<LostFoundItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<"all" | "lost" | "found">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Form states
  const [lostForm, setLostForm] = useState({ title: "", description: "", location: "" });
  const [foundForm, setFoundForm] = useState({ title: "", description: "", location: "" });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from("lost_found")
        .select("*")
        .eq("status", "active")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error("Error fetching items:", error);
      toast.error("Failed to load items");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Please login to post items");
      navigate("/auth");
      return;
    }

    setCreating(true);
    const formData = activeTab === "lost" ? lostForm : foundForm;

    try {
      const { error } = await supabase
        .from("lost_found")
        .insert([
          {
            title: formData.title,
            description: formData.description,
            location: formData.location || null,
            type: activeTab,
            user_id: user.id,
            status: "active"
          }
        ]);

      if (error) throw error;

      toast.success(`${activeTab === "lost" ? "Lost" : "Found"} item posted successfully!`);
      
      // Reset form
      if (activeTab === "lost") {
        setLostForm({ title: "", description: "", location: "" });
      } else {
        setFoundForm({ title: "", description: "", location: "" });
      }
      
      // Refresh items
      fetchItems();
    } catch (error) {
      console.error("Error posting item:", error);
      toast.error("Failed to post item");
    } finally {
      setCreating(false);
    }
  };

  const filteredItems = items.filter(item => {
    const matchesType = filterType === "all" || item.type === filterType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

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
                        value={lostForm.title}
                        onChange={(e) => setLostForm({ ...lostForm, title: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-white">Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Describe the item in detail..." 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-24"
                        value={lostForm.description}
                        onChange={(e) => setLostForm({ ...lostForm, description: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-white">Last Seen Location</Label>
                      <Input 
                        id="location" 
                        placeholder="Where did you last see it?" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        value={lostForm.location}
                        onChange={(e) => setLostForm({ ...lostForm, location: e.target.value })}
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
                        value={foundForm.title}
                        onChange={(e) => setFoundForm({ ...foundForm, title: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description-found" className="text-white">Description</Label>
                      <Textarea 
                        id="description-found" 
                        placeholder="Describe the item in detail..." 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-24"
                        value={foundForm.description}
                        onChange={(e) => setFoundForm({ ...foundForm, description: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location-found" className="text-white">Found Location</Label>
                      <Input 
                        id="location-found" 
                        placeholder="Where did you find it?" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        value={foundForm.location}
                        onChange={(e) => setFoundForm({ ...foundForm, location: e.target.value })}
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Posts</h2>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Input
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 w-full sm:w-64"
                />
                
                <div className="flex gap-2">
                  <Button
                    variant={filterType === "all" ? "default" : "outline"}
                    onClick={() => setFilterType("all")}
                    className={filterType === "all" 
                      ? "bg-white/30 text-white hover:bg-white/40" 
                      : "border-white/30 text-white hover:bg-white/10"}
                  >
                    All
                  </Button>
                  <Button
                    variant={filterType === "lost" ? "default" : "outline"}
                    onClick={() => setFilterType("lost")}
                    className={filterType === "lost" 
                      ? "bg-violet-600 text-white hover:bg-violet-700" 
                      : "border-white/30 text-white hover:bg-white/10"}
                  >
                    Lost
                  </Button>
                  <Button
                    variant={filterType === "found" ? "default" : "outline"}
                    onClick={() => setFilterType("found")}
                    className={filterType === "found" 
                      ? "bg-green-600 text-white hover:bg-green-700" 
                      : "border-white/30 text-white hover:bg-white/10"}
                  >
                    Found
                  </Button>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="text-center text-white/70 py-8">Loading items...</div>
            ) : filteredItems.length === 0 ? (
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-8 text-center text-white/70">
                  {searchQuery || filterType !== "all" 
                    ? "No items found matching your filters" 
                    : "No items posted yet. Be the first to post!"}
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id} 
                    className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <Badge 
                          className={item.type === "lost" 
                            ? "bg-violet-600 text-white" 
                            : "bg-green-600 text-white"}
                        >
                          {item.type === "lost" ? "Lost" : "Found"}
                        </Badge>
                      </div>
                      
                      <p className="text-white/80 text-sm mb-3 line-clamp-3">
                        {item.description}
                      </p>
                      
                      {item.location && (
                        <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      )}
                      
                      <Separator className="bg-white/20 mb-3" />
                      
                      <p className="text-white/50 text-xs">
                        {new Date(item.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindMe;
