'use client';

import { AnimatedSection } from '@/components/shared/AnimatedSection';

const clients = [
  { name: 'TechCorp', logo: '/api/placeholder/120/60' },
  { name: 'InnovateCo', logo: '/api/placeholder/120/60' },
  { name: 'DataDyne', logo: '/api/placeholder/120/60' },
  { name: 'FutureAI', logo: '/api/placeholder/120/60' },
  { name: 'SmartSys', logo: '/api/placeholder/120/60' },
  { name: 'CloudTech', logo: '/api/placeholder/120/60' },
  { name: 'NextGen', logo: '/api/placeholder/120/60' },
  { name: 'Quantum', logo: '/api/placeholder/120/60' },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-navy-800/50">
      <div className="container-width section-padding">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <p className="text-white/60 font-medium mb-8">
              Trusted by leading companies worldwide
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white/70 font-semibold text-sm">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}