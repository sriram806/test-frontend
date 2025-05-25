import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  {
    name: "Goa",
    image: "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg",
    description: "Sun-kissed beaches and vibrant nightlife"
  },
  {
    name: "Kerala",
    image: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg",
    description: "Serene backwaters and lush greenery"
  },
  {
    name: "Rajasthan",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    description: "Royal palaces and desert adventures"
  },
  {
    name: "Himachal Pradesh",
    image: "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
    description: "Breathtaking mountain landscapes"
  },
  {
    name: "Sikkim",
    image: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
    description: "Peaceful monasteries and Himalayan views"
  },
  {
    name: "Uttarakhand",
    image: "https://images.pexels.com/photos/2372971/pexels-photo-2372971.jpeg",
    description: "Spiritual retreats and scenic hill stations"
  },
  {
    name: "Andaman and Nicobar Islands",
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    description: "Pristine beaches and vibrant coral reefs"
  },
  {
    name: "Uttarakhand",
    image: "https://images.pexels.com/photos/2372971/pexels-photo-2372971.jpeg",
    description: "Spiritual retreats and scenic hill stations"
  },
];

export function DestinationHighlights() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up duration-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent">
              Top Destinations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Discover India's most breathtaking and culturally rich destinations curated just for you.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              href={`/packages?location=${destination.name}`}
              className="group block"
            >
              <Card className="overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-60 w-full">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-sm lg:text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm text-gray-200">{destination.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}