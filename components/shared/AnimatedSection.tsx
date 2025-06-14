'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className, 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        !isVisible && 'opacity-0',
        !isVisible && animation === 'fade-up' && 'translate-y-8',
        !isVisible && animation === 'slide-in-left' && '-translate-x-8',
        !isVisible && animation === 'slide-in-right' && 'translate-x-8',
        isVisible && 'opacity-100 translate-y-0 translate-x-0',
        className
      )}
    >
      {children}
    </div>
  );
}