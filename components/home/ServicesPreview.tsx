'use client';

import Link from 'next/link';
import { 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { iconMap, IconName } from '@/lib/icons';

const coreServices = [
  {
    icon: 'MessageSquare' as IconName,
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment detection, and conversational AI.',
    features: ['Chatbots & Virtual Assistants', 'Document Analysis', 'Language Translation', 'Sentiment Analysis'],
    href: '/services#nlp',
    price: 'From £25,000'
  },
  {
    icon: 'Eye' as IconName,
    title: 'Computer Vision',
    description: 'Cutting-edge image and video analysis for automated visual intelligence.',
    features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Medical Imaging'],
    href: '/services#computer-vision',
    price: 'From £35,000'
  },
  {
    icon: 'TrendingUp' as IconName,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with advanced predictive models.',
    features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior', 'Market Analysis'],
    href: '/services#predictive-analytics',
    price: 'From £30,000'
  },
  {
    icon: 'Shield' as IconName,
    title: 'AI Security & Compliance',
    description: 'Secure AI implementations with built-in compliance and risk management.',
    features: ['Model Security', 'Data Privacy', 'Audit Trails', 'Compliance Reporting'],
    href: '/services#security',
    price: 'From £20,000'
  },
];

const popularModules = [
  {
    icon: 'Mail' as IconName,
    title: 'AI Email Assistant',
    description: 'Auto-reply and summarize Gmail using GPT-4',
    price: '£9/mo',
    features: ['Unlimited emails', 'Smart replies', 'Email summarization']
  },
  {
    icon: 'Bot' as IconName,
    title: 'WhatsApp/Web Chatbot',
    description: 'GPT-powered lead capture and appointment booking',
    price: '£25/mo',
    features: ['1,000 messages/month', 'Lead qualification', 'Auto booking']
  },
  {
    icon: 'Share2' as IconName,
    title: 'Social Content Scheduler',
    description: 'AI-generated content posted across platforms',
    price: '£19/mo',
    features: ['50 posts/month', 'Multi-platform', 'AI content generation']
  },
  {
    icon: 'BarChart3' as IconName,
    title: 'KPI Digest to Slack',
    description: 'Weekly business metrics summary delivered to Slack',
    price: '£9/mo',
    features: ['Weekly reports', 'Multi-source data', 'Custom metrics']
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-navy-800 to-navy-700">
      <div className="container-width section-padding">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-electric-400/10 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-electric-400" />
              <span className="text-sm font-medium text-electric-400">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Comprehensive <span className="gradient-text">AI Solutions</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From enterprise AI strategy to ready-to-deploy automation modules, 
              we offer solutions that transform how your business operates.
            </p>
          </div>
        </AnimatedSection>

        {/* Core AI Services */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Core <span className="gradient-text">AI Services</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreServices.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div key={service.title} className="group glass-card p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 border border-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-electric-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-semibold text-white group-hover:text-electric-400 transition-colors">
                            {service.title}
                          </h4>
                          <span className="text-electric-400 font-semibold text-sm">{service.price}</span>
                        </div>
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
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* AI Automation Modules */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Popular <span className="gradient-text">Automation Modules</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularModules.map((module, index) => {
                const IconComponent = iconMap[module.icon];
                return (
                  <div key={module.title} className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-400 to-teal-400 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold group-hover:text-electric-400 transition-colors text-white">
                        {module.title}
                      </h4>
                      <span className="text-electric-400 font-bold">{module.price}</span>
                    </div>
                    
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {module.description}
                    </p>
                    
                    <div className="space-y-1">
                      {module.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                          <span className="text-xs text-white/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button asChild className="btn-primary text-lg px-8 py-4">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary text-lg px-8 py-4">
                <Link href="/pricing">
                  See Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}