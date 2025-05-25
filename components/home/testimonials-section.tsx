"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials as allTestimonials } from '@/lib/data';
import { Star } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(0); // 0 = all

  // Filtered testimonials
  const testimonials = ratingFilter === 0
    ? allTestimonials
    : allTestimonials.filter((t) => t.rating >= ratingFilter);

  useEffect(() => {
    if (!isPaused && testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    trackMouse: true
  });

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            What Our Travelers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Hear directly from our delighted travelers who made unforgettable memories with us.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        {/* Filter by Rating */}
        <div className="flex justify-center gap-3 mb-6">
          {[0, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => { setRatingFilter(star); setActiveIndex(0); }}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-300
              ${ratingFilter === star
                  ? "bg-yellow-500 text-white shadow-md"
                  : "bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
            >
              {star === 0 ? (
                <>
                  All Ratings
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </>
              ) : (
                <>
                  {star}
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </>
              )}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          {...handlers}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gray-50 dark:bg-gray-900 border-none shadow-md">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className={`relative w-20 h-20 mb-4 rounded-full border-4 ${testimonial.rating >= 4 ? 'border-green-500' : 'border-yellow-400'
                          } overflow-hidden`}>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg italic mb-4">"{testimonial.text}"</blockquote>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-4' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                title={`Go to testimonial ${index + 1}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
