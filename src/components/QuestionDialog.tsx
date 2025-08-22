import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Phone, MessageSquare, Mail } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
interface QuestionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
type ContactMethod = 'call' | 'text' | 'email';
const QuestionDialog = ({
  open,
  onOpenChange
}: QuestionDialogProps) => {
  const {
    user
  } = useAuth();
  const {
    toast
  } = useToast();
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod | null>(null);
  const handleSend = async () => {
    if (!question.trim() || !contactMethod || !email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your question, email address, and select a contact method",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    try {
      // Create new inquiry with email
      await supabase.from('customer_inquiries').insert({
        user_id: user?.id || null,
        email: email.trim(),
        question: question.trim(),
        preferred_contact_method: contactMethod,
        is_sent: true
      });

      toast({
        title: "Question Submitted",
        description: "Thank you for your question. We'll get back to you soon."
      });

      // Reset form and close dialog
      setQuestion("");
      setEmail("");
      setContactMethod(null);
      onOpenChange(false);
    } catch (error: any) {
      console.error('Error submitting question:', error);
      toast({
        title: "Error",
        description: "Failed to submit question. Please try again.",
        variant: "destructive"
      });
    }
  };
  const handleClose = () => {
    setQuestion("");
    setEmail("");
    setContactMethod(null);
    onOpenChange(false);
  };
  const remainingChars = 500 - question.length;
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-slate-200">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold text-foreground">
            Ask a Question
          </DialogTitle>
          
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Your Email Address
            </Label>
            <Input 
              id="email" 
              type="email"
              placeholder="Enter your email address..." 
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="question" className="text-sm font-medium">
              What would you like to know?
            </Label>
            <Textarea id="question" placeholder="Enter your question here..." value={question} onChange={e => setQuestion(e.target.value.slice(0, 500))} className="min-h-[120px] resize-none" maxLength={500} />
            <div className="text-right text-sm text-muted-foreground">
              {remainingChars} characters remaining
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">
              What is your preferred method of contact?
            </Label>
            <div className="grid grid-cols-3 gap-2">
              <Button variant={contactMethod === 'call' ? 'default' : 'outline'} onClick={() => setContactMethod('call')} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call
              </Button>
              <Button variant={contactMethod === 'text' ? 'default' : 'outline'} onClick={() => setContactMethod('text')} className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Text
              </Button>
              <Button variant={contactMethod === 'email' ? 'default' : 'outline'} onClick={() => setContactMethod('email')} className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-mail
              </Button>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handleClose}>
              Exit
            </Button>
            <Button onClick={handleSend} disabled={!question.trim() || !email.trim() || !contactMethod} className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Send
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default QuestionDialog;