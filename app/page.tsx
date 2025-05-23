import { HeroSection } from '@/components/home/hero-section';
import { FeaturedPackages } from '@/components/home/featured-packages';
import { DestinationHighlights } from '@/components/home/destination-highlights';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { FAQSection } from '@/components/home/faq-section';
import { Newsletter } from '@/components/home/newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPackages />
      <DestinationHighlights />
      <TestimonialsSection />
      <FAQSection />
      <Newsletter />
    </>
  );
}