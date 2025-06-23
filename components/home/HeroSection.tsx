import { ArrowRight, Sparkles, Zap, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-electric-400/5 to-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 animate-float">
          <div className="glass-card p-4 rounded-xl">
            <Bot className="w-8 h-8 text-electric-400" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-500">
          <div className="glass-card p-4 rounded-xl">
            <Zap className="w-8 h-8 text-teal-400" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-float delay-1000">
          <div className="glass-card p-4 rounded-xl">
            <Sparkles className="w-8 h-8 text-electric-400" />
          </div>
        </div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-electric-400" />
              <span className="text-sm font-medium text-white/90">
                Next-Generation AI Automation Platform
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-white">Revolutionize</span>{' '}
              <span className="gradient-text">Your Business</span>{' '}
              <span className="text-white">with AI</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto">
              Unlock the power of artificial intelligence to automate workflows, 
              optimize operations, and accelerate growth. We deliver cutting-edge 
              AI automation solutions tailored to your unique business needs.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Button className="btn-primary text-lg px-8 py-4 group">
                Start Your Revolution
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                Explore Solutions
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 glass-card rounded-2xl">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-white/70">AI Automations Deployed</div>
              </div>
              <div className="text-center p-6 glass-card rounded-2xl">
                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-white/70">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 glass-card rounded-2xl">
                <div className="text-4xl font-bold gradient-text mb-2">5M+</div>
                <div className="text-white/70">Hours Automated</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent"></div>
    </section>
  );
}