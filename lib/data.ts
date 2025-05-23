// This file contains sample data for the travel packages
// In a real application, this would be fetched from a database

export interface PackageInclusion {
  id: number;
  name: string;
}

export interface TravelPackage {
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

export const travelPackages: TravelPackage[] = [
  {
    id: "1",
    name: "Goa Getaway",
    slug: "goa-getaway",
    price: 12500,
    duration: "3 Nights / 4 Days",
    location: "Goa",
    inclusions: ["Hotel", "Breakfast", "Sightseeing", "Airport Transfers"],
    description: "A budget-friendly beachside holiday in Goa.",
    longDescription: "Experience the vibrant beaches and nightlife of Goa with our budget-friendly package. This trip includes comfortable accommodation, daily breakfast, guided sightseeing tours to popular beaches, historical churches, and spice plantations. Enjoy the perfect blend of relaxation and adventure with water sports activities and cultural experiences.",
    image: "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg",
      "https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg",
      "https://images.pexels.com/photos/1178857/pexels-photo-1178857.jpeg",
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg"
    ],
    featured: true,
    rating: 4.5,
    reviewCount: 127
  },
  {
    id: "2",
    name: "Kerala Backwaters",
    slug: "kerala-backwaters",
    price: 18000,
    duration: "4 Nights / 5 Days",
    location: "Kerala",
    inclusions: ["Hotel", "All Meals", "Houseboat Stay", "Sightseeing", "Airport Transfers"],
    description: "Serene backwater experience in God's own country.",
    longDescription: "Immerse yourself in the tranquil beauty of Kerala's backwaters with our comprehensive package. Enjoy luxury accommodations, traditional houseboat stays, authentic Kerala cuisine for all meals, and guided tours of tea plantations, wildlife sanctuaries, and cultural sites. This package offers a perfect blend of relaxation and cultural exploration in God's own country.",
    image: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg",
    gallery: [
      "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg",
      "https://images.pexels.com/photos/1310788/pexels-photo-1310788.jpeg",
      "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg",
      "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg"
    ],
    featured: true,
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: "3",
    name: "Rajasthan Heritage Tour",
    slug: "rajasthan-heritage-tour",
    price: 22000,
    duration: "5 Nights / 6 Days",
    location: "Rajasthan",
    inclusions: ["Hotel", "Breakfast", "Private Car", "Tour Guide", "Monument Entries", "Airport Transfers"],
    description: "Royal experience of forts, palaces and desert.",
    longDescription: "Journey through the royal state of Rajasthan with our heritage tour package. Visit magnificent forts and palaces, experience traditional Rajasthani culture, and enjoy a desert safari in Jaisalmer. Stay in heritage hotels, some converted from former royal residences, and enjoy guided tours with expert local knowledge. This package offers a glimpse into the royal history and vibrant culture of India.",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
      "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg",
      "https://images.pexels.com/photos/1524146/pexels-photo-1524146.jpeg",
      "https://images.pexels.com/photos/3581853/pexels-photo-3581853.jpeg"
    ],
    featured: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: "4",
    name: "Himachal Adventure",
    slug: "himachal-adventure",
    price: 15000,
    duration: "4 Nights / 5 Days",
    location: "Himachal Pradesh",
    inclusions: ["Hotel", "Breakfast", "Sightseeing", "Trekking Guide", "Airport Transfers"],
    description: "Mountain adventure in the lap of Himalayas.",
    longDescription: "Embark on an exciting adventure in the Himalayan state of Himachal Pradesh. This package includes stays in scenic mountain towns, guided trekking experiences for all skill levels, and visits to ancient temples and monasteries. Enjoy breathtaking views, local Himachali cuisine, and the opportunity to experience adventure activities like paragliding and river rafting (at additional cost).",
    image: "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
      "https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg",
      "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg",
      "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg"
    ],
    featured: false,
    rating: 4.6,
    reviewCount: 102
  },
  {
    id: "5",
    name: "Andaman Island Escape",
    slug: "andaman-island-escape",
    price: 25000,
    duration: "5 Nights / 6 Days",
    location: "Andaman",
    inclusions: ["Hotel", "Breakfast", "Ferry Tickets", "Water Activities", "Sightseeing", "Airport Transfers"],
    description: "Paradise island experience with crystal clear waters.",
    longDescription: "Discover the pristine beaches and crystal-clear waters of the Andaman Islands. This premium package includes stays at beachfront resorts, snorkeling and scuba diving experiences (beginner courses available), glass-bottom boat rides, and visits to historical sites. Explore the rich marine life, relax on secluded beaches, and witness stunning sunsets in this tropical paradise.",
    image: "https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg",
      "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg",
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg"
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 78
  },
  {
    id: "6",
    name: "Golden Triangle Tour",
    slug: "golden-triangle-tour",
    price: 20000,
    duration: "6 Nights / 7 Days",
    location: "Delhi-Agra-Jaipur",
    inclusions: ["Hotel", "Breakfast", "Private Car", "Tour Guide", "Monument Entries", "Airport Transfers"],
    description: "Classic tour of Delhi, Agra and Jaipur with Taj Mahal visit.",
    longDescription: "Experience India's famous Golden Triangle with this comprehensive tour of Delhi, Agra, and Jaipur. Visit iconic monuments like the Taj Mahal, Red Fort, Amber Fort, and Hawa Mahal. Stay in comfortable hotels, enjoy guided tours with knowledgeable guides, and experience the diverse cultures and cuisines of North India. This is the perfect introduction to India's rich history and heritage.",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
      "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg",
      "https://images.pexels.com/photos/4916111/pexels-photo-4916111.jpeg",
      "https://images.pexels.com/photos/14416585/pexels-photo-14416585.jpeg"
    ],
    featured: false,
    rating: 4.6,
    reviewCount: 213
  },{
    id: "5",
    name: "Kerala Backwaters Experience",
    slug: "kerala-backwaters-experience",
    price: 18000,
    duration: "4 Nights / 5 Days",
    location: "Kerala",
    inclusions: ["Houseboat Stay", "Breakfast", "Local Sightseeing", "Boat Rides", "Traditional Meals", "Airport Transfers"],
    description: "Relaxing cruise through serene backwaters.",
    longDescription: "Enjoy a tranquil journey through Kerala's famous backwaters aboard a traditional houseboat. Experience the lush greenery, village life, and delicious local cuisine. This package offers guided tours to spice plantations, local markets, and historical temples, combined with the peacefulness of floating through calm waters.",
    image: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg",
    gallery: [
      "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg",
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      "https://images.pexels.com/photos/1679644/pexels-photo-1679644.jpeg",
      "https://images.pexels.com/photos/312480/pexels-photo-312480.jpeg"
    ],
    featured: true,
    rating: 4.8,
    reviewCount: 134
  },
  {
    id: "6",
    name: "Goa Beach Retreat",
    slug: "goa-beach-retreat",
    price: 12000,
    duration: "3 Nights / 4 Days",
    location: "Goa",
    inclusions: ["Beach Resort Stay", "Breakfast", "Water Sports", "Nightlife Tour", "Airport Transfers"],
    description: "Sun, sand, and nightlife in Goa.",
    longDescription: "Unwind at beautiful Goa beaches with this short but vibrant retreat package. Enjoy luxurious beach resort stays, thrilling water sports activities, and a guided nightlife tour to the best clubs and bars. Ideal for travelers seeking both relaxation and fun.",
    image: "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg",
      "https://images.pexels.com/photos/1233772/pexels-photo-1233772.jpeg",
      "https://images.pexels.com/photos/261326/pexels-photo-261326.jpeg",
      "https://images.pexels.com/photos/1362272/pexels-photo-1362272.jpeg"
    ],
    featured: false,
    rating: 4.5,
    reviewCount: 98
  },
  {
    id: "7",
    name: "Sikkim Spiritual Journey",
    slug: "sikkim-spiritual-journey",
    price: 20000,
    duration: "6 Nights / 7 Days",
    location: "Sikkim",
    inclusions: ["Hotel", "Breakfast", "Monastery Visits", "Guided Trekking", "Airport Transfers"],
    description: "Explore monasteries and Himalayan serenity.",
    longDescription: "Dive into the spiritual and natural beauty of Sikkim with visits to ancient monasteries, peaceful landscapes, and guided treks through Himalayan trails. Experience local culture and traditions while staying in comfortable hotels.",
    image: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
    gallery: [
      "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
      "https://images.pexels.com/photos/2098310/pexels-photo-2098310.jpeg",
      "https://images.pexels.com/photos/3584887/pexels-photo-3584887.jpeg",
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 76
  },
  {
    id: "8",
    name: "Andaman Island Escape",
    slug: "andaman-island-escape",
    price: 25000,
    duration: "5 Nights / 6 Days",
    location: "Andaman and Nicobar Islands",
    inclusions: ["Beach Resort", "Breakfast", "Snorkeling", "Island Tours", "Airport Transfers"],
    description: "Tropical island paradise and underwater adventures.",
    longDescription: "Discover the pristine beaches and vibrant marine life of the Andaman Islands. This package includes stay at beach resorts, snorkeling in crystal-clear waters, island hopping tours, and relaxing under palm trees. Perfect for beach lovers and nature enthusiasts.",
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    gallery: [
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
      "https://images.pexels.com/photos/3601429/pexels-photo-3601429.jpeg",
      "https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg",
      "https://images.pexels.com/photos/21264/pexels-photo.jpg"
    ],
    featured: false,
    rating: 4.7,
    reviewCount: 88
  }
  
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 5,
    text: "Our Goa trip was perfectly organized by TravelEase. The hotel was amazing and the sightseeing tours were informative and fun. Will definitely book with them again!"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Bangalore",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
    text: "The Kerala backwaters package exceeded our expectations. The houseboat stay was magical and the service was impeccable. Highly recommend TravelEase for their attention to detail."
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Delhi",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 4,
    text: "Our Rajasthan tour was amazing. The heritage hotels were beautiful and the guide was knowledgeable. Only suggestion would be to include more meals in the package."
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Kolkata",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
    text: "Andaman Island Escape was the best vacation we've ever had. The beaches were pristine and the water activities were so much fun. TravelEase took care of everything perfectly."
  }
];

export const faqs = [
  {
    id: 1,
    question: "How do I book a travel package?",
    answer: "You can book a travel package by browsing our packages, selecting the one you're interested in, and filling out the booking form. You'll receive a confirmation email with details about your booking and payment options."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, net banking, UPI, and bank transfers. For certain packages, we also offer EMI options with selected banks."
  },
  {
    id: 3,
    question: "Can I customize a travel package?",
    answer: "Yes, we offer customization options for all our packages. You can contact our customer service team to discuss your specific requirements and we'll create a tailored package for you."
  },
  {
    id: 4,
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies depending on the package and how close to the departure date you cancel. Generally, cancellations made 30+ days before departure receive a 90% refund, 15-29 days before departure receive a 70% refund, and 7-14 days before departure receive a 50% refund. Cancellations made less than 7 days before departure are non-refundable."
  },
  {
    id: 5,
    question: "Are flights included in the package price?",
    answer: "Flight inclusion varies by package. Please check the 'Inclusions' section of each package to see if flights are included. We can also arrange flights separately if needed."
  },
  {
    id: 6,
    question: "Do I need travel insurance?",
    answer: "While travel insurance is not mandatory, we strongly recommend it to protect against unforeseen circumstances. We can suggest suitable travel insurance options based on your trip details."
  }
];