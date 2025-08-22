import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Mail, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@airflowcalculator.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+18772930784';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="p-1"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-2xl font-heading">Contact Us</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary hover:underline"
                  onClick={handlePhoneClick}
                >
                  (877) 293-0784
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="text-sm text-muted-foreground">
                  Air Flow Calculator<br />
                  1121 Park West Blvd. Suite B-183<br />
                  Mount Pleasant, SC 29466
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary hover:underline"
                  onClick={handleEmailClick}
                >
                  support@airflowcalculator.com
                </Button>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => navigate('/')} 
            className="w-full"
          >
            Back to Calculator
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;