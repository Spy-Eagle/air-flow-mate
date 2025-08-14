import spycorLogo from "@/assets/spycor-logo.png";

const Header = () => {
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
          <h1 className="text-xl md:text-2xl font-heading font-bold text-foreground">
            Air Flow Calculator
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;