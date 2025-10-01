import { Play, Star, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TalentSection = () => {
  const talents = [
    {
      id: 1,
      name: "Priya Sharma",
      talent: "Digital Art",
      avatar: "/placeholder.svg",
      preview: "bg-gradient-to-br from-pink-400 to-purple-600",
      views: "2.3k",
      likes: 156,
      category: "Art"
    },
    {
      id: 2,
      name: "Arjun Patel",
      talent: "Music Production",
      avatar: "/placeholder.svg",
      preview: "bg-gradient-to-br from-blue-400 to-cyan-600",
      views: "1.8k",
      likes: 203,
      category: "Music"
    },
    {
      id: 3,
      name: "Sneha Gupta",
      talent: "Photography",
      avatar: "/placeholder.svg",
      preview: "bg-gradient-to-br from-green-400 to-blue-600",
      views: "3.1k",
      likes: 289,
      category: "Photography"
    },
    {
      id: 4,
      name: "Rahul Kumar",
      talent: "Dance Performance",
      avatar: "/placeholder.svg",
      preview: "bg-gradient-to-br from-orange-400 to-red-600",
      views: "4.2k",
      likes: 467,
      category: "Dance"
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Floating orbs with glows */}
      <div className="absolute top-24 right-20 w-26 h-26 bg-gradient-primary rounded-full opacity-22 blur-xl animate-morph-heart shadow-[0_0_58px_21px_rgba(249,115,22,0.36)]"></div>
      <div className="absolute bottom-16 left-16 w-34 h-34 bg-gradient-wave rounded-full opacity-18 blur-2xl animate-morph-butterfly shadow-[0_0_72px_27px_rgba(168,85,247,0.32)]"></div>
      <div className="absolute top-1/2 left-8 w-24 h-24 bg-white/12 rounded-full opacity-35 blur-lg animate-morph-diamond shadow-[0_0_60px_22px_rgba(255,255,255,0.28)]"></div>
      <div className="absolute bottom-1/4 right-12 w-28 h-28 bg-gradient-primary rounded-full opacity-20 blur-xl animate-morph-heart shadow-[0_0_62px_23px_rgba(249,115,22,0.34)]"></div>
      
      {/* More vibrant orbs with glows */}
      <div className="absolute top-8 left-20 w-18 h-18 bg-cyan-400 rounded-full opacity-28 blur-lg animate-morph-butterfly shadow-[0_0_50px_18px_rgba(34,211,238,0.4)]"></div>
      <div className="absolute bottom-8 right-24 w-30 h-30 bg-lime-400 rounded-full opacity-25 blur-xl animate-morph-diamond shadow-[0_0_65px_24px_rgba(163,230,53,0.38)]"></div>
      <div className="absolute top-20 right-8 w-20 h-20 bg-yellow-400 rounded-full opacity-32 blur-lg animate-morph-heart shadow-[0_0_52px_19px_rgba(250,204,21,0.44)]"></div>
      <div className="absolute bottom-24 left-12 w-22 h-22 bg-pink-400 rounded-full opacity-20 blur-xl animate-morph-butterfly shadow-[0_0_55px_20px_rgba(244,114,182,0.34)]"></div>
      <div className="absolute top-32 left-1/3 w-16 h-16 bg-emerald-400 rounded-full opacity-30 blur-lg animate-morph-diamond shadow-[0_0_48px_18px_rgba(52,211,153,0.42)]"></div>
      <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-orange-400 rounded-full opacity-18 blur-2xl animate-morph-heart shadow-[0_0_68px_25px_rgba(251,146,60,0.32)]"></div>
      <div className="absolute top-40 right-16 w-14 h-14 bg-purple-400 rounded-full opacity-35 blur-lg animate-morph-butterfly shadow-[0_0_45px_16px_rgba(192,132,252,0.46)]"></div>
      <div className="absolute bottom-40 left-24 w-28 h-28 bg-blue-400 rounded-full opacity-22 blur-xl animate-morph-diamond shadow-[0_0_62px_23px_rgba(96,165,250,0.36)]"></div>
      <div className="absolute top-12 left-1/4 w-24 h-24 bg-rose-400 rounded-full opacity-25 blur-lg animate-morph-heart shadow-[0_0_60px_22px_rgba(251,113,133,0.38)]"></div>
      <div className="absolute bottom-12 right-1/3 w-26 h-26 bg-teal-400 rounded-full opacity-20 blur-xl animate-morph-butterfly shadow-[0_0_58px_21px_rgba(45,212,191,0.34)]"></div>
      <div className="absolute top-1/3 right-20 w-18 h-18 bg-indigo-400 rounded-full opacity-28 blur-lg animate-morph-diamond shadow-[0_0_50px_18px_rgba(129,140,248,0.4)]"></div>
      <div className="absolute bottom-1/3 left-8 w-20 h-20 bg-amber-400 rounded-full opacity-24 blur-lg animate-morph-heart shadow-[0_0_52px_19px_rgba(251,191,36,0.37)]"></div>
      
      {/* Cover all remaining white spaces with glows */}
      <div className="absolute top-4 left-4 w-12 h-12 bg-violet-400 rounded-full opacity-30 blur-lg animate-morph-butterfly shadow-[0_0_42px_15px_rgba(167,139,250,0.42)]"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-fuchsia-400 rounded-full opacity-28 blur-lg animate-morph-diamond shadow-[0_0_48px_18px_rgba(232,121,249,0.4)]"></div>
      <div className="absolute top-28 left-1/5 w-18 h-18 bg-sky-400 rounded-full opacity-32 blur-lg animate-morph-heart shadow-[0_0_50px_18px_rgba(56,189,248,0.44)]"></div>
      <div className="absolute bottom-28 right-1/5 w-22 h-22 bg-lime-300 rounded-full opacity-25 blur-xl animate-morph-butterfly shadow-[0_0_55px_20px_rgba(190,242,100,0.38)]"></div>
      <div className="absolute top-36 left-2/3 w-14 h-14 bg-pink-300 rounded-full opacity-35 blur-lg animate-morph-diamond shadow-[0_0_45px_16px_rgba(249,168,212,0.46)]"></div>
      <div className="absolute bottom-36 right-2/3 w-26 h-26 bg-cyan-300 rounded-full opacity-20 blur-xl animate-morph-heart shadow-[0_0_58px_21px_rgba(103,232,249,0.34)]"></div>
      <div className="absolute top-44 left-1/5 w-20 h-20 bg-yellow-300 rounded-full opacity-30 blur-lg animate-morph-butterfly shadow-[0_0_52px_19px_rgba(253,224,71,0.42)]"></div>
      <div className="absolute bottom-44 right-2/5 w-24 h-24 bg-orange-300 rounded-full opacity-22 blur-xl animate-morph-diamond shadow-[0_0_60px_22px_rgba(253,186,116,0.36)]"></div>
      <div className="absolute top-16 left-2/5 w-16 h-16 bg-purple-300 rounded-full opacity-33 blur-lg animate-morph-heart shadow-[0_0_48px_18px_rgba(216,180,254,0.44)]"></div>
      <div className="absolute bottom-20 right-3/5 w-18 h-18 bg-emerald-300 rounded-full opacity-28 blur-lg animate-morph-butterfly shadow-[0_0_50px_18px_rgba(110,231,183,0.4)]"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Talent Spotlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing talents from our campus community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {talents.map((talent) => (
            <Card key={talent.id} className="group overflow-hidden border-0 hover:shadow-brand transition-all duration-300">
              <div className={`aspect-square ${talent.preview} relative overflow-hidden cursor-pointer`}>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="lg" variant="ghost" className="text-white hover:bg-white/20">
                    <Play className="h-8 w-8 fill-current" />
                  </Button>
                </div>
                
                {/* View Count */}
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  {talent.views}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                  {talent.category}
                </div>
              </div>
              
              <CardContent className="p-4 bg-gradient-card">
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={talent.avatar} alt={talent.name} />
                    <AvatarFallback className="bg-gradient-primary text-white text-sm">
                      {talent.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-foreground truncate">
                      {talent.name}
                    </h4>
                    <p className="text-muted-foreground text-xs truncate">
                      {talent.talent}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                    {talent.likes}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:bg-primary hover:text-white p-2 h-auto"
                  >
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Explore All Talents
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TalentSection;