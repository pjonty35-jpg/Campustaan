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