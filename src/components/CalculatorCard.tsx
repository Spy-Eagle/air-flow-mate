import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, ExternalLink, Phone } from "lucide-react";
interface CalculationResult {
  cfm: number;
  airChanges: number;
  recommendedCFM: number;
}
const CalculatorCard = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [calculationType, setCalculationType] = useState("room");
  const [desiredAirChanges, setDesiredAirChanges] = useState("6");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const calculateAirFlow = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const airChanges = parseFloat(desiredAirChanges);
    if (!l || !w || !h || !airChanges) return;
    const roomVolume = l * w * h; // cubic feet
    const cfmRequired = roomVolume * airChanges / 60; // CFM
    const recommendedCFM = cfmRequired * 1.2; // 20% safety margin

    setResult({
      cfm: cfmRequired,
      airChanges: airChanges,
      recommendedCFM: recommendedCFM
    });
  };
  const handleFindMachines = () => {
    window.open('https://spycor.com/air-filtration/negative-air-machines/', '_blank');
  };

  const handleRequestCall = () => {
    window.open('tel:+1-800-SPYCOR1', '_blank');
  };
  return <Card className="w-full max-w-2xl mx-auto bg-gradient-card shadow-card animate-scale-in">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl text-primary">
          <Calculator className="w-6 h-6" />
          Air Flow Calculator
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Calculate the required CFM for proper air circulation and filtration
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="length" className="text-sm font-medium">
              Length (ft)
            </Label>
            <Input id="length" type="number" placeholder="Enter length" value={length} onChange={e => setLength(e.target.value)} className="bg-input border-border focus:ring-primary" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="width" className="text-sm font-medium">
              Width (ft)
            </Label>
            <Input id="width" type="number" placeholder="Enter width" value={width} onChange={e => setWidth(e.target.value)} className="bg-input border-border focus:ring-primary" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="height" className="text-sm font-medium">
              Height (ft)
            </Label>
            <Input id="height" type="number" placeholder="Enter height" value={height} onChange={e => setHeight(e.target.value)} className="bg-input border-border focus:ring-primary" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="airChanges" className="text-sm font-medium">Room Type / Application
        </Label>
          <Select value={desiredAirChanges} onValueChange={setDesiredAirChanges}>
            <SelectTrigger className="bg-input border-border focus:ring-primary">
              <SelectValue placeholder="Select air changes per hour" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">Medical / Healthcare (12 ACH)</SelectItem>
              <SelectItem value="15">Laboratory (15 ACH)</SelectItem>
              <SelectItem value="6">Construction / Renovation (6 ACH)</SelectItem>
              
              <SelectItem value="4">Commercial Office (4 ACH)</SelectItem>
              <SelectItem value="2">Residential (2 ACH)</SelectItem>
              <SelectItem value="8">Industrial (8 ACH)</SelectItem>
              <SelectItem value="20">Clean Room (20 ACH)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={calculateAirFlow} className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-button transition-all duration-200 hover:scale-[1.02]" size="lg">
          Calculate Air Flow
        </Button>

        {result && <div className="mt-6 p-6 bg-muted rounded-lg border border-border animate-fade-in">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Calculation Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {Math.round(result.cfm)}
                </div>
                <div className="text-muted-foreground">Required CFM</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-accent">
                  {result.airChanges}
                </div>
                <div className="text-muted-foreground">Air Changes/Hour</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-spycor-blue">
                  {Math.round(result.recommendedCFM)}
                </div>
                <div className="text-muted-foreground">Recommended CFM</div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-primary/5 border-l-4 border-primary rounded">
              <p className="text-sm text-foreground">
                <strong>Note:</strong> The recommended CFM includes a 20% safety margin 
                to ensure optimal performance under varying conditions.
              </p>
            </div>
          </div>}

        <Button onClick={handleFindMachines} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 mb-4" size="lg">
          <ExternalLink className="w-4 h-4 mr-2" />
          Find Negative Air Machines
        </Button>
        
        <Button onClick={handleRequestCall} variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200" size="lg">
          <Phone className="w-4 h-4 mr-2" />
          Request a Phone Call
        </Button>
      </CardContent>
    </Card>;
};
export default CalculatorCard;