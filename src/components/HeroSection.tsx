import { Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import backgroundImage from "@/assets/campustaan-background.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`relative overflow-hidden min-h-[600px] flex items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Decorative floating orbs with glow */}
      <div className="absolute top-16 left-8 w-24 h-24 bg-gradient-wave rounded-full opacity-60 blur-xl animate-pulse shadow-[0_0_60px_20px_rgba(168,85,247,0.4)]"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-primary rounded-full opacity-40 blur-2xl animate-pulse delay-1000 shadow-[0_0_80px_30px_rgba(249,115,22,0.5)]"></div>
      <div className="absolute top-32 right-1/3 w-20 h-20 bg-white/30 rounded-full blur-lg animate-pulse delay-500 shadow-[0_0_50px_15px_rgba(255,255,255,0.3)]"></div>
      <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-gradient-wave rounded-full opacity-30 blur-xl animate-pulse delay-700 shadow-[0_0_70px_25px_rgba(168,85,247,0.4)]"></div>
      
      {/* Additional smoky lights with glows */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-primary rounded-full opacity-50 blur-lg animate-pulse delay-200 shadow-[0_0_50px_18px_rgba(249,115,22,0.4)]"></div>
      <div className="absolute top-1/2 left-12 w-28 h-28 bg-white/20 rounded-full opacity-40 blur-2xl animate-pulse delay-1200 shadow-[0_0_60px_20px_rgba(255,255,255,0.25)]"></div>
      <div className="absolute bottom-8 right-1/3 w-36 h-36 bg-gradient-wave rounded-full opacity-25 blur-2xl animate-pulse delay-800 shadow-[0_0_75px_28px_rgba(168,85,247,0.35)]"></div>
      <div className="absolute top-20 left-1/3 w-22 h-22 bg-gradient-primary rounded-full opacity-60 blur-xl animate-pulse delay-300 shadow-[0_0_55px_18px_rgba(249,115,22,0.45)]"></div>
      <div className="absolute bottom-20 left-16 w-18 h-18 bg-white/40 rounded-full opacity-50 blur-lg animate-pulse delay-1500 shadow-[0_0_48px_16px_rgba(255,255,255,0.38)]"></div>
      <div className="absolute top-1/3 right-20 w-26 h-26 bg-gradient-wave rounded-full opacity-35 blur-xl animate-pulse delay-600 shadow-[0_0_58px_20px_rgba(168,85,247,0.32)]"></div>
      <div className="absolute bottom-1/3 right-8 w-30 h-30 bg-gradient-primary rounded-full opacity-30 blur-2xl animate-pulse delay-900 shadow-[0_0_65px_24px_rgba(249,115,22,0.35)]"></div>
      
      {/* More vibrant colors with glows */}
      <div className="absolute top-12 left-1/2 w-22 h-22 bg-cyan-400 rounded-full opacity-25 blur-xl animate-pulse delay-400 shadow-[0_0_55px_20px_rgba(34,211,238,0.4)]"></div>
      <div className="absolute bottom-24 left-8 w-26 h-26 bg-lime-400 rounded-full opacity-30 blur-lg animate-pulse delay-1100 shadow-[0_0_58px_22px_rgba(163,230,53,0.42)]"></div>
      <div className="absolute top-40 right-12 w-18 h-18 bg-yellow-400 rounded-full opacity-35 blur-lg animate-pulse delay-650 shadow-[0_0_48px_18px_rgba(250,204,21,0.45)]"></div>
      <div className="absolute bottom-40 right-1/4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1300 shadow-[0_0_68px_26px_rgba(244,114,182,0.38)]"></div>
      <div className="absolute top-60 left-20 w-24 h-24 bg-emerald-400 rounded-full opacity-28 blur-xl animate-pulse delay-850 shadow-[0_0_60px_22px_rgba(52,211,153,0.4)]"></div>
      
      {/* Even more lights to fill spaces with glows */}
      <div className="absolute top-4 left-1/4 w-14 h-14 bg-orange-400 rounded-full opacity-30 blur-lg animate-pulse delay-250 shadow-[0_0_45px_16px_rgba(251,146,60,0.42)]"></div>
      <div className="absolute bottom-4 right-10 w-20 h-20 bg-purple-400 rounded-full opacity-25 blur-xl animate-pulse delay-1450 shadow-[0_0_52px_19px_rgba(192,132,252,0.38)]"></div>
      <div className="absolute top-24 left-4 w-16 h-16 bg-blue-400 rounded-full opacity-32 blur-lg animate-pulse delay-750 shadow-[0_0_48px_18px_rgba(96,165,250,0.44)]"></div>
      <div className="absolute bottom-28 left-1/2 w-28 h-28 bg-rose-400 rounded-full opacity-22 blur-2xl animate-pulse delay-1050 shadow-[0_0_62px_23px_rgba(251,113,133,0.35)]"></div>
      <div className="absolute top-48 right-4 w-18 h-18 bg-teal-400 rounded-full opacity-35 blur-lg animate-pulse delay-450 shadow-[0_0_50px_18px_rgba(45,212,191,0.46)]"></div>
      <div className="absolute bottom-48 right-1/2 w-30 h-30 bg-indigo-400 rounded-full opacity-20 blur-xl animate-pulse delay-1250 shadow-[0_0_65px_24px_rgba(129,140,248,0.36)]"></div>
      <div className="absolute top-36 left-1/5 w-22 h-22 bg-amber-400 rounded-full opacity-28 blur-lg animate-pulse delay-550 shadow-[0_0_55px_20px_rgba(251,191,36,0.4)]"></div>
      <div className="absolute bottom-36 right-1/5 w-26 h-26 bg-violet-400 rounded-full opacity-24 blur-xl animate-pulse delay-950 shadow-[0_0_58px_21px_rgba(167,139,250,0.37)]"></div>
      <div className="absolute top-52 left-1/3 w-20 h-20 bg-fuchsia-400 rounded-full opacity-30 blur-lg animate-pulse delay-350 shadow-[0_0_52px_19px_rgba(232,121,249,0.42)]"></div>
      <div className="absolute bottom-52 right-2/3 w-24 h-24 bg-sky-400 rounded-full opacity-26 blur-xl animate-pulse delay-1150 shadow-[0_0_60px_22px_rgba(56,189,248,0.38)]"></div>
      
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