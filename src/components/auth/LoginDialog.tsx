import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Sparkles, School } from "lucide-react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "contact" | "otp" | "campus";

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [step, setStep] = useState<Step>("contact");
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [campus, setCampus] = useState("");
  const [loading, setLoading] = useState(false);

  const isEmail = contact.includes("@");

  const handleSendOTP = async () => {
    if (!contact) {
      toast({
        title: "Required",
        description: "Please enter your email or phone number",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      if (isEmail) {
        const { error } = await supabase.auth.signInWithOtp({
          email: contact,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
          },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithOtp({
          phone: contact,
        });
        if (error) throw error;
      }

      toast({
        title: "OTP Sent! 🎉",
        description: `Check your ${isEmail ? "email" : "phone"} for the verification code`,
      });
      setStep("otp");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 6-digit code",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const verifyData = isEmail
        ? { email: contact, token: otp, type: "email" as const }
        : { phone: contact, token: otp, type: "sms" as const };

      const { error } = await supabase.auth.verifyOtp(verifyData);
      if (error) throw error;

      toast({
        title: "Verified! ✨",
        description: "Now select your campus",
      });
      setStep("campus");
    } catch (error: any) {
      toast({
        title: "Verification Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCampus = async () => {
    if (!campus) {
      toast({
        title: "Required",
        description: "Please select a campus",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error } = await supabase
        .from("profiles")
        .update({ campus })
        .eq("id", user.id);

      if (error) throw error;

      toast({
        title: "Welcome to Campustaan! 🎓",
        description: `You're all set for ${campus}`,
      });
      onOpenChange(false);
      // Reset form
      setStep("contact");
      setContact("");
      setOtp("");
      setCampus("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-card border-2 border-primary/20 shadow-brand">
        <div className="flex flex-col items-center space-y-4 py-4">
          {/* Header with cute icon */}
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {step === "contact" && "Welcome!"}
              {step === "otp" && "Verify Code"}
              {step === "campus" && "Choose Campus"}
            </h2>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>

          {/* Contact Step */}
          {step === "contact" && (
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-sm font-medium">
                  Email or Phone Number
                </Label>
                <Input
                  id="contact"
                  placeholder="student@example.com or +91XXXXXXXXXX"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="border-primary/30 focus:border-primary"
                />
              </div>
              <Button
                onClick={handleSendOTP}
                disabled={loading}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>
            </div>
          )}

          {/* OTP Step */}
          {step === "otp" && (
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-center block">
                  Enter 6-digit code
                </Label>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
              <Button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                {loading ? "Verifying..." : "Verify"}
              </Button>
              <Button
                variant="ghost"
                onClick={() => setStep("contact")}
                className="w-full text-sm"
              >
                Change {isEmail ? "Email" : "Phone"}
              </Button>
            </div>
          )}

          {/* Campus Selection Step */}
          {step === "campus" && (
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <Label htmlFor="campus" className="text-sm font-medium flex items-center space-x-2">
                  <School className="h-4 w-4 text-primary" />
                  <span>The campus you want to explore</span>
                </Label>
                <Select value={campus} onValueChange={setCampus}>
                  <SelectTrigger className="border-primary/30 focus:border-primary">
                    <SelectValue placeholder="Select your campus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ITER SOA, Bhubaneswar">
                      ITER SOA, Bhubaneswar
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleSelectCampus}
                disabled={loading || !campus}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                {loading ? "Saving..." : "Let's Go! 🚀"}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
