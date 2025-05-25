"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Share2, Copy, Gift } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ReferralProgramProps {
  packageName: string;
  packageId: string;
}

export default function ReferralProgram({ packageName, packageId }: ReferralProgramProps) {
  const { toast } = useToast();
  const [referralCode, setReferralCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const generateReferralCode = () => {
    setIsGenerating(true);
    const code = `${packageId.slice(0, 4)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setReferralCode(code);
    setIsGenerating(false);
  };

  const referralLink = `${window.location.origin}/packages/${packageId}?ref=${referralCode}`;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({ title: "Copied!", description: "Referral link copied to clipboard." });
  };

  const shareReferralLink = async () => {
    const shareText = `Check out this amazing ${packageName} package! Use my referral code ${referralCode} to get 10% off your booking.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `Book ${packageName}`, text: shareText, url: referralLink });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      copyReferralLink();
    }
  };

  return (
    <div className="bg-gradient-to-tr from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Gift className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Refer & Earn</h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Invite friends and get <span className="font-semibold text-primary">10% off</span> on both your bookings.
      </p>

      {!referralCode ? (
        <Button onClick={generateReferralCode} disabled={isGenerating} className="w-full">
          {isGenerating ? "Generating..." : "Generate Your Referral Code"}
        </Button>
      ) : (
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Your Referral Code</Label>
            <div className="flex items-center gap-2 mt-1">
              <Input value={referralCode} readOnly className="font-mono" />
              <Button variant="outline" size="icon" onClick={copyReferralLink}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={shareReferralLink} className="flex-1">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="flex-1 border border-dashed dark:border-gray-600">
                  How It Works
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl">How the Referral Program Works</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  <div className="mt-4 space-y-5">
                    {[
                      {
                        step: "1",
                        title: "Generate Code",
                        desc: "Click to generate a unique referral code.",
                      },
                      {
                        step: "2",
                        title: "Share the Code",
                        desc: "Send your link/code to friends and family.",
                      },
                      {
                        step: "3",
                        title: "Get Rewards",
                        desc: "Both of you enjoy a 10% discount!",
                      },
                    ].map(({ step, title, desc }) => (
                      <div key={step} className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                          {step}
                        </div>
                        <div>
                          <h4 className="font-medium">{title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                        </div>
                      </div>
                    ))}

                    <div className="mt-6 bg-gray-100 dark:bg-gray-900 rounded-md p-4">
                      <h4 className="text-sm font-semibold mb-2">Terms & Conditions</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>Referral code is valid for 30 days</li>
                        <li>Max discount of ₹10,000 per booking</li>
                        <li>Not combinable with other offers</li>
                        <li>Valid for new bookings only</li>
                      </ul>
                    </div>
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  );
}
