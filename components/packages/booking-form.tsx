"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MessageSquareText, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SerializedPackage {
  id: string;
  name: string;
  slug: string;
  price: number;
  duration: string;
  location: string;
  inclusions: string[];
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  featured: boolean;
  rating: number;
  reviewCount: number;
  whatsappLink: string;
}

interface BookingFormProps {
  packageData: SerializedPackage;
}

const travelHighlights = [
  "Includes sunset kayaking 🌅",
  "Free local guide for 1 day 🎒",
  "Complimentary welcome drink 🍹",
  "Scenic mountain view room upgrade 🏔️",
  "Photo session at prime spots 📸"
];

export default function BookingForm({ packageData }: BookingFormProps) {
  const { toast } = useToast();
  const [viewerCount, setViewerCount] = useState<number>(0);
  const [highlight, setHighlight] = useState<string>("");

  useEffect(() => {
    // Simulate real-time viewer count
    const viewers = Math.floor(Math.random() * 30) + 5;
    setViewerCount(viewers);

    // Random travel highlight
    const randomHighlight = travelHighlights[Math.floor(Math.random() * travelHighlights.length)];
    setHighlight(randomHighlight);
  }, []);

  const handleBookingClick = () => {
    toast({
      title: "Redirecting to WhatsApp...",
      description: `You're being connected to our travel agent for "${packageData.name}".`,
    });
    window.open(packageData.whatsappLink, "_blank");
  };

  return (
    <div className="w-full p-6 bg-white dark:bg-gray-900 rounded-lg border shadow-sm space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Ready to Book?</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Secure your spot with our travel expert today.</p>
      </div>

      <div className="flex items-center justify-center text-sm text-green-700 dark:text-green-300">
        <Info className="w-4 h-4 mr-2" />
        {highlight}
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white text-base font-medium py-2"
              onClick={handleBookingClick}
            >
              <MessageSquareText className="h-4 w-4 mr-2" />
              Book via WhatsApp
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Chat directly with our team on WhatsApp.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <p className="text-sm text-gray-500 text-center">
        Prefer a call? <a href="tel:+919876543210" className="text-blue-600 underline">Call us</a>
      </p>
    </div>
  );
}
