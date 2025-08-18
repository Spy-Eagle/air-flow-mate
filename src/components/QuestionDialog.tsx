import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
  const [contactMethod, setContactMethod] = useState<ContactMethod | null>(null);
  const [currentInquiryId, setCurrentInquiryId] = useState<string | null>(null);

  // Save draft question to database when user types
  useEffect(() => {
    if (!user || !question.trim()) return;
    const saveDraft = async () => {
      try {
        if (currentInquiryId) {
          // Update existing draft
          await supabase.from('customer_inquiries').update({
            question: question.trim()
          }).eq('id', currentInquiryId);
        } else {
          // Create new draft
          const {
            data,
            error
          } = await supabase.from('customer_inquiries').insert({
            user_id: user.id,
            question: question.trim(),
            is_sent: false
          }).select().single();
          if (error) throw error;
          setCurrentInquiryId(data.id);
        }
      } catch (error) {
        console.error('Error saving draft:', error);
      }
    };
    const debounceTimer = setTimeout(saveDraft, 1000);
    return () => clearTimeout(debounceTimer);
  }, [question, user, currentInquiryId]);
  const handleSend = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to ask a question",
        variant: "destructive"
      });
      return;
    }
    if (!question.trim() || !contactMethod) {
      toast({
        title: "Missing Information",
        description: "Please enter your question and select a contact method",
        variant: "destructive"
      });
      return;
    }
    try {
      if (currentInquiryId) {
        // Update existing inquiry and mark as sent
        await supabase.from('customer_inquiries').update({
          question: question.trim(),
          preferred_contact_method: contactMethod,
          is_sent: true
        }).eq('id', currentInquiryId);
      } else {
        // Create new inquiry and mark as sent
        await supabase.from('customer_inquiries').insert({
          user_id: user.id,
          question: question.trim(),
          preferred_contact_method: contactMethod,
          is_sent: true
        });
      }
      toast({
        title: "Question Submitted",
        description: "Thank you for your question. We'll get back to you soon."
      });

      // Reset form and close dialog
      setQuestion("");
      setContactMethod(null);
      setCurrentInquiryId(null);
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
    setContactMethod(null);
    setCurrentInquiryId(null);
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
            <Button onClick={handleSend} disabled={!question.trim() || !contactMethod} className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Send
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default QuestionDialog;