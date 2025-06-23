'use client';

import { 
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { iconMap, IconName } from '@/lib/icons';

const features = [
  {
    icon: 'Brain' as IconName,
    title: 'Intelligent Automation',
    description: 'Smart AI workflows that learn and adapt to your business processes, delivering consistent results.',
    benefits: ['Self-Learning Systems', 'Process Optimization', 'Automated Decision Making'],
  },
  {
    icon: 'Zap' as IconName,
    title: 'Lightning-Fast Processing',
    description: 'Real-time AI processing engines that handle complex tasks in milliseconds for immediate results.',
    benefits: ['Sub-second Response', 'Scalable Architecture', 'High Throughput'],
  },
  {
    icon: 'Shield' as IconName,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures protecting your data with end-to-end encryption and compliance.',
    benefits: ['SOC 2 Compliant', 'GDPR Ready', 'Zero Trust Architecture'],
  },
  {
    icon: 'BarChart3' as IconName,
    title: 'Smart Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics and visualization tools.',
    benefits: ['Real-time Dashboards', 'Predictive Insights', 'Custom Reports'],
  },
  {
    icon: 'Cpu' as IconName,
    title: 'Edge Computing',
    description: 'Deploy AI models at the edge for reduced latency and improved performance in distributed systems.',
    benefits: ['Low Latency', 'Offline Capability', 'Reduced Bandwidth'],
  },
  {
    icon: 'Globe' as IconName,
    title: 'Global Scale',
    description: 'Cloud-native solutions that scale automatically to handle millions of requests worldwide.',
    benefits: ['Auto-scaling', 'Multi-region', '99.9% Uptime'],
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-navy-800 relative">
      <div className="container-width section-padding">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose <span className="gradient-text">Revolution AI</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep business expertise 
              to deliver automation solutions that drive real results for your organization.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <AnimatedSection 
                key={feature.title} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="group glass-card p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-electric-400 to-teal-400 rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-electric-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-electric-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-white/60">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}