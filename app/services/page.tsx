import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  TrendingUp, 
  Shield, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Mail,
  Bot,
  Share2,
  BarChart3,
  Users,
  Database,
  Mic
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ProductCard } from '@/components/shared/ProductCard';
import { products, getProductsByCategory } from '@/lib/products';

export const metadata: Metadata = {
  title: 'AI Services - CognifyAI',
  description: 'Comprehensive AI services including automation modules, machine learning, NLP, computer vision, and predictive analytics. Transform your business with our expert AI solutions.',
};

const coreServices = [
  {
    id: 'ai-consulting',
    icon: Brain,
    title: 'AI Strategy & Consulting',
    description: 'Comprehensive AI strategy development to identify opportunities and create implementation roadmaps.',
    features: [
      'AI Readiness Assessment',
      'Strategic Planning & Roadmap',
      'Technology Architecture Design',
      'ROI Analysis & Business Case',
      'Change Management Support',
      'Executive AI Training'
    ],
    benefits: [
      'Clear AI strategy aligned with business goals',
      'Reduced implementation risks',
      'Faster time-to-value',
      'Expert guidance throughout journey'
    ],
    price: 'Custom pricing',
    timeline: '4-8 weeks',
  },
  {
    id: 'custom-models',
    icon: Cpu,
    title: 'Custom AI Model Development',
    description: 'Bespoke machine learning models trained specifically for your data and business requirements.',
    features: [
      'Data Analysis & Preparation',
      'Model Architecture Design',
      'Training & Optimization',
      'Performance Validation',
      'Deployment & Integration',
      'Ongoing Model Monitoring'
    ],
    benefits: [
      'Models tailored to your specific needs',
      'Superior performance on your data',
      'Scalable and production-ready',
      'Full ownership and control'
    ],
    price: 'From $50,000',
    timeline: '8-16 weeks',
  },
  {
    id: 'nlp',
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Advanced text analysis, chatbots, and conversational AI solutions for better customer engagement.',
    features: [
      'Sentiment Analysis',
      'Document Processing',
      'Chatbot Development',
      'Language Translation',
      'Text Classification',
      'Named Entity Recognition'
    ],
    benefits: [
      'Automated customer support',
      'Improved content understanding',
      'Multilingual capabilities',
      '24/7 availability'
    ],
    price: 'From $25,000',
    timeline: '6-12 weeks',
  },
  {
    id: 'computer-vision',
    icon: Eye,
    title: 'Computer Vision',
    description: 'Intelligent image and video analysis for automated visual inspection and recognition.',
    features: [
      'Object Detection & Recognition',
      'Facial Recognition',
      'Quality Inspection',
      'Medical Image Analysis',
      'OCR & Document Scanning',
      'Real-time Video Processing'
    ],
    benefits: [
      'Automated quality control',
      'Enhanced security systems',
      'Reduced manual inspection',
      'Improved accuracy'
    ],
    price: 'From $35,000',
    timeline: '8-14 weeks',
  },
  {
    id: 'predictive-analytics',
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends, predict outcomes, and make data-driven decisions with advanced analytics.',
    features: [
      'Sales Forecasting',
      'Customer Behavior Prediction',
      'Risk Assessment',
      'Demand Planning',
      'Churn Prediction',
      'Anomaly Detection'
    ],
    benefits: [
      'Better business planning',
      'Proactive risk management',
      'Improved customer retention',
      'Optimized operations'
    ],
    price: 'From $30,000',
    timeline: '6-10 weeks',
  },
  {
    id: 'ai-security',
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Secure AI implementations with built-in compliance, monitoring, and risk management.',
    features: [
      'Model Security Assessment',
      'Bias Detection & Mitigation',
      'Privacy-Preserving AI',
      'Compliance Framework',
      'Audit Trail Implementation',
      'Ethical AI Guidelines'
    ],
    benefits: [
      'Regulatory compliance',
      'Reduced AI risks',
      'Enhanced data privacy',
      'Trustworthy AI systems'
    ],
    price: 'From $20,000',
    timeline: '4-8 weeks',
  },
];

const automationCategories = [
  {
    category: 'Communication & CRM',
    icon: Mail,
    description: 'Automate your communication workflows and CRM processes'
  },
  {
    category: 'Social Media Automation',
    icon: Share2,
    description: 'Streamline your social media content and engagement'
  },
  {
    category: 'Sales & CRM',
    icon: Users,
    description: 'Enhance your sales processes and customer relationships'
  },
  {
    category: 'Internal Operations',
    icon: BarChart3,
    description: 'Optimize your internal workflows and team productivity'
  },
  {
    category: 'Backend Utilities',
    icon: Database,
    description: 'Powerful backend tools and data processing utilities'
  },
  {
    category: 'Unique AI Modules',
    icon: Mic,
    description: 'Innovative AI solutions for specialized use cases'
  }
];

const industries = [
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Finance', icon: '💰' },
  { name: 'Retail', icon: '🛍️' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Technology', icon: '💻' },
  { name: 'Logistics', icon: '🚚' },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-electric-500/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span className="text-sm font-medium text-electric-400">AI Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive <span className="gradient-text">AI Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                From strategy to implementation, we offer end-to-end AI services 
                that transform how your business operates and competes in the modern market.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Core <span className="gradient-text">AI Services</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our foundational AI services provide the strategic foundation and 
                custom solutions your business needs to succeed.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <AnimatedSection 
                key={service.id} 
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={index * 100}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-electric-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold">{service.title}</h3>
                    </div>

                    <p className="text-xl text-white/70 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-electric-400">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-teal-400" />
                              <span className="text-white/70 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-electric-400">Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit) => (
                            <li key={benefit} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-teal-400" />
                              <span className="text-white/70 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                      <div>
                        <div className="text-sm text-white/60">Starting Price</div>
                        <div className="text-lg font-semibold gradient-text">{service.price}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60">Timeline</div>
                        <div className="text-lg font-semibold text-white">{service.timeline}</div>
                      </div>
                    </div>

                    <Button className="btn-primary group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="glass-card p-8 rounded-2xl">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">All Features Include:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-teal-400" />
                              <span className="text-white/80 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Modules */}
      <section className="py-24 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI Automation <span className="gradient-text">Modules</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Ready-to-deploy automation modules with transparent monthly pricing. 
                Start automating your workflows today.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {automationCategories.map((category, categoryIndex) => {
              const categoryProducts = getProductsByCategory(category.category);
              
              return (
                <AnimatedSection key={category.category} animation="fade-up" delay={categoryIndex * 100}>
                  <div className="mb-12">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{category.category}</h3>
                        <p className="text-white/70">{category.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {categoryProducts.map((product, productIndex) => (
                        <AnimatedSection 
                          key={product.id} 
                          animation="fade-up" 
                          delay={(categoryIndex * 100) + (productIndex * 50)}
                        >
                          <ProductCard product={product} />
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="text-center mt-12">
              <p className="text-white/70 mb-6">
                Need a custom combination? We can create a tailored package for your specific needs.
              </p>
              <Button asChild className="btn-secondary">
                <Link href="/contact">
                  Request Custom Package
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Industries We <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our AI solutions are trusted across diverse industries, 
                each with unique challenges and requirements.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={industry.name}
                  className="text-center glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <div className="font-medium text-white">{industry.name}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-teal-600">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how our AI services can transform your business. 
                Schedule a free consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  asChild 
                  className="bg-white text-electric-600 hover:bg-white/90 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-600 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}