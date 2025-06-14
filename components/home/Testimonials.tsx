'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    position: 'CTO',
    company: 'TechFlow Solutions',
    content: 'CognifyAI transformed our data processing capabilities completely. Their custom ML models reduced our processing time by 75% while improving accuracy to 99.2%. The ROI was evident within the first quarter.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    position: 'VP of Operations',
    company: 'Global Logistics Inc',
    content: 'The predictive analytics solution from CognifyAI has revolutionized our supply chain management. We can now forecast demand with 94% accuracy and have reduced inventory costs by $2.3M annually.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: 3,
    name: 'Dr. Emily Watson',
    position: 'Research Director',
    company: 'MedTech Innovations',
    content: 'Their computer vision solution for medical imaging analysis has been groundbreaking for our research. The accuracy and speed of diagnosis has improved dramatically, potentially saving countless lives.',
    rating: 5,
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: 4,
    name: 'James Thompson',
    position: 'CEO',
    company: 'FinanceForward',
    content: 'CognifyAI\'s fraud detection system has been incredible. We\'ve seen a 89% reduction in fraudulent transactions while maintaining seamless user experience. Their team is truly exceptional.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the leaders who have 
              transformed their businesses with our AI solutions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <Quote className="absolute top-6 right-6 w-16 h-16 text-electric-500/20" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-electric-500/30"
                    />
                    <div>
                      <div className="font-semibold text-white text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-electric-400 font-medium">
                        {testimonials[currentIndex].position}
                      </div>
                      <div className="text-white/60 text-sm">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPrevious}
                  className="w-12 h-12 rounded-full glass-card hover:bg-white/20 text-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-electric-500 w-8'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full glass-card hover:bg-white/20 text-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}