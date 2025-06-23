import Link from 'next/link';
import { 
  MessageSquare, 
  Eye, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Sparkles,
  Mail,
  Bot,
  Share2,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { ProductCard } from '@/components/shared/ProductCard';
import { products } from '@/lib/products';

const coreServices = [
  {
    id: 'nlp-service',
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment detection, and conversational AI.',
    features: ['Chatbots & Virtual Assistants', 'Document Analysis', 'Language Translation', 'Sentiment Analysis'],
    price: 'From $25,000',
    timeline: '6-12 weeks'
  },
  {
    id: 'computer-vision-service',
    icon: Eye,
    title: 'Computer Vision',
    description: 'Cutting-edge image and video analysis for automated visual intelligence.',
    features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Medical Imaging'],
    price: 'From $35,000',
    timeline: '8-14 weeks'
  },
  {
    id: 'predictive-analytics-service',
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with advanced predictive models.',
    features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior', 'Market Analysis'],
    price: 'From $30,000',
    timeline: '6-10 weeks'
  },
  {
    id: 'ai-security-service',
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Secure AI implementations with built-in compliance and risk management.',
    features: ['Model Security', 'Data Privacy', 'Audit Trails', 'Compliance Reporting'],
    price: 'From $20,000',
    timeline: '4-8 weeks'
  },
];

const popularModules = [
  'ai-email-assistant',
  'whatsapp-chatbot',
  'social-content-scheduler',
  'kpi-digest-slack'
];

export function ServicesPreview() {
  const featuredProducts = popularModules.map(id => 
    products.find(product => product.id === id)
  ).filter(Boolean);

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
              From enterprise AI strategy to ready-to-deploy automation modules, 
              we offer solutions that transform how your business operates.
            </p>
          </div>
        </AnimatedSection>

        {/* Core AI Services */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Core <span className="gradient-text">AI Services</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <AnimatedSection key={service.id} animation="fade-up" delay={index * 100}>
                  <ServiceCard service={service} showBuyButton={true} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* AI Automation Modules */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Popular <span className="gradient-text">Automation Modules</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
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