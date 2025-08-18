import Header from "@/components/Header";
import CalculatorCard from "@/components/CalculatorCard";
import QuickReference from "@/components/QuickReference";
const Dashboard = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Professional Air-Flow Calculator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Calculate CFM requirements for Negative Air Machines. Ideal for contractors working in hospitals or hazardous locations.</p>
        </div>

        <div className="space-y-12">
          <CalculatorCard />
          <QuickReference />
        </div>

        <footer className="text-center py-8 border-t border-border mt-12">
          <p className="text-muted-foreground text-sm">
            © 2024 Spycor. Professional Air Filtration Solutions.
          </p>
        </footer>
      </main>
    </div>;
};
export default Dashboard;