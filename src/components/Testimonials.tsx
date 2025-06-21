import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    text: "Devai Software delivered our project on time and exceeded expectations. Their AI expertise is unmatched!",
    name: "Priya S.",
    role: "CTO, FinTech Startup",
    avatar: "P",
    color: "#3b82f6"
  },
  {
    text: "The team is highly professional and creative. Our digital transformation was seamless and impactful.",
    name: "John D.",
    role: "CEO, Retail Group",
    avatar: "J",
    color: "#eab308"
  },
  {
    text: "We loved the collaboration and transparency. Highly recommend for any custom software needs.",
    name: "Anjali M.",
    role: "Product Manager, HealthTech",
    avatar: "A",
    color: "#22c55e"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }
    
    setTouchStart(null);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-800 dark:to-neutral-700 rounded-3xl p-8 md:p-12 shadow-brand-lg border border-neutral-200 dark:border-neutral-600 relative">
                    <div className="absolute top-6 left-8 text-6xl text-primary-600/20">
                      <i className="fas fa-quote-left" />
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 font-medium">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-brand"
                          style={{ backgroundColor: testimonial.color }}
                        >
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-primary-600 dark:text-primary-400">
                            {testimonial.name}
                          </div>
                          <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white dark:bg-neutral-800 text-primary-600 rounded-full shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:scale-110 border border-neutral-200 dark:border-neutral-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="mx-auto" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white dark:bg-neutral-800 text-primary-600 rounded-full shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:scale-110 border border-neutral-200 dark:border-neutral-600"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="mx-auto" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-primary-600 scale-125' 
                    : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-primary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;