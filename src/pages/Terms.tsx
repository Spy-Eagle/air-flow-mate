import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card>
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
              <CardTitle className="text-2xl font-heading">Terms and Conditions</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section>
                <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  By accessing and using the Air Flow Calculator application, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">2. Use License</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Permission is granted to temporarily use the Air Flow Calculator for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained in the application</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">3. Disclaimer</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The materials in the Air Flow Calculator are provided on an 'as is' basis. Spycor makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">4. Limitations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  In no event shall Spycor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials in the Air Flow Calculator, even if Spycor or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">5. Accuracy of Materials</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The materials appearing in the Air Flow Calculator could include technical, typographical, or photographic errors. Spycor does not warrant that any of the materials are accurate, complete, or current. Spycor may make changes to the materials at any time without notice.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">6. Revisions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Spycor may revise these terms of service at any time without notice. By using this application, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">7. Governing Law</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of South Carolina and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </section>
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
    </div>
  );
};

export default Terms;