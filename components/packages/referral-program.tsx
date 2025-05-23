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
  const [referralCode, setReferralCode] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Generate a unique referral code
  const generateReferralCode = () => {
    setIsGenerating(true);
    // In a real app, this would be generated on the server
    const code = `${packageId.slice(0, 4)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setReferralCode(code);
    setIsGenerating(false);
  };

  // Copy referral link to clipboard
  const copyReferralLink = () => {
    const referralLink = `${window.location.origin}/packages/${packageId}?ref=${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  // Share referral link
  const shareReferralLink = async () => {
    const referralLink = `${window.location.origin}/packages/${packageId}?ref=${referralCode}`;
    const shareText = `Check out this amazing ${packageName} package! Use my referral code ${referralCode} to get 10% off your booking.`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Book ${packageName}`,
          text: shareText,
          url: referralLink,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      copyReferralLink();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Gift className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-semibold">Refer & Earn</h3>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Share this package with your friends and earn rewards! Both you and your friend will get 10% off on your next booking.
        </p>

        {!referralCode ? (
          <Button 
            onClick={generateReferralCode} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? "Generating..." : "Generate Referral Code"}
          </Button>
        ) : (
          <div className="space-y-4">
            <div>
              <Label>Your Referral Code</Label>
              <div className="flex gap-2 mt-1">
                <Input 
                  value={referralCode} 
                  readOnly 
                  className="font-mono"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={copyReferralLink}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={shareReferralLink}
                className="flex-1"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    How it works
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>How the Referral Program Works</DialogTitle>
                    <DialogDescription>
                      <div className="space-y-4 mt-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <span className="text-primary font-semibold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Generate Your Code</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Click the button to generate your unique referral code
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <span className="text-primary font-semibold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Share with Friends</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Share your referral link with friends and family
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <span className="text-primary font-semibold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Earn Rewards</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Both you and your friend get 10% off on your next booking
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <h4 className="font-medium mb-2">Terms & Conditions</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                            <li>• Referral code is valid for 30 days</li>
                            <li>• Maximum discount of ₹10,000 per booking</li>
                            <li>• Cannot be combined with other offers</li>
                            <li>• Valid for new bookings only</li>
                          </ul>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 