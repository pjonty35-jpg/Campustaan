import { Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import backgroundImage from "@/assets/campustaan-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Decorative floating orbs */}
      <div className="absolute top-16 left-8 w-24 h-24 bg-gradient-wave rounded-full opacity-60 blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-primary rounded-full opacity-40 blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-32 right-1/3 w-20 h-20 bg-white/30 rounded-full blur-lg animate-pulse delay-500"></div>
      <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-gradient-wave rounded-full opacity-30 blur-xl animate-pulse delay-700"></div>
      
      {/* Graduation Cap Icon */}
      <div className="absolute top-12 right-20 text-white/40">
        <GraduationCap className="h-28 w-28" />
      </div>
      

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Connect with your{" "}
            <span className="text-yellow-200">campus community</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Daily updates, events, and opportunities.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-2xl p-2 shadow-brand max-w-2xl">
            <div className="flex-1 flex items-center">
              <Search className="text-muted-foreground ml-4 mr-3 h-5 w-5" />
              <Input 
                placeholder="Search events, news, students..." 
                className="border-0 bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0"
              />
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white rounded-xl px-8 shadow-none border-0"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;