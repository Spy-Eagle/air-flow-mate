import spycorLogo from "@/assets/spycor-logo.png";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { signOut, user } = useAuth();
  
  const handleLogoClick = () => {
    window.open('https://spycor.com', '_blank');
  };

  return (
    <header className="bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          >
            <img 
              src={spycorLogo} 
              alt="Spycor Logo" 
              className="h-12 w-auto"
            />
          </button>
          <div className="flex items-center space-x-4">
            <h1 className="text-xl md:text-2xl font-heading font-bold text-foreground">
              Air Flow Calculator
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground hidden md:block">
                Welcome, {user?.user_metadata?.first_name || user?.email}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => signOut()}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;