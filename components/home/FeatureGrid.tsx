import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cpu, 
  Globe,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const features = [
  {
    icon: Brain,
    title: 'Advanced Machine Learning',
    description: 'Custom ML models trained on your data to solve complex business problems with state-of-the-art algorithms.',
    benefits: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making'],
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast AI inference engines that process data in milliseconds for immediate insights.',
    benefits: ['Sub-second Response', 'Scalable Architecture', 'High Throughput'],
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures protecting your data with end-to-end encryption and compliance.',
    benefits: ['SOC 2 Compliant', 'GDPR Ready', 'Zero Trust Architecture'],
  },
  {
    icon: BarChart3,
    title: 'Intelligent Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics and visualization tools.',
    benefits: ['Real-time Dashboards', 'Predictive Insights', 'Custom Reports'],
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Deploy AI models at the edge for reduced latency and improved performance in distributed systems.',
    benefits: ['Low Latency', 'Offline Capability', 'Reduced Bandwidth'],
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Cloud-native solutions that scale automatically to handle millions of requests worldwide.',
    benefits: ['Auto-scaling', 'Multi-region', '99.9% Uptime'],
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="container-width section-padding">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">CognifyAI</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep business expertise 
              to deliver solutions that drive real results for your organization.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.title} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div className="group glass-card p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
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
          ))}
        </div>
      </div>
    </section>
  );
}