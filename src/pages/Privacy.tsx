import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();
  
  console.log('Privacy component is rendering');

  return (
    <div className="min-h-screen bg-background p-4" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
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
              <CardTitle className="text-2xl font-heading">Privacy Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section>
                <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, use our calculator, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Usage data and preferences</li>
                  <li>Communication history</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to comments, questions, and customer service requests</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">3. Information Sharing</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share information:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist in our operations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">5. Data Retention</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">6. Your Rights</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">7. Cookies and Tracking</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to collect and use personal information about you. You can manage your cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">8. Changes to This Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">9. Contact Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have any questions about this privacy policy, please contact us at support@airflowcalculator.com.
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

export default Privacy;