import airFlowLogo from "@/assets/Air_Flow_logo.png";
import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const Header = () => {
  const {
    signOut,
    user
  } = useAuth();
  const handleLogoClick = () => {
    window.open('https://spycor.com', '_blank');
  };
  const handleContactEmail = () => {
    window.location.href = 'mailto:support@airflowcalculator.com';
  };
  return <header className="bg-card shadow-card border-b border-border" style={{
    paddingTop: 'max(env(safe-area-inset-top), 1rem)'
  }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
              <img src={airFlowLogo} alt="Air Flow Logo" className="h-12 w-auto" />
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <h1 className="text-xl md:text-2xl font-heading font-bold text-foreground">
          </h1>
            {user && <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground hidden md:block">
                  Welcome, {user?.user_metadata?.first_name || user?.email}
                </span>
                <Button variant="outline" size="sm" onClick={() => signOut()} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => window.location.href = '/auth'}>
                  Sign-in
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = '/contact'}>
                  Contact Us
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Support</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => window.location.href = '/terms'}>
                  Terms and Conditions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = '/privacy'}>
                  Privacy Policy
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Links</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => window.open('https://www.airflowcalculator.com', '_blank')}>
                  Air Flow Calculator
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://www.spycor.com', '_blank')}>
                  Spycor Environmental
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://www.spycorbuilding.com', '_blank')}>
                  Spycor Building
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://www.facebook.com/profile.php?id=100063570907757', '_blank')}>
                  Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://www.instagram.com/spycorenvironmental', '_blank')}>
                  Instagram
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;