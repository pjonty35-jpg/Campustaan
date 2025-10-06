import { useState } from "react";
import { Bell, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import campustaanLogo from "@/assets/campustaan-logo.png";
import campustaanBg from "@/assets/campustaan-background.jpg";
import LoginDialog from "@/components/auth/LoginDialog";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <>
      <header 
        className="sticky top-0 z-50 w-full px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${campustaanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-border rounded-2xl shadow-lg">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src={campustaanLogo} 
              alt="Campustaan Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Campustaan
            </span>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
            </nav>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></span>
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <User className="h-5 w-5" />
                    <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-green-500 rounded-full border border-background"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem disabled className="text-xs text-muted-foreground">
                    {user.email || user.phone}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setLoginOpen(true)}
              >
                <User className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </header>
      
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
};

export default Header;