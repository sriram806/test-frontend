import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Star, 
  ChevronLeft
} from 'lucide-react';
import { travelPackages, TravelPackage } from '@/lib/data';
import BookingForm from '@/components/packages/booking-form';
import PackageDetails from '@/components/packages/package-details';
import PackageGallery from '@/components/packages/package-gallery';
import ReferralProgram from '@/components/packages/referral-program';

export async function generateStaticParams() {
  return travelPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const packageData = travelPackages.find(pkg => pkg.slug === params.slug);
  
  if (!packageData) {
    notFound();
  }

  // Serialize the package data
  const serializedPackage = {
    id: packageData.id,
    name: packageData.name,
    slug: packageData.slug,
    price: packageData.price,
    duration: packageData.duration,
    location: packageData.location,
    inclusions: packageData.inclusions,
    description: packageData.description,
    longDescription: packageData.longDescription,
    image: packageData.image,
    gallery: packageData.gallery,
    featured: packageData.featured,
    rating: packageData.rating,
    reviewCount: packageData.reviewCount
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
      {/* Gallery Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={packageData.gallery[0]} 
          alt={packageData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Back button */}
        <Link 
          href="/packages" 
          className="absolute top-4 left-4 flex items-center gap-1 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Package Details */}
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{packageData.name}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{packageData.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Star className="h-5 w-5 mr-2 text-yellow-400" />
                  <span>{packageData.rating} ({packageData.reviewCount} reviews)</span>
                </div>
              </div>

              <PackageDetails packageData={serializedPackage} />
              
              {/* Gallery Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
                <PackageGallery images={packageData.gallery} packageName={packageData.name} />
              </div>
            </div>

            {/* Booking Form and Referral Program */}
            <div className="md:w-1/3 space-y-6">
              <div className="sticky top-24 space-y-6">
                <BookingForm packageData={serializedPackage} />
                <ReferralProgram packageName={packageData.name} packageId={packageData.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}