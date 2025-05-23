"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

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
}

interface PackageDetailsProps {
  packageData: SerializedPackage;
}

export default function PackageDetails({ packageData }: PackageDetailsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
        <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="mt-6">
        <div className="prose dark:prose-invert max-w-none">
          <p>{packageData.longDescription}</p>
        </div>
      </TabsContent>
      
      <TabsContent value="itinerary" className="mt-6">
        <div className="prose dark:prose-invert max-w-none">
          <p>A detailed day-by-day itinerary will be provided upon booking confirmation.</p>
        </div>
      </TabsContent>
      
      <TabsContent value="inclusions" className="mt-6">
        <div className="grid gap-4">
          {packageData.inclusions.map((inclusion, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{inclusion}</span>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
} 