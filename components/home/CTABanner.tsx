import Link from 'next/link';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-400 via-electric-500 to-teal-400"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 animate-float">
          <Zap className="w-8 h-8 text-white/30" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float delay-1000">
          <Sparkles className="w-6 h-6 text-white/30" />
        </div>
      </div>

      <div className="container-width section-padding relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your AI Revolution?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join hundreds of forward-thinking companies who have already 
              revolutionized their operations with our cutting-edge AI automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button 
                asChild 
                className="bg-white text-electric-600 hover:bg-white/90 font-semibold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <Link href="/contact">
                  Start Your Revolution
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Link href="/services">
                  Explore Solutions
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
                <div className="text-white/80">Expert AI strategy session</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Custom Solutions</div>
                <div className="text-white/80">Tailored to your needs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Proven Results</div>
                <div className="text-white/80">500+ successful projects</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}