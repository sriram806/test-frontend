// app/about/page.tsx or pages/about.tsx (depending on your Next.js structure)
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 ml-2 dark:text-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About Flyobo</h1>
          <p className="max-w-2xl">
            Learn about our story, mission, and the team behind Flyobo. We're passionate about creating memorable travel experiences for our customers.
          </p>
        </div>
      </div>
      {/* Our Story */}
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

        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-8">
              "To inspire and enable memorable travel experiences that enrich lives, foster cultural understanding, and create lasting memories, while providing exceptional value and service to our customers."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: 'Customer-Centric',
                  description: 'We put our customers first in everything we do, tailoring experiences to meet their unique needs and preferences.',
                  iconPath:
                    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                },
                {
                  title: 'Quality Assurance',
                  description: 'We personally vet all accommodations, activities, and services to ensure they meet our high standards.',
                  iconPath:
                    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                },
                {
                  title: 'Authentic Experiences',
                  description: 'We create travel experiences that connect travelers with local cultures, traditions, and communities.',
                  iconPath:
                    'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5m-2.5 0H9.5m0 0v2.5M9.5 17H7',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-wide">
              Meet Our Amazing Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed">
              Our diverse team of travel experts is passionate about creating amazing experiences for our customers. With decades of combined experience in the travel industry, we're here to make your dream vacation a reality.
            </p>
          </div>

          {/* CEO - Single centered card */}
          <div className="grid grid-cols-1 justify-center mb-14">
            {[{
              name: 'Digvijay Naidu Atla',
              position: 'Founder & CEO',
              image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
              bio: 'Travel enthusiast with 15+ years in the tourism industry. Digvijay has visited 45 countries and is passionate about sustainable travel.',
            }].map((member, idx) => (
              <div
                key={idx}
                className="mx-auto max-w-xs group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 uppercase tracking-wide">
                    {member.position}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Directors - 2 cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
            {[
              {
                name: 'Priya Sharma',
                position: 'Director of Operations',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
                bio: 'Expert in logistics and operations management with 10+ years of experience ensuring smooth travel experiences.',
              },
              {
                name: 'Ankit Verma',
                position: 'Director of Marketing',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
                bio: 'Marketing guru specialized in digital campaigns and brand growth within the travel sector.',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 uppercase tracking-wide">
                    {member.position}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical team - 3 cards in 3 columns on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                name: 'Sara Lee',
                position: 'Lead Developer',
                image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
                bio: 'Passionate about building scalable web platforms and travel apps that delight users worldwide.',
              },
              {
                name: 'Rohit Singh',
                position: 'UI/UX Designer',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
                bio: 'Focused on crafting intuitive interfaces and seamless user experiences.',
              },
              {
                name: 'Meera Patel',
                position: 'QA Engineer',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
                bio: 'Ensures every release is bug-free and meets the highest quality standards.',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 uppercase tracking-wide">
                    {member.position}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Flyobo */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-2xl font-bold mb-8">Why Choose Flyobo?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Trusted Expertise',
                desc: 'Decades of experience in the travel industry to ensure your trip goes smoothly.',
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
              },
              {
                title: '24/7 Support',
                desc: 'Our support team is available around the clock to help with any travel needs.',
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
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                ),
              },
              {
                title: 'Secure Booking',
                desc: 'Safe and secure online booking system with multiple payment options.',
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
                    <path d="M12 1l9 4-9 4-9-4 9-4zm0 22v-8M4.21 10.29l7.79 3.71 7.79-3.71" />
                  </svg>
                ),
              },
              {
                title: 'Custom Packages',
                desc: 'We build personalized travel itineraries based on your preferences and budget.',
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
                    <path d="M3 3h18v18H3z" />
                    <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                {feature.icon}
                <h3 className="font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Browse our curated packages and start planning your next trip with Flyobo.
          </p>
          <Link href="/packages">
            <Button>Explore Packages</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
