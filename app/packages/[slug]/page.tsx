import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Clock,
  Star,
  ChevronLeft,
  RefreshCcw
} from 'lucide-react';
import { travelPackages } from '@/lib/data';
import BookingForm from '@/components/packages/booking-form';
import PackageDetails from '@/components/packages/package-details';
import PackageGallery from '@/components/packages/package-gallery';
import ReferralProgram from '@/components/packages/referral-program';
import PriceBreakdown from '@/components/packages/PriceBreakdown';

export async function generateStaticParams() {
  return travelPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function PackageDetailPage({
  params,
}: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const packageData = travelPackages.find(pkg => pkg.slug === slug);

  if (!packageData) {
    notFound();
  }

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
    reviewCount: packageData.reviewCount,
    whatsappLink: packageData.whatsappLink
  };

  // Example breakdown — adjust as you want
  const priceBreakdown = [
    { label: 'Base Price', amount: Math.floor(packageData.price * 0.7) },
    { label: 'Taxes & Fees', amount: Math.floor(packageData.price * 0.2) },
    { label: 'Service Charges', amount: Math.floor(packageData.price * 0.1) },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
      {/* Gallery Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={packageData.image}
          alt={packageData.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
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
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                <h1 className="text-3xl font-bold">{packageData.name}</h1>

                {/* PriceBreakdown Client Component */}
                <PriceBreakdown
                  price={packageData.price}
                  breakdown={[
                    { label: 'Base Price', amount: Math.floor(packageData.price * 0.75) },
                    { label: 'Taxes & Fees', amount: Math.floor(packageData.price * 0.2) },
                    { label: 'Service Charge', amount: Math.floor(packageData.price * 0.05) },
                  ]}
                />
              </div>

              <div className="flex flex-wrap gap-6 mb-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{packageData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>{packageData.rating} ({packageData.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {packageData.inclusions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
