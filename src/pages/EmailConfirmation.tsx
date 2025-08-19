import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const EmailConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-heading">Thank you for confirming your e-mail!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => navigate('/')} 
            className="w-full"
          >
            Continue to Calculator
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailConfirmation;