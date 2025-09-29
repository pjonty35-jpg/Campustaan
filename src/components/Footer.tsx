import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import campustaanLogo from "@/assets/campustaan-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-8 left-20 w-20 h-20 bg-gradient-wave rounded-full opacity-15 blur-lg animate-pulse delay-400"></div>
      <div className="absolute bottom-12 right-16 w-24 h-24 bg-white/10 rounded-full opacity-18 blur-xl animate-pulse delay-1200"></div>
      <div className="absolute top-1/2 right-1/4 w-18 h-18 bg-gradient-wave rounded-full opacity-25 blur-lg animate-pulse delay-700"></div>
      
      {/* More vibrant orbs */}
      <div className="absolute top-16 left-12 w-16 h-16 bg-cyan-400 rounded-full opacity-20 blur-lg animate-pulse delay-300"></div>
      <div className="absolute bottom-20 right-20 w-22 h-22 bg-lime-400 rounded-full opacity-25 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-24 left-1/3 w-18 h-18 bg-yellow-400 rounded-full opacity-30 blur-lg animate-pulse delay-600"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 bg-pink-400 rounded-full opacity-22 blur-xl animate-pulse delay-1300"></div>
      <div className="absolute top-1/3 right-12 w-14 h-14 bg-emerald-400 rounded-full opacity-28 blur-lg animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-16 w-26 h-26 bg-orange-400 rounded-full opacity-18 blur-2xl animate-pulse delay-900"></div>
      <div className="absolute top-32 right-8 w-16 h-16 bg-purple-400 rounded-full opacity-25 blur-lg animate-pulse delay-750"></div>
      <div className="absolute bottom-32 left-24 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse delay-1100"></div>
      
      <div className="container px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={campustaanLogo} 
                alt="Campustaan Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <span className="text-2xl font-bold">Campustaan</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Your ultimate campus community hub. Connect, discover, and showcase your talents while staying updated with campus life.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Campus News</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Student Zone</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Talent Showcase</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Buzz Board</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">hello@campustaan.com</span>
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Campus Community Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2024 Campustaan. Made with ❤️ for the campus community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;