import { Clock, Heart, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const NewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const newsItems = [
    {
      id: 1,
      author: "Sveustce Dedepy",
      authorAvatar: "/placeholder.svg",
      time: "100m",
      content: "🎉 Exciting news! Our annual tech fest TechnoVision 2024 registrations are now open. Join us for 3 days of innovation, workshops, and competitions!",
      likes: 42,
      comments: 8,
      type: "announcement"
    },
    {
      id: 2,
      author: "Coments Student",
      authorAvatar: "/placeholder.svg",
      time: "100m",
      content: "Just discovered the new study pods in the library! Perfect spot for group projects. #StudySpaces #CampusLife",
      likes: 28,
      comments: 12,
      type: "update"
    },
    {
      id: 3,
      author: "Campus Events",
      authorAvatar: "/placeholder.svg",
      time: "2h",
      content: "📚 Reminder: Final exam schedule has been posted on the student portal. Don't forget to check your exam venues and timings!",
      likes: 67,
      comments: 15,
      type: "reminder"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-16 bg-background relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Floating orbs with glows */}
      <div className="absolute top-20 right-16 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse delay-400 shadow-[0_0_60px_22px_rgba(249,115,22,0.35)]"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-wave rounded-full opacity-15 blur-2xl animate-pulse delay-1100 shadow-[0_0_70px_26px_rgba(168,85,247,0.3)]"></div>
      <div className="absolute top-1/2 right-8 w-20 h-20 bg-white/10 rounded-full opacity-30 blur-lg animate-pulse delay-700 shadow-[0_0_52px_19px_rgba(255,255,255,0.25)]"></div>
      
      {/* More vibrant orbs with glows */}
      <div className="absolute top-8 left-12 w-18 h-18 bg-cyan-400 rounded-full opacity-25 blur-lg animate-pulse delay-300 shadow-[0_0_50px_18px_rgba(34,211,238,0.38)]"></div>
      <div className="absolute bottom-16 right-1/3 w-28 h-28 bg-lime-400 rounded-full opacity-20 blur-xl animate-pulse delay-900 shadow-[0_0_62px_23px_rgba(163,230,53,0.34)]"></div>
      <div className="absolute top-32 left-1/4 w-22 h-22 bg-yellow-400 rounded-full opacity-30 blur-lg animate-pulse delay-1200 shadow-[0_0_55px_20px_rgba(250,204,21,0.42)]"></div>
      <div className="absolute bottom-8 left-8 w-26 h-26 bg-pink-400 rounded-full opacity-18 blur-xl animate-pulse delay-600 shadow-[0_0_58px_21px_rgba(244,114,182,0.32)]"></div>
      <div className="absolute top-1/3 right-24 w-20 h-20 bg-emerald-400 rounded-full opacity-22 blur-lg animate-pulse delay-1400 shadow-[0_0_52px_19px_rgba(52,211,153,0.36)]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-400 rounded-full opacity-25 blur-xl animate-pulse delay-800 shadow-[0_0_60px_22px_rgba(251,146,60,0.38)]"></div>
      <div className="absolute top-12 right-12 w-16 h-16 bg-purple-400 rounded-full opacity-28 blur-lg animate-pulse delay-500 shadow-[0_0_48px_18px_rgba(192,132,252,0.4)]"></div>
      <div className="absolute bottom-20 right-8 w-30 h-30 bg-blue-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1000 shadow-[0_0_65px_24px_rgba(96,165,250,0.34)]"></div>
      <div className="absolute top-40 left-16 w-14 h-14 bg-rose-400 rounded-full opacity-32 blur-lg animate-pulse delay-350 shadow-[0_0_45px_16px_rgba(251,113,133,0.44)]"></div>
      <div className="absolute bottom-40 right-20 w-34 h-34 bg-teal-400 rounded-full opacity-15 blur-2xl animate-pulse delay-1350 shadow-[0_0_72px_27px_rgba(45,212,191,0.3)]"></div>
      
      {/* Fill more white spaces with glows */}
      <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-400 rounded-full opacity-28 blur-lg animate-pulse delay-200 shadow-[0_0_42px_15px_rgba(129,140,248,0.4)]"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-amber-400 rounded-full opacity-25 blur-lg animate-pulse delay-1500 shadow-[0_0_48px_18px_rgba(251,191,36,0.38)]"></div>
      <div className="absolute top-24 left-1/5 w-20 h-20 bg-violet-400 rounded-full opacity-30 blur-xl animate-pulse delay-750 shadow-[0_0_52px_19px_rgba(167,139,250,0.42)]"></div>
      <div className="absolute bottom-24 right-1/5 w-22 h-22 bg-fuchsia-400 rounded-full opacity-22 blur-lg animate-pulse delay-1050 shadow-[0_0_55px_20px_rgba(232,121,249,0.36)]"></div>
      <div className="absolute top-36 right-1/4 w-18 h-18 bg-sky-400 rounded-full opacity-35 blur-lg animate-pulse delay-450 shadow-[0_0_50px_18px_rgba(56,189,248,0.46)]"></div>
      <div className="absolute bottom-36 left-1/5 w-26 h-26 bg-lime-300 rounded-full opacity-20 blur-xl animate-pulse delay-1250 shadow-[0_0_58px_21px_rgba(190,242,100,0.34)]"></div>
      <div className="absolute top-28 left-2/3 w-14 h-14 bg-pink-300 rounded-full opacity-33 blur-lg animate-pulse delay-650 shadow-[0_0_45px_16px_rgba(249,168,212,0.44)]"></div>
      <div className="absolute bottom-28 right-2/3 w-24 h-24 bg-cyan-300 rounded-full opacity-18 blur-xl animate-pulse delay-950 shadow-[0_0_60px_22px_rgba(103,232,249,0.32)]"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Latest Campus News
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with what's happening around campus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-brand transition-all duration-300 border-0 bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={item.authorAvatar} alt={item.author} />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {item.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-sm text-foreground truncate">
                        {item.author}
                      </h4>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.time}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">
                  {item.content}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto">
                      <Heart className="h-4 w-4 mr-1" />
                      {item.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {item.comments}
                    </Button>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-gradient-primary text-white border-0 hover:opacity-90"
                  >
                    Sovet
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;