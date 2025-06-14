import Link from 'next/link';
import { 
  MessageSquare, 
  Eye, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const services = [
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment detection, and conversational AI.',
    features: ['Chatbots & Virtual Assistants', 'Document Analysis', 'Language Translation', 'Sentiment Analysis'],
    href: '/services#nlp',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Cutting-edge image and video analysis for automated visual intelligence.',
    features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Medical Imaging'],
    href: '/services#computer-vision',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with advanced predictive models.',
    features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior', 'Market Analysis'],
    href: '/services#predictive-analytics',
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Secure AI implementations with built-in compliance and risk management.',
    features: ['Model Security', 'Data Privacy', 'Audit Trails', 'Compliance Reporting'],
    href: '/services#security',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="container-width section-padding">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-electric-500/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-electric-400" />
              <span className="text-sm font-medium text-electric-400">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">AI Solutions</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From strategy to implementation, we offer end-to-end AI services 
              that transform how your business operates and competes.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
              delay={index * 150}
            >
              <div className="group glass-card p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-electric-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-electric-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                          <span className="text-sm text-white/60">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-electric-400 hover:text-electric-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center">
            <Button asChild className="btn-primary text-lg px-8 py-4">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}