import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About Flyobo</h1>
          <p className="max-w-2xl">
            Learn about our story, mission, and the team behind Flyobo.
            We're passionate about creating memorable travel experiences for our customers.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Founded in 2020, Flyobo was born from a passion for travel and a desire to make quality travel experiences accessible to everyone. What started as a small team of travel enthusiasts has grown into a trusted travel company serving thousands of customers across India.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our founders, avid travelers themselves, noticed a gap in the market for transparent, hassle-free travel packages that delivered on their promises. They set out to create a company that would prioritize customer satisfaction, authentic experiences, and value for money.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, Flyobo offers a wide range of carefully curated travel packages to destinations across India, with plans to expand internationally in the near future. Despite our growth, we remain committed to our core values of integrity, excellence, and customer-centricity.
            </p>
          </div>
          <div className="relative h-80 lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
              alt="Flyobo team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-8">
              "To inspire and enable memorable travel experiences that enrich lives, foster cultural understanding, and create lasting memories, while providing exceptional value and service to our customers."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Customer-Centric</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We put our customers first in everything we do, tailoring experiences to meet their unique needs and preferences.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We personally vet all accommodations, activities, and services to ensure they meet our high standards.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5m-2.5 0H9.5m0 0v2.5M9.5 17H7"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Authentic Experiences</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We create travel experiences that connect travelers with local cultures, traditions, and communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our diverse team of travel experts is passionate about creating amazing experiences for our customers.
              With decades of combined experience in the travel industry, we're here to make your dream vacation a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Digvijay Naidu Atla",
                position: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                bio: "Travel enthusiast with 15+ years in the tourism industry. Rahul has visited 45 countries and is passionate about sustainable travel."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Flyobo Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-2xl font-bold mb-8">Why Choose Flyobo?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="mx-auto h-12 w-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                ),
                title: "Trusted Expertise",
                desc: "Decades of experience in the travel industry to ensure your trip goes smoothly."
              },
              {
                icon: (
                  <svg
                    className="mx-auto h-12 w-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 12v2a6 6 0 006 6h4a6 6 0 006-6v-2" />
                    <path d="M4 12l2-2 4 4 6-6 2 2" />
                  </svg>
                ),
                title: "Customer Satisfaction",
                desc: "We prioritize your happiness and tailor packages to your preferences."
              },
              {
                icon: (
                  <svg
                    className="mx-auto h-12 w-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Quality Assurance",
                desc: "Only the best accommodations and experiences are included in our packages."
              },
              {
                icon: (
                  <svg
                    className="mx-auto h-12 w-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1v22M5 12h14" />
                  </svg>
                ),
                title: "Seamless Booking",
                desc: "Easy and transparent booking process with dedicated customer support."
              }
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                {icon}
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-20">
          <Link href="/packages" passHref>
            <Button className="px-8 py-3 text-lg">Explore Our Packages</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
