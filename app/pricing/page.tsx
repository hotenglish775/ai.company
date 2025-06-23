import { Metadata } from 'next';
import Link from 'next/link';
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ProductCard } from '@/components/shared/ProductCard';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { products, getProductsByCategory } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Pricing - CognifyAI',
  description: 'Transparent pricing for AI consulting, custom models, and enterprise solutions. Choose the plan that fits your business needs.',
};

const plans = [
  {
    id: 'starter',
    title: 'Starter',
    description: 'Perfect for small businesses exploring AI',
    price: '$5,000/month',
    features: [
      'AI Strategy Consultation (4 hours)',
      'Basic chatbot implementation',
      'Data analysis report',
      'Email support',
      'Basic dashboard access',
      '1 AI model deployment',
      'Monthly performance review'
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    description: 'Ideal for growing companies ready to scale',
    price: '$15,000/month',
    features: [
      'Everything in Starter',
      'Custom AI model development',
      'Advanced NLP capabilities',
      'Computer vision solutions',
      'Priority support',
      'Advanced analytics dashboard',
      'API integrations',
      'Bi-weekly strategy calls',
      'Performance optimization'
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'Comprehensive solution for large organizations',
    price: 'Custom pricing',
    features: [
      'Everything in Professional',
      'Dedicated AI team',
      'Custom model architecture',
      'Multi-cloud deployment',
      '24/7 priority support',
      'Advanced security features',
      'Compliance consulting',
      'On-premise deployment option',
      'Executive reporting',
      'Custom integrations',
      'Training & workshops'
    ],
  }
];

const automationCategories = [
  'Communication & CRM',
  'Social Media Automation',
  'Sales & CRM',
  'Internal Operations',
  'Backend Utilities',
  'Unique AI Modules'
];

const faqs = [
  {
    question: 'What\'s included in the automation modules?',
    answer: 'Each automation module includes setup, configuration, training, and ongoing support. All modules come with detailed analytics and can be customized to your specific needs.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.'
  },
  {
    question: 'Do you offer custom pricing for specific needs?',
    answer: 'Absolutely! We understand every business is unique. Contact our sales team for custom pricing based on your specific requirements.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer different levels of support based on your plan, from email support to 24/7 dedicated support with enterprise SLA.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Automation modules can typically be deployed in 1-2 weeks, while custom enterprise solutions may take 2-6 months depending on complexity.'
  },
  {
    question: 'Do you provide training for our team?',
    answer: 'Yes, we offer comprehensive training programs and workshops to ensure your team can effectively use and maintain AI solutions.'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-electric-500/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span className="text-sm font-medium text-electric-400">Transparent Pricing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Choose Your <span className="gradient-text">AI Journey</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Flexible pricing options designed to scale with your business. 
                Start small and grow into enterprise-level AI capabilities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core AI Services Pricing */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Core AI <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive AI solutions for strategic transformation and custom development.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedSection 
                key={plan.id} 
                animation="fade-up" 
                delay={index * 150}
              >
                <ServiceCard
                  service={plan}
                  showBuyButton={true}
                />
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
              const categoryProducts = getProductsByCategory(category);
              
              return (
                <AnimatedSection key={category} animation="fade-up" delay={categoryIndex * 100}>
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center mb-8">
                      <span className="gradient-text">{category}</span>
                    </h3>

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

      {/* FAQ */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Have questions about our pricing? Here are the most common 
                questions we receive from our clients.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <AnimatedSection 
                  key={faq.question} 
                  animation="fade-up" 
                  delay={index * 100}
                >
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-electric-400">
                      {faq.question}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-teal-600">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Start your AI journey today with a free consultation. 
                Our experts will help you choose the right plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  asChild 
                  className="bg-white text-electric-600 hover:bg-white/90 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/contact">
                    Start Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-600 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/services">
                    View Services
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