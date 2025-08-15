import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Wind, Gauge, AlertTriangle, Heart } from "lucide-react";

const QuickReference = () => {
  const airChangeRecommendations = [
    { application: "Clean Rooms", ach: "15-20", icon: <Wind className="w-4 h-4" /> },
    { application: "Mold Remediation", ach: "8-12", icon: <AlertTriangle className="w-4 h-4" /> },
    { application: "General Construction", ach: "6-8", icon: <Gauge className="w-4 h-4" /> },
    { application: "Dust Control", ach: "4-6", icon: <Wind className="w-4 h-4" /> },
    { application: "Occupied Healthcare Facility", ach: "12", icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
      <Card className="bg-gradient-card shadow-card animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-primary">
            <Info className="w-5 h-5" />
            Air Change Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {airChangeRecommendations.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                  <span className="font-medium text-foreground">
                    {item.application}
                  </span>
                </div>
                <span className="font-bold text-accent">
                  {item.ach} ACH
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-card animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-primary">
            <Gauge className="w-5 h-5" />
            Quick Calculation Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-primary/5 border-l-4 border-primary rounded">
            <h4 className="font-semibold text-foreground mb-2">Formula:</h4>
            <p className="text-sm text-muted-foreground">
              CFM = (Room Volume × Air Changes per Hour) ÷ 60
            </p>
          </div>
          
          <div className="p-4 bg-accent/5 border-l-4 border-accent rounded">
            <h4 className="font-semibold text-foreground mb-2">Safety Margin:</h4>
            <p className="text-sm text-muted-foreground">
              Always add 15-25% to your calculated CFM for optimal performance
            </p>
          </div>
          
          <div className="p-4 bg-muted border-l-4 border-muted-foreground rounded">
            <h4 className="font-semibold text-foreground mb-2">Room Volume:</h4>
            <p className="text-sm text-muted-foreground">
              Length × Width × Height (in feet) = Cubic Feet
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickReference;